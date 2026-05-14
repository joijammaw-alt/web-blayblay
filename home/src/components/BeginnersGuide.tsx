'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    num: 1,
    title: 'เลือกสไตล์เกมที่ชอบ',
    desc: 'เลือกจากหมวดหมู่ หรือเกมแนะนำที่สนใจ เรามีเกมให้เลือกเพียบ!',
    icon: '🃏',
  },
  {
    num: 2,
    title: 'มาที่ร้านหรือทักแชท',
    desc: 'แวะมาหน้าร้าน หรือแชท จองโต๊ะผ่าน LINE ได้เลย สะดวก รวดเร็ว',
    icon: '🏪',
  },
  {
    num: 3,
    title: 'ให้ทีมงานแนะนำและพาเล่น',
    desc: 'ทีมงานจะแนะนำเกม สอนกติกา และอยู่ดูแล ให้สนุกตลอดเกม',
    icon: '♟️',
  }
];

export default function BeginnersGuide() {
  return (
    <section id="beginners" style={{ padding: '5rem 2rem', background: 'white' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '1.5rem', color: '#FF9900' }}>✨</span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'var(--bb-blue)', margin: 0 }}>มือใหม่เริ่มที่นี่</h2>
          <span style={{ fontSize: '1.5rem', color: '#FF9900' }}>✨</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', position: 'relative' }}>
          
          {steps.map((step, i) => (
            <motion.div key={step.num} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }}
              style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
              
              <div style={{ background: '#F8FBFF', border: '1px solid #E8F0FE', borderRadius: '16px', padding: '2rem 1.5rem', width: '100%', maxWidth: '340px', position: 'relative', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', textAlign: 'center' }}>
                
                {/* Number Badge */}
                <div style={{ position: 'absolute', top: '-15px', left: '-15px', width: '36px', height: '36px', background: 'var(--bb-blue)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-heading)', fontSize: '1.2rem', boxShadow: '0 4px 10px rgba(0,87,184,0.3)' }}>
                  {step.num}
                </div>

                <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{step.icon}</div>
                <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '1.1rem', color: 'var(--bb-blue)', marginBottom: '0.8rem' }}>{step.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--bb-text-muted)', lineHeight: 1.6 }}>{step.desc}</p>
                
              </div>

              {/* Arrow linking steps (except last) */}
              {i < steps.length - 1 && (
                <div style={{ position: 'absolute', right: '-40px', top: '50%', transform: 'translateY(-50%)', color: 'var(--bb-blue)', opacity: 0.3 }}>
                  <ArrowRight size={32} />
                  <ArrowRight size={32} style={{ marginLeft: '-15px' }} />
                </div>
              )}
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
