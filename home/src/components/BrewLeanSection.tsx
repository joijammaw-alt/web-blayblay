'use client';
import { motion } from 'framer-motion';

function BrewLeanBuilding() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
      {/* Floating elements */}
      <div className="animate-float" style={{ position: 'absolute', top: '0', right: '12%', fontSize: '3.5rem' }}>☕</div>
      <div className="animate-float2" style={{ position: 'absolute', top: '10%', left: '5%', fontSize: '1.5rem', opacity: 0.6 }}>🎲</div>

      {/* Building */}
      <div style={{ position: 'relative', width: '280px' }}>
        {/* Awning stripes */}
        <div style={{ background: 'repeating-linear-gradient(90deg, #8B4513 0px, #8B4513 18px, #F5C842 18px, #F5C842 36px)', height: '24px', borderRadius: '4px 4px 0 0', marginBottom: '2px' }} />
        {/* Sign */}
        <div style={{ background: '#6B3A1E', padding: '6px 0', textAlign: 'center', marginBottom: '2px' }}>
          <span style={{ fontFamily: 'var(--font-heading)', color: 'white', fontSize: '1.3rem', letterSpacing: '3px' }}>BREWLEAN</span>
        </div>
        {/* Main facade */}
        <div style={{ background: 'linear-gradient(160deg,#D2956C,#A0522D)', padding: '12px', display: 'flex', gap: '8px', boxShadow: '-8px 8px 0 rgba(0,0,0,0.15)' }}>
          {/* Left window */}
          <div style={{ flex: 1, height: '80px', background: 'rgba(255,248,200,0.85)', borderRadius: '4px', border: '3px solid #5C3A1E', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>🏺</div>
          {/* Center door */}
          <div style={{ width: '48px', height: '80px', background: '#4A2810', borderRadius: '4px 4px 0 0', alignSelf: 'flex-end', marginTop: '12px' }} />
          {/* Right window */}
          <div style={{ flex: 1, height: '80px', background: 'rgba(255,248,200,0.85)', borderRadius: '4px', border: '3px solid #5C3A1E', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>☕</div>
        </div>
        {/* Ground */}
        <div style={{ background: '#C4A882', height: '10px', borderRadius: '0 0 4px 4px' }} />
      </div>

      {/* Chalkboard */}
      <div style={{ position: 'absolute', bottom: '10px', left: '5%', background: '#2C5F2E', padding: '8px 10px', borderRadius: '4px', border: '3px solid #4A3728' }}>
        <div style={{ color: 'white', fontSize: '0.6rem', fontFamily: 'var(--font-body)', lineHeight: 1.5 }}>Small<br />Coffee<br />Snack<br />Bay</div>
      </div>
      {/* Trees + character */}
      <div style={{ position: 'absolute', bottom: '10px', right: '3%', fontSize: '3rem' }}>🌳</div>
      <div style={{ position: 'absolute', bottom: '10px', right: '18%', fontSize: '2rem' }}>🧑‍🍳</div>
      <div style={{ position: 'absolute', bottom: '10px', left: '20%', fontSize: '2rem' }}>🌿</div>
    </div>
  );
}

export default function BrewLeanSection() {
  return (
    <section id="home" style={{ background: 'linear-gradient(160deg,#FFF8E7 0%,#FFE8A0 100%)', paddingTop: '68px', minHeight: '500px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', minHeight: '420px' }}>
        {/* Left: Text */}
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <div style={{ fontFamily: 'var(--font-condensed)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--bb-brown-light)', letterSpacing: '2px', marginBottom: '0.5rem' }}>BREWLEAN</div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.4rem,5vw,4.5rem)', color: 'var(--bb-brown)', lineHeight: 1, marginBottom: '1rem' }}>
            BREWLEAN:<br />
            <span style={{ color: 'var(--bb-amber-dark)' }}>Your Coffee Sanctuary</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--bb-brown-light)', lineHeight: 1.7, marginBottom: '2rem' }}>
            ค้นพบกาแฟคราฟต์ เครื่องดื่มแสนอร่อย<br />และบรรยากาศที่ผ่อนคลาย
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <motion.a href="#brewlean-order" className="btn-primary" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>ORDER NOW</motion.a>
            <motion.a href="#brewlean-menu" className="btn-outline" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>BROWSE MENU</motion.a>
          </div>
        </motion.div>

        {/* Right: Building */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
          style={{ height: '360px', position: 'relative' }}>
          <BrewLeanBuilding />
        </motion.div>
      </div>

      {/* Feature Bar */}
      <div style={{ background: 'white', borderTop: '1px solid rgba(245,200,66,0.3)', padding: '1.25rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '1rem' }}>
          {[
            { icon: '☕', t: 'กาแฟคราฟต์', s: 'Quality Coffee' },
            { icon: '😌', t: 'ผ่อนคลาย', s: 'Relaxation' },
            { icon: '😊', t: 'บรรยากาศดี', s: 'Good Vibe' },
            { icon: '🤝', t: 'บริการเป็นกันเอง', s: 'Friendly Service' },
            { icon: '🎁', t: 'สินค้าที่ระลึก', s: 'Merchandise' },
          ].map((f, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ fontSize: '1.6rem' }}>{f.icon}</span>
              <div>
                <div style={{ fontFamily: 'var(--font-condensed)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--bb-brown)' }}>{f.t}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--bb-brown-light)' }}>{f.s}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
