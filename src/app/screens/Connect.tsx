import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./Onboarding.css";

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
        <source src="/ring.mp4" type='video/mp4; codecs="hvc1"' />
        <source src="/ring.webm" type="video/webm" />
      </motion.video>

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
