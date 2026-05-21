'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function PlayLabBuilding() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div className="animate-float2" style={{ position: 'absolute', top: '5%', left: '5%', fontSize: '2rem', opacity: 0.6 }}>🟦</div>
      <div className="animate-float" style={{ position: 'absolute', top: '0', right: '8%', fontSize: '1.8rem', opacity: 0.5 }}>🟨</div>
      <div style={{ position: 'absolute', bottom: 0, right: '5%', width: '260px' }}>
        <div style={{ background: '#0F766E', height: '36px', borderRadius: '6px 6px 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '-6px 4px 0 rgba(0,0,0,0.15)' }}>
          <span style={{ fontSize: '1.4rem' }}>🔬</span>
        </div>
        <div style={{ background: 'linear-gradient(160deg,#14B8A6,#0F766E)', padding: '12px', boxShadow: '-8px 8px 0 rgba(0,0,0,0.15)' }}>
          <div style={{ background: '#1E293B', borderRadius: '6px', border: '2px solid #475569', padding: '8px', marginBottom: '8px' }}>
            {['BUILD', 'FIND', 'INNOVATE'].map((w, i) => (
              <div key={i} style={{ color: i === 2 ? '#34D399' : 'rgba(255,255,255,0.9)', fontSize: '0.65rem', fontFamily: 'var(--font-heading)', letterSpacing: '2px', textAlign: 'center' }}>{w}</div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
            <div style={{ width: '32px', height: '42px', background: '#0F766E', borderRadius: '3px 3px 0 0' }} />
          </div>
        </div>
        <div style={{ background: '#99F6E4', height: '8px', borderRadius: '0 0 4px 4px' }} />
      </div>
      <div style={{ position: 'absolute', bottom: '8px', right: '2%', fontSize: '2.2rem' }}>🤖</div>
      <div style={{ position: 'absolute', bottom: '14px', left: '5%', fontSize: '1.6rem', opacity: 0.7 }}>⚡</div>
      <div style={{ position: 'absolute', bottom: '8px', left: '18%', fontSize: '2rem' }}>💻</div>
    </div>
  );
}

const workshops = [
  { icon: '🍓', title: 'Raspberry Pi Basics', desc: 'เรียนรู้พื้นฐาน Raspberry Pi ด้วยโปรเจ็กต์จริง', color: '#EF4444' },
  { icon: '🤖', title: 'Robot Coding', desc: 'สร้างและเขียนโปรแกรมหุ่นยนต์ตั้งแต่พื้นฐาน', color: '#3B82F6' },
  { icon: '🏠', title: 'IoT for Home', desc: 'ควบคุมอุปกรณ์ในบ้านด้วย IoT และ Raspberry Pi', color: '#F59E0B' },
  { icon: '🧠', title: 'AI Applications', desc: 'เรียนรู้การประยุกต์ใช้ AI กับชีวิตประจำวัน', color: '#8B5CF6' },
];

export default function PlayLabSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="playlab" ref={ref} style={{ background: 'linear-gradient(160deg,#F0FDFA 0%,#E6FDF8 100%)', borderTop: '3px solid rgba(20,184,166,0.2)' }}>
      {/* Hero row */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '3.5rem 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
        <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
          <div style={{ fontFamily: 'var(--font-condensed)', fontWeight: 700, fontSize: '0.85rem', color: '#0F766E', letterSpacing: '2px', marginBottom: '0.5rem' }}>BLAYBLAY PLAYLAB</div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem,4.5vw,4rem)', color: 'var(--bb-brown)', lineHeight: 1, marginBottom: '1rem' }}>
            PlayLab<br /><span style={{ color: '#0F766E' }}>Build. Innovate.</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--bb-brown-light)', lineHeight: 1.7, marginBottom: '2rem' }}>
            อบรม Workshop การทำ Home Server ด้วย Raspberry Pi, IoT, หุ่นยนต์, และโปรเจ็กต์ AI
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8, delay: 0.2 }}
          style={{ height: '320px', position: 'relative' }}>
          <PlayLabBuilding />
        </motion.div>
      </div>

      {/* Workshops */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem 4rem' }}>
        <div style={{ fontFamily: 'var(--font-condensed)', fontWeight: 700, fontSize: '1rem', color: '#0F766E', letterSpacing: '2px', marginBottom: '1.5rem' }}>FEATURED WORKSHOPS</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.25rem' }}>
          {workshops.map((ws, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1 }} whileHover={{ y: -5 }}
              style={{ background: 'white', borderRadius: '16px', padding: '1.5rem', boxShadow: '0 4px 16px rgba(15,118,110,0.1)', border: '1px solid rgba(20,184,166,0.15)', cursor: 'pointer' }}>
              <div style={{ fontSize: '2.8rem', marginBottom: '0.75rem' }}>{ws.icon}</div>
              <h4 style={{ fontFamily: 'var(--font-condensed)', fontWeight: 700, fontSize: '1rem', color: 'var(--bb-brown)', marginBottom: '0.4rem' }}>{ws.title}</h4>
              <p style={{ fontSize: '0.78rem', color: 'var(--bb-brown-light)', lineHeight: 1.6, marginBottom: '1rem' }}>{ws.desc}</p>
              <button style={{ background: ws.color, color: 'white', border: 'none', borderRadius: '6px', padding: '0.4rem 1.1rem', fontFamily: 'var(--font-condensed)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '1px', cursor: 'pointer' }}>
                REGISTER
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
