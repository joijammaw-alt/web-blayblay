'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  { icon: '🏠', title: 'ครบจบในที่เดียว', sub: 'คาเฟ่ + บอร์ดเกม + คอร์สเรียน' },
  { icon: '👨‍👩‍👧', title: 'สำหรับทุกคน', sub: 'เพื่อน ครอบครัว เด็ก และผู้ใหญ่' },
  { icon: '⭐', title: 'คุณภาพที่เราใส่ใจ', sub: 'สินค้าและบริการคุณภาพ' },
  { icon: '📅', title: 'กิจกรรมทุกสัปดาห์', sub: 'เวิร์คชอป เกมไนท์ และอีเวนต์' },
  { icon: '📍', title: 'เดินทางสะดวก', sub: 'ใกล้กับที่อยู่ ง่ายต่อการเดินทาง' },
];

export default function FeatureBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} style={{ background: 'white', boxShadow: '0 4px 24px rgba(92,58,30,0.1)', position: 'relative', zIndex: 10 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '1.5rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem' }}>
          {features.map((f, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '1.75rem', flexShrink: 0 }}>{f.icon}</span>
              <div>
                <div style={{ fontFamily: 'var(--font-condensed)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--bb-brown)', letterSpacing: '0.3px' }}>{f.title}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--bb-brown-light)', marginTop: '1px' }}>{f.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
