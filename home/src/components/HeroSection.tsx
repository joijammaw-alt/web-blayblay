'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

function BrewLeanBuilding() {
  return (
    <div style={{ position: 'relative', height: '200px', width: '100%' }}>
      <div className="animate-float" style={{ position: 'absolute', top: '8px', right: '12%', fontSize: '2.2rem' }}>☕</div>
      <div style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', width: '130px' }}>
        <div style={{ background: '#6B3A1E', height: '14px', borderRadius: '6px 6px 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: '#F5C842', fontSize: '0.55rem', fontFamily: 'var(--font-heading)', letterSpacing: '2px' }}>BREWLEAN</span>
        </div>
        <div style={{ background: 'linear-gradient(160deg, #D2956C 0%, #A0522D 100%)', height: '90px', position: 'relative', boxShadow: '-6px 6px 0 rgba(0,0,0,0.15)' }}>
          <div style={{ display: 'flex', gap: '6px', padding: '10px 14px 0' }}>
            {[0, 1].map(i => <div key={i} style={{ width: '30px', height: '36px', background: 'rgba(255,248,200,0.85)', borderRadius: '3px', border: '2px solid #5C3A1E' }} />)}
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '24px', height: '30px', background: '#4A2810', borderRadius: '3px 3px 0 0' }} />
        </div>
        <div style={{ background: '#C4A882', height: '6px' }} />
      </div>
      <div style={{ position: 'absolute', bottom: '6px', left: '6%', background: '#2C5F2E', padding: '4px 6px', borderRadius: '3px', border: '2px solid #4A3728', lineHeight: 1.3 }}>
        <div style={{ color: 'white', fontSize: '0.5rem', fontFamily: 'var(--font-body)' }}>Good<br/>Coffee<br/>Great Day</div>
      </div>
      <div style={{ position: 'absolute', bottom: '6px', right: '5%', fontSize: '2rem' }}>🌳</div>
      <div style={{ position: 'absolute', bottom: '6px', right: '20%', fontSize: '1.6rem' }}>🧑</div>
    </div>
  );
}

function BlayBlayBuilding() {
  return (
    <div style={{ position: 'relative', height: '220px', width: '100%' }}>
      <div className="animate-float" style={{ position: 'absolute', top: '0', right: '8%', fontSize: '2.8rem' }}>🎲</div>
      <div className="animate-float2" style={{ position: 'absolute', top: '16px', left: '6%', fontSize: '1.8rem' }}>🧩</div>
      <div style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', width: '148px' }}>
        <div style={{ background: '#1E3A8A', height: '10px', borderRadius: '4px 4px 0 0' }} />
        <div style={{ background: 'linear-gradient(180deg,#1D4ED8,#1E40AF)', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '3px solid #93C5FD', borderBottom: 'none' }}>
          <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: 'white', letterSpacing: '3px', textShadow: '0 0 12px rgba(147,197,253,0.9)' }}>BLAYBLAY</span>
        </div>
        <div style={{ background: 'linear-gradient(160deg,#3B82F6,#1D4ED8)', height: '110px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '8px', boxShadow: '-6px 6px 0 rgba(0,0,0,0.2)' }}>
          <div style={{ width: '100%', height: '56px', background: 'rgba(255,255,255,0.15)', borderRadius: '4px', border: '2px solid rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            <span style={{ fontSize: '1.4rem' }}>🎲</span><span style={{ fontSize: '1.4rem' }}>🃏</span><span style={{ fontSize: '1.4rem' }}>♟️</span>
          </div>
          <div style={{ width: '28px', height: '38px', background: '#1E3A8A', borderRadius: '3px 3px 0 0', marginTop: 'auto' }} />
        </div>
        <div style={{ background: '#BFDBFE', height: '8px' }} />
      </div>
      <div style={{ position: 'absolute', bottom: '8px', left: '4%', fontSize: '1.8rem' }}>🧒</div>
      <div style={{ position: 'absolute', bottom: '8px', right: '3%', fontSize: '1.8rem' }}>👩</div>
    </div>
  );
}

function PlayLabBuilding() {
  return (
    <div style={{ position: 'relative', height: '200px', width: '100%' }}>
      <div className="animate-float" style={{ position: 'absolute', top: '4px', left: '8%', fontSize: '1.8rem' }}>💡</div>
      <div className="animate-float2" style={{ position: 'absolute', top: '0', right: '5%', fontSize: '2rem' }}>🌲</div>
      <div style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', width: '134px' }}>
        <div style={{ background: '#0F766E', height: '32px', borderRadius: '6px 6px 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '-6px 4px 0 rgba(0,0,0,0.15)' }}>
          <span style={{ fontSize: '1.3rem' }}>🔬</span>
        </div>
        <div style={{ background: 'linear-gradient(160deg,#14B8A6,#0F766E)', height: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '8px', boxShadow: '-6px 6px 0 rgba(0,0,0,0.15)' }}>
          <div style={{ width: '100%', height: '52px', background: '#1E293B', borderRadius: '4px', border: '2px solid #475569', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1px' }}>
            {['LEARN', 'BUILD', 'INNOVATE'].map((w, i) => (
              <div key={i} style={{ color: i === 2 ? '#34D399' : 'rgba(255,255,255,0.9)', fontSize: '0.5rem', fontFamily: 'var(--font-heading)', letterSpacing: '1.5px' }}>{w}</div>
            ))}
          </div>
          <div style={{ width: '26px', height: '36px', background: '#0F766E', borderRadius: '3px 3px 0 0', marginTop: 'auto' }} />
        </div>
        <div style={{ background: '#99F6E4', height: '6px' }} />
      </div>
      <div style={{ position: 'absolute', bottom: '6px', right: '3%', fontSize: '2rem' }}>🤖</div>
      <div style={{ position: 'absolute', bottom: '14px', left: '4%', fontSize: '1.4rem' }}>⚡</div>
    </div>
  );
}

const spaces = [
  {
    number: '01', name: 'BrewLean', category: 'COFFEE SHOP',
    desc: 'ไม่รู้ดื่มอะไรดี? เราเสิร์ฟกาแฟดี บรรยากาศสบาย สำหรับทุกคน',
    building: <BrewLeanBuilding />,
    bg: 'linear-gradient(160deg, #FFF8E7 0%, #F5E4C0 100%)',
    badge: '#E07B39', href: '#brewlean',
  },
  {
    number: '02', name: 'BlayBlay', category: 'BOARD GAME SHOP',
    desc: 'บอร์ดเกมหลากหลาย มุมเล่นเกมสนุก สำหรับเพื่อน ครอบครัว และตัวเอง',
    building: <BlayBlayBuilding />,
    bg: 'linear-gradient(160deg, #EFF6FF 0%, #DBEAFE 100%)',
    badge: '#1D4ED8', href: '#blayblay', featured: true,
  },
  {
    number: '03', name: 'Blay Blay\nPlayLab', category: 'LEARN · BUILD · INNOVATE',
    desc: 'จบ Workshop และเกร์สเรียน ด้านเทคโนโลยี สำร้างผลงานจริง ด้วยตัวเอง',
    building: <PlayLabBuilding />,
    bg: 'linear-gradient(160deg, #F0FDFA 0%, #CCFBF1 100%)',
    badge: '#0F766E', href: '#playlab',
  },
];

export default function HeroSection() {
  return (
    <section style={{ background: 'linear-gradient(160deg,#FFF8E7 0%,#FFF0C0 50%,#FFE89A 100%)', paddingTop: '72px', position: 'relative', overflow: 'hidden' }}>

      {/* Floating decorative blobs */}
      {[
        { top: '80px', left: '-60px', size: 160, color: 'rgba(255,255,255,0.7)' },
        { top: '40px', right: '-40px', size: 120, color: 'rgba(255,255,255,0.6)' },
        { bottom: '180px', left: '5%', size: 80, color: 'rgba(245,200,66,0.2)' },
        { bottom: '160px', right: '4%', size: 100, color: 'rgba(224,123,57,0.15)' },
      ].map((b, i) => (
        <div key={i} style={{
          position: 'absolute', top: b.top, left: (b as { left?: string }).left,
          right: (b as { right?: string }).right, bottom: (b as { bottom?: string }).bottom,
          width: b.size, height: b.size, borderRadius: '50%',
          background: b.color, filter: 'blur(30px)', pointerEvents: 'none',
        }} />
      ))}

      {/* Floating pixel blocks */}
      {['🟨', '🟦', '🟧', '⬜'].map((em, i) => (
        <div key={i} className={i % 2 === 0 ? 'animate-float' : 'animate-float2'}
          style={{ position: 'absolute', fontSize: '1.6rem', opacity: 0.5,
            top: ['15%', '25%', '55%', '40%'][i], left: i < 2 ? ['2%', '92%'][i] : undefined,
            right: i >= 2 ? ['3%', '91%'][i - 2] : undefined,
            animationDelay: `${i * 0.6}s`,
          }}>
          {em}
        </div>
      ))}

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 2rem 0' }}>
        {/* Title */}
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', lineHeight: 1, marginBottom: '0.25rem' }}>
            <span style={{ display: 'block', fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', color: 'var(--bb-brown)' }}>3 SPACES,</span>
            <span style={{ display: 'block', fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', background: 'linear-gradient(90deg,#D4A017,#E07B39)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              ENDLESS POSSIBILITIES
            </span>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--bb-brown-light)', marginTop: '0.75rem' }}>
            พื้นที่สำหรับทุกความสนใจ ที่นี่ที่เดียว
          </p>
        </motion.div>

        {/* Space Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr 1fr', gap: '1.25rem', alignItems: 'end' }}>
          {spaces.map((sp, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              style={{
                background: sp.bg, borderRadius: '20px',
                overflow: 'hidden', position: 'relative',
                boxShadow: sp.featured ? '0 12px 40px rgba(29,78,216,0.2)' : '0 6px 24px rgba(92,58,30,0.12)',
                border: sp.featured ? '2px solid rgba(147,197,253,0.5)' : '2px solid rgba(245,200,66,0.2)',
                transform: sp.featured ? 'translateY(-12px)' : 'none',
              }}>
              {/* Number badge */}
              <div style={{ position: 'absolute', top: '14px', left: '14px', zIndex: 2, background: sp.badge, color: 'white', fontFamily: 'var(--font-heading)', fontSize: '1rem', padding: '2px 10px', borderRadius: '8px', letterSpacing: '1px' }}>
                {sp.number}
              </div>

              {/* Building illustration */}
              <div style={{ padding: '0.5rem 0.5rem 0', minHeight: '200px' }}>
                {sp.building}
              </div>

              {/* Text content */}
              <div style={{ padding: '1.25rem 1.5rem 1.5rem' }}>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', color: sp.badge, lineHeight: 1.1, marginBottom: '0.25rem', whiteSpace: 'pre-line' }}>
                  {sp.name}
                </h2>
                <div style={{ fontFamily: 'var(--font-condensed)', fontWeight: 700, fontSize: '0.8rem', color: 'var(--bb-brown-light)', letterSpacing: '2px', marginBottom: '0.75rem' }}>
                  {sp.category}
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--bb-brown-light)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                  {sp.desc}
                </p>
                <motion.a href={sp.href} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: sp.badge, color: 'white', fontFamily: 'var(--font-condensed)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '1.5px', padding: '0.6rem 1.4rem', borderRadius: '8px', textDecoration: 'none', transition: 'opacity 0.2s' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.88')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
                >
                  EXPLORE <ArrowRight size={14} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
