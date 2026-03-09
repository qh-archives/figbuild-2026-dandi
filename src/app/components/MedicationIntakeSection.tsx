import React, { useState } from "react";
import { motion } from "motion/react";
import svgPaths from "../../imports/svg-crqu38k9ol";

function PillBox() {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative rounded-[12px] shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#848484] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
      <div
        className="flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-black whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">x 2</p>
      </div>
    </div>
  );
}

function AnimatedMedicationToggle(props: { checked: boolean; onChange: (v: boolean) => void }) {
  const { checked, onChange } = props;
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Toggle small">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className="relative shrink-0 h-[16px] min-h-[16px] w-[32px] min-w-[32px] rounded-full border-0 cursor-pointer p-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#24A148] focus-visible:ring-offset-1 overflow-hidden inline-flex items-center justify-center"
      >
        <svg className="block" width={32} height={16} fill="none" preserveAspectRatio="none" viewBox="0 0 32 16">
          <rect fill={checked ? "#24A148" : "#8D8D8D"} height="16" rx="8" width="32" />
          <motion.g
            initial={false}
            animate={{ x: checked ? 14 : 0, rotate: checked ? 360 : 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            style={{ transformOrigin: "11px 8px" }}
          >
            <path d={svgPaths.p373863e0} fill="#F6F3F3" id="graphic" />
          </motion.g>
        </svg>
      </button>
      <div
        className="flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] tracking-[0.16px] w-[22px] min-w-[22px]"
        style={{ fontVariationSettings: "'wdth' 100", color: checked ? "#161616" : "black" }}
      >
        <p className="leading-[18px] font-[Instrument_Sans]">{checked ? "On" : "Off"}</p>
      </div>
    </div>
  );
}

function MedicationRow(props: { name: string; dose: string; checked: boolean; onChange: (v: boolean) => void }) {
  const { name, dose, checked, onChange } = props;
  return (
    <div className="bg-[#f1f6ea] h-[75px] relative rounded-[12px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[19px] relative size-full">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
            <PillBox />
            <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 text-black w-[77px]">
              <div className="flex flex-col font-['Instrument_Sans',sans-serif] font-medium justify-center relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[normal] font-[Instrument_Sans]">{name}</p>
              </div>
              <div className="flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center relative shrink-0 text-[10px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[normal] font-[Instrument_Sans]">{dose}</p>
              </div>
            </div>
          </div>
          <AnimatedMedicationToggle checked={checked} onChange={onChange} />
        </div>
      </div>
    </div>
  );
}

export function MedicationIntakeSection() {
  const [magnesiumChecked, setMagnesiumChecked] = useState(false);
  const [inositolChecked, setInositolChecked] = useState(true);
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Instrument_Sans',sans-serif] font-medium h-[28px] justify-center leading-normal relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Medication Intake</p>
      </div>
      <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
        <MedicationRow name="Magnesium" dose="500 mcg." checked={magnesiumChecked} onChange={setMagnesiumChecked} />
        <MedicationRow name="Inositol" dose="500 mcg." checked={inositolChecked} onChange={setInositolChecked} />
      </div>
    </div>
  );
}
