import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { CSSProperties } from "react";

function ReviewedBadge() {
  return (
    <div
      style={
        {
          display: "flex",
          alignItems: "center",
          gap: 4,
          background: "rgba(70,118,3,0.1)",
          borderRadius: 999,
          padding: "2px 8px 2px 6px",
        } as CSSProperties
      }
    >
      <img src="/c-reviewed.svg" alt="" width={10} height={10} />
      <span
        style={
          {
            fontFamily: "'Instrument Sans',sans-serif",
            fontWeight: 600,
            fontSize: 10,
            color: "#345900",
          } as CSSProperties
        }
      >
        Reviewed
      </span>
    </div>
  );
}

function ExpertBadge() {
  return (
    <div
      style={
        {
          background: "rgba(91,141,239,0.09)",
          borderRadius: 999,
          padding: "2px 6px",
        } as CSSProperties
      }
    >
      <span
        style={
          {
            fontFamily: "Nunito,sans-serif",
            fontWeight: 600,
            fontSize: 9,
            color: "#5b8def",
          } as CSSProperties
        }
      >
        Expert
      </span>
    </div>
  );
}

interface TagBadgeProps {
  label: string;
  color: string;
  bg: string;
}

function TagBadge({ label, color, bg }: TagBadgeProps) {
  return (
    <div
      style={
        {
          background: bg,
          borderRadius: 999,
          padding: "2px 8px",
        } as CSSProperties
      }
    >
      <span
        style={
          {
            fontFamily: "'Instrument Sans',sans-serif",
            fontWeight: 600,
            fontSize: 10,
            color,
          } as CSSProperties
        }
      >
        {label}
      </span>
    </div>
  );
}

interface HeartIconProps {
  size?: number;
  color?: string;
}

function HeartIcon({ size = 16, color = "#1e1e1e" }: HeartIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path
        d="M8 13.5S3 9.2 3 6.3C3 4.3 4.8 2.8 7 3.1c.5.1 1 .3 1 .3s.5-.2 1-.3c2.2-.3 4 1.2 4 3.2 0 2.9-5 7.2-5 7.2z"
        fill={color}
      />
    </svg>
  );
}

interface AvatarProps {
  frame: string;
  photo: string;
  size?: number;
}

function Avatar({ frame, photo, size = 44 }: AvatarProps) {
  return (
    <div
      style={
        {
          position: "relative",
          width: size,
          height: size,
          flexShrink: 0,
        } as CSSProperties
      }
    >
      <img
        src={frame}
        alt=""
        style={
          {
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          } as CSSProperties
        }
      />
      <img
        src={photo}
        alt=""
        style={
          {
            position: "absolute",
            inset: "14%",
            borderRadius: 999,
            width: "72%",
            height: "72%",
            objectFit: "cover",
          } as CSSProperties
        }
      />
    </div>
  );
}

interface Reply {
  id: number;
  name: string;
  isExpert: boolean;
  isReviewed: boolean;
  body: string;
  time: string;
  likes: number;
}

const REPLIES: Reply[] = [
  {
    id: 1,
    name: "Maya Chen",
    isExpert: true,
    isReviewed: true,
    body:
      'Very common! Try eating your protein first, then veggies, and carbs last. This "food sequencing" trick can flatten your glucose curve by up to 40%. Your garden will thank you 🌱',
    time: "1h ago",
    likes: 22,
  },
  {
    id: 2,
    name: "Darius Okonkwo",
    isExpert: false,
    isReviewed: true,
    body:
      "I do a 10-min walk right after lunch — game changer for glucose. Your muscles act like a sponge for blood sugar. Seriously, just walking to get coffee counts.",
    time: "45m ago",
    likes: 22,
  },
  {
    id: 3,
    name: "Dr. Abe Tanaka",
    isExpert: true,
    isReviewed: true,
    body:
      "Post-prandial glucose dips are physiological and usually not concerning. If you're seeing dips below 70mg/dL with symptoms (shaking, sweating), that's worth discussing with your doctor. Otherwise, the tips above are evidence-based.",
    time: "35m ago",
    likes: 22,
  },
];

interface ReplyEntryProps {
  reply: Reply;
}

function ReplyEntry({ reply }: ReplyEntryProps) {
  return (
    <div
      style={
        {
          display: "flex",
          gap: 10,
          alignItems: "flex-start",
          paddingTop: 12,
          borderTop: "1px solid rgba(212,223,199,0.4)",
        } as CSSProperties
      }
    >
      <Avatar frame="/c-avrf.svg" photo="/c-av1.png" size={28} />
      <div
        style={
          {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          } as CSSProperties
        }
      >
        <div
          style={
            {
              display: "flex",
              gap: 5,
              alignItems: "center",
              flexWrap: "wrap",
            } as CSSProperties
          }
        >
          <span
            style={
              {
                fontFamily: "Nunito,sans-serif",
                fontWeight: 700,
                fontSize: 12,
              } as CSSProperties
            }
          >
            {reply.name}
          </span>
          {reply.isExpert && <ExpertBadge />}
          {reply.isReviewed && (
            <div
              style={
                {
                  display: "flex",
                  alignItems: "center",
                  gap: 3,
                  background: "rgba(70,118,3,0.1)",
                  borderRadius: 999,
                  padding: "1px 7px 1px 5px",
                } as CSSProperties
              }
            >
              <img src="/c-reviewed-sm.svg" alt="" width={10} height={10} />
              <span
                style={
                  {
                    fontFamily: "Nunito,sans-serif",
                    fontWeight: 600,
                    fontSize: 10,
                    color: "#345900",
                  } as CSSProperties
                }
              >
                Reviewed
              </span>
            </div>
          )}
        </div>
        <p
          style={
            {
              fontFamily: "Nunito,sans-serif",
              fontSize: 13,
              lineHeight: 1.45,
              margin: 0,
            } as CSSProperties
          }
        >
          {reply.body}
        </p>
        <div
          style={
            {
              display: "flex",
              gap: 12,
              alignItems: "center",
            } as CSSProperties
          }
        >
          <span
            style={
              {
                fontFamily: "Nunito,sans-serif",
                fontSize: 11,
                color: "#345900",
              } as CSSProperties
            }
          >
            {reply.time}
          </span>
          <div
            style={
              {
                display: "flex",
                gap: 3,
                alignItems: "center",
              } as CSSProperties
            }
          >
            <HeartIcon size={12} color="#345900" />
            <span
              style={
                {
                  fontFamily: "Nunito,sans-serif",
                  fontWeight: 500,
                  fontSize: 11,
                  color: "#345900",
                } as CSSProperties
              }
            >
              {reply.likes}
            </span>
          </div>
          <div
            style={
              {
                display: "flex",
                gap: 3,
                alignItems: "center",
              } as CSSProperties
            }
          >
            <img src="/c-flag.svg" alt="" width={12} height={12} />
            <span
              style={
                {
                  fontFamily: "Nunito,sans-serif",
                  fontWeight: 500,
                  fontSize: 11,
                  color: "#345900",
                } as CSSProperties
              }
            >
              Flag
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

interface Post {
  id: number;
  name: string;
  avFrame: string;
  av: string;
  tag: string;
  tagColor: string;
  tagBg: string;
  title: string;
  body: string;
  likes: number;
  replyCount: number;
  hasReplies: boolean;
}

const POSTS: Post[] = [
  {
    id: 1,
    name: "Darius O.",
    avFrame: "/c-av1f.svg",
    av: "/c-av1.png",
    tag: "Glucose",
    tagColor: "#d4890a",
    tagBg: "rgba(243,166,50,0.12)",
    title: "Stress flower keeps wilting — breathing exercises help?",
    body:
      "My stress & energy flower has been struggling all week. I tried box breathing (4-4-4-4) before meetings and it seemed to bounce back. Anyone have other techniques?",
    likes: 9,
    replyCount: 3,
    hasReplies: true,
  },
  {
    id: 2,
    name: "Suki A.",
    avFrame: "/c-av2f.svg",
    av: "/c-av2.png",
    tag: "Stress",
    tagColor: "#ee583f",
    tagBg: "rgba(238,88,63,0.12)",
    title: "Post-lunch glucose crashes – anyone else?",
    body:
      "I keep seeing my glucose flower droop after lunch. I eat a normal sandwich + chips. Is this a common thing or should I be worried?",
    likes: 14,
    replyCount: 3,
    hasReplies: false,
  },
  {
    id: 3,
    name: "Jackie N.",
    avFrame: "/c-av3f.svg",
    av: "/c-av3.png",
    tag: "Stress",
    tagColor: "#ee583f",
    tagBg: "rgba(238,88,63,0.12)",
    title: "Sleep flower thriving — here's my exact routine",
    body:
      "After 3 months of tweaking, my sleep & recovery flower has been thriving consistently. No screens after 9pm, magnesium glycinate at 9:30, room at 65°F, and a 10-min body scan meditation.",
    likes: 12,
    replyCount: 1,
    hasReplies: false,
  },
];

const FILTERS = ["All", "Glucose", "Stress", "Sleep"];

interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={
        {
          background: "#f1f6ea",
          borderRadius: 12,
          padding: 16,
          display: "flex",
          flexDirection: "column",
          gap: 10,
        } as CSSProperties
      }
    >
      <div
        style={
          {
            display: "flex",
            gap: 10,
            alignItems: "center",
          } as CSSProperties
        }
      >
        <Avatar frame={post.avFrame} photo={post.av} size={44} />
        <div
          style={
            {
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 4,
            } as CSSProperties
          }
        >
          <span
            style={
              {
                fontFamily: "'Donegal One',serif",
                fontSize: 14,
                color: "#345900",
              } as CSSProperties
            }
          >
            {post.name}
          </span>
          <div
            style={
              {
                display: "flex",
                gap: 4,
                alignItems: "center",
                flexWrap: "wrap",
              } as CSSProperties
            }
          >
            <ReviewedBadge />
            <TagBadge label={post.tag} color={post.tagColor} bg={post.tagBg} />
          </div>
        </div>
      </div>
      <p
        style={
          {
            fontFamily: "'Instrument Sans',sans-serif",
            fontWeight: 500,
            fontSize: 16,
            lineHeight: 1.38,
            margin: 0,
          } as CSSProperties
        }
      >
        {post.title}
      </p>
      <p
        style={
          {
            fontFamily: "'Instrument Sans',sans-serif",
            fontSize: 14,
            lineHeight: 1.5,
            margin: 0,
          } as CSSProperties
        }
      >
        {post.body}
      </p>
      <div
        style={
          {
            display: "flex",
            gap: 16,
            alignItems: "center",
          } as CSSProperties
        }
      >
        <div
          style={
            {
              display: "flex",
              gap: 4,
              alignItems: "center",
            } as CSSProperties
          }
        >
          <HeartIcon size={16} color={open ? "#345900" : "#1e1e1e"} />
          <span
            style={
              {
                fontFamily: "'Instrument Sans',sans-serif",
                fontWeight: 600,
                fontSize: 12,
                color: open ? "#345900" : "#1e1e1e",
              } as CSSProperties
            }
          >
            {post.likes}
          </span>
        </div>
        <button
          onClick={() => post.hasReplies && setOpen((o) => !o)}
          style={
            {
              display: "flex",
              alignItems: "center",
              gap: 4,
              background: "none",
              border: "none",
              padding: 0,
              cursor: post.hasReplies ? "pointer" : "default",
            } as CSSProperties
          }
        >
          <img
            src={open ? "/c-reply2.svg" : "/c-reply.svg"}
            alt=""
            width={14}
            height={14}
          />
          <span
            style={
              {
                fontFamily: "'Instrument Sans',sans-serif",
                fontWeight: 600,
                fontSize: 12,
                color: open ? "#345900" : "#1e1e1e",
              } as CSSProperties
            }
          >
            {post.replyCount} {post.replyCount === 1 ? "reply" : "replies"}
          </span>
        </button>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="replies"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div
              style={
                {
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  paddingTop: 4,
                } as CSSProperties
              }
            >
              {REPLIES.map((r) => (
                <ReplyEntry key={r.id} reply={r} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const W = 172,
  H = 211;

interface CardBaseProps {
  bg: string;
  children: React.ReactNode;
  label: string;
  gradFrom?: string;
  gradTo: string;
  gradTop?: number;
}

function CardBase({
  bg,
  children,
  label,
  gradFrom = "transparent",
  gradTo,
  gradTop = 123,
}: CardBaseProps) {
  return (
    <div
      style={
        {
          position: "relative",
          width: W,
          height: H,
          borderRadius: 12,
          overflow: "hidden",
          background: bg,
          flexShrink: 0,
        } as CSSProperties
      }
    >
      {children}
      <div
        style={
          {
            position: "absolute",
            left: 0,
            top: gradTop,
            right: 0,
            height: 88,
            zIndex: 2,
            background: `linear-gradient(to bottom, ${gradFrom}, ${gradTo})`,
          } as CSSProperties
        }
      />
      <div
        style={
          {
            position: "absolute",
            left: 12,
            bottom: 7,
            right: 12,
            zIndex: 3,
            fontFamily: "'Donegal One',serif",
            fontSize: 14,
            color: "#000",
            lineHeight: 1.35,
            whiteSpace: "pre-wrap",
          } as CSSProperties
        }
      >
        {label}
      </div>
    </div>
  );
}

interface ImgProps {
  src: string;
  left: number;
  top: number;
  w: number;
  h: number;
  rotate?: number;
  scaleY?: number;
  style?: CSSProperties;
}

function Img({
  src,
  left,
  top,
  w,
  h,
  rotate,
  scaleY,
  style = {},
}: ImgProps) {
  const transform = [rotate && `rotate(${rotate}deg)`, scaleY && `scaleY(${scaleY})`]
    .filter(Boolean)
    .join(" ");
  return (
    <div
      style={
        {
          position: "absolute",
          left,
          top,
          width: w,
          height: h,
          zIndex: 1,
          transform: transform || undefined,
          ...style,
        } as CSSProperties
      }
    >
      <img src={src} alt="" style={{ width: "100%", height: "100%" }} />
    </div>
  );
}

interface ImgRotatedProps {
  src: string;
  boxLeft: number;
  boxTop: number;
  boxW: number;
  boxH: number;
  innerW: number;
  innerH: number;
  rotate?: number;
  scaleY?: number;
}

function ImgRotated({
  src,
  boxLeft,
  boxTop,
  boxW,
  boxH,
  innerW,
  innerH,
  rotate,
  scaleY,
}: ImgRotatedProps) {
  const transform = [rotate && `rotate(${rotate}deg)`, scaleY && `scaleY(${scaleY})`]
    .filter(Boolean)
    .join(" ");
  return (
    <div
      style={
        {
          position: "absolute",
          left: boxLeft,
          top: boxTop,
          width: boxW,
          height: boxH,
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        } as CSSProperties
      }
    >
      <div
        style={
          {
            width: innerW,
            height: innerH,
            transform: transform || undefined,
          } as CSSProperties
        }
      >
        <img src={src} alt="" style={{ width: "100%", height: "100%" }} />
      </div>
    </div>
  );
}

function Card_2476() {
  return (
    <CardBase
      bg="#f7b3cc"
      label="Insulin Resistance Isn't Your Fault"
      gradFrom="rgba(247,179,204,0)"
      gradTo="#8892b0"
    >
      <Img src="/av26.svg" left={111} top={122} w={61} h={198} />
      <ImgRotated
        src="/av130.svg"
        boxLeft={54}
        boxTop={39}
        boxW={135}
        boxH={206}
        innerW={61}
        innerH={198}
        rotate={23.53}
      />
      <Img src="/av129.svg" left={56} top={48} w={101} h={89} />
      <ImgRotated
        src="/av131.svg"
        boxLeft={76}
        boxTop={-51}
        boxW={128}
        boxH={122}
        innerW={101}
        innerH={89}
        rotate={23.53}
      />
    </CardBase>
  );
}

function Card_2483() {
  return (
    <CardBase
      bg="#f3e7d7"
      label={'You\'re Not\n"Just Stressed"'}
      gradFrom="rgba(243,231,215,0)"
      gradTo="rgba(119,173,160,0.3)"
    >
      <Img src="/av132.svg" left={31} top={-20} w={151} h={121} />
    </CardBase>
  );
}

function Card_2487() {
  return (
    <CardBase
      bg="#f3a632"
      label={"Your Flares\nAren't Random"}
      gradFrom="rgba(243,166,50,0)"
      gradTo="#fb7185"
    >
      <Img src="/ag27.svg" left={21.5} top={0.86} w={118} h={137} />
      <Img src="/ag28.svg" left={-12} top={-27} w={202} h={169} />
    </CardBase>
  );
}

function Card_2509() {
  return (
    <CardBase
      bg="#f3a632"
      label={"Your Flares\nAren't Random"}
      gradFrom="rgba(243,166,50,0)"
      gradTo="#fb7185"
    >
      <Img src="/ag27.svg" left={21.5} top={0.86} w={118} h={137} />
      <Img src="/ag28.svg" left={-12} top={-27} w={202} h={169} />
    </CardBase>
  );
}

function Card_2528() {
  return (
    <CardBase
      bg="#c5b661"
      label="Building A Personal Trigger Map"
      gradFrom="rgba(197,182,97,0)"
      gradTo="#aec75e"
    >
      <Img src="/av181.svg" left={45} top={127} w={133} h={80} />
      <Img src="/av182.svg" left={124} top={57} w={1} h={0} />
      <Img src="/av183.svg" left={16} top={19} w={115} h={111} />
    </CardBase>
  );
}

function Card_2534() {
  return (
    <CardBase
      bg="#f7b3cc"
      label="NAC Timing: Morning vs. Evening"
      gradFrom="rgba(243,166,50,0)"
      gradTo="#f3a632"
      gradTop={92}
    >
      <Img src="/ag29.svg" left={27} top={-12} w={121} h={147} />
    </CardBase>
  );
}

function Card_2549() {
  return (
    <CardBase
      bg="#dee5ff"
      label="Supplement Shelf — What's Worth It?"
      gradFrom="rgba(247,179,204,0)"
      gradTo="#f7b3cc"
    >
      <Img src="/av184.svg" left={91} top={69} w={44} h={92} />
      <ImgRotated
        src="/av137.svg"
        boxLeft={88}
        boxTop={47}
        boxW={49}
        boxH={48}
        innerW={37}
        innerH={32}
        rotate={37.69}
      />
      <ImgRotated
        src="/av133.svg"
        boxLeft={74}
        boxTop={28}
        boxW={44}
        boxH={41}
        innerW={37}
        innerH={33}
        rotate={14.16}
      />
      <ImgRotated
        src="/av134.svg"
        boxLeft={115}
        boxTop={39}
        boxW={44}
        boxH={41}
        innerW={37}
        innerH={33}
        rotate={-165.84}
        scaleY={-1}
      />
      <ImgRotated
        src="/av135.svg"
        boxLeft={59}
        boxTop={42}
        boxW={44}
        boxH={41}
        innerW={37}
        innerH={33}
        rotate={14.16}
      />
      <ImgRotated
        src="/av137.svg"
        boxLeft={101}
        boxTop={8}
        boxW={49}
        boxH={48}
        innerW={37}
        innerH={32}
        rotate={37.69}
      />
      <ImgRotated
        src="/av136.svg"
        boxLeft={70}
        boxTop={30}
        boxW={23}
        boxH={23}
        innerW={18}
        innerH={15}
        rotate={37.69}
      />
      <ImgRotated
        src="/av138.svg"
        boxLeft={134}
        boxTop={68}
        boxW={23}
        boxH={23}
        innerW={18}
        innerH={15}
        rotate={37.69}
      />
    </CardBase>
  );
}

function Card_2561() {
  return (
    <CardBase
      bg="#aeb4ff"
      label="When Tracking Becomes Too Much"
      gradFrom="rgba(243,231,215,0)"
      gradTo="#f3e7d7"
    >
      <Img src="/av185.svg" left={108} top={19} w={42} h={33} />
      <Img src="/av186.svg" left={16} top={55} w={83} h={77} />
    </CardBase>
  );
}

function Card_2566() {
  return (
    <CardBase
      bg="#ee583f"
      label={"What Your OPK\nCan't Tell You"}
      gradFrom="rgba(243,166,50,0)"
      gradTo="#f3a632"
    >
      {[
        { l: -12, t: 131 },
        { l: 108, t: 19 },
        { l: -21, t: 41 },
        { l: 124, t: 84 },
        { l: 44, t: 84 },
      ].map((p, i) => (
        <Img key={i} src="/av185.svg" left={p.l} top={p.t} w={42} h={33} />
      ))}
    </CardBase>
  );
}

function Card_2577() {
  return (
    <CardBase
      bg="#ff5493"
      label="Celebrating the Small Shifts"
      gradFrom="rgba(247,179,204,0)"
      gradTo="#f7b3cc"
    >
      <ImgRotated
        src="/av139.svg"
        boxLeft={-137}
        boxTop={-79}
        boxW={275}
        boxH={252}
        innerW={239}
        innerH={210}
        rotate={169.04}
        scaleY={-1}
      />
    </CardBase>
  );
}

function Card_2581() {
  return (
    <CardBase
      bg="#c5b661"
      label="You Are Not a Before Photo"
      gradFrom="rgba(243,231,215,0)"
      gradTo="#387792"
    >
      <ImgRotated
        src="/av140.svg"
        boxLeft={76}
        boxTop={48}
        boxW={121}
        boxH={107}
        innerW={103}
        innerH={83}
        rotate={165}
      />
      <ImgRotated
        src="/av141.svg"
        boxLeft={-37}
        boxTop={-44}
        boxW={121}
        boxH={107}
        innerW={103}
        innerH={83}
        rotate={-165}
        scaleY={-1}
      />
    </CardBase>
  );
}

function Card_2586() {
  return (
    <CardBase
      bg="#dee5ff"
      label="Inflammation and Skin"
      gradFrom="rgba(243,166,50,0)"
      gradTo="#ff5659"
    >
      <Img src="/av190.svg" left={22} top={34} w={144} h={129} />
      <Img src="/av191.svg" left={81} top={30} w={42} h={21} />
      <Img src="/av192.svg" left={50} top={6} w={30} h={26} />
      <Img src="/av194.svg" left={147} top={26} w={46} h={32} />
      <Img src="/av196.svg" left={0} top={32} w={72} h={41} />
      <ImgRotated
        src="/av193.svg"
        boxLeft={106}
        boxTop={-7}
        boxW={25}
        boxH={46}
        innerW={1}
        innerH={52}
        rotate={27.8}
      />
    </CardBase>
  );
}

function Card_2599() {
  return (
    <CardBase
      bg="#a974ff"
      label="When Tracking Becomes Too Much"
      gradFrom="rgba(247,179,204,0)"
      gradTo="#f7b3cc"
    >
      <ImgRotated
        src="/av142.svg"
        boxLeft={81}
        boxTop={-17}
        boxW={140}
        boxH={169}
        innerW={140}
        innerH={169}
        rotate={180}
      />
      <Img src="/av199.svg" left={32} top={24} w={98} h={107} />
      <Img src="/av197.svg" left={-18} top={-7} w={174} h={85} />
      <Img src="/av198.svg" left={151} top={8} w={63} h={155} />
    </CardBase>
  );
}

function Card_2606() {
  return (
    <CardBase
      bg="#ffc476"
      label={'You\'re Not\n"Just Stressed"'}
      gradFrom="rgba(243,231,215,0)"
      gradTo="#f3e7d7"
    >
      <Img src="/av200.svg" left={-24} top={31} w={129} h={122} />
      <ImgRotated
        src="/av201.svg"
        boxLeft={86}
        boxTop={-56}
        boxW={129}
        boxH={122}
        innerW={129}
        innerH={122}
        rotate={180}
      />
    </CardBase>
  );
}

function Card_2611() {
  return (
    <CardBase
      bg="#f3a632"
      label={"Your Flares\nAren't Random"}
      gradFrom="rgba(243,166,50,0)"
      gradTo="#fb7185"
    >
      <Img src="/ag27.svg" left={21.5} top={0.86} w={118} h={137} />
      <Img src="/ag28.svg" left={-12} top={-27} w={202} h={169} />
    </CardBase>
  );
}

interface ArticleSectionProps {
  title: string;
  children: React.ReactNode;
}

function ArticleSection({ title, children }: ArticleSectionProps) {
  return (
    <div
      style={
        {
          display: "flex",
          flexDirection: "column",
          gap: 11,
        } as CSSProperties
      }
    >
      <p
        style={
          {
            fontFamily: "'Instrument Sans',sans-serif",
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "normal",
            margin: 0,
          } as CSSProperties
        }
      >
        {title}
      </p>
      <div
        style={
          {
            display: "flex",
            gap: 8,
            overflowX: "auto",
            paddingBottom: 4,
            marginRight: -20,
            paddingRight: 20,
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          } as CSSProperties
        }
      >
        {children}
      </div>
    </div>
  );
}

export default function CommunityScreen() {
  const [tab, setTab] = useState<"forum" | "articles">("forum");
  const [filter, setFilter] = useState("All");
  const filteredPosts =
    filter === "All" ? POSTS : POSTS.filter((p) => p.tag === filter);

  return (
    <div
      style={
        {
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          background: "transparent",
        } as CSSProperties
      }
    >
      <div
        style={
          {
            flex: 1,
            overflowY: "auto",
            overflowX: "hidden",
            paddingBottom: 100,
            scrollbarWidth: "none",
          } as CSSProperties
        }
      >
        <motion.div
          style={
            {
              padding: "75px 20px 0",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            } as CSSProperties
          }
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } }}
        >
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}
            style={
              {
                fontFamily: "'Donegal One',serif",
                fontSize: 24,
                letterSpacing: "-0.08em",
                color: "#000",
                margin: 0,
              } as CSSProperties
            }
          >
            Your Community Garden
          </motion.h1>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}
            style={
              {
                display: "flex",
                gap: 8,
              } as CSSProperties
            }
          >
            {(["forum", "articles"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={
                  {
                    fontFamily: "'Instrument Sans',sans-serif",
                    fontSize: 12,
                    fontWeight: tab === t ? 600 : 500,
                    padding: "6px 12px",
                    borderRadius: 999,
                    border: "none",
                    cursor: "pointer",
                    background: tab === t ? "#c5b661" : "white",
                    color: tab === t ? "#000" : "rgba(0,0,0,0.4)",
                    transition: "background 0.2s",
                  } as CSSProperties
                }
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}
          >
          <AnimatePresence mode="wait">
            {tab === "forum" ? (
              <motion.div
                key="forum"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                style={
                  {
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                  } as CSSProperties
                }
              >
                <div
                  style={
                    {
                      display: "flex",
                      gap: 8,
                      alignItems: "flex-start",
                      background: "rgba(66,97,23,0.27)",
                      borderRadius: 12,
                      padding: 12,
                    } as CSSProperties
                  }
                >
                  <img
                    src="/c-check.svg"
                    alt=""
                    width={16}
                    height={16}
                    style={
                      {
                        flexShrink: 0,
                        marginTop: 1,
                      } as CSSProperties
                    }
                  />
                  <p
                    style={
                      {
                        fontFamily: "'Instrument Sans',sans-serif",
                        fontSize: 11,
                        lineHeight: 1.4,
                        margin: 0,
                      } as CSSProperties
                    }
                  >
                    Posts and replies marked <strong>"Reviewed"</strong> have been
                    verified by our medical and nutrition advisory team. Please
                    note unreviewed content represents personal experiences.
                  </p>
                </div>
                <div
                  style={
                    {
                      display: "flex",
                      gap: 8,
                      flexWrap: "wrap",
                    } as CSSProperties
                  }
                >
                  {FILTERS.map((f) => (
                    <button
                      key={f}
                      onClick={() => setFilter(f)}
                      style={
                        {
                          fontFamily: "'Instrument Sans',sans-serif",
                          fontSize: 12,
                          fontWeight: filter === f ? 600 : 500,
                          padding: "6px 12px",
                          borderRadius: 999,
                          border: "none",
                          cursor: "pointer",
                          background: filter === f ? "#c5b661" : "white",
                          color: filter === f ? "#000" : "rgba(0,0,0,0.4)",
                          transition: "background 0.2s",
                        } as CSSProperties
                      }
                    >
                      {f}
                    </button>
                  ))}
                </div>
                {filteredPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="articles"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                style={
                  {
                    display: "flex",
                    flexDirection: "column",
                    gap: 20,
                    paddingBottom: 20,
                  } as CSSProperties
                }
              >
                <ArticleSection title="Recommended articles based on your symptoms">
                  <Card_2476 />
                  <Card_2483 />
                  <Card_2487 />
                </ArticleSection>
                <ArticleSection title="Trending Now">
                  <Card_2509 />
                  <Card_2528 />
                  <Card_2534 />
                </ArticleSection>
                <ArticleSection title="Glucose">
                  <Card_2549 />
                  <Card_2561 />
                  <Card_2566 />
                </ArticleSection>
                <ArticleSection title="Stress">
                  <Card_2577 />
                  <Card_2581 />
                  <Card_2586 />
                </ArticleSection>
                <ArticleSection title="Inflammation">
                  <Card_2599 />
                  <Card_2606 />
                  <Card_2611 />
                </ArticleSection>
              </motion.div>
            )}
          </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
