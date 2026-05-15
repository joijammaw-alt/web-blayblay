'use client';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, ShoppingCart, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

function BoardGameBuilding() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div className="animate-float" style={{ position: 'absolute', top: '0', left: '10%', fontSize: '3rem' }}>🎲</div>
      <div className="animate-float2" style={{ position: 'absolute', top: '8%', right: '5%', fontSize: '2rem', opacity: 0.7 }}>🟦</div>
      <div style={{ position: 'absolute', bottom: 0, right: '5%', width: '260px' }}>
        <div style={{ background: '#1E3A8A', padding: '4px 0', textAlign: 'center', borderRadius: '4px 4px 0 0' }}>
          <span style={{ fontFamily: 'var(--font-heading)', color: '#93C5FD', fontSize: '1.1rem', letterSpacing: '3px', textShadow: '0 0 10px rgba(147,197,253,0.8)' }}>BLAYBLAY</span>
        </div>
        <div style={{ background: 'linear-gradient(160deg,#3B82F6,#1D4ED8)', padding: '12px', boxShadow: '-8px 8px 0 rgba(0,0,0,0.2)' }}>
          <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: '6px', border: '2px solid rgba(255,255,255,0.3)', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '0 12px', marginBottom: '8px' }}>
            <span style={{ fontSize: '1.8rem' }}>🎲</span><span style={{ fontSize: '1.8rem' }}>🃏</span><span style={{ fontSize: '1.8rem' }}>♟️</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '36px', height: '44px', background: '#1E3A8A', borderRadius: '3px 3px 0 0' }} />
          </div>
        </div>
        <div style={{ background: '#BFDBFE', height: '8px', borderRadius: '0 0 4px 4px' }} />
      </div>
      <div style={{ position: 'absolute', bottom: '8px', left: '3%', fontSize: '2rem' }}>🧒</div>
      <div style={{ position: 'absolute', bottom: '8px', left: '18%', fontSize: '2rem' }}>👩</div>
      <div style={{ position: 'absolute', bottom: '10px', right: '2%', fontSize: '2.5rem', opacity: 0.6 }}>🟥</div>
      <div className="animate-float2" style={{ position: 'absolute', top: '15%', left: '2%', fontSize: '2rem', opacity: 0.5 }}>🟧</div>
    </div>
  );
}

const categories = [
  { icon: '👨‍👩‍👧', label: 'FAMILY GAME', sub: 'เกมสำหรับทุกวัย' },
  { icon: '♟️', label: 'STRATEGY GAME', sub: 'เกมวางแผน' },
  { icon: '🎉', label: 'PARTY GAME', sub: 'เกมปาร์ตี้' },
  { icon: '🃏', label: 'CARD GAME', sub: 'เกมไพ่' },
  { icon: '🤝', label: 'CO-OP GAME', sub: 'ร่วมมือกัน' },
  { icon: '👫', label: '2 PLAYERS', sub: 'สำหรับ 2 คน' },
  { icon: '🎒', label: 'ACCESSORIES', sub: 'อุปกรณ์เสริม' },
];

const games = [
  { name: 'Catan', price: 1390, rating: 4.0, reviews: 188, emoji: '🏝️', bg: 'linear-gradient(135deg,#F5E642,#C8A800)', tag: '' },
  { name: '7 Wonders', price: 1090, rating: 4.7, reviews: 86, emoji: '🏛️', bg: 'linear-gradient(135deg,#64B5F6,#1565C0)', tag: '' },
  { name: 'Azul', price: 1290, rating: 4.0, reviews: 117, emoji: '🔷', bg: 'linear-gradient(135deg,#80DEEA,#006064)', tag: 'HOT' },
  { name: 'Dixit', price: 890, rating: 4.5, reviews: 72, emoji: '🦊', bg: 'linear-gradient(135deg,#F48FB1,#880E4F)', tag: '' },
  { name: 'Terraforming Mars', price: 2190, rating: 4.3, reviews: 178, emoji: '🔴', bg: 'linear-gradient(135deg,#FF8A65,#BF360C)', tag: 'TOP' },
  { name: 'Wingspan', price: 1990, rating: 4.6, reviews: 22, emoji: '🦅', bg: 'linear-gradient(135deg,#A5D6A7,#1B5E20)', tag: '' },
  { name: 'Pandemic', price: 1390, rating: 4.7, reviews: 204, emoji: '🧬', bg: 'linear-gradient(135deg,#CE93D8,#4A148C)', tag: 'HOT' },
];

export default function BoardGameSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section id="shop" ref={ref} style={{ background: 'var(--bb-cream)', paddingBottom: '4rem' }}>
      {/* Hero row */}
      <div style={{ background: 'linear-gradient(160deg,#FFF8E7 0%,#F5EDD0 100%)', borderTop: '3px solid rgba(245,200,66,0.3)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '3.5rem 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
            <div style={{ fontFamily: 'var(--font-condensed)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--bb-orange)', letterSpacing: '2px', marginBottom: '0.5rem' }}>BLAYBLAY BOARD GAME SHOP</div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem,4.5vw,4rem)', color: 'var(--bb-brown)', lineHeight: 1, marginBottom: '1rem' }}>Every Game<br />Has A Story</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--bb-brown-light)', lineHeight: 1.7, marginBottom: '2rem' }}>
              ค้นหาการผจญภัยครั้งใหม่ของคุณและเริ่มต้นเรื่องราวของคุณ<br />
              Explore over 1,000+ board games.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#all-games" className="btn-primary">SHOP NOW</a>
              <a href="#categories" className="btn-outline">VIEW CATEGORIES</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8, delay: 0.2 }}
            style={{ height: '340px', position: 'relative' }}>
            <BoardGameBuilding />
          </motion.div>
        </div>
      </div>

      {/* Shop features */}
      <div style={{ background: 'white', padding: '1.1rem 2rem', boxShadow: '0 2px 12px rgba(92,58,30,0.08)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1rem' }}>
          {[
            { icon: '🎲', t: 'บอร์ดเกมหลากหลาย', s: 'มากกว่า 1,800+ เกม' },
            { icon: '✅', t: 'ของแท้ 100%', s: 'สินค้าของแท้' },
            { icon: '🚚', t: 'จัดส่งทั่วประเทศ', s: '1-2 วันทำการ' },
            { icon: '🎁', t: 'บริการเป็นกันเอง', s: 'ติดต่อเราได้เลย' },
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

      {/* Categories */}
      <div id="categories" style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 2rem 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
          {categories.map((cat, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.85 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: i * 0.06 }}
              whileHover={{ y: -5 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
              <div style={{ width: '100%', aspectRatio: '1', background: 'white', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', boxShadow: '0 3px 12px rgba(92,58,30,0.1)', marginBottom: '0.5rem' }}>
                {cat.icon}
              </div>
              <span style={{ fontFamily: 'var(--font-condensed)', fontWeight: 700, fontSize: '0.72rem', color: 'var(--bb-brown)', textAlign: 'center' }}>{cat.label}</span>
              <span style={{ fontSize: '0.65rem', color: 'var(--bb-brown-light)', textAlign: 'center' }}>{cat.sub}</span>
            </motion.div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <a href="#all-categories" className="btn-outline" style={{ fontSize: '0.85rem' }}>VIEW ALL CATEGORIES</a>
        </div>

        {/* Popular Games */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <span style={{ fontSize: '1.4rem' }}>🏆</span>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', color: 'var(--bb-brown)' }}>POPULAR GAMES</h3>
          <span style={{ fontSize: '1.4rem' }}>⭐</span>
        </div>

        <div style={{ position: 'relative' }}>
          <button ref={prevRef} aria-label="Prev"
            style={{ position: 'absolute', left: '-20px', top: '50%', transform: 'translateY(-50%)', zIndex: 10, width: '40px', height: '40px', borderRadius: '50%', background: 'white', border: '2px solid var(--bb-amber)', color: 'var(--bb-brown)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 3px 10px rgba(92,58,30,0.15)' }}>
            <ChevronLeft size={18} />
          </button>

          <Swiper modules={[Navigation]}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={swiper => {
              if (typeof swiper.params.navigation !== 'boolean' && swiper.params.navigation) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            slidesPerView={3} spaceBetween={14}
            breakpoints={{ 768: { slidesPerView: 4 }, 1024: { slidesPerView: 6 } }}>
            {games.map((game, i) => (
              <SwiperSlide key={i}>
                <div style={{ background: 'white', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 3px 12px rgba(92,58,30,0.1)', cursor: 'pointer', transition: 'all 0.3s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-5px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 28px rgba(92,58,30,0.18)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = '0 3px 12px rgba(92,58,30,0.1)'; }}>
                  <div style={{ height: '120px', background: game.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.5rem', position: 'relative' }}>
                    {game.emoji}
                    {game.tag && <span style={{ position: 'absolute', top: '6px', right: '6px', background: '#E53935', color: 'white', fontSize: '0.55rem', fontWeight: 700, padding: '2px 6px', borderRadius: '3px', letterSpacing: '1px' }}>{game.tag}</span>}
                  </div>
                  <div style={{ padding: '0.6rem' }}>
                    <div style={{ fontFamily: 'var(--font-condensed)', fontWeight: 700, fontSize: '0.88rem', color: 'var(--bb-brown)', marginBottom: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{game.name}</div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--bb-brown)', marginBottom: '4px' }}>฿{game.price.toLocaleString()}</div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                        <Star size={11} fill="var(--bb-amber)" color="var(--bb-amber)" />
                        <span style={{ fontSize: '0.68rem', color: 'var(--bb-brown-light)' }}>{game.rating} ({game.reviews})</span>
                      </div>
                      <button aria-label={`Add ${game.name}`} style={{ background: 'var(--bb-brown)', border: 'none', borderRadius: '6px', width: '26px', height: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'white' }}>
                        <ShoppingCart size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button ref={nextRef} aria-label="Next"
            style={{ position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%)', zIndex: 10, width: '40px', height: '40px', borderRadius: '50%', background: 'white', border: '2px solid var(--bb-amber)', color: 'var(--bb-brown)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 3px 10px rgba(92,58,30,0.15)' }}>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
