import { motion } from "motion/react";
import imgImage42 from "@/assets/82cb9adebc2ffdeae0d4696bcd06540fcb415be0.png"; // Glucose flower
import dataImg from "@/assets/data.png"; // Glucose graph data
import { FallingFlowersGeneric } from "./FallingFlowersGeneric";
import { MedicationIntakeSection } from "./MedicationIntakeSection";
import { CycleSection } from "./CycleSection";
import { OverviewSmallCard } from "./OverviewSmallCard";

interface GlucoseExpandedCardProps {
  onBack: () => void;
  isExpanding: boolean;
}

export function GlucoseExpandedCard({ onBack, isExpanding }: GlucoseExpandedCardProps) {
  return (
    <div className="app-bg relative size-full overflow-hidden">
      <div className="size-full overflow-y-auto scrollbar-hide relative">
        <div className="pt-[75px] px-[20px] pb-[140px]">
          <div className="insight-title flex flex-col justify-center whitespace-nowrap">
            <p className="leading-[normal]">Insight</p>
          </div>
          <div className="mt-[30px] flex flex-col gap-[32px] items-start w-[353px]">
            <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
              <div className="flex flex-col font-['Instrument_Sans',sans-serif] font-medium h-[28px] justify-center leading-normal relative shrink-0 text-[16px] text-black w-[353px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[normal]">Overview</p>
              </div>
              <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-full">
                <motion.div 
                layoutId="card-glucose" 
                onClick={onBack}
                className="bg-[#f1f6ea] h-[353px] relative rounded-[12px] shrink-0 w-full cursor-pointer overflow-hidden"
              >
                <FallingFlowersGeneric isExpanding={isExpanding} flowerImage={imgImage42} />
                {/* Glucose Content */}
                <div className="absolute left-[15px] top-[39px] flex items-baseline gap-[12px] font-['Instrument_Sans',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="leading-[normal] text-[#494949] text-[48px] font-normal">104</p>
                  <p className="leading-[normal] font-normal text-[#828282] text-[16px] uppercase whitespace-nowrap">MG/DL</p>
                </div>
                <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[0] left-[15px] text-[#494949] text-[12px] top-[30.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="leading-[normal]">Glucose</p>
                </div>
                <div className="absolute bottom-[30.5px] left-[15px] w-[calc(100%-30px)] text-[14px] text-black font-['Instrument_Sans',sans-serif] font-normal leading-normal" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="leading-[normal]">Glucose stayed within a healthy range across the full 24 hours, a sign of consistent metabolic balance throughout your day.</p>
                </div>
                {/* Glucose graph - equal spacing above and below image */}
                <div className="absolute inset-x-0 top-[105px] flex h-[160px] items-center justify-center px-[20px]">
                  <img src={dataImg} alt="Glucose levels over 24 hours" className="h-full w-full object-contain" />
                </div>
              </motion.div>
              {/* Other 3 cards in a row - same layout as IPhone1653 Frame27 */}
                <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-[353px]">
                  <OverviewSmallCard layoutId="heart-rate-card" label="Heart Rate" value="72" unit="bpm" />
                  <OverviewSmallCard layoutId="card-sleep" label="Sleep Quality" value="8.1" unit="HR" />
                  <OverviewSmallCard layoutId="card-body-temp" label="Body Temp" value="98.6" unit="°F" />
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