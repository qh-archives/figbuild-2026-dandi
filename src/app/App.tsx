import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import IPhone1652 from "../imports/IPhone1652";
import IPhone1653 from "../imports/IPhone1653";
import { SleepExpandedCard } from "./components/SleepExpandedCard";
import { BodyTempExpandedCard } from "./components/BodyTempExpandedCard";
import { GlucoseExpandedCard } from "./components/GlucoseExpandedCard";

type ActiveScreen = "dashboard" | "heartRate" | "sleep" | "bodyTemp" | "glucose";

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ActiveScreen>("dashboard");
  const [isExpanding, setIsExpanding] = useState(false);

  const handleCardClick = (screen: ActiveScreen) => {
    setIsExpanding(true);
    setActiveScreen(screen);
  };

  const handleBackToDashboard = () => {
    setActiveScreen("dashboard");
    setIsExpanding(false);
  };

  return (
    <div className="size-full flex items-center justify-center bg-zinc-900 overflow-hidden font-['Instrument_Sans',sans-serif]">
      <div className="relative w-[393px] h-[852px] rounded-[40px] shadow-2xl overflow-hidden ring-8 ring-black app-bg">
        <LayoutGroup>
        <AnimatePresence initial={false}>
          {activeScreen === "dashboard" ? (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <IPhone1652 
                onHeartRateClick={() => handleCardClick("heartRate")}
                onSleepClick={() => handleCardClick("sleep")}
                onBodyTempClick={() => handleCardClick("bodyTemp")}
                onGlucoseClick={() => handleCardClick("glucose")}
              />
            </motion.div>
          ) : activeScreen === "heartRate" ? (
            <motion.div
              key="heartRate"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <IPhone1653 onHeartRateClick={handleBackToDashboard} isExpanding={isExpanding} />
            </motion.div>
          ) : activeScreen === "sleep" ? (
            <motion.div
              key="sleep"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <SleepExpandedCard onBack={handleBackToDashboard} isExpanding={isExpanding} />
            </motion.div>
          ) : activeScreen === "bodyTemp" ? (
            <motion.div
              key="bodyTemp"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <BodyTempExpandedCard onBack={handleBackToDashboard} isExpanding={isExpanding} />
            </motion.div>
          ) : (
            <motion.div
              key="glucose"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <GlucoseExpandedCard onBack={handleBackToDashboard} isExpanding={isExpanding} />
            </motion.div>
          )}
        </AnimatePresence>
        </LayoutGroup>
      </div>
    </div>
  );
}
