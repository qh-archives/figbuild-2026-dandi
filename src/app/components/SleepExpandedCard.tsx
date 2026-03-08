import { motion } from "motion/react";
import imgImage41 from "@/assets/6d0f4a62e2c512d0485b9409fa0a263a6a69cf53.png"; // Sleep flower
import { ExpandedViewNavBar } from "../../imports/IPhone1653";
import { FallingFlowersGeneric } from "./FallingFlowersGeneric";
import { MedicationIntakeSection } from "./MedicationIntakeSection";
import { CycleSection } from "./CycleSection";
import { OverviewSmallCard } from "./OverviewSmallCard";

interface SleepExpandedCardProps {
  onBack: () => void;
  isExpanding: boolean;
}

export function SleepExpandedCard({
  onBack,
  isExpanding,
}: SleepExpandedCardProps) {
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
                  layoutId="card-sleep"
                  onClick={onBack}
                  className="bg-[#f1f6ea] h-[353px] relative rounded-[20px] shrink-0 w-full cursor-pointer overflow-hidden"
                >
                  <FallingFlowersGeneric
                    isExpanding={isExpanding}
                    flowerImage={imgImage41}
                  />
                  {/* Sleep Quality Content: line 1 = badge + title, line 2 = value + unit */}
                  <div
                    className="absolute left-[15px] top-[15px] flex flex-col gap-[4px] font-['Instrument_Sans',sans-serif]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    <div className="flex items-center gap-[6px]">
                      <p className="leading-[normal] text-[#494949] text-[12px] whitespace-nowrap">
                        Sleep Quality
                      </p>
                    </div>
                    <div className="flex items-baseline gap-[8px]">
                      <p className="leading-[normal] text-[#494949] text-[48px]">
                        8.1
                      </p>
                      <p className="leading-[normal] font-normal text-[#828282] text-[16px] whitespace-nowrap">
                        HR/ GOOD
                      </p>
                    </div>
                  </div>
                  <div
                    className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-159.5px)] text-[14px] text-black top-[306.5px] w-[315px]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    <p className="leading-[normal]">
                      You hit all four sleep stages well — deep sleep was
                      especially strong, giving your body the repair time it
                      needs.
                    </p>
                  </div>
                  {/* Sleep Bar */}
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[35px] left-1/2 overflow-clip top-1/2 w-[317px]">
                    <div className="absolute bg-[#9cf7ab] h-[35px] left-0 rounded-[3px] top-0 w-[65px]" />
                    <div className="absolute bg-[#74e886] h-[35px] left-[76px] rounded-[3px] top-0 w-[67px]" />
                    <div className="absolute bg-[#0ec92c] h-[35px] left-[154px] rounded-[3px] top-0 w-[90px]" />
                    <div className="absolute bg-[#09861d] h-[35px] left-[255px] rounded-[3px] top-0 w-[62px]" />
                  </div>
                  {/* Subtitles under each green frame: row 1 = badge + title, row 2 = numbers/units; right-aligned to frame */}
                  <div className="-translate-x-1/2 absolute left-1/2 top-[calc(50%+35px+10px)] w-[317px] flex flex-row">
                    <div
                      className="flex flex-col items-end gap-[4px] shrink-0 w-[65px]"
                      style={{ fontFamily: "Instrument Sans, sans-serif" }}
                    >
                      <div className="flex flex-row items-center gap-[4px]">
                        <div className="bg-[#9cf7ab] rounded-full size-[6px] shrink-0" />
                        <span className="text-[#5e5e5e] text-[10px] leading-normal">
                          Awake
                        </span>
                      </div>
                      <span className="text-[#5e5e5e] text-[16px] leading-normal">
                        39m
                      </span>
                    </div>
                    <div className="flex flex-col items-end gap-[4px] shrink-0 w-[67px] pl-[11px]">
                      <div className="flex flex-row items-center gap-[4px]">
                        <div className="bg-[#74e886] rounded-full size-[6px] shrink-0" />
                        <span className="text-[#5e5e5e] text-[10px] leading-normal">
                          REM
                        </span>
                      </div>
                      <span className="text-[#5e5e5e] text-[16px] leading-normal">
                        1h
                      </span>
                    </div>
                    <div className="flex flex-col items-end gap-[4px] shrink-0 w-[90px] pl-[11px]">
                      <div className="flex flex-row items-center gap-[4px]">
                        <div className="bg-[#0ec92c] rounded-full size-[6px] shrink-0" />
                        <span className="text-[#5e5e5e] text-[10px] leading-normal">
                          Core
                        </span>
                      </div>
                      <span className="text-[#5e5e5e] text-[16px] leading-normal">
                        1h 20m
                      </span>
                    </div>
                    <div className="flex flex-col items-end gap-[4px] shrink-0 w-[62px] pl-[11px]">
                      <div className="flex flex-row items-center gap-[4px]">
                        <div className="bg-[#09861d] rounded-full size-[6px] shrink-0" />
                        <span className="text-[#5e5e5e] text-[10px] leading-normal">
                          Deep
                        </span>
                      </div>
                      <span className="text-[#5e5e5e] text-[16px] leading-normal">
                        32m
                      </span>
                    </div>
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
                    layoutId="card-body-temp"
                    label="Body Temp"
                    value="98.6"
                    unit="°F"
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
