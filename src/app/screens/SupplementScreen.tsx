import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "motion/react";

const SLIDE_TRACK_W = 362;
const KNOB_SIZE = 67;
const SLIDE_END = SLIDE_TRACK_W - KNOB_SIZE - 16;
const GROW_DURATION = 5;
const PETAL_IMAGES = ["/petal-1.png", "/petal-2.png", "/petal-3.png", "/petal-4.png", "/petal-5.png"];
const PETAL_ENTER_SPREAD = 1.0;

const FLOWERS = [
  { src: "/flower-left.svg", left: 0, top: 84, w: 196, h: 174, startRotate: 25, endRotate: 9.69, startY: 40, endY: 0 },
  { src: "/flower-center.svg", left: 109, top: 0, w: 164, h: 108, startRotate: -18, endRotate: -6.62, startY: 50, endY: 0 },
  { src: "/flower-right.svg", left: 224, top: 35, w: 219, h: 226, startRotate: -42, endRotate: -26.51, startY: 30, endY: 0 },
];

export function generateCoverPetals(clearDuration: number) {
  const count = 350;
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    src: PETAL_IMAGES[i % PETAL_IMAGES.length],
    x: (Math.random() * 140) - 20,
    y: (Math.random() * 140) - 20,
    size: 120 + Math.random() * 120,
    rotate: Math.random() * 360,
    enterDelay: Math.random() * PETAL_ENTER_SPREAD * 0.85,
    exitDelay: Math.random() * clearDuration * 0.9,
  }));
}

type SupplementScreenProps = {
  onPetalsCovered: () => void;
};

export default function SupplementScreen({ onPetalsCovered }: SupplementScreenProps) {
  const [administering, setAdministering] = useState(false);
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const knobOpacity = useTransform(x, [0, SLIDE_END * 0.8, SLIDE_END], [1, 0.6, 0]);
  const textOpacity = useTransform(x, [0, SLIDE_END * 0.5], [1, 0]);

  useEffect(() => {
    if (administering) {
      const growTimer = setTimeout(() => {
        onPetalsCovered();
      }, GROW_DURATION * 1000);
      return () => clearTimeout(growTimer);
    }
  }, [administering, onPetalsCovered]);

  function handleDragEnd() {
    isDragging.current = false;
    const current = x.get();
    if (current >= SLIDE_END * 0.85) {
      animate(x, SLIDE_END, { duration: 0.2 });
      setAdministering(true);
    } else {
      animate(x, 0, { type: "spring", stiffness: 400, damping: 30 });
    }
  }

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        backgroundImage: `url("data:image/svg+xml;utf8,<svg viewBox='0 0 402 872' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(0.0000016483 -87.763 40.46 7.6133e-7 201.51 436)'><stop stop-color='rgba(174,199,94,1)' offset='0'/><stop stop-color='rgba(192,207,124,1)' offset='0.13089'/><stop stop-color='rgba(209,215,155,1)' offset='0.26178'/><stop stop-color='rgba(243,231,215,1)' offset='0.52356'/></radialGradient></defs></svg>")`,
        backgroundSize: "cover",
      }}
    >
      {/* Header text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "absolute",
          top: 112,
          left: 21,
          width: 358,
          display: "flex",
          flexDirection: "column",
          gap: 12,
          zIndex: 5,
        }}
      >
        <p style={{ fontFamily: "'Donegal One', serif", fontSize: 16, color: "#345900", margin: 0, lineHeight: "normal" }}>
          Good Morning, Queenie!
        </p>
        <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontWeight: 500, fontSize: 24, color: "#1e1e1e", margin: 0, lineHeight: "normal" }}>
          Your body is running <strong>hot</strong> and{" "}
          <strong>low</strong>, take it easy today.
        </p>
      </motion.div>

      {/* Flower scene */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        style={{
          position: "absolute",
          left: -23,
          top: 267,
          width: 443,
          height: 619,
          pointerEvents: "none",
        }}
      >
        <img src="/flower-pot-stems.svg" alt="" style={{ position: "absolute", left: 89.9, top: 78, width: 233, height: 541 }} />
        <img src="/pot-top.svg" alt="" style={{ position: "absolute", left: 136, top: 370, width: 162, height: 81 }} />

        <motion.img
          src="/leaf-left-stem.svg" alt=""
          animate={{ rotate: administering ? 0 : 5, y: administering ? -10 : 0 }}
          transition={{ duration: GROW_DURATION, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: "absolute", left: 107, top: 420, width: 57, height: 116, transformOrigin: "center bottom" }}
        />
        <motion.img
          src="/leaf-right-stem.svg" alt=""
          animate={{ rotate: administering ? 0 : -5, y: administering ? -10 : 0 }}
          transition={{ duration: GROW_DURATION, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: "absolute", left: 281, top: 422, width: 40, height: 116, transformOrigin: "center bottom" }}
        />
        <img src="/leaf-left-small.svg" alt="" style={{ position: "absolute", left: 108, top: 497, width: 16, height: 39 }} />

        {FLOWERS.map((f, i) => (
          <motion.div
            key={i}
            animate={{ rotate: administering ? f.endRotate : f.startRotate, y: administering ? f.endY : f.startY }}
            transition={{ duration: GROW_DURATION, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "absolute", left: f.left, top: f.top, width: f.w, height: f.h,
              display: "flex", alignItems: "center", justifyContent: "center", transformOrigin: "center bottom",
            }}
          >
            <img src={f.src} alt="" style={{ width: "100%", height: "100%" }} />
          </motion.div>
        ))}
      </motion.div>

      {/* Slide button / Currently administering */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "absolute", bottom: 40, left: 0, right: 0,
          display: "flex", justifyContent: "center", zIndex: 20,
        }}
      >
            <div
              ref={trackRef}
              style={{
                position: "relative", width: SLIDE_TRACK_W, height: 85, borderRadius: 111,
                background: "#f7b3cc", overflow: "hidden", display: "flex", alignItems: "center",
              }}
            >
              <AnimatePresence mode="wait">
                {!administering ? (
                  <motion.div
                    key="slide"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}
                  >
                    <motion.div
                      drag="x"
                      dragConstraints={{ left: 0, right: SLIDE_END }}
                      dragElastic={0}
                      dragMomentum={false}
                      onDragStart={() => { isDragging.current = true; }}
                      onDragEnd={handleDragEnd}
                      style={{
                        x, position: "absolute", left: 8, width: KNOB_SIZE, height: KNOB_SIZE,
                        borderRadius: 999, background: "white", display: "flex", alignItems: "center",
                        justifyContent: "center", cursor: "grab", zIndex: 2,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)", opacity: knobOpacity,
                      }}
                      whileTap={{ cursor: "grabbing" }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="#345900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.div>
                    <motion.div
                      style={{
                        position: "absolute", left: KNOB_SIZE + 16, right: 16,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        pointerEvents: "none", opacity: textOpacity,
                      }}
                    >
                      <span style={{
                        fontFamily: "'Instrument Sans', sans-serif", fontWeight: 600, fontSize: 16,
                        color: "#345900", lineHeight: "normal", whiteSpace: "nowrap",
                      }}>
                        Slide to administer supplement
                      </span>
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="admin"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      style={{
                        fontFamily: "'Instrument Sans', sans-serif", fontWeight: 600,
                        fontSize: 16, color: "#345900", lineHeight: "normal",
                      }}
                    >
                      Currently administering...
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>

              {administering && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: GROW_DURATION, ease: "linear" }}
                  style={{
                    position: "absolute", left: 0, top: 0, bottom: 0,
                    background: "rgba(255,255,255,0.25)", borderRadius: 111, pointerEvents: "none",
                  }}
                />
              )}
            </div>
      </motion.div>

      
    </div>
  );
}
