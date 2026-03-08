import { motion } from "motion/react";
import imgImage44 from "@/assets/ab0f0306cf6f6c53e75e9e3017be976fab4648a1.png"; // Body Temp flower
import { ExpandedViewNavBar } from "../../imports/IPhone1653";
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
        <div className="pt-[55px] px-[20px] pb-[140px]">
          <div className="insight-title flex flex-col justify-center whitespace-nowrap">
            <p className="leading-[normal]">Insight</p>
          </div>
          <div className="mt-[28px] flex flex-col gap-[32px] items-start w-[353px]">
            <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
              <div
                className="flex flex-col font-['Instrument_Sans',sans-serif] font-bold h-[28px] justify-center leading-normal relative shrink-0 text-[18px] text-black w-[353px]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                <p className="leading-[normal]">Overview</p>
              </div>
              <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-full">
                <motion.div
                  layoutId="card-body-temp"
                  onClick={onBack}
                  className="bg-[#f1f6ea] h-[353px] relative rounded-[20px] shrink-0 w-full cursor-pointer overflow-hidden"
                >
                  <FallingFlowersGeneric
                    isExpanding={isExpanding}
                    flowerImage={imgImage44}
                  />
                  {/* Body Temp Content: title, then value + unit well-spaced */}
                  <div
                    className="absolute left-[15px] top-[15px] flex flex-col gap-[4px] font-['Instrument_Sans',sans-serif]"
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
                  <div
                    className="absolute left-[15px] top-[306.5px] w-[calc(100%-30px)] text-[14px] text-black font-['Instrument_Sans',sans-serif] font-normal leading-normal"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    <p className="leading-[normal]">
                      Your temperature is right in the sweet spot, which points
                      to a well-rested night.
                    </p>
                  </div>
                  {/* Temperature gauge: arc’s top (curved edge) at vertical center */}
                  <div className="absolute inset-x-0 top-1/4 w-full aspect-square">
                    <svg
                      className="block size-full"
                      fill="none"
                      viewBox="0 0 231 231"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      {/* Bottom semicircle arc (light grey) - visible from 9 to 3 o'clock, 14px thick */}
                      <circle
                        cx="115.5"
                        cy="115.5"
                        r="113"
                        stroke="#CBCBCC"
                        strokeWidth="14"
                        strokeDasharray="355 355"
                        strokeDashoffset="355"
                      />
                      {/* Dark green segment at top-center of arc (apex, 12 o'clock), 14px thick */}
                      <circle
                        cx="115.5"
                        cy="115.5"
                        r="113"
                        stroke="#467603"
                        strokeWidth="14"
                        strokeDasharray="35 675"
                        strokeDashoffset="160"
                      />
                    </svg>
                  </div>
                  <div className="absolute left-1/2 top-[193px] flex w-full -translate-x-1/2 justify-center">
                    <p
                      className="font-['Instrument_Sans',sans-serif] font-normal leading-normal text-[#494949] text-[14px] uppercase"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      NORMAL
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
      <ExpandedViewNavBar />
    </div>
  );
}
