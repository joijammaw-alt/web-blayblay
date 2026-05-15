'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function CommunitySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  return (
    <section ref={ref} style={{ background: 'linear-gradient(160deg,#FFF8E7 0%,#FFF0C0 100%)', padding: '4rem 2rem', borderTop: '2px solid rgba(245,200,66,0.25)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', gap: '3rem', alignItems: 'center' }}>

        {/* Left */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🎮🧒👩</div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', color: 'var(--bb-brown)', lineHeight: 1.05, marginBottom: '0.9rem' }}>
            COME. PLAY.<br />LEARN. KNOW.
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--bb-brown-light)', lineHeight: 1.7 }}>
            ไม่รู้จะหาความสนุกที่ไหน? เราคือ 123 คอมมูนิตี้<br />
            พบปะสังสรรค์ เรียนรู้ ชมงาน-ดื่มกาแฟ PlayLab ฯลฯ<br />
            เราคือพื้นที่สำหรับคุณ
          </p>
        </motion.div>

        {/* Center benefits */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15, duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {[
            { icon: '☕', t: 'ผ่อนคลาย', s: 'เติมพลังดี ๆ' },
            { icon: '🧩', t: 'เชื่อมต่อ', s: 'กับผู้คนที่มีความสนใจเดียวกัน' },
            { icon: '💡', t: 'พัฒนาตัวเอง', s: 'สู่ทักษะใหม่ ๆ ด้วยตัวเอง' },
          ].map((b, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
              <div style={{ width: '48px', height: '48px', background: 'white', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', boxShadow: '0 4px 12px rgba(92,58,30,0.1)', flexShrink: 0 }}>{b.icon}</div>
              <div>
                <div style={{ fontFamily: 'var(--font-condensed)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--bb-brown)' }}>{b.t}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--bb-brown-light)' }}>{b.s}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Right: join */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3, duration: 0.6 }}
          style={{ background: 'white', borderRadius: '18px', padding: '1.75rem', boxShadow: '0 6px 28px rgba(92,58,30,0.1)', position: 'relative', overflow: 'hidden' }}>
          <div className="animate-float2" style={{ position: 'absolute', top: '-8px', right: '8px', fontSize: '2.2rem', opacity: 0.2 }}>🌲</div>
          <div className="animate-float" style={{ position: 'absolute', bottom: '8px', right: '6px', fontSize: '1.8rem', opacity: 0.18 }}>🎲</div>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--bb-brown)', marginBottom: '0.35rem' }}>JOIN OUR COMMUNITY</h3>
          <p style={{ fontSize: '0.78rem', color: 'var(--bb-brown-light)', marginBottom: '1.1rem', lineHeight: 1.5 }}>อัปเดตกิจกรรมใหม่ 3 สิ่ง และโปรโมชั่นก่อนใคร</p>
          {done ? (
            <div style={{ background: 'var(--bb-amber)', padding: '0.7rem', borderRadius: '8px', textAlign: 'center', fontFamily: 'var(--font-condensed)', fontWeight: 700, color: 'var(--bb-brown)', fontSize: '0.9rem' }}>
              ✅ สมัครสำเร็จแล้ว! ขอบคุณ 🎉
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); if (email) setDone(true); }}>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email" required
                style={{ width: '100%', padding: '0.65rem 0.9rem', border: '1.5px solid rgba(245,200,66,0.5)', borderRadius: '8px', fontFamily: 'var(--font-body)', fontSize: '0.88rem', outline: 'none', color: 'var(--bb-brown)', marginBottom: '0.6rem', boxSizing: 'border-box' }} />
              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', borderRadius: '8px', fontSize: '0.9rem' }}>SUBSCRIBE</button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
