import svgPaths from "./svg-m66fnjvifg";
import imgImage40 from "@/assets/4eef2f9b3dca3d6dc207561f3bb50531693179db.png";
import { motion } from "motion/react";
import { FallingFlowers } from "../app/components/FallingFlowers";

function Frame17() {
  return (
    <div className="absolute font-['Instrument_Sans',sans-serif] font-normal h-[49px] leading-[0] left-[15px] top-[39px] w-[73px] whitespace-nowrap">
      <div
        className="-translate-y-1/2 absolute flex flex-col justify-center left-0 text-[#494949] text-[48px] top-[29.5px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">67</p>
      </div>
      <div
        className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-normal left-[59px] text-[#828282] text-[16px] top-[40px] uppercase"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">bpm</p>
      </div>
    </div>
  );
}

function HeartRate({
  onHeartRateClick,
  isExpanding = false,
}: {
  onHeartRateClick?: () => void;
  isExpanding?: boolean;
}) {
  return (
    <motion.div
      layoutId="heart-rate-card"
      onClick={onHeartRateClick}
      className="bg-[#f1f6ea] h-[353px] relative rounded-[12px] shrink-0 w-full cursor-pointer overflow-hidden"
      data-name="Heart Rate"
    >
      <Frame17 />
      <div className="-translate-x-1/2 absolute h-[123.131px] left-[calc(50%+0.5px)] top-[135px] w-[312px]">
        <div className="absolute inset-[5.51%_-0.22%_3.11%_-0.29%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 313.603 112.517"
          >
            <path
              d={svgPaths.p3dfd18c0}
              id="Vector 127"
              stroke="url(#paint0_linear_1_714)"
              strokeOpacity="0.75"
              strokeWidth="2"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_1_714"
                x1="160.052"
                x2="160.052"
                y1="41.7106"
                y2="97.7128"
              >
                <stop stopColor="#EE583F" />
                <stop offset="0.047342" stopColor="#494949" />
                <stop offset="0.94438" stopColor="#494949" />
                <stop offset="1" stopColor="#D5D5D5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div
        className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[0] left-[15px] text-[#494949] text-[12px] top-[30.5px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">Heart Rate</p>
      </div>
      <div
        className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-159.5px)] text-[14px] text-black top-[306px] w-[315px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">
          Sleeping heart rate was below your norm - a sign of solid recovery and
          a calm system.
        </p>
      </div>
      {/* Graph labels: number + unit in line (80 bpm, 90 bpm, 60 bpm) - offset +21px to match graph */}
      <div
        className="-translate-y-1/2 absolute left-[40px] top-[150px] flex items-baseline gap-[4px] font-['Instrument_Sans',sans-serif] font-normal leading-normal"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <span className="text-[#494949] text-[16px]">80</span>
        <span className="text-[#828282] text-[8px]">bpm</span>
      </div>
      <div
        className="-translate-y-1/2 absolute left-[226px] top-[129px] flex items-baseline gap-[4px] font-['Instrument_Sans',sans-serif] font-normal leading-normal"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <span className="text-[#494949] text-[16px]">90</span>
        <span className="text-[#828282] text-[8px]">bpm</span>
      </div>
      <div
        className="-translate-y-1/2 absolute left-[129px] top-[269px] flex items-baseline gap-[4px] font-['Instrument_Sans',sans-serif] font-normal leading-normal"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <span className="text-[#494949] text-[16px]">60</span>
        <span className="text-[#828282] text-[8px]">bpm</span>
      </div>
      <FallingFlowers isExpanding={isExpanding} />
    </motion.div>
  );
}

function Frame18() {
  return (
    <div className="h-[12px] relative shrink-0 w-full">
      <div
        className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[0] left-0 text-[#494949] text-[12px] top-[6.5px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">Sleep Quality</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex font-['Instrument_Sans',sans-serif] font-normal gap-[2px] items-end leading-[0] relative shrink-0 w-full">
      <div
        className="flex flex-col h-[27px] justify-center relative shrink-0 text-[#494949] text-[30px] w-[33px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">8.1</p>
      </div>
      <div
        className="flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-normal relative shrink-0 text-[#828282] text-[16px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">HR</p>
      </div>
    </div>
  );
}

function Hrv() {
  return (
    <motion.div
      layoutId="card-sleep"
      className="bg-[#f1f6ea] flex-[1_0_0] h-[110px] min-h-px min-w-px relative rounded-[12px]"
      data-name="HRV"
    >
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-between p-[16px] relative size-full">
          <Frame18 />
          <Frame16 />
        </div>
      </div>
    </motion.div>
  );
}

function Frame20() {
  return (
    <div className="h-[12px] relative shrink-0 w-full">
      <div
        className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[0] left-0 text-[#494949] text-[12px] top-[6.5px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">Body Temp</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="font-['Instrument_Sans',sans-serif] font-normal h-[27px] leading-[0] relative shrink-0 w-full">
      <div
        className="-translate-y-1/2 absolute flex flex-col h-[27px] justify-center left-[0.33px] text-[#494949] text-[30px] top-[13.5px] w-[59px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">98.6</p>
      </div>
      <div
        className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-normal left-[61.33px] text-[#828282] text-[16px] top-[15px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">
          <br aria-hidden="true" />
          °F
        </p>
      </div>
    </div>
  );
}

function Hrv1() {
  return (
    <motion.div
      layoutId="card-body-temp"
      className="bg-[#f1f6ea] flex-[1_0_0] h-[110px] min-h-px min-w-px relative rounded-[12px]"
      data-name="HRV"
    >
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-between p-[16px] relative size-full">
          <Frame20 />
          <Frame21 />
        </div>
      </div>
    </motion.div>
  );
}

function Frame22() {
  return (
    <div className="h-[12px] relative shrink-0 w-full">
      <div
        className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[0] left-0 text-[#494949] text-[12px] top-[6.5px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">Glucose</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex font-['Instrument_Sans',sans-serif] font-normal gap-[2px] items-end leading-[0] relative shrink-0 w-full">
      <div
        className="flex flex-col h-[27px] justify-center relative shrink-0 text-[#494949] text-[30px] w-[36px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">32</p>
      </div>
      <div
        className="flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-normal relative shrink-0 text-[#828282] text-[16px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">MS</p>
      </div>
    </div>
  );
}

function Hrv2() {
  return (
    <motion.div
      layoutId="card-glucose"
      className="bg-[#f1f6ea] flex-[1_0_0] h-[110px] min-h-px min-w-px relative rounded-[12px]"
      data-name="HRV"
    >
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-between p-[16px] relative size-full">
          <Frame22 />
          <Frame23 />
        </div>
      </div>
    </motion.div>
  );
}

function Frame27() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-[353px]">
      <Hrv />
      <Hrv1 />
      <Hrv2 />
    </div>
  );
}

function Frame19({
  onHeartRateClick,
  isExpanding = false,
}: {
  onHeartRateClick?: () => void;
  isExpanding?: boolean;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-full">
      <HeartRate
        onHeartRateClick={onHeartRateClick}
        isExpanding={isExpanding}
      />
      <Frame27 />
    </div>
  );
}

function Frame29({
  onHeartRateClick,
  isExpanding = false,
}: {
  onHeartRateClick?: () => void;
  isExpanding?: boolean;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <div
        className="flex flex-col font-['Instrument_Sans',sans-serif] font-normal h-[28px] justify-center leading-normal relative shrink-0 text-[18px] text-black w-[353px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">Overview</p>
      </div>
      <Frame19 onHeartRateClick={onHeartRateClick} isExpanding={isExpanding} />
    </div>
  );
}

function Frame() {
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

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 text-black w-[77px]">
      <div
        className="flex flex-col font-['Instrument_Sans',sans-serif] font-medium justify-center relative shrink-0 text-[14px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">Magnesium</p>
      </div>
      <div
        className="flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center relative shrink-0 text-[10px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">500 mcg.</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Toggle() {
  return (
    <div className="h-[16px] relative shrink-0 w-[32px]" data-name="Toggle">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 16"
      >
        <g id="Toggle">
          <rect fill="var(--fill-0, #8D8D8D)" height="16" rx="8" width="32" />
          <path
            d={svgPaths.p363f2a00}
            fill="var(--fill-0, #F6F3F3)"
            id="graphic"
          />
        </g>
      </svg>
    </div>
  );
}

function ToggleSmall() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0"
      data-name="Toggle small"
    >
      <Toggle />
      <div
        className="flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-black tracking-[0.16px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[18px]">Off</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame2 />
      <ToggleSmall />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#f1f6ea] h-[75px] relative rounded-[12px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[19px] relative size-full">
        <Frame3 />
      </div>
    </div>
  );
}

function Frame10() {
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

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 text-black w-[77px]">
      <div
        className="flex flex-col font-['Instrument_Sans',sans-serif] font-medium justify-center relative shrink-0 text-[14px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">Inositol</p>
      </div>
      <div
        className="flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center relative shrink-0 text-[10px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">500 mcg.</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Toggle1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[32px]" data-name="Toggle">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 16"
      >
        <g id="Toggle">
          <rect fill="var(--fill-0, #24A148)" height="16" rx="8" width="32" />
          <path
            d={svgPaths.pa212880}
            fill="var(--fill-0, #F6F3F3)"
            id="graphic"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame9 />
      <div
        className="content-stretch flex gap-[8px] items-center relative shrink-0"
        data-name="Toggle small/True/Default"
      >
        <Toggle1 />
        <div
          className="flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-[22px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <p className="leading-[18px]">On</p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#f1f6ea] h-[75px] relative rounded-[12px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[19px] relative size-full">
        <Frame6 />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <div
        className="flex flex-col font-['Instrument_Sans',sans-serif] font-normal h-[28px] justify-center leading-normal relative shrink-0 text-[18px] text-black w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">Medication Intake</p>
      </div>
      <Frame7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame26 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <div className="h-[19px] relative shrink-0 w-[31px]" data-name="image 40">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[102.1%] left-[-6.45%] max-w-none top-[1.58%] w-[112.9%]"
            src={imgImage40}
          />
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <div
        className="flex flex-col font-['Instrument_Sans',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#656565] text-[10px] w-[58px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">Synced with</p>
      </div>
      <Frame32 />
    </div>
  );
}

function MaterialSymbolsSync() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="material-symbols:sync"
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="material-symbols:sync">
          <path
            d={svgPaths.p3e7ec070}
            fill="var(--fill-0, #757575)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-center justify-between left-0 px-[20px] top-[20px] w-[353px]">
      <Frame25 />
      <MaterialSymbolsSync />
    </div>
  );
}

function FontistoBloodDrop() {
  return (
    <div
      className="absolute h-[22px] left-[137px] top-[56px] w-[14px]"
      data-name="fontisto:blood-drop"
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 22"
      >
        <g clipPath="url(#clip0_1_449)" id="fontisto:blood-drop">
          <path
            d={svgPaths.p3090a500}
            fill="var(--fill-0, #D57B7B)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_449">
            <rect fill="white" height="22" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[5px] items-center left-[calc(50%+2px)] text-center top-[calc(50%+12.5px)] w-[107px]">
      <div
        className="flex flex-col font-['Instrument_Sans',sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[#4a4a4a] text-[0px] w-[min-content]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="text-[10px]">
          <span className="leading-[normal]">{`Today, `}</span>
          <span
            className="font-['Instrument_Sans',sans-serif] font-normal leading-[normal] text-[#4a4a4a]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Mar 7
          </span>
        </p>
      </div>
      <div
        className="flex flex-col font-['Instrument_Sans',sans-serif] font-semibold justify-center leading-[normal] relative shrink-0 text-[#4a4a4a] text-[20px] whitespace-nowrap whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="mb-0">{`2 days until `}</p>
        <p>next period</p>
      </div>
      <div
        className="flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#696969] text-[10px] w-[min-content]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">Potential fertile day</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute left-[39px] size-[279.207px] top-[50px]">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 279.207 279.207"
      >
        <g id="Group 29">
          <path
            d={svgPaths.p378a7d80}
            fill="var(--fill-0, #D6D6D6)"
            id="Ellipse 51"
          />
          <circle
            cx="243.514"
            cy="140.006"
            fill="var(--fill-0, #3E4861)"
            fillOpacity="0.3"
            id="Ellipse 54"
            r="2.5"
          />
          <circle
            cx="34.5136"
            cy="140.006"
            fill="var(--fill-0, #3E4861)"
            fillOpacity="0.3"
            id="Ellipse 59"
            r="2.5"
          />
          <circle
            cx="140.014"
            cy="244.506"
            fill="var(--fill-0, #3E4861)"
            fillOpacity="0.3"
            id="Ellipse 60"
            r="2.5"
            transform="rotate(90 140.014 244.506)"
          />
          <circle
            cx="137.5"
            cy="33.5"
            fill="var(--fill-0, #3E4861)"
            fillOpacity="0.3"
            id="Ellipse 65"
            r="2.5"
            transform="rotate(90 137.5 33.5)"
          />
          <circle
            cx="229.663"
            cy="89.3232"
            fill="var(--fill-0, #3E4861)"
            fillOpacity="0.3"
            id="Ellipse 114"
            r="2.5"
            transform="rotate(-30 229.663 89.3232)"
          />
          <circle
            cx="221.868"
            cy="93.8232"
            fill="var(--fill-0, #77ADA0)"
            fillOpacity="0.3"
            id="Ellipse 116"
            r="2.5"
            transform="rotate(-30 221.868 93.8232)"
          />
          <circle
            cx="56.458"
            cy="189.323"
            fill="var(--fill-0, #77ADA0)"
            fillOpacity="0.3"
            id="Ellipse 117"
            r="2.5"
            transform="rotate(-30 56.458 189.323)"
          />
          <circle
            cx="48.663"
            cy="193.823"
            fill="var(--fill-0, #3E4861)"
            fillOpacity="0.3"
            id="Ellipse 119"
            r="2.5"
            transform="rotate(-30 48.663 193.823)"
          />
          <circle
            cx="192.278"
            cy="231.573"
            fill="var(--fill-0, #3E4861)"
            fillOpacity="0.3"
            id="Ellipse 120"
            r="2.5"
            transform="rotate(60 192.278 231.573)"
          />
          <circle
            cx="38.0462"
            cy="167.846"
            fill="var(--fill-0, #3E4861)"
            fillOpacity="0.3"
            id="Ellipse 107"
            r="2.5"
            transform="rotate(-15 38.0462 167.846)"
          />
          <circle
            cx="166.998"
            cy="241.48"
            fill="var(--fill-0, #3E4861)"
            fillOpacity="0.3"
            id="Ellipse 108"
            r="2.5"
            transform="rotate(75 166.998 241.48)"
          />
          <circle
            cx="164.668"
            cy="232.786"
            fill="var(--fill-0, #77ADA0)"
            fillOpacity="0.3"
            id="Ellipse 110"
            r="2.5"
            transform="rotate(75 164.668 232.786)"
          />
          <circle
            cx="162.34"
            cy="224.093"
            fill="var(--fill-0, #E78845)"
            fillOpacity="0.3"
            id="Ellipse 112"
            r="2.5"
            transform="rotate(75 162.34 224.093)"
          />
          <circle
            cx="214.143"
            cy="211.925"
            fill="var(--fill-0, #3E4861)"
            fillOpacity="0.3"
            id="Ellipse 90"
            r="2.5"
            transform="rotate(45 214.143 211.925)"
          />
          <circle
            cx="83.2617"
            cy="81.2631"
            fill="var(--fill-0, #E78845)"
            id="Ellipse 91"
            r="2.5"
            transform="rotate(45 83.2617 81.2631)"
          />
          <circle
            cx="76.8984"
            cy="74.8988"
            fill="var(--fill-0, #77ADA0)"
            id="Ellipse 93"
            r="2.5"
            transform="rotate(45 76.8984 74.8988)"
          />
          <circle
            cx="70.5352"
            cy="68.5355"
            fill="var(--fill-0, #3E4861)"
            id="Ellipse 95"
            r="2.5"
            transform="rotate(45 70.5352 68.5355)"
          />
          <circle
            cx="84.5352"
            cy="48.5355"
            fill="var(--fill-0, #3E4861)"
            fillOpacity="0.3"
            id="Ellipse 121"
            r="2.5"
            transform="rotate(45 84.5352 48.5355)"
          />
          <circle
            cx="214.849"
            cy="64.8466"
            fill="var(--fill-0, #3E4861)"
            fillOpacity="0.3"
            id="Ellipse 101"
            r="2.5"
            transform="rotate(135 214.849 64.8466)"
          />
          <circle
            cx="230.167"
            cy="190.823"
            fill="var(--fill-0, #3E4861)"
            fillOpacity="0.3"
            id="Ellipse 78"
            r="2.5"
            transform="rotate(30 230.167 190.823)"
          />
          <circle
            cx="222.374"
            cy="186.323"
            fill="var(--fill-0, #77ADA0)"
            fillOpacity="0.3"
            id="Ellipse 80"
            r="2.5"
            transform="rotate(30 222.374 186.323)"
          />
          <circle
            cx="49.1689"
            cy="86.3232"
            fill="var(--fill-0, #3E4861)"
            fillOpacity="0.3"
            id="Ellipse 83"
            r="2.5"
            transform="rotate(30 49.1689 86.3232)"
          />
          <circle
            cx="183.784"
            cy="64.1621"
            fill="var(--fill-0, #E78845)"
            fillOpacity="0.3"
            id="Ellipse 85"
            r="2.5"
            transform="rotate(120 183.784 64.1621)"
          />
          <circle
            cx="188.284"
            cy="56.3682"
            fill="var(--fill-0, #77ADA0)"
            fillOpacity="0.3"
            id="Ellipse 87"
            r="2.5"
            transform="rotate(120 188.284 56.3682)"
          />
          <circle
            cx="192.784"
            cy="48.5742"
            fill="var(--fill-0, #3E4861)"
            fillOpacity="0.3"
            id="Ellipse 89"
            r="2.5"
            transform="rotate(120 192.784 48.5742)"
          />
          <circle
            cx="240.186"
            cy="166.293"
            fill="var(--fill-0, #3E4861)"
            fillOpacity="0.3"
            id="Ellipse 66"
            r="2.5"
            transform="rotate(15 240.186 166.293)"
          />
          <circle
            cx="47.0001"
            cy="114.53"
            fill="var(--fill-0, #77ADA0)"
            fillOpacity="0.3"
            id="Ellipse 69"
            r="2.5"
            transform="rotate(15 47.0001 114.53)"
          />
          <circle
            cx="38.3068"
            cy="112.2"
            fill="var(--fill-0, #3E4861)"
            fillOpacity="0.3"
            id="Ellipse 71"
            r="2.5"
            transform="rotate(15 38.3068 112.2)"
          />
          <circle
            cx="113.167"
            cy="240.444"
            fill="var(--fill-0, #3E4861)"
            fillOpacity="0.3"
            id="Ellipse 72"
            r="2.5"
            transform="rotate(105 113.167 240.444)"
          />
          <circle
            cx="115.495"
            cy="231.751"
            fill="var(--fill-0, #77ADA0)"
            fillOpacity="0.3"
            id="Ellipse 74"
            r="2.5"
            transform="rotate(105 115.495 231.751)"
          />
          <circle
            cx="164.93"
            cy="47.2599"
            fill="var(--fill-0, #77ADA0)"
            fillOpacity="0.3"
            id="Ellipse 75"
            r="2.5"
            transform="rotate(105 164.93 47.2599)"
          />
          <circle
            cx="167.258"
            cy="38.5665"
            fill="var(--fill-0, #3E4861)"
            fillOpacity="0.3"
            id="Ellipse 77"
            r="2.5"
            transform="rotate(105 167.258 38.5665)"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute font-['Instrument_Sans',sans-serif] font-semibold h-[18px] leading-[0] left-1/2 text-[#696969] text-center top-1/2 w-[14px]">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[7px] text-[5px] top-[2px] w-[14px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">Day</p>
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[7px] text-[12px] top-[11.5px] w-[14px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">28</p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="absolute left-[73px] size-[36px] top-[81px]">
      <div className="absolute left-0 size-[36px] top-0">
        <svg
          className="absolute block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 36 36"
        >
          <circle
            cx="18"
            cy="18"
            fill="var(--fill-0, white)"
            id="Ellipse 122"
            r="17"
            stroke="var(--stroke-0, #D9D9D9)"
            strokeWidth="2"
          />
        </svg>
      </div>
      <Frame30 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[39px] top-[50px]">
      <Group />
      <div
        className="absolute flex h-[8px] items-center justify-center left-[99px] top-[85px] w-[12px]"
        style={
          {
            "--transform-inner-width": "1200",
            "--transform-inner-height": "18",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[-33.69deg]">
          <div className="h-0 relative w-[14.422px]">
            <div className="absolute inset-[-5.52px_-5.2%_-5.52px_0]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 15.1722 11.0459"
              >
                <path
                  d={svgPaths.p14605b00}
                  fill="var(--stroke-0, #9A9CA1)"
                  id="Arrow 2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame31 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[39px] top-[50px]">
      <Frame24 />
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%-0.4px)] top-[calc(50%+15.02px)]">
      <Group4 />
      <div
        className="absolute flex items-center justify-center left-[34px] size-[284.04px] top-[51px]"
        style={
          {
            "--transform-inner-width": "1200",
            "--transform-inner-height": "18",
          } as React.CSSProperties
        }
      >
        <div className="-rotate-91 flex-none">
          <div className="relative size-[279.21px]">
            <div className="absolute bottom-[3.75%] left-[64.54%] right-[0.14%] top-1/2">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 98.6062 129.13"
              >
                <g id="Ellipse 51">
                  <mask fill="white" id="path-1-inside-1_1_404">
                    <path d={svgPaths.p36e82e00} />
                  </mask>
                  <path
                    d={svgPaths.p36e82e00}
                    mask="url(#path-1-inside-1_1_404)"
                    stroke="var(--stroke-0, #D57B7B)"
                    strokeWidth="24"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute bg-[#f1f6ea] h-[355px] left-0 rounded-[12px] top-0 w-[353px]">
      <Frame15 />
      <FontistoBloodDrop />
      <Group3 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="h-[355px] relative shrink-0 w-[353px]">
      <Frame14 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <div
        className="flex flex-col font-['Instrument_Sans',sans-serif] font-normal h-[28px] justify-center leading-normal relative shrink-0 text-[18px] text-black w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">Cycle</p>
      </div>
      <Frame13 />
    </div>
  );
}

function Frame28({
  onHeartRateClick,
  isExpanding = false,
}: {
  onHeartRateClick?: () => void;
  isExpanding?: boolean;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start w-[353px]">
      <Frame29 onHeartRateClick={onHeartRateClick} isExpanding={isExpanding} />
      <Frame8 />
      <Frame12 />
    </div>
  );
}

function NavIcon() {
  return (
    <div
      className="absolute aspect-[28/28] left-[11.76%] overflow-clip right-[11.76%] top-[7.53px]"
      data-name="nav icon"
    >
      <div
        className="absolute inset-[19.23%_20.83%_16.67%_20.83%]"
        data-name="Vector"
      >
        <svg
          className="absolute block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 26.7647 29.4125"
        >
          <path
            d={svgPaths.p2520600}
            fill="var(--fill-0, #345900)"
            id="Vector"
          />
        </svg>
      </div>
    </div>
  );
}

function NavButton() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="nav button">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 60 60"
      >
        <g id="Group 25">
          <circle
            cx="30"
            cy="30"
            id="Ellipse 41"
            r="29.3725"
            stroke="var(--stroke-0, #F3E7D7)"
            strokeWidth="1.2549"
          />
        </g>
      </svg>
      <NavIcon />
    </div>
  );
}

function NavIcon1() {
  return (
    <div
      className="absolute aspect-[29/29] content-stretch flex items-center justify-center left-[11.76%] overflow-clip p-[4px] right-[11.76%] top-[6px]"
      data-name="nav icon"
    >
      <div className="relative shrink-0 size-[21px]" data-name="Vector">
        <div className="absolute inset-[-3.81%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 22.6 22.6"
          >
            <path
              d={svgPaths.pbfdb80}
              id="Vector"
              stroke="var(--stroke-0, #345900)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.6"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Component 4">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 60 60"
      >
        <g id="nav status">
          <circle
            cx="30"
            cy="30"
            fill="var(--fill-0, #F3E7D7)"
            id="Ellipse 45"
            r="29.5"
            stroke="var(--stroke-0, #F3E7D7)"
          />
        </g>
      </svg>
      <NavIcon1 />
    </div>
  );
}

function NavIcon2() {
  return (
    <div
      className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[65px] top-1/2"
      data-name="nav icon"
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 65 65"
      >
        <g id="nav icon">
          <path
            d="M21 32.5H44M32.5 21V44"
            id="Vector"
            stroke="var(--stroke-0, #345900)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.125"
          />
        </g>
      </svg>
    </div>
  );
}

function Component2() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Component 5">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 60 60"
      >
        <g id="Group 25">
          <circle
            cx="30"
            cy="30"
            id="Ellipse 45"
            r="29.5"
            stroke="var(--stroke-0, #F3E7D7)"
          />
        </g>
      </svg>
      <NavIcon2 />
    </div>
  );
}

function NavIcon3() {
  return (
    <div
      className="-translate-x-1/2 -translate-y-1/2 absolute h-[39px] left-[calc(50%-0.28px)] top-1/2 w-[48.941px]"
      data-name="nav icon"
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 48.9412 39"
      >
        <g id="nav icon">
          <path
            d={svgPaths.pd9a6880}
            id="Vector"
            stroke="var(--stroke-0, #345900)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
        </g>
      </svg>
    </div>
  );
}

function Component() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Component 3">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 60 60"
      >
        <g id="Group 25">
          <circle
            cx="30"
            cy="30"
            id="Ellipse 45"
            r="29.5"
            stroke="var(--stroke-0, #F3E7D7)"
          />
        </g>
      </svg>
      <NavIcon3 />
    </div>
  );
}

function NavIcon4() {
  return (
    <div
      className="-translate-x-1/2 -translate-y-1/2 absolute h-[39px] left-[calc(50%+0.47px)] top-1/2 w-[48.941px]"
      data-name="nav icon"
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 48.9412 39"
      >
        <g id="nav icon">
          <path
            d={svgPaths.p8143380}
            id="Vector"
            stroke="var(--stroke-0, #345900)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
        </g>
      </svg>
    </div>
  );
}

function Component3() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Component 6">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 60 60"
      >
        <g id="Group 25">
          <circle
            cx="30"
            cy="30"
            id="Ellipse 45"
            r="29.5"
            stroke="var(--stroke-0, #F3E7D7)"
          />
        </g>
      </svg>
      <NavIcon4 />
    </div>
  );
}

/** Nav bar for expanded insight views (Body Temp, Glucose, Sleep). Exported for reuse. */
export function ExpandedViewNavBar() {
  return (
    <div
      className="-translate-x-1/2 absolute backdrop-blur-[47.85px] bg-[#f7b3cc] bottom-[40px] content-stretch flex h-[77px] items-center justify-between left-1/2 overflow-clip p-[8px] rounded-[111px] w-[353px] z-10"
      data-name="New Nav Bar"
    >
      <NavButton />
      <Component1 />
      <Component2 />
      <Component />
      <Component3 />
    </div>
  );
}

export { Frame12 as CycleSectionContent };

export default function IPhone({
  onHeartRateClick,
  isExpanding = false,
}: {
  onHeartRateClick?: () => void;
  isExpanding?: boolean;
}) {
  return (
    <div
      className="app-bg relative size-full overflow-hidden"
      data-name="iPhone 16 - 53"
    >
      <div className="size-full overflow-y-auto scrollbar-hide relative">
        <div className="pt-[75px] px-[20px] pb-[140px]">
          <div className="insight-title flex flex-col justify-center whitespace-nowrap">
            <p className="leading-[normal]">Insight</p>
          </div>
          <div className="mt-[30px]">
            <Frame28
              onHeartRateClick={onHeartRateClick}
              isExpanding={isExpanding}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
