import React from "react";
import svgPaths from "./svg-crqu38k9ol";
import imgImage40 from "../assets/4eef2f9b3dca3d6dc207561f3bb50531693179db.png";
import imgImage43 from "../assets/e12ce92d4305f84b7652b4854a417ce09954c2e0.png";
import imgImage42 from "../assets/82cb9adebc2ffdeae0d4696bcd06540fcb415be0.png";
import imgImage41 from "../assets/6d0f4a62e2c512d0485b9409fa0a263a6a69cf53.png";
import imgImage44 from "../assets/ab0f0306cf6f6c53e75e9e3017be976fab4648a1.png";
import { motion } from "motion/react";

function Frame16() {
  return (
    <div className="content-stretch flex gap-[4px] items-end relative shrink-0 w-full">
      <div
        className="flex flex-col h-[49px] justify-center relative shrink-0 text-[#494949] text-[40px] w-[45px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">67</p>
      </div>
      <div
        className="flex flex-col h-[28px] justify-center relative shrink-0 text-[#848681] text-[10px] w-[22px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">BPM</p>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Instrument_Sans',sans-serif] font-normal gap-[4px] h-[75px] items-start leading-[0] left-0 pt-[20px] px-[12px] top-0 w-[171px]">
      <div
        className="flex flex-col justify-center relative shrink-0 text-[#494949] text-[12px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal] font-[Instrument_Sans]">Heart Rate</p>
      </div>
      <Frame16 />
    </div>
  );
}

function HeartRate({ onHeartRateClick }: { onHeartRateClick?: () => void }) {
  return (
    <motion.div
      layoutId="heart-rate-card"
      onClick={onHeartRateClick}
      className="bg-[#f1f6ea] col-1 h-[168px] justify-self-stretch overflow-clip relative row-1 shrink-0 cursor-pointer rounded-[12px]"
      data-name="Heart Rate"
    >
      <div className="absolute h-[63px] left-[17px] top-[82px] w-[131px]">
        <div className="absolute inset-[7.59%_-0.3%_-0.23%_-0.37%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 131.874 58.3635"
          >
            <path
              d={svgPaths.p119cb300}
              id="Vector 127"
              stroke="url(#paint0_linear_1_519)"
              strokeOpacity="0.75"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_1_519"
                x1="67.2947"
                x2="67.295"
                y1="20.0322"
                y2="48.6858"
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
      <Frame34 />
      <div
        className="absolute flex h-[183.378px] items-center justify-center left-[49.55px] top-[-72.12px] w-[182.459px]"
        style={
          {
            "--transform-inner-width": "1185",
            "--transform-inner-height": "21",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-48">
          <div
            className="h-[123.311px] relative w-[135.73px]"
            data-name="image 43"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgImage43}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[12px] items-end relative shrink-0 w-full">
      <div
        className="flex flex-col h-[49px] justify-center relative shrink-0 text-[#494949] text-[40px] w-[56px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">104</p>
      </div>
      <div
        className="flex flex-col h-[28px] justify-center relative shrink-0 text-[10px] text-[rgba(0,0,0,0.5)] w-[40px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">MG/ DL</p>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col font-['Instrument_Sans',sans-serif] font-normal gap-[4px] h-[75px] items-start leading-[0] left-[calc(50%-0.25px)] pt-[20px] px-[12px] top-0 w-[171px]">
      <div
        className="flex flex-col justify-center relative shrink-0 text-[#494949] text-[12px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal] font-[Instrument_Sans]">Glucose</p>
      </div>
      <Frame17 />
    </div>
  );
}

function Hrv({ onGlucoseClick }: { onGlucoseClick?: () => void }) {
  return (
    <motion.div
      layoutId="card-glucose"
      onClick={onGlucoseClick}
      className="bg-[#f1f6ea] col-2 h-[168px] justify-self-stretch overflow-clip relative row-2 shrink-0 cursor-pointer rounded-[12px]"
      data-name="HRV"
    >
      <div
        className="absolute flex h-[173.717px] items-center justify-center left-[56.5px] top-[-68px] w-[170.915px]"
        style={
          {
            "--transform-inner-width": "1185",
            "--transform-inner-height": "21",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-162">
          <div
            className="h-[138.933px] relative w-[134.569px]"
            data-name="image 42"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgImage42}
            />
          </div>
        </div>
      </div>
      <Frame35 />
      <div className="absolute h-[52.5px] left-[20px] top-[94px] w-[130.5px]">
        <div className="absolute inset-[-2.72%_-0.3%_-0.47%_-0.33%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 131.327 54.1747"
          >
            <path
              d={svgPaths.p2307fa00}
              id="Vector 127"
              stroke="url(#paint0_linear_1_515)"
              strokeOpacity="0.75"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_1_515"
                x1="65.7202"
                x2="65.7204"
                y1="22.1051"
                y2="45.983"
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
    </motion.div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[4px] items-end relative shrink-0 w-full">
      <div
        className="flex flex-col justify-center relative shrink-0 text-[#494949] text-[40px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">98.6</p>
      </div>
      <div
        className="flex flex-col h-[38px] justify-center relative shrink-0 text-[10px] text-[rgba(0,0,0,0.5)] w-[22px]"
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

function Frame36() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Instrument_Sans',sans-serif] font-normal gap-[4px] h-[75px] items-start leading-[0] left-[0.5px] pt-[20px] px-[12px] top-0 w-[171px]">
      <div
        className="flex flex-col justify-center relative shrink-0 text-[#494949] text-[12px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal] font-[Instrument_Sans]">Body Temp</p>
      </div>
      <Frame19 />
    </div>
  );
}

function Frame15() {
  return <div className="absolute h-[49px] left-[20px] top-[39px] w-[67px]" />;
}

function Hrv1({ onBodyTempClick }: { onBodyTempClick?: () => void }) {
  return (
    <motion.div
      layoutId="card-body-temp"
      onClick={onBodyTempClick}
      className="bg-[#f1f6ea] col-1 h-[168px] justify-self-stretch overflow-clip relative row-2 shrink-0 cursor-pointer rounded-[12px]"
      data-name="HRV"
    >
      <div
        className="absolute flex h-[169.313px] items-center justify-center left-[59px] top-[-57px] w-[167.251px]"
        style={
          {
            "--transform-inner-width": "1185",
            "--transform-inner-height": "21",
          } as React.CSSProperties
        }
      >
        <div className="-rotate-24 flex-none">
          <div
            className="h-[129.493px] relative w-[125.425px]"
            data-name="image 44"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgImage44}
            />
          </div>
        </div>
      </div>
      <Frame36 />
      <Frame15 />
      <div className="absolute left-[-32.5px] size-[231px] top-[106px]">
        <svg
          className="absolute block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 231 231"
        >
          <circle
            cx="115.5"
            cy="115.5"
            id="Ellipse 124"
            r="113"
            stroke="var(--stroke-0, #CBCBCC)"
            strokeWidth="5"
          />
        </svg>
      </div>
      <div
        className="absolute flex items-center justify-center left-[-45.71px] size-[257.43px] top-[92.78px]"
        style={
          {
            "--transform-inner-width": "1200",
            "--transform-inner-height": "18",
          } as React.CSSProperties
        }
      >
        <div className="-rotate-83 flex-none">
          <div className="relative size-[231px]">
            <div className="absolute bottom-1/2 left-[96.12%] right-0 top-[38.29%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 8.97099 27.0462"
              >
                <g id="Ellipse 126">
                  <mask fill="white" id="path-1-inside-1_1_447">
                    <path d={svgPaths.p308aca80} />
                  </mask>
                  <path
                    d={svgPaths.p308aca80}
                    mask="url(#path-1-inside-1_1_447)"
                    stroke="var(--stroke-0, #467603)"
                    strokeWidth="10"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-normal h-[6px] justify-center leading-[0] left-[calc(50%+19.75px)] text-[#8e8e93] text-[8px] text-right top-[143px] w-[40px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">NORMAL</p>
      </div>
    </motion.div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[4px] items-end relative shrink-0 w-full">
      <div
        className="flex flex-col h-[49px] justify-center relative shrink-0 text-[#494949] text-[40px] w-[45px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">8.1</p>
      </div>
      <div
        className="flex flex-col h-[28px] justify-center relative shrink-0 text-[10px] text-[rgba(0,0,0,0.5)] w-[52px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">HR/ GOOD</p>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Instrument_Sans',sans-serif] font-normal gap-[4px] h-[75px] items-start leading-[0] left-0 pt-[20px] px-[12px] top-0 w-[171px]">
      <div
        className="flex flex-col justify-center relative shrink-0 text-[#494949] text-[12px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal] font-[Instrument_Sans]">Sleep Quality</p>
      </div>
      <Frame20 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-[#9cf7ab] col-1 h-[24px] justify-self-stretch rounded-[3px] row-1 self-start shrink-0" />
  );
}

function Frame23() {
  return (
    <div className="bg-[#68df7b] col-2 h-[24px] rounded-[3px] row-1 shrink-0 w-[37px]" />
  );
}

function Frame24() {
  return (
    <div className="bg-[#0ec92c] col-3 h-[24px] rounded-[3px] row-1 shrink-0 w-[61px]" />
  );
}

function Frame25() {
  return (
    <div className="bg-[#09861d] col-4 h-[24px] rounded-[3px] row-1 shrink-0 w-[25px]" />
  );
}

function Frame21() {
  return (
    <div className="absolute bottom-[20px] gap-x-[3px] gap-y-[10px] grid grid-cols-[____minmax(0,1fr)_fit-content(100%)_fit-content(100%)_fit-content(100%)] grid-rows-[repeat(1,fit-content(100%))] h-[24px] left-[0.5px] overflow-clip pb-[20px] px-[12px] w-[170px]">
      <Frame22 />
      <Frame23 />
      <Frame24 />
      <Frame25 />
    </div>
  );
}

function Hrv2({ onSleepClick }: { onSleepClick?: () => void }) {
  return (
    <motion.div
      layoutId="card-sleep"
      onClick={onSleepClick}
      className="bg-[#f1f6ea] col-2 h-[168px] justify-self-stretch overflow-clip relative row-1 shrink-0 cursor-pointer rounded-[12px]"
      data-name="HRV"
    >
      <div
        className="absolute flex h-[181.559px] items-center justify-center left-[54.5px] top-[-69px] w-[178.206px]"
        style={
          {
            "--transform-inner-width": "1185",
            "--transform-inner-height": "21",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-56">
          <div
            className="h-[123.364px] relative w-[135.789px]"
            data-name="image 41"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgImage41}
            />
          </div>
        </div>
      </div>
      <Frame37 />
      <Frame21 />
    </motion.div>
  );
}

type Frame18Props = {
  onHeartRateClick?: () => void;
  onSleepClick?: () => void;
  onBodyTempClick?: () => void;
  onGlucoseClick?: () => void;
};

function Frame18({
  onHeartRateClick,
  onSleepClick,
  onBodyTempClick,
  onGlucoseClick,
}: Frame18Props) {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] relative shrink-0 w-full">
      <HeartRate onHeartRateClick={onHeartRateClick} />
      <Hrv2 onSleepClick={onSleepClick} />
      <Hrv1 onBodyTempClick={onBodyTempClick} />
      <Hrv onGlucoseClick={onGlucoseClick} />
    </div>
  );
}

type Frame29Props = {
  onHeartRateClick?: () => void;
  onSleepClick?: () => void;
  onBodyTempClick?: () => void;
  onGlucoseClick?: () => void;
};

function Frame29({
  onHeartRateClick,
  onSleepClick,
  onBodyTempClick,
  onGlucoseClick,
}: Frame29Props) {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <div
        className="flex flex-col font-['Instrument_Sans',sans-serif] font-medium h-[28px] justify-center leading-normal relative shrink-0 text-[16px] text-black w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">Overview</p>
      </div>
      <Frame18
        onHeartRateClick={onHeartRateClick}
        onSleepClick={onSleepClick}
        onBodyTempClick={onBodyTempClick}
        onGlucoseClick={onGlucoseClick}
      />
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
        <p className="leading-[normal] font-[Instrument_Sans]">Magnesium</p>
      </div>
      <div
        className="flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center relative shrink-0 text-[10px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal] font-[Instrument_Sans]">500 mcg.</p>
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

/** Animated toggle with rolling knob for Medication Intake */
function AnimatedMedicationToggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0"
      data-name="Toggle small"
    >
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className="relative shrink-0 h-[16px] min-h-[16px] w-[32px] min-w-[32px] rounded-full border-0 cursor-pointer p-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#24A148] focus-visible:ring-offset-1 overflow-hidden inline-flex items-center justify-center"
      >
        <svg
          className="block"
          width={32}
          height={16}
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 16"
        >
          <rect
            fill={checked ? "#24A148" : "#8D8D8D"}
            height="16"
            rx="8"
            width="32"
          />
          <motion.g
            initial={false}
            animate={{
              x: checked ? 14 : 0,
              rotate: checked ? 360 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
            style={{ transformOrigin: "11px 8px" }}
          >
            <path
              d={svgPaths.p373863e0}
              fill="#F6F3F3"
              id="graphic"
            />
          </motion.g>
        </svg>
      </button>
      <div
        className="flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] tracking-[0.16px] w-[22px] min-w-[22px]"
        style={{
          fontVariationSettings: "'wdth' 100",
          color: checked ? "#161616" : "black",
        }}
      >
        <p className="leading-[18px] font-[Instrument_Sans]">
          {checked ? "On" : "Off"}
        </p>
      </div>
    </div>
  );
}

function Frame3({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame2 />
      <AnimatedMedicationToggle checked={checked} onChange={onChange} />
    </div>
  );
}

function Frame4({
  magnesiumChecked,
  onMagnesiumChange,
}: {
  magnesiumChecked: boolean;
  onMagnesiumChange: (v: boolean) => void;
}) {
  return (
    <div className="bg-[#f1f6ea] h-[75px] relative rounded-[12px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[19px] relative size-full">
        <Frame3 checked={magnesiumChecked} onChange={onMagnesiumChange} />
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
        <p className="leading-[normal] font-[Instrument_Sans]">Inositol</p>
      </div>
      <div
        className="flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center relative shrink-0 text-[10px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal] font-[Instrument_Sans]">500 mcg.</p>
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

function Frame6WithToggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame9 />
      <AnimatedMedicationToggle checked={checked} onChange={onChange} />
    </div>
  );
}

function Frame5({
  inositolChecked,
  onInositolChange,
}: {
  inositolChecked: boolean;
  onInositolChange: (v: boolean) => void;
}) {
  return (
    <div className="bg-[#f1f6ea] h-[75px] relative rounded-[12px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[19px] relative size-full">
        <Frame6WithToggle checked={inositolChecked} onChange={onInositolChange} />
      </div>
    </div>
  );
}

function Frame7() {
  const [magnesiumChecked, setMagnesiumChecked] = React.useState(false);
  const [inositolChecked, setInositolChecked] = React.useState(true);
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <Frame4 magnesiumChecked={magnesiumChecked} onMagnesiumChange={setMagnesiumChecked} />
      <Frame5 inositolChecked={inositolChecked} onInositolChange={setInositolChecked} />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <div
        className="flex flex-col font-['Instrument_Sans',sans-serif] font-medium h-[28px] justify-center leading-normal relative shrink-0 text-[16px] text-black w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal] font-[Instrument_Sans]">
          Medication Intake
        </p>
      </div>
      <Frame7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame28 />
    </div>
  );
}

function Frame33() {
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

function Frame27() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <div
        className="flex flex-col font-['Instrument_Sans',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#656565] text-[10px] w-[58px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">Synced with</p>
      </div>
      <Frame33 />
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

function Frame14() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-center justify-between left-0 px-[20px] top-[20px] w-[353px]">
      <Frame27 />
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

function Frame26() {
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

function Frame31() {
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

function Frame32() {
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
      <Frame31 />
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
      <Frame32 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[39px] top-[50px]">
      <Frame26 />
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

function Frame13() {
  return (
    <div className="absolute bg-[#f1f6ea] h-[355px] left-0 top-0 w-[353px] rounded-[12px]">
      <Frame14 />
      <FontistoBloodDrop />
      <Group3 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="h-[355px] relative shrink-0 w-[353px]">
      <Frame13 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <div
        className="flex flex-col font-['Instrument_Sans',sans-serif] font-medium h-[28px] justify-center leading-normal relative shrink-0 text-[16px] text-black w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">Cycle</p>
      </div>
      <Frame12 />
    </div>
  );
}

type Frame30Props = {
  onHeartRateClick?: () => void;
  onSleepClick?: () => void;
  onBodyTempClick?: () => void;
  onGlucoseClick?: () => void;
};

function Frame30({
  onHeartRateClick,
  onSleepClick,
  onBodyTempClick,
  onGlucoseClick,
}: Frame30Props) {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start w-[353px]">
      <Frame29
        onHeartRateClick={onHeartRateClick}
        onSleepClick={onSleepClick}
        onBodyTempClick={onBodyTempClick}
        onGlucoseClick={onGlucoseClick}
      />
      <Frame8 />
      <Frame38 />
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
            fill="var(--fill-0, #4F4F4F)"
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
              stroke="var(--stroke-0, #4F4F4F)"
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
            stroke="var(--stroke-0, #4F4F4F)"
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
            stroke="var(--stroke-0, #4F4F4F)"
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

type IPhoneProps = {
  onHeartRateClick?: () => void;
  onSleepClick?: () => void;
  onBodyTempClick?: () => void;
  onGlucoseClick?: () => void;
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeSlideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const cardStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const cardFade = {
  hidden: { opacity: 0, y: 30, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function IPhone({
  onHeartRateClick,
  onSleepClick,
  onBodyTempClick,
  onGlucoseClick,
}: IPhoneProps) {
  return (
    <div
      className="relative size-full overflow-hidden"
      data-name="iPhone 16 - 52"
    >
      <div className="size-full overflow-y-auto scrollbar-hide relative">
        <motion.div
          className="pt-[75px] px-[20px] pb-[140px]"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeSlideUp}
            className="insight-title flex flex-col justify-center whitespace-nowrap"
          >
            <p className="leading-[normal]">Insight</p>
          </motion.div>
          <div className="mt-[30px]">
            <motion.div
              className="content-stretch flex flex-col gap-[32px] items-start w-[353px]"
              variants={staggerContainer}
            >
              <motion.div variants={fadeSlideUp} className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
                <div
                  className="flex flex-col font-['Instrument_Sans',sans-serif] font-medium h-[28px] justify-center leading-normal relative shrink-0 text-[16px] text-black w-full"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  <p className="leading-[normal]">Overview</p>
                </div>
                <motion.div
                  className="gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] relative shrink-0 w-full"
                  variants={cardStagger}
                >
                  <motion.div variants={cardFade}>
                    <HeartRate onHeartRateClick={onHeartRateClick} />
                  </motion.div>
                  <motion.div variants={cardFade}>
                    <Hrv2 onSleepClick={onSleepClick} />
                  </motion.div>
                  <motion.div variants={cardFade}>
                    <Hrv1 onBodyTempClick={onBodyTempClick} />
                  </motion.div>
                  <motion.div variants={cardFade}>
                    <Hrv onGlucoseClick={onGlucoseClick} />
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.div variants={fadeSlideUp} className="w-full">
                <Frame8 />
              </motion.div>
              <motion.div variants={fadeSlideUp} className="w-full">
                <Frame38 />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
