import clsx from "clsx";
import svgPaths from "./svg-k0f7z741c7";
import imgImage40 from "@/assets/4eef2f9b3dca3d6dc207561f3bb50531693179db.png";

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#f1f6ea] h-[75px] relative rounded-[20px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[19px] relative size-full">
        {children}
      </div>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({
  children,
  additionalClassNames = "",
}: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div
      style={{ fontVariationSettings: "'wdth' 100" }}
      className={clsx(
        "flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] tracking-[0.16px]",
        additionalClassNames,
      )}
    >
      <p className="leading-[18px]">{children}</p>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <svg
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 60 60"
      className="absolute block size-full"
    >
      <g id="Group 25">{children}</g>
    </svg>
  );
}
type NavIconProps = {
  additionalClassNames?: string;
};

function NavIcon({
  children,
  additionalClassNames = "",
}: React.PropsWithChildren<NavIconProps>) {
  return (
    <div
      className={clsx(
        "-translate-x-1/2 -translate-y-1/2 absolute h-[39px] top-1/2 w-[48.941px]",
        additionalClassNames,
      )}
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 48.9412 39"
      >
        <g id="nav icon">{children}</g>
      </svg>
    </div>
  );
}

function Hrv({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#f1f6ea] flex-[1_0_0] h-[110px] min-h-px min-w-px relative rounded-[20px]">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-between p-[16px] relative size-full">
          {children}
        </div>
      </div>
    </div>
  );
}

function Toggle({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[16px] relative shrink-0 w-[32px]">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 16"
      >
        <g id="Toggle">{children}</g>
      </svg>
    </div>
  );
}

function Helper2() {
  return (
    <Wrapper>
      <circle
        cx="30"
        cy="30"
        id="Ellipse 45"
        r="29.5"
        stroke="var(--stroke-0, #F3E7D7)"
      />
    </Wrapper>
  );
}
type Helper1Props = {
  text: string;
  text1: string;
};

function Helper1({ text, text1 }: Helper1Props) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 text-black w-[77px]">
      <div
        className="flex flex-col font-['Instrument_Sans',sans-serif] font-medium justify-center relative shrink-0 text-[14px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">{text}</p>
      </div>
      <div
        className="flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center relative shrink-0 text-[10px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">{text1}</p>
      </div>
    </div>
  );
}
type HelperProps = {
  additionalClassNames?: string;
};

function Helper({ additionalClassNames = "" }: HelperProps) {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative rounded-[12px] shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#848484] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
      <Text
        text="x 2"
        additionalClassNames="font-['Instrument_Sans',sans-serif] font-normal text-black"
      />
    </div>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <div className="h-[12px] relative shrink-0 w-full">
      <div
        className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[0] left-0 text-[#494949] text-[12px] top-[6.5px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return (
    <div
      className={clsx("absolute h-[15px] top-[215px]", additionalClassNames)}
    >
      <div
        className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-medium justify-center leading-[0] left-0 text-[#151515] text-[12px] top-[7.5px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div
      style={{ fontVariationSettings: "'wdth' 100" }}
      className={clsx(
        "flex flex-col justify-center leading-[0] relative shrink-0 text-[12px] whitespace-nowrap",
        additionalClassNames,
      )}
    >
      <p className="leading-[normal]">{text}</p>
    </div>
  );
}

export default function IPhone16Sleep() {
  return (
    <div
      className="app-bg relative size-full"
      data-name="iPhone 16 - sleep"
    >
      <div className="absolute h-[1647px] left-[-426px] top-[-189px] w-[1197px]">
        <div className="absolute inset-[-6.33%_-8.71%_-7.86%_-14.49%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1474.8 1880.8"
          >
            <g id="Group 32">
              <g filter="url(#filter0_f_17_369)" id="Ellipse 133">
                <ellipse
                  cx="1050"
                  cy="1517.3"
                  fill="var(--fill-0, #96BF5E)"
                  rx="223.5"
                  ry="234"
                />
              </g>
              <g filter="url(#filter1_f_17_369)" id="Ellipse 128">
                <ellipse
                  cx="481"
                  cy="666.8"
                  fill="var(--fill-0, #9CBD7B)"
                  rx="263.5"
                  ry="373.5"
                />
              </g>
              <g filter="url(#filter2_f_17_369)" id="Ellipse 130">
                <circle
                  cx="1107"
                  cy="367.8"
                  fill="var(--fill-0, #CADBB8)"
                  r="263.5"
                />
              </g>
              <g filter="url(#filter3_f_17_369)" id="Ellipse 123">
                <circle
                  cx="497.5"
                  cy="1188.3"
                  fill="var(--fill-0, #345900)"
                  r="324"
                />
              </g>
              <g filter="url(#filter4_f_17_369)" id="Ellipse 129">
                <ellipse
                  cx="1028"
                  cy="750.3"
                  fill="var(--fill-0, #96BF5E)"
                  rx="223.5"
                  ry="234"
                />
              </g>
              <g filter="url(#filter5_f_17_369)" id="Ellipse 131">
                <ellipse
                  cx="690.5"
                  cy="436.8"
                  fill="var(--fill-0, #93B65A)"
                  rx="177"
                  ry="174.5"
                />
              </g>
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="727"
                id="filter0_f_17_369"
                width="706"
                x="697"
                y="1153.8"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="shape"
                />
                <feGaussianBlur
                  result="effect1_foregroundBlur_17_369"
                  stdDeviation="64.75"
                />
              </filter>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="955.6"
                id="filter1_f_17_369"
                width="735.6"
                x="113.2"
                y="189"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="shape"
                />
                <feGaussianBlur
                  result="effect1_foregroundBlur_17_369"
                  stdDeviation="52.15"
                />
              </filter>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="735.6"
                id="filter2_f_17_369"
                width="735.6"
                x="739.2"
                y="0"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="shape"
                />
                <feGaussianBlur
                  result="effect1_foregroundBlur_17_369"
                  stdDeviation="52.15"
                />
              </filter>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="995"
                id="filter3_f_17_369"
                width="995"
                x="0"
                y="690.8"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="shape"
                />
                <feGaussianBlur
                  result="effect1_foregroundBlur_17_369"
                  stdDeviation="86.75"
                />
              </filter>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="727"
                id="filter4_f_17_369"
                width="706"
                x="675"
                y="386.8"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="shape"
                />
                <feGaussianBlur
                  result="effect1_foregroundBlur_17_369"
                  stdDeviation="64.75"
                />
              </filter>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="727.2"
                id="filter5_f_17_369"
                width="732.2"
                x="324.4"
                y="73.2"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="shape"
                />
                <feGaussianBlur
                  result="effect1_foregroundBlur_17_369"
                  stdDeviation="94.55"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] justify-center leading-[0] left-[20px] not-italic text-[#f5f5f5] text-[24px] top-[75px] whitespace-nowrap">
        <p className="leading-[normal]">Insight</p>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[32px] items-start left-1/2 top-[123px] w-[353px]">
        <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
          <div
            className="flex flex-col font-['Instrument_Sans',sans-serif] font-normal h-[28px] justify-center leading-[0] relative shrink-0 text-[#f5f5f5] text-[16px] w-[353px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="leading-[normal]">Overview</p>
          </div>
          <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-full">
            <div
              className="bg-[#f1f6ea] h-[353px] relative rounded-[20px] shrink-0 w-full"
              data-name="Heart Rate"
            >
              <div className="absolute font-['Instrument_Sans',sans-serif] font-normal h-[49px] leading-[0] left-[15px] top-[39px] w-[73px] whitespace-nowrap">
                <div
                  className="-translate-y-1/2 absolute flex flex-col justify-center left-0 text-[#494949] text-[48px] top-[29.5px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  <p className="leading-[normal]">8.1</p>
                </div>
                <div
                  className="-translate-y-1/2 absolute flex flex-col justify-center left-[57px] text-[#828282] text-[16px] top-[40px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  <p className="leading-[normal]">HR/ GOOD</p>
                </div>
              </div>
              <div
                className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[0] left-[15px] text-[#494949] text-[12px] top-[30.5px] whitespace-nowrap"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                <p className="leading-[normal]">Sleep Quality</p>
              </div>
              <div
                className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-159.5px)] text-[14px] text-black top-[306.5px] w-[315px]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                <p className="leading-[normal]">
                  You hit all four sleep stages well — deep sleep was especially
                  strong, giving your body the repair time it needs.
                </p>
              </div>
              <div
                className="-translate-x-1/2 -translate-y-1/2 absolute h-[35px] left-1/2 overflow-clip top-1/2 w-[317px]"
                data-name="Sleep Bar"
              >
                <div className="absolute bg-[#9cf7ab] h-[35px] left-0 rounded-[3px] top-0 w-[65px]" />
                <div className="absolute bg-[#74e886] h-[35px] left-[76px] rounded-[3px] top-0 w-[67px]" />
                <div className="absolute bg-[#0ec92c] h-[35px] left-[154px] rounded-[3px] top-0 w-[90px]" />
                <div className="absolute bg-[#09861d] h-[35px] left-[255px] rounded-[3px] top-0 w-[62px]" />
              </div>
              <div className="absolute h-[17px] left-[35px] top-[198px] w-[48px]">
                <div className="absolute h-[17px] left-0 top-0 w-[37px]">
                  <div
                    className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-medium justify-center leading-[0] left-0 text-[#5e5e5e] text-[12px] top-[8.5px] whitespace-nowrap"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    <p className="leading-[normal]">Awake</p>
                  </div>
                </div>
                <div className="absolute bg-[#9cf7ab] left-[42px] rounded-[77px] size-[6px] top-[6px]" />
              </div>
              <Text1 text="39m" additionalClassNames="left-[57px] w-[26px]" />
              <Text1 text="1h" additionalClassNames="left-[149px] w-[12px]" />
              <Text1
                text="1h 20m"
                additionalClassNames="left-[221px] w-[41px]"
              />
              <Text1 text="32m" additionalClassNames="left-[310px] w-[25px]" />
              <div className="absolute h-[15px] left-[121px] top-[199px] w-[38px]">
                <div className="absolute content-stretch flex items-center justify-center left-0 top-0">
                  <Text
                    text="REM"
                    additionalClassNames="font-['Instrument_Sans',sans-serif] font-medium text-[#5e5e5e]"
                  />
                </div>
                <div className="absolute bg-[#74e886] left-[32px] rounded-[77px] size-[6px] top-[5px]" />
              </div>
              <div className="absolute h-[15px] left-[224px] top-[199px] w-[38px]">
                <div className="absolute content-stretch flex items-center justify-center left-0 top-0">
                  <Text
                    text="Core"
                    additionalClassNames="font-['Instrument_Sans',sans-serif] font-medium text-[#5e5e5e]"
                  />
                </div>
                <div className="absolute bg-[#0ec92c] left-[33px] rounded-[77px] size-[6px] top-[5px]" />
              </div>
              <div className="absolute h-[15px] left-[296px] top-[199px] w-[39px]">
                <div className="absolute content-stretch flex items-center justify-center left-0 top-0">
                  <Text
                    text="Deep"
                    additionalClassNames="font-['Instrument_Sans',sans-serif] font-medium text-[#5e5e5e]"
                  />
                </div>
                <div className="absolute bg-[#09861d] left-[33px] rounded-[77px] size-[6px] top-[5px]" />
              </div>
            </div>
            <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-[353px]">
              <Hrv>
                <Text2 text="Heart Rate" />
                <div className="content-stretch flex font-['Instrument_Sans',sans-serif] font-normal gap-[2px] items-end leading-[0] relative shrink-0 w-full">
                  <div
                    className="flex flex-col h-[27px] justify-center relative shrink-0 text-[#494949] text-[30px] w-[35px]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    <p className="leading-[normal]">67</p>
                  </div>
                  <div
                    className="flex flex-col justify-center relative shrink-0 text-[10px] text-[rgba(73,73,73,0.65)] whitespace-nowrap"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    <p className="leading-[normal]">BPM</p>
                  </div>
                </div>
              </Hrv>
              <Hrv>
                <Text2 text="Body Temp" />
                <div className="font-['Instrument_Sans',sans-serif] font-normal h-[27px] leading-[0] relative shrink-0 w-full">
                  <div
                    className="-translate-y-1/2 absolute flex flex-col h-[27px] justify-center left-[0.33px] text-[#494949] text-[30px] top-[13.5px] w-[59px]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    <p className="leading-[normal]">98.6</p>
                  </div>
                  <div
                    className="-translate-y-1/2 absolute flex flex-col justify-center left-[61.33px] text-[10px] text-[rgba(73,73,73,0.65)] top-[15px] whitespace-nowrap"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    <p className="leading-[normal]">
                      <br aria-hidden="true" />
                      °F
                    </p>
                  </div>
                </div>
              </Hrv>
              <Hrv>
                <Text2 text="Glucose" />
                <div className="content-stretch flex font-['Instrument_Sans',sans-serif] font-normal gap-[2px] items-end leading-[0] relative shrink-0 w-full">
                  <div
                    className="flex flex-col h-[27px] justify-center relative shrink-0 text-[#494949] text-[30px] w-[50px]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    <p className="leading-[normal]">104</p>
                  </div>
                  <div
                    className="flex flex-col justify-center relative shrink-0 text-[8px] text-[rgba(73,73,73,0.65)] whitespace-nowrap"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    <p className="leading-[normal]">MG/ DL</p>
                  </div>
                </div>
              </Hrv>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
            <div
              className="flex flex-col font-['Instrument_Sans',sans-serif] font-normal h-[28px] justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              <p className="leading-[normal]">Medication Intake</p>
            </div>
            <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
              <Wrapper2>
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                    <Helper />
                    <Helper1 text="Magnesium" text1="500 mcg." />
                  </div>
                  <div
                    className="content-stretch flex gap-[8px] items-center relative shrink-0"
                    data-name="Toggle small"
                  >
                    <Toggle>
                      <rect
                        fill="var(--fill-0, #8D8D8D)"
                        height="16"
                        rx="8"
                        width="32"
                      />
                      <path
                        d={svgPaths.p363f2a00}
                        fill="var(--fill-0, #F6F3F3)"
                        id="graphic"
                      />
                    </Toggle>
                    <Wrapper1 additionalClassNames="text-black whitespace-nowrap">
                      Off
                    </Wrapper1>
                  </div>
                </div>
              </Wrapper2>
              <Wrapper2>
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                    <Helper />
                    <Helper1 text="Inositol" text1="500 mcg." />
                  </div>
                  <div
                    className="relative shrink-0"
                    data-name="Toggle small/True/Default"
                  >
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[8px] items-center relative">
                        <Toggle>
                          <rect
                            fill="var(--fill-0, #24A148)"
                            height="16"
                            rx="8"
                            width="32"
                          />
                          <path
                            d={svgPaths.pa212880}
                            fill="var(--fill-0, #F6F3F3)"
                            id="graphic"
                          />
                        </Toggle>
                        {true && (
                          <Wrapper1 additionalClassNames="text-[#161616] w-[22px]">
                            {"On"}
                          </Wrapper1>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Wrapper2>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
          <div
            className="flex flex-col font-['Instrument_Sans',sans-serif] font-normal h-[28px] justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="leading-[normal]">Cycle</p>
          </div>
          <div className="h-[355px] relative shrink-0 w-[353px]">
            <div className="absolute bg-[#f1f6ea] h-[355px] left-0 rounded-[20px] top-0 w-[353px]">
              <div className="absolute content-stretch flex h-[20px] items-center justify-between left-0 px-[20px] top-[20px] w-[353px]">
                <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                  <div
                    className="flex flex-col font-['Instrument_Sans',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#656565] text-[10px] w-[58px]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    <p className="leading-[normal]">Synced with</p>
                  </div>
                  <div className="content-stretch flex flex-col items-center relative shrink-0">
                    <div
                      className="h-[19px] relative shrink-0 w-[31px]"
                      data-name="image 40"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          alt=""
                          className="absolute h-[102.1%] left-[-6.45%] max-w-none top-[1.58%] w-[112.9%]"
                          src={imgImage40}
                        />
                      </div>
                    </div>
                  </div>
                </div>
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
              </div>
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
                  <g clipPath="url(#clip0_10_583)" id="fontisto:blood-drop">
                    <path
                      d={svgPaths.p3090a500}
                      fill="var(--fill-0, #D57B7B)"
                      id="Vector"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_10_583">
                      <rect fill="white" height="22" width="14" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%-0.4px)] top-[calc(50%+15.02px)]">
                <div className="absolute contents left-[39px] top-[50px]">
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
                  <div className="absolute contents left-[39px] top-[50px]">
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
                    <div
                      className="absolute flex h-[8px] items-center justify-center left-[99px] top-[85px] w-[12px]"
                      style={
                        {
                          "--transform-inner-width": "1185",
                          "--transform-inner-height": "21",
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
                    </div>
                  </div>
                </div>
                <div
                  className="absolute flex items-center justify-center left-[34px] size-[284.04px] top-[51px]"
                  style={
                    {
                      "--transform-inner-width": "1185",
                      "--transform-inner-height": "21",
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
                            <mask fill="white" id="path-1-inside-1_10_476">
                              <path d={svgPaths.p36e82e00} />
                            </mask>
                            <path
                              d={svgPaths.p36e82e00}
                              mask="url(#path-1-inside-1_10_476)"
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
            </div>
          </div>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute backdrop-blur-[47.85px] bg-[#f7b3cc] bottom-[40px] h-[77px] left-1/2 rounded-[111px] w-[353px]"
        data-name="New Nav Bar"
      >
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
            <div
              className="relative shrink-0 size-[60px]"
              data-name="nav button"
            >
              <Wrapper>
                <circle
                  cx="30"
                  cy="30"
                  id="Ellipse 41"
                  r="29.3725"
                  stroke="var(--stroke-0, #F3E7D7)"
                  strokeWidth="1.2549"
                />
              </Wrapper>
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
            </div>
            <div
              className="relative shrink-0 size-[60px]"
              data-name="Component 4"
            >
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
              <div
                className="absolute aspect-[29/29] content-stretch flex items-center justify-center left-[11.76%] overflow-clip p-[4px] right-[11.76%] top-[6px]"
                data-name="nav icon"
              >
                <div
                  className="relative shrink-0 size-[21px]"
                  data-name="Vector"
                >
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
            </div>
            <div
              className="relative shrink-0 size-[60px]"
              data-name="Component 5"
            >
              <Helper2 />
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
            </div>
            <div
              className="relative shrink-0 size-[60px]"
              data-name="Component 3"
            >
              <Helper2 />
              <NavIcon additionalClassNames="left-[calc(50%-0.28px)]">
                <path
                  d={svgPaths.pd9a6880}
                  id="Vector"
                  stroke="var(--stroke-0, #4F4F4F)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                />
              </NavIcon>
            </div>
            <div
              className="relative shrink-0 size-[60px]"
              data-name="Component 6"
            >
              <Helper2 />
              <NavIcon additionalClassNames="left-[calc(50%+0.47px)]">
                <path
                  d={svgPaths.p8143380}
                  id="Vector"
                  stroke="var(--stroke-0, #4F4F4F)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                />
              </NavIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
