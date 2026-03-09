import { motion } from "motion/react";
import imgImage41 from "@/assets/6d0f4a62e2c512d0485b9409fa0a263a6a69cf53.png"; // Sleep flower
import sleepImg from "@/assets/sleep.png";
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
                  layoutId="card-sleep"
                  onClick={onBack}
                  className="bg-[#f1f6ea] h-[353px] relative rounded-[12px] shrink-0 w-full cursor-pointer overflow-hidden"
                >
                  <FallingFlowersGeneric
                    isExpanding={isExpanding}
                    flowerImage={imgImage41}
                  />
                  {/* Sleep Quality Content: line 1 = badge + title, line 2 = value + unit (23px from top to match other cards) */}
                  <div
                    className="absolute left-[23px] top-[23px] flex flex-col gap-[4px] font-['Instrument_Sans',sans-serif]"
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
                    className="absolute bottom-[23px] left-[23px] w-[calc(100%-46px)] font-['Instrument_Sans',sans-serif] font-normal text-[14px] text-black leading-normal"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    <p className="leading-[normal]">
                      You hit all four sleep stages well — deep sleep was
                      especially strong, giving your body the repair time it
                      needs.
                    </p>
                  </div>
                  {/* Sleep chart image (105px from top, 160px tall - matches Glucose spacing) */}
                  <div className="absolute inset-x-0 top-[105px] flex h-[160px] items-center justify-center">
                    <img
                      src={sleepImg}
                      alt="Sleep stages"
                      className="h-full w-full object-contain"
                    />
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
    </div>
  );
}
