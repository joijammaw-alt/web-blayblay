'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const categories = [
  { icon: '👨‍👩‍👧', label: 'FAMILY GAME', sub: 'เกมสำหรับทุกวัย', color: '#FF8A65' },
  { icon: '♟️', label: 'STRATEGY GAME', sub: 'เกมวางแผน', color: '#5C6BC0' },
  { icon: '🎉', label: 'PARTY GAME', sub: 'เกมปาร์ตี้ สนุกเฮฮา', color: '#66BB6A' },
  { icon: '🃏', label: 'CARD GAME', sub: 'เกมไพ่', color: '#EF5350' },
  { icon: '🤝', label: 'COOPERATIVE GAME', sub: 'ร่วมมือกันพิชิตการกึ่ง', color: '#AB47BC' },
  { icon: '👫', label: '2 PLAYERS', sub: 'เกมสำหรับ 2 คน', color: '#26A69A' },
  { icon: '🎒', label: 'ACCESSORIES', sub: 'อุปกรณ์เสริม', color: '#FFA726' },
];

export default function CategoriesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="categories"
      ref={ref}
      style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(180deg, #FFF8E7 0%, #FFF3D0 100%)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '0.25rem' }}>
            <span style={{ fontSize: '1.5rem' }}>🎲</span>
            <h2 className="section-title">BROWSE CATEGORIES</h2>
            <span style={{ fontSize: '1.5rem' }}>⭐</span>
          </div>
        </motion.div>

        {/* Category Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '1.25rem',
          marginBottom: '2.5rem',
        }}>
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -6, scale: 1.03 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              {/* Icon Box */}
              <div style={{
                width: '100%',
                aspectRatio: '1',
                background: 'white',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                boxShadow: '0 4px 16px rgba(92,58,30,0.1)',
                border: `2px solid transparent`,
                transition: 'all 0.3s ease',
                marginBottom: '0.75rem',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = cat.color;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px ${cat.color}40`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'transparent';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(92,58,30,0.1)';
              }}
              >
                {cat.icon}
              </div>
              <span style={{
                fontFamily: 'var(--font-condensed)',
                fontWeight: 700,
                fontSize: '0.78rem',
                color: 'var(--bb-brown)',
                letterSpacing: '0.5px',
                textAlign: 'center',
                lineHeight: 1.3,
              }}>
                {cat.label}
              </span>
              <span style={{
                fontSize: '0.72rem',
                color: 'var(--bb-brown-light)',
                textAlign: 'center',
                marginTop: '2px',
              }}>
                {cat.sub}
              </span>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          style={{ textAlign: 'center' }}
        >
          <a
            href="#all-categories"
            className="btn-outline"
            style={{ fontSize: '0.9rem', letterSpacing: '1.5px' }}
          >
            VIEW ALL CATEGORIES
          </a>
        </motion.div>
      </div>
    </section>
  );
}
