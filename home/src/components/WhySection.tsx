'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const reasons = [
  { icon: '🎮', title: 'เกมหลากหลาย', desc: 'มีให้เลือกครบทุกแนว\nสำหรับทุกคน' },
  { icon: '✅', title: 'ของแท้ 100%', desc: 'นำเข้าจากผู้ผลิตโดยตรง\nมั่นใจได้' },
  { icon: '🚚', title: 'จัดส่งไว ปลอดภัย', desc: 'แพ็คอย่างดี จัดส่งไว\nถึงมือคุณ' },
  { icon: '🤝', title: 'บริการเป็นกันเอง', desc: 'ให้คำแนะนำและส่วนลดเกม\nด้วยตัวจริง' },
  { icon: '🎁', title: 'สิทธิพิเศษมากมาย', desc: 'โปรโมชั่นและส่วนลด\nสำหรับลูกค้า' },
];

export default function WhySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="why"
      ref={ref}
      style={{
        padding: '6rem 2rem',
        background: 'var(--bb-cream)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background dots */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(rgba(245,200,66,0.3) 1.5px, transparent 1.5px)',
        backgroundSize: '28px 28px',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '0.5rem',
          }}>
            <span style={{ fontSize: '1.5rem' }}>❤️</span>
          </div>
          <h2 className="section-title">WHY BLAYBLAY?</h2>
        </motion.div>

        {/* Cards */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              style={{
                background: 'white',
                borderRadius: '20px',
                padding: '2rem 1.5rem',
                textAlign: 'center',
                width: '180px',
                boxShadow: '0 4px 20px rgba(92,58,30,0.1)',
                border: '1px solid rgba(245,200,66,0.3)',
                cursor: 'default',
              }}
            >
              <div style={{
                fontSize: '3.5rem',
                marginBottom: '1rem',
                display: 'flex',
                justifyContent: 'center',
              }}>
                {item.icon}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-condensed)',
                fontWeight: 700,
                fontSize: '1rem',
                color: 'var(--bb-brown)',
                letterSpacing: '0.5px',
                marginBottom: '0.5rem',
              }}>
                {item.title}
              </h3>
              <p style={{
                fontSize: '0.82rem',
                color: 'var(--bb-brown-light)',
                lineHeight: 1.6,
                whiteSpace: 'pre-line',
              }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
