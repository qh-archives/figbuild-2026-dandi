import { motion, AnimatePresence } from "motion/react";
import { useMemo, useEffect, useState } from "react";

const CARD_HEIGHT = 353;
const FLOWER_COUNT = 8;

interface Flower {
  id: number;
  right: number; // % from right edge (0 = right edge, so top-right area)
  top: number; // px from top (can be slightly negative so they start above and fall in)
  size: number; // scale factor (wider range for more variation)
  duration: number;
  delay: number;
  rotation: number;
  rotationSpeed: number;
}

/** Seeded pseudo-random so each card gets same pattern but different from others */
function seededRandom(seed: number) {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
}

function createFlowersForCard(seed: number): Flower[] {
  const flowers: Flower[] = [];
  for (let i = 0; i < FLOWER_COUNT; i++) {
    const s = seededRandom(seed + i * 7);
    const s2 = seededRandom(seed + i * 13 + 1);
    const s3 = seededRandom(seed + i * 19 + 2);
    const s4 = seededRandom(seed + i * 23 + 3);
    const s5 = seededRandom(seed + i * 31 + 4);
    const s6 = seededRandom(seed + i * 41 + 5);
    flowers.push({
      id: i,
      right: 2 + s * 88,
      top: -70 + s2 * 140,
      size: 0.3 + s3 * 0.88,
      duration: 1 + s4 * 0.55,
      delay: s5 * 0.08,
      rotation: s6 * 360,
      rotationSpeed: (seededRandom(seed + i * 61) - 0.5) * 720,
    });
  }
  return flowers;
}

interface FallingFlowersGenericProps {
  isExpanding: boolean;
  flowerImage: string;
}

export function FallingFlowersGeneric({
  isExpanding,
  flowerImage,
}: FallingFlowersGenericProps) {
  const seed = useMemo(() => Math.random() * 10000, []);
  const flowers = useMemo(() => createFlowersForCard(seed), [seed]);
  const [showFlowers, setShowFlowers] = useState(isExpanding);

  useEffect(() => {
    if (isExpanding) setShowFlowers(true);
  }, [isExpanding]);

  return (
    <AnimatePresence>
      {showFlowers && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[100]">
          {flowers.map((flower) => {
            const flowerSizePx = flower.size * 72;
            const startY = flower.top;
            const endY = CARD_HEIGHT + flowerSizePx;
            const distance = endY - startY;
            return (
              <motion.div
                key={flower.id}
                className="absolute"
                style={{
                  right: `${flower.right}%`,
                  top: `${flower.top}px`,
                  width: `${flowerSizePx}px`,
                  height: `${flowerSizePx}px`,
                  transform: "translateX(50%)",
                }}
                initial={{
                  y: 0,
                  opacity: 1,
                  rotate: flower.rotation,
                }}
                animate={{
                  y: distance,
                  opacity: 1,
                  rotate: flower.rotation + flower.rotationSpeed,
                }}
                transition={{
                  duration: flower.duration,
                  delay: flower.delay,
                  ease: "easeIn",
                }}
              >
                <img
                  src={flowerImage}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </motion.div>
            );
          })}
        </div>
      )}
    </AnimatePresence>
  );
}
