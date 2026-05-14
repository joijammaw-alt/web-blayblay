'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const vibes = [
  { emoji: '🎮', title: 'สนุกกับเพื่อน', sub: 'ปาร์ตี้เกมมิ้งสุดมันส์', color: '#E8B84B' },
  { emoji: '👨‍👩‍👧‍👦', title: 'อบอุ่นกับครอบครัว', sub: 'ช่วงเวลาแห่งความสุข', color: '#E07B39' },
  { emoji: '🏆', title: 'กิจกรรมและอีเวนต์', sub: 'พบปะนักเล่นตัวจริง', color: '#5C6BC0' },
  { emoji: '🏪', title: 'ร้านของเรา', sub: 'มินิมอลต้อนรับทุกคน', color: '#66BB6A' },
];

export default function VibeSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(160deg, #FFF3D0 0%, #FFE8A0 100%)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: '1rem' }}
        >
          <h2 className="section-title">PLAY TOGETHER, MEMORIES FOREVER</h2>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '0.5rem 0 0.75rem' }}>
            <span style={{ fontSize: '1.5rem' }}>❤️</span>
          </div>
          <p style={{
            fontSize: '1rem',
            color: 'var(--bb-brown-light)',
            fontFamily: 'var(--font-body)',
            marginBottom: '3rem',
          }}>
            เพราะทุกเกม คือช่วงเวลาที่มีค่า มาสร้างความทรงจำดี ๆ ไปด้วยกัน
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem',
        }}>
          {vibes.map((vibe, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -5 }}
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 6px 24px rgba(92,58,30,0.15)',
                background: 'white',
                cursor: 'pointer',
              }}
            >
              {/* Image placeholder with emoji illustration */}
              <div style={{
                height: '200px',
                background: `linear-gradient(135deg, ${vibe.color}30, ${vibe.color}80)`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                fontSize: '4rem',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Decorative pattern */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `radial-gradient(${vibe.color}50 1px, transparent 1px)`,
                  backgroundSize: '20px 20px',
                  opacity: 0.5,
                }} />
                <span style={{ position: 'relative', zIndex: 1 }}>{vibe.emoji}</span>
              </div>
              <div style={{ padding: '1.25rem' }}>
                <h3 style={{
                  fontFamily: 'var(--font-condensed)',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  color: 'var(--bb-brown)',
                  marginBottom: '0.25rem',
                }}>
                  {vibe.title}
                </h3>
                <p style={{
                  fontSize: '0.85rem',
                  color: 'var(--bb-brown-light)',
                }}>
                  {vibe.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
