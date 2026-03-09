import svgPaths from "./svg-kop1pie7zy";

function Frame() {
  return (
    <div className="absolute font-['Instrument_Sans',sans-serif] font-normal h-[49px] leading-[0] left-[15px] top-[39px] w-[73px] whitespace-nowrap">
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-0 text-[#494949] text-[48px] top-[29.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">67</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[59px] text-[#828282] text-[16px] top-[40px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">bpm</p>
      </div>
    </div>
  );
}

export default function HeartRate() {
  return (
    <div className="bg-[#f1f6ea] relative rounded-[12px] size-full" data-name="Heart Rate">
      <Frame />
      <div className="-translate-x-1/2 absolute h-[123.131px] left-[calc(50%+0.5px)] top-[114px] w-[312px]">
        <div className="absolute inset-[5.51%_-0.22%_3.11%_-0.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 313.603 112.517">
            <path d={svgPaths.p3dfd18c0} id="Vector 127" stroke="url(#paint0_linear_1_714)" strokeOpacity="0.75" strokeWidth="2" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_714" x1="160.052" x2="160.052" y1="41.7106" y2="97.7128">
                <stop stopColor="#EE583F" />
                <stop offset="0.047342" stopColor="#494949" />
                <stop offset="0.94438" stopColor="#494949" />
                <stop offset="1" stopColor="#D5D5D5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[0] left-[15px] text-[#494949] text-[12px] top-[30.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Heart Rate</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-159.5px)] text-[14px] text-black top-[306px] w-[315px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Sleeping heart rate was below your norm - a sign of solid recovery and a calm system.</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[0] left-[40px] text-[#494949] text-[16px] top-[129px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">80</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[0] left-[226px] text-[#494949] text-[16px] top-[108px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">90</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[0] left-[129px] text-[#494949] text-[16px] top-[248px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">60</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[0] left-[61px] text-[#828282] text-[8px] top-[132px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">bpm</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[0] left-[247px] text-[#828282] text-[8px] top-[111px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">bpm</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[0] left-[150px] text-[#828282] text-[8px] top-[251px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">bpm</p>
      </div>
    </div>
  );
}