'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function NewsletterSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section
      ref={ref}
      style={{
        padding: '5rem 2rem',
        background: 'var(--bb-amber)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative game pieces */}
      <div style={{ position: 'absolute', left: '5%', top: '50%', transform: 'translateY(-50%)', fontSize: '5rem', opacity: 0.6 }} className="animate-float">🎲</div>
      <div style={{ position: 'absolute', right: '5%', bottom: '10%', fontSize: '4rem', opacity: 0.5 }} className="animate-float2">🧩</div>
      <div style={{ position: 'absolute', right: '8%', top: '15%', fontSize: '3rem', opacity: 0.4 }} className="animate-float">🌲</div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={{
          maxWidth: '640px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          color: 'var(--bb-brown)',
          letterSpacing: '2px',
          marginBottom: '0.75rem',
        }}>
          GET SPECIAL OFFER & NEWS
        </h2>
        <p style={{
          fontSize: '1rem',
          color: 'var(--bb-brown)',
          opacity: 0.8,
          marginBottom: '2rem',
          fontFamily: 'var(--font-body)',
        }}>
          สมัครรับข่าวสารและโปรโมชั่นพิเศษก่อนใคร
        </p>

        {subscribed ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{
              background: 'var(--bb-brown)',
              color: 'var(--bb-cream)',
              padding: '1rem 2rem',
              borderRadius: '8px',
              fontFamily: 'var(--font-condensed)',
              fontWeight: 700,
              fontSize: '1.1rem',
              letterSpacing: '1px',
            }}
          >
            ✅ สมัครสำเร็จแล้ว! ขอบคุณที่ติดตาม BlayBlay 🎉
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              gap: '0',
              background: 'white',
              borderRadius: '8px',
              padding: '5px',
              boxShadow: '0 8px 32px rgba(92,58,30,0.2)',
            }}
          >
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email"
              required
              style={{
                flex: 1,
                padding: '0.75rem 1.25rem',
                border: 'none',
                outline: 'none',
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                color: 'var(--bb-brown)',
                background: 'transparent',
              }}
            />
            <button
              type="submit"
              className="btn-primary"
              style={{ borderRadius: '5px', whiteSpace: 'nowrap' }}
            >
              SUBSCRIBE
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
