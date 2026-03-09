import { motion } from "motion/react";
import imgImage44 from "@/assets/ab0f0306cf6f6c53e75e9e3017be976fab4648a1.png"; // Body Temp flower
import imgEllipse from "@/assets/ellipse.png";
import { FallingFlowersGeneric } from "./FallingFlowersGeneric";
import { MedicationIntakeSection } from "./MedicationIntakeSection";
import { CycleSection } from "./CycleSection";
import { OverviewSmallCard } from "./OverviewSmallCard";

interface BodyTempExpandedCardProps {
  onBack: () => void;
  isExpanding: boolean;
}

export function BodyTempExpandedCard({
  onBack,
  isExpanding,
}: BodyTempExpandedCardProps) {
  return (
    <div className="app-bg relative size-full overflow-hidden">
      <div className="size-full overflow-y-auto scrollbar-hide relative">
        <div className="pt-[75px] px-[20px] pb-[140px]">
          <div className="insight-title flex flex-col justify-center whitespace-nowrap">
            <p className="leading-[normal]">Insight</p>
          </div>
          <div className="mt-[30px] flex flex-col gap-[32px] items-start w-[353px]">
            <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
              <div
                className="flex flex-col font-['Instrument_Sans',sans-serif] font-medium h-[28px] justify-center leading-normal relative shrink-0 text-[16px] text-black w-[353px]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                <p className="leading-[normal]">Overview</p>
              </div>
              <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-full">
                <motion.div
                  layoutId="card-body-temp"
                  onClick={onBack}
                  className="bg-[#f1f6ea] h-[353px] relative rounded-[12px] shrink-0 w-full cursor-pointer overflow-hidden flex flex-col py-[23px] px-[23px] gap-[20px]"
                >
                  <FallingFlowersGeneric
                    isExpanding={isExpanding}
                    flowerImage={imgImage44}
                  />
                  {/* 1. Title: Body Temp + value */}
                  <div
                    className="flex flex-col gap-[4px] font-['Instrument_Sans',sans-serif] shrink-0"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    <p className="leading-[normal] text-[#494949] text-[12px] whitespace-nowrap">
                      Body Temp
                    </p>
                    <div className="flex items-baseline gap-[12px]">
                      <p className="leading-[normal] text-[#494949] text-[48px] font-normal">
                        98.6
                      </p>
                      <p className="leading-[normal] font-normal text-[#828282] text-[16px] whitespace-nowrap">
                        °F
                      </p>
                    </div>
                  </div>
                  {/* 2. Ellipse image + NORMAL text overlay (full-bleed: touches card left/right edges) */}
                  <div className="relative flex flex-col items-center shrink-0 -mx-[23px] w-[calc(100%+46px)]">
                    <div className="relative h-[160px] w-full overflow-visible flex justify-center">
                      <img
                        src={imgEllipse}
                        alt=""
                        className="absolute inset-0 w-full h-full pointer-events-none object-contain"
                        aria-hidden
                      />
                      <p
                        className="absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2 text-center font-['Instrument_Sans',sans-serif] text-[#1e1e1e] text-[24px] font-normal leading-normal"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        NORMAL
                      </p>
                    </div>
                  </div>
                  {/* 3. Bottom text */}
                  <div
                    className="text-[14px] text-black font-['Instrument_Sans',sans-serif] font-normal leading-normal shrink-0"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    <p className="leading-[normal]">
                      Your temperature is right in the sweet spot, which points
                      to a well-rested night.
                    </p>
                  </div>
                </motion.div>
                {/* Other 3 cards in a row - same layout as IPhone1653 Frame27 */}
                <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-[353px]">
                  <OverviewSmallCard
                    layoutId="heart-rate-card"
                    label="Heart Rate"
                    value="72"
                    unit="bpm"
                  />
                  <OverviewSmallCard
                    layoutId="card-sleep"
                    label="Sleep Quality"
                    value="8.1"
                    unit="HR"
                  />
                  <OverviewSmallCard
                    layoutId="card-glucose"
                    label="Glucose"
                    value="104"
                    unit="mg/dL"
                  />
                </div>
              </div>
            </div>
            <MedicationIntakeSection />
            <CycleSection />
          </div>
        </div>
      </div>
    </div>
  );
}
