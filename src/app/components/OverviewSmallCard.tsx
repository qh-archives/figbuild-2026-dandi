import { motion } from "motion/react";

/** One of the three small metric cards in the overview row (label + value). */
export function OverviewSmallCard({
  layoutId,
  label,
  value,
  unit,
}: {
  layoutId: string;
  label: string;
  value: string;
  unit?: string;
}) {
  return (
    <motion.div
      layoutId={layoutId}
      className="bg-[#f1f6ea] flex-[1_0_0] h-[110px] min-h-px min-w-px relative rounded-[12px]"
    >
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-between p-[16px] relative size-full">
          <div className="h-[12px] relative shrink-0 w-full">
            <div
              className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[0] left-0 text-[#494949] text-[12px] top-[6.5px] whitespace-nowrap"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              <p className="leading-[normal]">{label}</p>
            </div>
          </div>
          <div className="content-stretch flex font-['Instrument_Sans',sans-serif] gap-[2px] items-end leading-normal relative shrink-0 w-full">
            <div
              className="flex flex-col justify-center relative shrink-0 text-[#494949] text-[30px] font-normal leading-normal"
              style={{ fontFamily: "Instrument Sans, sans-serif", fontVariationSettings: "'wdth' 100" }}
            >
              <p className="leading-[normal]">{value}</p>
            </div>
            {unit != null && (
              <div
                className="flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-normal relative shrink-0 whitespace-nowrap uppercase"
                style={{
                  fontVariationSettings: "'wdth' 100",
                  color: "rgba(73, 73, 73, 0.65)",
                  fontSize: unit.toLowerCase() === "mg/dl" ? "8px" : "10px",
                }}
              >
                <p className="leading-[normal]">{unit.toUpperCase()}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
