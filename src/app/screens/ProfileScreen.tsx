import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

function Toggle({ on = true }: { on?: boolean }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:8 }}>
      <div style={{
        width:32, height:16, borderRadius:999, background: on ? '#24a148' : '#ccc',
        position:'relative', flexShrink:0, transition:'background 0.2s',
      }}>
        <div style={{
          position:'absolute', top:2, left: on ? 18 : 2, width:12, height:12,
          borderRadius:999, background:'white', transition:'left 0.2s',
        }} />
      </div>
      <span style={{ fontFamily:"'Instrument Sans',sans-serif", fontSize:14, color:'#1e1e1e' }}>On</span>
    </div>
  );
}

function SleepSlider() {
  const [pct, setPct] = useState(35);
  const trackRef = useRef<HTMLDivElement>(null);

  const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

  const updateFromEvent = useCallback((clientX: number) => {
    const rect = trackRef.current?.getBoundingClientRect();
    if (!rect) return;
    const raw = ((clientX - rect.left) / rect.width) * 100;
    setPct(clamp(raw, 0, 100));
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    updateFromEvent(e.clientX);
    const onMove = (ev: MouseEvent) => updateFromEvent(ev.clientX);
    const onUp = () => { window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp); };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    updateFromEvent(e.touches[0].clientX);
    const onMove = (ev: TouchEvent) => updateFromEvent(ev.touches[0].clientX);
    const onEnd = () => { window.removeEventListener('touchmove', onMove); window.removeEventListener('touchend', onEnd); };
    window.addEventListener('touchmove', onMove);
    window.addEventListener('touchend', onEnd);
  };

  return (
    <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
      <div
        ref={trackRef}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        style={{ position:'relative', height:28, display:'flex', alignItems:'center', cursor:'pointer' }}
      >
        <div style={{ position:'absolute', left:0, right:0, height:8, borderRadius:12, background:'#f3e7d7' }} />
        <div style={{ position:'absolute', left:0, width:`${pct}%`, height:8, borderRadius:12, background:'rgba(238,88,63,0.6)' }} />
        <div style={{
          position:'absolute', left:`calc(${pct}% - 14px)`,
          width:28, height:28, display:'flex', alignItems:'center', justifyContent:'center',
          filter:'drop-shadow(0 2px 4px rgba(0,0,0,0.25))',
          userSelect:'none', touchAction:'none',
        }}>
          <svg width="26" height="24" viewBox="0 0 26 24" fill="none">
            <path d="M13 21.5S2 14.2 2 7.8C2 4.6 4.7 2 8 2c1.5 0 2.9.6 4 1.5.3.3.7.5 1 .5s.7-.2 1-.5C15.1 2.6 16.5 2 18 2c3.3 0 6 2.6 6 5.8 0 6.4-11 13.7-11 13.7z" fill="#ee583f"/>
          </svg>
        </div>
      </div>
      <div style={{ display:'flex', justifyContent:'space-between', fontFamily:"'Instrument Sans',sans-serif", fontSize:14, color:'#494949' }}>
        {['3h','6h','9h','12h'].map(t => <span key={t} style={{ width:28, textAlign:'center' }}>{t}</span>)}
      </div>
    </div>
  );
}

const DATE_RANGES = ['Last 7 days', 'Last 30 days', 'Last 3 months', 'All Time'];
const REPORT_ITEMS = ['Sensor Readings', 'Daily Check-Ins', 'Pattern Discoveries', 'Cycle Data', 'Supplement Log'];

function ProviderReportSheet({ onClose }: { onClose: () => void }) {
  const [dateRange, setDateRange] = useState('Last 30 days');
  const [toggles, setToggles] = useState<Record<string, boolean>>(REPORT_ITEMS.reduce((a, k) => ({ ...a, [k]: true }), {}));

  return (
    <>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ position:'absolute', inset:0, background:'rgba(0,0,0,0.3)', zIndex:40 }}
      />
      <motion.div
        key="sheet"
        initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position:'absolute', bottom:0, left:0, right:0, zIndex:50,
          background:'#f1f6ea', borderRadius:'24px 24px 0 0',
          padding:'40px 20px 36px', display:'flex', flexDirection:'column', gap:22,
        }}
      >
        <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
          <h2 style={{ fontFamily:"'Instrument Sans',sans-serif", fontWeight:600, fontSize:24, margin:0 }}>
            Provider Report
          </h2>
          <p style={{ fontFamily:"'Instrument Sans',sans-serif", fontSize:16, color:'#494949', margin:0 }}>
            A clean summary to share with your doctor or specialist.
          </p>
          <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
            <span style={{ fontFamily:"'Instrument Sans',sans-serif", fontWeight:500, fontSize:13, color:'#494949', textTransform:'uppercase', letterSpacing:'0.04em' }}>
              Date Range
            </span>
            <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
              {DATE_RANGES.map(d => (
                <button key={d} onClick={() => setDateRange(d)} style={{
                  fontFamily:"'Instrument Sans',sans-serif", fontWeight:500, fontSize:12,
                  padding:'6px 12px', borderRadius:999, border:'none', cursor:'pointer',
                  background: dateRange === d ? '#f3a632' : 'rgba(243,166,50,0.3)',
                  transition:'background 0.2s',
                }}>{d}</button>
              ))}
            </div>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
            <span style={{ fontFamily:"'Instrument Sans',sans-serif", fontWeight:500, fontSize:13, color:'#494949', textTransform:'uppercase', letterSpacing:'0.04em' }}>
              Include in Report
            </span>
            <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
              {REPORT_ITEMS.map(item => (
                <div key={item} style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                  <span style={{ fontFamily:"'Instrument Sans',sans-serif", fontWeight:500, fontSize:14 }}>{item}</span>
                  <button onClick={() => setToggles(t => ({ ...t, [item]: !t[item] }))}
                    style={{ background:'none', border:'none', padding:0, cursor:'pointer' }}>
                    <Toggle on={toggles[item]} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
          <button style={{
            fontFamily:"'Instrument Sans',sans-serif", fontWeight:700, fontSize:16,
            background:'#f7b3cc', border:'none', borderRadius:95, padding:'12px',
            width:'100%', cursor:'pointer',
          }}>
            Download PDF
          </button>
          <p style={{ fontFamily:"'Instrument Sans',sans-serif", fontSize:14, color:'#494949', textAlign:'center', margin:0 }}>
            Manually share only – never auto-sent to anyone.
          </p>
        </div>
      </motion.div>
    </>
  );
}

const SYNC_APPS = ['Apple Health', 'Clue', 'Flo', 'Natural Cycles'];

export default function ProfileScreen({ onOverlayChange }: { onOverlayChange?: (open: boolean) => void }) {
  const [showReport, setShowReport] = useState(false);

  function toggleReport(open: boolean) {
    setShowReport(open);
    onOverlayChange?.(open);
  }

  return (
    <div style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', overflow:'hidden',
      background:"transparent" }}>

      <div style={{ flex:1, overflowY:'auto', overflowX:'hidden', paddingBottom:120, scrollbarWidth:'none', zIndex:1 }}>
        <div style={{ display:'flex', justifyContent:'center', paddingTop:60 }}>
          <div style={{ position:'relative', width:100, height:100 }}>
            <img src="/prof-av-frame.svg" alt="" style={{ position:'absolute', inset:0, width:'100%', height:'100%' }} />
            <div style={{ position:'absolute', inset:'14%', borderRadius:999, overflow:'hidden', border:'2px solid #dee5ff' }}>
              <img src="/c-av1.png" alt="Queenie" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
            </div>
          </div>
        </div>

        <div style={{ display:'flex', justifyContent:'center', alignItems:'center', gap:8, marginTop:4, marginBottom:24 }}>
          <span style={{ fontFamily:"'Donegal One',serif", fontSize:24, letterSpacing:'-0.08em', color:'#000', lineHeight:'normal' }}>Queenie</span>
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z" fill="#ee583f"/>
            <path d="M20.71 7.04a1.003 1.003 0 000-1.42l-2.34-2.34a1.003 1.003 0 00-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z" fill="#ee583f"/>
          </svg>
        </div>

        <div style={{ padding:'0 20px', display:'flex', flexDirection:'column', gap:50 }}>
          <div style={{ display:'flex', flexDirection:'column', gap:32 }}>
            <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
              <h2 style={{ fontFamily:"'Instrument Sans',sans-serif", fontWeight:500, fontSize:16, margin:0, lineHeight:'normal' }}>My Device</h2>
              <div style={{ background:'rgba(255,255,255,0.7)', borderRadius:12, padding:'12px 16px 12px 12px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                <div style={{ display:'flex', gap:12, alignItems:'center' }}>
                  <div style={{ width:48, height:48, borderRadius:12, overflow:'hidden', position:'relative', flexShrink:0 }}>
                    <img src="/prof-ring.png" alt="Dandi" style={{ position:'absolute', width:'137.5%', height:'133.33%', top:'-21%', left:'-5%', objectFit:'cover' }} />
                  </div>
                  <div style={{ display:'flex', flexDirection:'column', gap:2 }}>
                    <span style={{ fontFamily:"'Instrument Sans',sans-serif", fontWeight:600, fontSize:14 }}>Dandi</span>
                    <span style={{ fontFamily:"'Instrument Sans',sans-serif", fontSize:14, color:'rgba(52,89,0,0.5)', letterSpacing:'0.01em' }}>Connected</span>
                  </div>
                </div>
                <div style={{ display:'flex', gap:8, alignItems:'center' }}>
                  <img src="/prof-battery.svg" alt="" width={24} height={24} style={{ transform:'rotate(180deg) scaleY(-1)' }} />
                  <span style={{ fontFamily:"'Instrument Sans',sans-serif", fontSize:14, color:'#1e1e1e', letterSpacing:'0.01em' }}>30%</span>
                </div>
              </div>
            </div>

            <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
              <h2 style={{ fontFamily:"'Instrument Sans',sans-serif", fontWeight:500, fontSize:16, margin:0, lineHeight:'normal' }}>Health Metrics</h2>
              <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                  <span style={{ fontFamily:"'Instrument Sans',sans-serif", fontSize:14, color:'#494949', lineHeight:'normal' }}>Weight</span>
                  <div style={{ display:'flex', gap:24, alignItems:'center' }}>
                    <div style={{ background:'#f3e7d7', border:'1px solid #c5b661', borderRadius:24, padding:'8px 12px', minWidth:58, textAlign:'center' }}>
                      <span style={{ fontFamily:"'Instrument Sans',sans-serif", fontWeight:500, fontSize:16 }}>120</span>
                    </div>
                    <span style={{ fontFamily:"'Instrument Sans',sans-serif", fontSize:14, color:'#494949' }}>lbs</span>
                  </div>
                </div>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                  <span style={{ fontFamily:"'Instrument Sans',sans-serif", fontSize:14, color:'#494949', lineHeight:'normal' }}>Height</span>
                  <div style={{ display:'flex', gap:14, alignItems:'center' }}>
                    <div style={{ background:'#f3e7d7', border:'1px solid #c5b661', borderRadius:24, padding:'8px 12px', minWidth:58, textAlign:'center' }}>
                      <span style={{ fontFamily:"'Instrument Sans',sans-serif", fontWeight:500, fontSize:16 }}>5' 6"</span>
                    </div>
                    <span style={{ fontFamily:"'Instrument Sans',sans-serif", fontSize:14, color:'#494949' }}>ft/in</span>
                  </div>
                </div>
                <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
                  <span style={{ fontFamily:"'Instrument Sans',sans-serif", fontSize:14, color:'#494949', lineHeight:'normal' }}>Average Sleep</span>
                  <SleepSlider />
                </div>
              </div>
            </div>

            <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
              <h2 style={{ fontFamily:"'Instrument Sans',sans-serif", fontWeight:500, fontSize:16, margin:0, lineHeight:'normal', color:'#000' }}>Medicine Allergies</h2>
              <p style={{ fontFamily:"'Instrument Sans',sans-serif", fontSize:14, color:'#494949', margin:0, lineHeight:'normal' }}>
                Used to flag conflicts before any supplement is adminsiterd.
              </p>
              <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
                <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:8, background:'rgba(238,88,63,0.2)', border:'1px solid #ee583f', borderRadius:999, padding:'6px 12px' }}>
                    <span style={{ fontFamily:"'Instrument Sans',sans-serif", fontWeight:500, fontSize:12, color:'#ee583f' }}>Penicilin</span>
                    <img src="/prof-close.svg" alt="remove" width={16} height={16} />
                  </div>
                </div>
                <div style={{ display:'flex', gap:8, alignItems:'center' }}>
                  <div style={{ background:'#f3e7d7', border:'1px solid #c5b661', borderRadius:24, padding:'8px 12px' }}>
                    <span style={{ fontFamily:"'Instrument Sans',sans-serif", fontWeight:500, fontSize:12, color:'rgba(0,0,0,0.5)' }}>e.g. Sulfa, Aspirin, Latex...</span>
                  </div>
                  <div style={{ background:'white', borderRadius:24, padding:'8px 12px' }}>
                    <span style={{ fontFamily:"'Instrument Sans',sans-serif", fontWeight:500, fontSize:12 }}>Add</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
              <h2 style={{ fontFamily:"'Instrument Sans',sans-serif", fontWeight:500, fontSize:16, margin:0, lineHeight:'normal' }}>Sync Period Tracker</h2>
              <p style={{ fontFamily:"'Instrument Sans',sans-serif", fontSize:14, color:'#494949', margin:0, lineHeight:'normal' }}>
                Sync cycle data from another app to enrich your patterns
              </p>
              {SYNC_APPS.map(app => (
                <div key={app} style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                  <span style={{ fontFamily:"'Instrument Sans',sans-serif", fontWeight:500, fontSize:14 }}>{app}</span>
                  <div style={{ background:'#f1f6ea', borderRadius:24, padding:'8px 12px' }}>
                    <span style={{ fontFamily:"'Instrument Sans',sans-serif", fontWeight:500, fontSize:12 }}>Connect</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
              <h2 style={{ fontFamily:"'Instrument Sans',sans-serif", fontWeight:500, fontSize:16, margin:0, lineHeight:'normal' }}>Provider Report</h2>
              <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
                <p style={{ fontFamily:"'Instrument Sans',sans-serif", fontSize:14, color:'#494949', margin:0, lineHeight:'normal' }}>
                  Sync cycle data from another app to enrich your patterns
                </p>
                <button onClick={() => toggleReport(true)} style={{
                  fontFamily:"'Instrument Sans',sans-serif", fontWeight:700, fontSize:16,
                  background:'#f7b3cc', border:'none', borderRadius:95, padding:'12px',
                  width:'100%', cursor:'pointer',
                }}>
                  Generate
                </button>
              </div>
            </div>
          </div>

          <div style={{ display:'flex', flexDirection:'column' }}>
            <button style={{
              fontFamily:"'Instrument Sans',sans-serif", fontWeight:700, fontSize:16,
              background:'#f3e7d7', border:'1px solid #000', borderRadius:95, padding:'12px',
              width:'100%', cursor:'pointer',
            }}>
              Sign Out
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showReport && (
          <ProviderReportSheet onClose={() => toggleReport(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
