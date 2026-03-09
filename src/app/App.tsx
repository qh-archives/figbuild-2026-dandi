import { useState, useMemo, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import Home from "./screens/Home";
import Onboard1 from "./screens/Onboard1";
import Onboard2 from "./screens/Onboard2";
import Onboard3 from "./screens/Onboard3";
import Onboard4 from "./screens/Onboard4";
import Connect from "./screens/Connect";
import SupplementScreen, { generateCoverPetals } from "./screens/SupplementScreen";
import Dashboard from "./screens/Dashboard";

const PETAL_HOLD_DURATION = 800;
const PETAL_CLEAR_DURATION = 2.5;

const SCREENS = ["home", "onboard1", "onboard2", "onboard3", "onboard4", "connect", "supplement", "dashboard"] as const;
type ScreenName = (typeof SCREENS)[number];

const slideVariants = {
  enter: (dir: number) => ({
    y: dir > 0 ? 852 : -852,
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: (dir: number) => ({
    y: dir > 0 ? -852 : 852,
    opacity: 0,
    transition: { duration: 0.4, ease: [0.55, 0, 0.78, 0] as const },
  }),
};

const dashVariants = {
  enter: { opacity: 1, y: 0 },
  center: { opacity: 1, y: 0, transition: { duration: 0.01 } },
  exit: { opacity: 0, y: -40, transition: { duration: 0.4, ease: [0.55, 0, 0.78, 0] as const } },
};

const screenLayerClass = "absolute inset-0 flex items-center justify-center z-[1]";
const screenBgStyle = { background: "url(/bg.png) center center / cover no-repeat" };

type PetalPhase = "idle" | "entering" | "holding" | "clearing";

export default function App() {
  const [screenIndex, setScreenIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [petalPhase, setPetalPhase] = useState<PetalPhase>("idle");
  const [showDashBehind, setShowDashBehind] = useState(false);
  const petals = useMemo(() => generateCoverPetals(PETAL_CLEAR_DURATION), []);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  function navigate(to: ScreenName) {
    const nextIndex = SCREENS.indexOf(to);
    setDirection(nextIndex > screenIndex ? 1 : -1);
    setScreenIndex(nextIndex);
  }

  const handlePetalsCovered = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];

    setPetalPhase("entering");
    setShowDashBehind(false);

    const maxEnterDelay = Math.max(...petals.map(p => p.enterDelay));
    const enterDone = (maxEnterDelay + 0.2) * 1000;

    timers.current.push(setTimeout(() => {
      setPetalPhase("holding");
      setShowDashBehind(true);

      timers.current.push(setTimeout(() => {
        setDirection(1);
        setScreenIndex(SCREENS.indexOf("dashboard"));

        requestAnimationFrame(() => {
          setPetalPhase("clearing");

          timers.current.push(setTimeout(() => {
            setPetalPhase("idle");
            setShowDashBehind(false);
          }, (PETAL_CLEAR_DURATION + 0.5) * 1000));
        });
      }, PETAL_HOLD_DURATION));
    }, enterDone));
  }, [petals]);

  const screen = SCREENS[screenIndex];
  const showPetals = petalPhase !== "idle";

  return (
    <div className="size-full flex items-center justify-center bg-zinc-900 overflow-hidden font-['Instrument_Sans',sans-serif]">
      <div className="relative" style={{ width: 430, height: 882 }}>
        <img
          src="/iphone-frame.png"
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
      <div className="absolute rounded-[56px] overflow-hidden app-bg" style={{ top: 12, left: 15, right: 15, bottom: 14 }}>
        <img
          src="/status-bar.png"
          alt=""
          style={{
            position: "absolute",
            top: 12,
            left: "52%",
            transform: "translateX(-50%)",
            width: "70%",
            height: "auto",
            zIndex: 200,
            pointerEvents: "none",
          }}
        />
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={screen}
            className={screen === "dashboard" || screen === "supplement" ? "absolute inset-0" : screenLayerClass}
            style={screen !== "dashboard" && screen !== "supplement" ? screenBgStyle : undefined}
            custom={direction}
            variants={screen === "dashboard" ? dashVariants : slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {screen === "home" && (
              <Home onGetStarted={() => navigate("onboard1")} />
            )}
            {screen === "onboard1" && (
              <Onboard1
                onBack={() => navigate("home")}
                onNext={() => navigate("onboard2")}
              />
            )}
            {screen === "onboard2" && (
              <Onboard2
                onBack={() => navigate("onboard1")}
                onNext={() => navigate("onboard3")}
              />
            )}
            {screen === "onboard3" && (
              <Onboard3
                onBack={() => navigate("onboard2")}
                onNext={() => navigate("onboard4")}
              />
            )}
            {screen === "onboard4" && (
              <Onboard4
                onBack={() => navigate("onboard3")}
                onFinish={() => navigate("connect")}
              />
            )}
            {screen === "connect" && (
              <Connect
                onBack={() => navigate("onboard4")}
                onFinished={() => navigate("supplement")}
              />
            )}
            {screen === "supplement" && (
              <SupplementScreen
                onPetalsCovered={handlePetalsCovered}
              />
            )}
            {screen === "dashboard" && <Dashboard />}
          </motion.div>
        </AnimatePresence>

        {showDashBehind && (
          <div style={{ position: "absolute", inset: 0, zIndex: 50 }}>
            <Dashboard />
          </div>
        )}

        {showPetals && (
          <div style={{ position: "absolute", inset: 0, zIndex: 100, pointerEvents: "none", overflow: "hidden" }}>
            {petals.map((p) => {
              const isClearing = petalPhase === "clearing";
              return (
                <motion.img
                  key={p.id}
                  src={p.src}
                  alt=""
                  initial={{ opacity: 0, scale: 0, rotate: p.rotate - 90 }}
                  animate={
                    isClearing
                      ? { opacity: 0, scale: 0, rotate: p.rotate - 90 }
                      : { opacity: 1, scale: 1, rotate: p.rotate }
                  }
                  transition={
                    isClearing
                      ? { duration: 0.25, delay: p.exitDelay, ease: [0.22, 1, 0.36, 1] }
                      : { duration: 0.2, delay: p.enterDelay, ease: [0.22, 1, 0.36, 1] }
                  }
                  style={{
                    position: "absolute",
                    left: `${p.x}%`,
                    top: `${p.y}%`,
                    width: p.size,
                    height: p.size,
                    objectFit: "contain",
                  }}
                />
              );
            })}
          </div>
        )}
      </div>
      </div>
    </div>
  );
}
