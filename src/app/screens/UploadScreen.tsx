import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

function SadFlower({ size = 82 }: { size?: number }) {
  const s = size / 82;
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <img src="/sad-body.svg" alt="" style={{ position:'absolute', left: 3.56*s, top: 9.07*s, width: 88.596*s, height: 68.487*s }} />
      <div style={{ position:'absolute', left: 14.25*s, top: 25.58*s, width: 53.656*s, height: 56.577*s, display:'flex', alignItems:'center', justifyContent:'center' }}>
        <img src="/sad-p1.svg" alt="" style={{ transform:'rotate(-50.44deg)', width: 50.036*s, height: 28.264*s, position:'absolute' }} />
      </div>
      <div style={{ position:'absolute', left: 51.49*s, top: 22.67*s, width: 45.551*s, height: 53.784*s, display:'flex', alignItems:'center', justifyContent:'center' }}>
        <img src="/sad-p2.svg" alt="" style={{ transform:'rotate(58.42deg)', width: 48.649*s, height: 23.562*s, position:'absolute' }} />
      </div>
      <div style={{ position:'absolute', left: 43.15*s, top: 29.14*s, width: 23.98*s, height: 49.036*s, display:'flex', alignItems:'center', justifyContent:'center' }}>
        <img src="/sad-p3-real.svg" alt="" style={{ transform:'rotate(89.02deg)', width: 48.649*s, height: 23.155*s, position:'absolute' }} />
      </div>
      <div style={{ position:'absolute', left: 56.67*s, top: 12.95*s, width: 40.589*s, height: 45.482*s, display:'flex', alignItems:'center', justifyContent:'center' }}>
        <img src="/sad-p4.svg" alt="" style={{ transform:'rotate(59.02deg)', width: 38.506*s, height: 24.224*s, position:'absolute' }} />
      </div>
      <div style={{ position:'absolute', left: 0.14*s, top: 8.09*s, width: 49.203*s, height: 49.23*s, display:'flex', alignItems:'center', justifyContent:'center' }}>
        <img src="/sad-p5.svg" alt="" style={{ transform:'rotate(-45.08deg)', width: 41.375*s, height: 28.228*s, position:'absolute' }} />
      </div>
      <div style={{ position:'absolute', left: 17.49*s, top: 4.86*s, width: 37.62*s, height: 24.681*s, display:'flex', alignItems:'center', justifyContent:'center' }}>
        <img src="/sad-p6.svg" alt="" style={{ transform:'rotate(-16.5deg)', width: 34.652*s, height: 15.478*s, position:'absolute' }} />
      </div>
      <div style={{ position:'absolute', left: 49.22*s, top: 2.02*s, width: 28.174*s, height: 28.348*s, display:'flex', alignItems:'center', justifyContent:'center' }}>
        <img src="/sad-p7.svg" alt="" style={{ transform:'rotate(46.28deg)', width: 22.749*s, height: 17.229*s, position:'absolute' }} />
      </div>
      <img src="/sad-c1.svg" alt="" style={{ position:'absolute', left: 41.14*s, top: 21.87*s, width: 26.605*s, height: 19.925*s }} />
      <img src="/sad-c2.svg" alt="" style={{ position:'absolute', left: 45.43*s, top: 25.49*s, width: 18.836*s, height: 13.187*s }} />
    </div>
  );
}

function OkayFlower({ size = 82 }: { size?: number }) {
  const s = size / 82;
  return (
    <div style={{ position: 'relative', width: size * 1.2, height: size }}>
      <img src="/okay-body-real.svg" alt="" style={{ position:'absolute', left: 2.11*s, top: 6.5*s, width: 98.96*s, height: 72.473*s }} />
      <div style={{ position:'absolute', left: 3.57*s, top: 27.3*s, width: 57.646*s, height: 48.42*s, display:'flex', alignItems:'center', justifyContent:'center' }}>
        <img src="/okay-p1.svg" alt="" style={{ transform:'rotate(-27.63deg)', width: 50.218*s, height: 28.367*s, position:'absolute' }} />
      </div>
      <div style={{ position:'absolute', left: 51.35*s, top: 27.3*s, width: 54.14*s, height: 44.63*s, display:'flex', alignItems:'center', justifyContent:'center' }}>
        <img src="/okay-p2.svg" alt="" style={{ transform:'rotate(29.51deg)', width: 48.826*s, height: 23.647*s, position:'absolute' }} />
      </div>
      <div style={{ position:'absolute', left: 40.3*s, top: 28.6*s, width: 28.694*s, height: 51.06*s, display:'flex', alignItems:'center', justifyContent:'center' }}>
        <img src="/okay-p3.svg" alt="" style={{ transform:'rotate(83.91deg)', width: 48.826*s, height: 23.647*s, position:'absolute' }} />
      </div>
      <div style={{ position:'absolute', left: 59.15*s, top: 12.67*s, width: 45.644*s, height: 40.668*s, display:'flex', alignItems:'center', justifyContent:'center' }}>
        <img src="/okay-p4.svg" alt="" style={{ transform:'rotate(30.79deg)', width: 38.646*s, height: 24.312*s, position:'absolute' }} />
      </div>
      <div style={{ position:'absolute', left: -0.97*s, top: 12.02*s, width: 46.6*s, height: 36.602*s, display:'flex', alignItems:'center', justifyContent:'center' }}>
        <img src="/okay-p5.svg" alt="" style={{ transform:'rotate(-24.6deg)', width: 41.526*s, height: 21.243*s, position:'absolute' }} />
      </div>
      <div style={{ position:'absolute', left: 17.55*s, top: 4.87*s, width: 37.757*s, height: 24.77*s, display:'flex', alignItems:'center', justifyContent:'center' }}>
        <img src="/okay-p6.svg" alt="" style={{ transform:'rotate(-16.5deg)', width: 34.778*s, height: 15.534*s, position:'absolute' }} />
      </div>
      <div style={{ position:'absolute', left: 53.95*s, top: 0.65*s, width: 39.531*s, height: 28.984*s, display:'flex', alignItems:'center', justifyContent:'center' }}>
        <img src="/okay-p7.svg" alt="" style={{ transform:'rotate(18.04deg)', width: 35.402*s, height: 18.955*s, position:'absolute' }} />
      </div>
      <img src="/okay-p8.svg" alt="" style={{ position:'absolute', left: 41.29*s, top: 21.95*s, width: 26.702*s, height: 19.997*s }} />
      <img src="/okay-c1.svg" alt="" style={{ position:'absolute', left: 45.6*s, top: 25.58*s, width: 18.905*s, height: 13.234*s }} />
    </div>
  );
}

function HappyFlower({ size = 82 }: { size?: number }) {
  const s = size / 82;
  return (
    <div style={{ position: 'relative', width: size, height: size, transform: 'rotate(180deg)' }}>
      <img src="/happy-body-real.svg" alt="" style={{ position:'absolute', left: 3.56*s, top: 9.07*s, width: 88.596*s, height: 68.487*s }} />
      <div style={{ position:'absolute', left: 14.25*s, top: 25.58*s, width: 53.656*s, height: 56.577*s, display:'flex', alignItems:'center', justifyContent:'center' }}>
        <img src="/happy-p1-real.svg" alt="" style={{ transform:'rotate(-50.44deg)', width: 50.036*s, height: 28.264*s, position:'absolute' }} />
      </div>
      <div style={{ position:'absolute', left: 51.49*s, top: 22.67*s, width: 45.551*s, height: 53.784*s, display:'flex', alignItems:'center', justifyContent:'center' }}>
        <img src="/happy-p2-real.svg" alt="" style={{ transform:'rotate(58.42deg)', width: 48.649*s, height: 23.562*s, position:'absolute' }} />
      </div>
      <div style={{ position:'absolute', left: 43.15*s, top: 29.14*s, width: 23.98*s, height: 49.036*s, display:'flex', alignItems:'center', justifyContent:'center' }}>
        <img src="/happy-p3-real.svg" alt="" style={{ transform:'rotate(89.02deg)', width: 48.649*s, height: 23.155*s, position:'absolute' }} />
      </div>
      <div style={{ position:'absolute', left: 56.67*s, top: 12.95*s, width: 40.589*s, height: 45.482*s, display:'flex', alignItems:'center', justifyContent:'center' }}>
        <img src="/happy-p4-real.svg" alt="" style={{ transform:'rotate(59.02deg)', width: 38.506*s, height: 24.224*s, position:'absolute' }} />
      </div>
      <div style={{ position:'absolute', left: 0.14*s, top: 8.09*s, width: 49.203*s, height: 49.23*s, display:'flex', alignItems:'center', justifyContent:'center' }}>
        <img src="/happy-p5-real.svg" alt="" style={{ transform:'rotate(-45.08deg)', width: 41.375*s, height: 28.228*s, position:'absolute' }} />
      </div>
      <div style={{ position:'absolute', left: 17.49*s, top: 4.86*s, width: 37.62*s, height: 24.681*s, display:'flex', alignItems:'center', justifyContent:'center' }}>
        <img src="/happy-p6-real.svg" alt="" style={{ transform:'rotate(-16.5deg)', width: 34.652*s, height: 15.478*s, position:'absolute' }} />
      </div>
      <div style={{ position:'absolute', left: 49.22*s, top: 2.02*s, width: 28.174*s, height: 28.348*s, display:'flex', alignItems:'center', justifyContent:'center' }}>
        <img src="/happy-p7-real.svg" alt="" style={{ transform:'rotate(46.28deg)', width: 22.749*s, height: 17.229*s, position:'absolute' }} />
      </div>
      <img src="/happy-c1-real.svg" alt="" style={{ position:'absolute', left: 41.14*s, top: 21.87*s, width: 26.605*s, height: 19.925*s }} />
      <img src="/happy-c2-real.svg" alt="" style={{ position:'absolute', left: 45.43*s, top: 25.49*s, width: 18.836*s, height: 13.187*s }} />
    </div>
  );
}

const TODAY = new Date(2026, 2, 8);
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const BARS = ['/bar1.svg', '/bar2.svg', '/bar3.svg', '/bar4.svg', '/bar5.svg', '/bar6.svg'];

const DAY_CONFIG: Record<number, { color: string; bar: number }> = {
  1:  { color: '#345900', bar: 1 },
  2:  { color: '#345900', bar: 5 },
  3:  { color: '#345900', bar: 4 },
  4:  { color: '#f3a632', bar: 0 },
  5:  { color: '#345900', bar: 1 },
  6:  { color: '#ee583f', bar: 2 },
  7:  { color: '#ee583f', bar: 1 },
  8:  { color: '#ee583f', bar: 1 },
  9:  { color: '#ee583f', bar: 3 },
};

function getDayColor(dayNum: number, _isToday: boolean, isFuture: boolean) {
  if (isFuture) return '#1e1e1e';
  const cfg = DAY_CONFIG[dayNum];
  return cfg ? cfg.color : '#1e1e1e';
}

function getTwoWeekBlock(blockIndex: number) {
  const start = new Date(2026, 2, 1 + blockIndex * 14);
  return Array.from({ length: 14 }, (_, i) => {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    return d;
  });
}

const FEELINGS: { label: string; Flower: React.ComponentType<{ size?: number }> }[] = [
  { label: 'Sad',   Flower: SadFlower },
  { label: 'Okay',  Flower: OkayFlower },
  { label: 'Happy', Flower: HappyFlower },
];

const SECTIONS = ['Pain', 'Sex Life', 'PMS', 'Cravings', 'Social Life', 'Skin Condition'];

function FeelingsSection({ selectedFeeling, onSelectFeeling }: { selectedFeeling: string | null; onSelectFeeling: (label: string) => void }) {
  const [open, setOpen] = useState(true);
  return (
    <div className={`tracker-section${open ? ' tracker-section--open' : ''}`}>
      <button className="tracker-section-header" onClick={() => setOpen(o => !o)}>
        <span className="tracker-section-title">Feelings</span>
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{ flexShrink: 0 }}
        >
          <path d="M5 8l5 5 5-5" stroke="#1e1e1e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="tracker-feelings">
              {FEELINGS.map(({ label, Flower }) => (
                <button
                  key={label}
                  className={`tracker-feeling-btn ${selectedFeeling === label ? 'tracker-feeling-btn--active' : ''}`}
                  onClick={() => onSelectFeeling(label)}
                >
                  <Flower size={80} />
                  <span className="tracker-feeling-label">{label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CollapsibleSection({ title }: { title: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="tracker-section">
      <button className="tracker-section-header" onClick={() => setOpen(o => !o)}>
        <span className="tracker-section-title">{title}</span>
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{ flexShrink: 0 }}
        >
          <path d="M5 8l5 5 5-5" stroke="#1e1e1e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="tracker-section-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ padding: '8px 0 4px', fontSize: 14, color: '#494949', fontFamily: 'Instrument Sans, sans-serif' }}>
              Tap to log your {title.toLowerCase()} for today.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Calendar({ selectedDay, onSelectDay }: { selectedDay: number; onSelectDay: (d: number) => void }) {
  const [blockIndex, setBlockIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const startXRef = useRef<number | null>(null);

  function goNext() { setDirection(1); setBlockIndex(i => i + 1); }
  function goPrev() { if (blockIndex > 0) { setDirection(-1); setBlockIndex(i => i - 1); } }

  function onTouchStart(e: React.TouchEvent) { startXRef.current = e.touches[0].clientX; }
  function onTouchEnd(e: React.TouchEvent) {
    if (startXRef.current === null) return;
    const dx = e.changedTouches[0].clientX - startXRef.current;
    if (dx < -40) goNext();
    else if (dx > 40) goPrev();
    startXRef.current = null;
  }

  const days = getTwoWeekBlock(blockIndex);
  const week1 = days.slice(0, 7);
  const week2 = days.slice(7, 14);

  return (
    <div className="tracker-cal-wrap" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <div className="tracker-cal-header">
        {DAYS.map(d => (
          <div key={d} className="tracker-cal-hcell">{d}</div>
        ))}
      </div>
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={blockIndex}
          custom={direction}
          initial={{ x: direction * 320, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -direction * 320, opacity: 0 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          {[week1, week2].map((week, wi) => (
            <div key={wi} className="tracker-cal-row">
              {week.map((date) => {
                const dayNum = date.getDate();
                const isToday = date.toDateString() === TODAY.toDateString();
                const isFuture = date > TODAY;
                const cfg = DAY_CONFIG[dayNum];
                const numColor = getDayColor(dayNum, isToday, isFuture);
                const isSelected = selectedDay === dayNum && blockIndex === 0;

                return (
                  <button
                    key={dayNum}
                    className={`tracker-cal-cell ${isToday ? 'tracker-cal-cell--today' : ''} ${isSelected ? 'tracker-cal-cell--selected' : ''}`}
                    onClick={() => onSelectDay(dayNum)}
                  >
                    <span className="tracker-cal-num" style={{ color: numColor }}>{dayNum}</span>
                    {cfg?.bar !== undefined && !isFuture && (
                      <img src={BARS[cfg.bar]} alt="" className="tracker-cal-bar" />
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
      <div className="tracker-cal-dots">
        {[0, 1, 2].map(i => (
          <div key={i} className={`tracker-cal-dot ${i === blockIndex ? 'tracker-cal-dot--active' : ''}`} />
        ))}
      </div>
    </div>
  );
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function UploadScreen() {
  const [selectedDay, setSelectedDay] = useState(TODAY.getDate());
  const [selectedFeeling, setSelectedFeeling] = useState<string | null>(null);

  return (
    <div className="tracker-screen">
      <div className="tracker-bg" />
      <div className="tracker-scroll">
        <motion.div
          className="tracker-content"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="tracker-title" variants={fadeUp}>March Tracker</motion.h1>
          <motion.div variants={fadeUp}>
            <Calendar selectedDay={selectedDay} onSelectDay={setSelectedDay} />
          </motion.div>
          <motion.div className="tracker-sections" variants={fadeUp}>
            <FeelingsSection selectedFeeling={selectedFeeling} onSelectFeeling={setSelectedFeeling} />
            {SECTIONS.map(s => <CollapsibleSection key={s} title={s} />)}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
