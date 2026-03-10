import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./Onboarding.css";

// iOS/iPadOS Safari can't decode WebM alpha or x265 alpha.
// We use a WebGL luma-key shader to remove the black background on the GPU —
// only pure black becomes transparent; the earring colors are untouched.
const isIOS =
  typeof navigator !== "undefined" &&
  (/iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1));

const VERT = `
  attribute vec2 a_pos;
  attribute vec2 a_uv;
  varying vec2 v_uv;
  void main() { gl_Position = vec4(a_pos, 0.0, 1.0); v_uv = a_uv; }
`;
// smoothstep threshold: luma < 0.06 → transparent, > 0.18 → fully opaque
const FRAG = `
  precision mediump float;
  uniform sampler2D u_tex;
  varying vec2 v_uv;
  void main() {
    vec4 c = texture2D(u_tex, v_uv);
    float luma = dot(c.rgb, vec3(0.299, 0.587, 0.114));
    gl_FragColor = vec4(c.rgb, smoothstep(0.06, 0.18, luma));
  }
`;
// Interleaved [x,y, u,v] for a full-screen triangle strip (4 verts)
const QUAD = new Float32Array([-1,-1,0,1, 1,-1,1,1, -1,1,0,0, 1,1,1,0]);

function LumaKeyCanvas({
  videoRef,
  className,
  style,
}: {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  className?: string;
  style?: React.CSSProperties;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: false });
    if (!gl) return; // graceful fallback — canvas stays hidden, video shows through

    function mkShader(type: number, src: string) {
      const s = gl!.createShader(type)!;
      gl!.shaderSource(s, src);
      gl!.compileShader(s);
      return s;
    }
    const prog = gl.createProgram()!;
    gl.attachShader(prog, mkShader(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, mkShader(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer()!;
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, QUAD, gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(prog, "a_pos");
    const uvLoc  = gl.getAttribLocation(prog, "a_uv");
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 16, 0);
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(uvLoc,  2, gl.FLOAT, false, 16, 8);
    gl.enableVertexAttribArray(uvLoc);

    const tex = gl.createTexture()!;
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.uniform1i(gl.getUniformLocation(prog, "u_tex"), 0);

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.clearColor(0, 0, 0, 0);

    let raf: number;
    function draw() {
      if (video!.readyState >= 2) {
        const vw = video!.videoWidth  || 730;
        const vh = video!.videoHeight || 730;
        if (canvas!.width !== vw || canvas!.height !== vh) {
          canvas!.width  = vw;
          canvas!.height = vh;
          gl!.viewport(0, 0, vw, vh);
        }
        gl!.clear(gl!.COLOR_BUFFER_BIT);
        gl!.texImage2D(gl!.TEXTURE_2D, 0, gl!.RGBA, gl!.RGBA, gl!.UNSIGNED_BYTE, video!);
        gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
      }
      raf = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(raf);
      gl.deleteTexture(tex);
      gl.deleteBuffer(buf);
      gl.deleteProgram(prog);
    };
  }, [videoRef]);

  return <canvas ref={canvasRef} className={className} style={style} />;
}

const SEARCH_DURATION = 2000;
const PAIRED_HOLD = 5000;

const STEPS = [
  "Put on your Dandi earring",
  "Hold on your earring for 5 seconds to enable Bluetooth",
  "Tap Connect to pair",
];

type Phase = "idle" | "searching" | "paired";

type ConnectProps = {
  onBack: () => void;
  onFinished: () => void;
};

export default function Connect({ onBack, onFinished }: ConnectProps) {
  const iosVideoRef = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    if (phase === "searching") {
      const t = setTimeout(() => setPhase("paired"), SEARCH_DURATION);
      return () => clearTimeout(t);
    }
    if (phase === "paired") {
      const t = setTimeout(() => onFinished?.(), PAIRED_HOLD);
      return () => clearTimeout(t);
    }
  }, [phase, onFinished]);

  const connecting = phase !== "idle";

  return (
    <div className="connect-screen">
      <motion.button
        className="back-btn"
        onClick={onBack}
        style={{ zIndex: 30 }}
        initial={{ opacity: 0, x: -10 }}
        animate={{
          opacity: connecting ? 0 : 1,
          x: 0,
          pointerEvents: connecting ? "none" : "auto",
        }}
        transition={{ duration: 0.4, delay: connecting ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path
            d="M11.5 3.5L6 9l5.5 5.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>

      {/* Title & subtitle */}
      <motion.div
        className="connect-header"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: connecting ? 0 : 1, y: connecting ? -10 : 0 }}
        transition={{ duration: 0.5, delay: connecting ? 0 : 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="connect-title">Connect Your Earring</h2>
        <p className="connect-subtitle">
          Make sure Bluetooth is enabled and your Dandi earring is nearby to begin syncing your health data
        </p>
      </motion.div>

      {isIOS ? (
        // On iOS: hidden video feeds a WebGL canvas that luma-keys out the black background
        <motion.div
          className="connect-ring-video"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ zIndex: 2, position: "relative" }}
        >
          <video ref={iosVideoRef} autoPlay muted loop playsInline style={{ display: "none" }}>
            <source src="/ring.mp4" type='video/mp4; codecs="hvc1"' />
          </video>
          <LumaKeyCanvas videoRef={iosVideoRef} style={{ width: "100%", height: "auto", display: "block" }} />
        </motion.div>
      ) : (
        // On desktop: WebM has native alpha, play directly
        <motion.video
          className="connect-ring-video"
          autoPlay
          muted
          loop
          playsInline
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ zIndex: 2 }}
        >
          <source src="/ring.webm" type="video/webm" />
        </motion.video>
      )}

      {/* Steps / searching / paired status */}
      <AnimatePresence mode="wait">
        {phase === "idle" ? (
          <motion.div
            key="steps"
            className="connect-steps"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {STEPS.map((text, i) => (
              <motion.div
                key={i}
                className="connect-step"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.25 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="connect-step-num">{i + 1}</span>
                <span className="connect-step-text">{text}</span>
              </motion.div>
            ))}
          </motion.div>
        ) : phase === "searching" ? (
          <motion.div
            key="searching"
            className="connect-status"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="connect-status-dot"
              animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="connect-status-text">Searching for earring...</span>
          </motion.div>
        ) : (
          <motion.div
            key="paired"
            className="connect-status"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" fill="#345900" />
              <path d="M6 10.5l2.5 2.5L14 7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="connect-status-text">Paired</span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="connect-btn"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        whileHover={!connecting ? { scale: 1.025 } : {}}
        whileTap={!connecting ? { scale: 0.97 } : {}}
        onClick={() => phase === "idle" && setPhase("searching")}
        style={{ cursor: phase === "idle" ? "pointer" : "default", zIndex: 5 }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={phase}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
          >
            {phase === "idle" ? "Connect" : phase === "searching" ? "Connecting..." : "Paired ✓"}
          </motion.span>
        </AnimatePresence>
      </motion.button>

    </div>
  );
}
