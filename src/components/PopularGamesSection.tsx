'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, ShoppingCart, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const games = [
  {
    name: 'Catan',
    price: 1390,
    originalPrice: 1590,
    rating: 4.8,
    reviews: 128,
    emoji: '🏝️',
    color: '#E8C84A',
    bg: 'linear-gradient(135deg, #F5E642, #C8A800)',
    tag: 'HOT',
  },
  {
    name: '7 Wonders',
    price: 1090,
    originalPrice: 1290,
    rating: 4.7,
    reviews: 86,
    emoji: '🏛️',
    color: '#4A90D9',
    bg: 'linear-gradient(135deg, #64B5F6, #1565C0)',
    tag: 'NEW',
  },
  {
    name: 'Azul',
    price: 1290,
    originalPrice: 1490,
    rating: 4.8,
    reviews: 112,
    emoji: '🔷',
    color: '#42A5F5',
    bg: 'linear-gradient(135deg, #80DEEA, #006064)',
    tag: 'BEST',
  },
  {
    name: 'Dixit',
    price: 890,
    originalPrice: 990,
    rating: 4.9,
    reviews: 73,
    emoji: '🦊',
    color: '#EC407A',
    bg: 'linear-gradient(135deg, #F48FB1, #880E4F)',
    tag: '',
  },
  {
    name: 'Terraforming Mars',
    price: 2190,
    originalPrice: 2490,
    rating: 4.8,
    reviews: 128,
    emoji: '🔴',
    color: '#EF5350',
    bg: 'linear-gradient(135deg, #FF8A65, #BF360C)',
    tag: 'TOP',
  },
  {
    name: 'Wingspan',
    price: 1990,
    originalPrice: 2290,
    rating: 4.8,
    reviews: 95,
    emoji: '🦅',
    color: '#66BB6A',
    bg: 'linear-gradient(135deg, #A5D6A7, #1B5E20)',
    tag: '',
  },
  {
    name: 'Pandemic',
    price: 1390,
    originalPrice: 1590,
    rating: 4.7,
    reviews: 204,
    emoji: '🧬',
    color: '#AB47BC',
    bg: 'linear-gradient(135deg, #CE93D8, #4A148C)',
    tag: 'HOT',
  },
  {
    name: 'Ticket to Ride',
    price: 1590,
    originalPrice: 1890,
    rating: 4.6,
    reviews: 156,
    emoji: '🚂',
    color: '#FF7043',
    bg: 'linear-gradient(135deg, #FFCC02, #E64A19)',
    tag: '',
  },
];

export default function PopularGamesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section
      id="shop"
      ref={ref}
      style={{
        padding: '6rem 0',
        background: 'var(--bb-cream)',
        overflow: 'hidden',
      }}
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '3rem', padding: '0 2rem' }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '1.5rem' }}>🏆</span>
          <h2 className="section-title">POPULAR GAMES</h2>
          <span style={{ fontSize: '1.5rem' }}>⭐</span>
        </div>
      </motion.div>

      {/* Swiper */}
      <div style={{ position: 'relative', padding: '0 4rem' }}>
        {/* Prev Button */}
        <button
          ref={prevRef}
          aria-label="Previous"
          style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: 'white',
            border: '2px solid var(--bb-amber)',
            color: 'var(--bb-brown)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(92,58,30,0.15)',
            transition: 'all 0.2s',
          }}
        >
          <ChevronLeft size={20} />
        </button>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation !== 'boolean' && swiper.params.navigation) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          slidesPerView={2}
          spaceBetween={16}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
        >
          {games.map((game, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.06, duration: 0.5 }}
              >
                <div
                  style={{
                    background: 'white',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 16px rgba(92,58,30,0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(92,58,30,0.2)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(92,58,30,0.1)';
                  }}
                >
                  {/* Game Cover */}
                  <div style={{
                    height: '140px',
                    background: game.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '4rem',
                    position: 'relative',
                  }}>
                    {game.emoji}
                    {game.tag && (
                      <span style={{
                        position: 'absolute',
                        top: '8px',
                        right: '8px',
                        background: game.tag === 'HOT' ? '#E53935' : game.tag === 'NEW' ? '#43A047' : game.tag === 'BEST' ? '#F57C00' : '#1E88E5',
                        color: 'white',
                        fontSize: '0.6rem',
                        fontWeight: 700,
                        fontFamily: 'var(--font-condensed)',
                        padding: '2px 7px',
                        borderRadius: '4px',
                        letterSpacing: '1px',
                      }}>
                        {game.tag}
                      </span>
                    )}
                  </div>

                  {/* Game Info */}
                  <div style={{ padding: '0.75rem' }}>
                    <h3 style={{
                      fontFamily: 'var(--font-condensed)',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      color: 'var(--bb-brown)',
                      marginBottom: '0.25rem',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}>
                      {game.name}
                    </h3>

                    {/* Price */}
                    <div style={{ marginBottom: '0.4rem' }}>
                      <span style={{
                        fontFamily: 'var(--font-body)',
                        fontWeight: 700,
                        fontSize: '1rem',
                        color: 'var(--bb-brown)',
                      }}>
                        ฿{game.price.toLocaleString()}
                      </span>
                    </div>

                    {/* Stars + Add to Cart */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                        <Star size={12} fill="var(--bb-amber)" color="var(--bb-amber)" />
                        <span style={{ fontSize: '0.72rem', color: 'var(--bb-brown-light)' }}>
                          {game.rating} ({game.reviews})
                        </span>
                      </div>
                      <button
                        aria-label={`Add ${game.name} to cart`}
                        style={{
                          background: 'var(--bb-brown)',
                          color: 'white',
                          border: 'none',
                          borderRadius: '8px',
                          width: '28px',
                          height: '28px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.background = 'var(--bb-amber-dark)')}
                        onMouseLeave={e => (e.currentTarget.style.background = 'var(--bb-brown)')}
                      >
                        <ShoppingCart size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Next Button */}
        <button
          ref={nextRef}
          aria-label="Next"
          style={{
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: 'white',
            border: '2px solid var(--bb-amber)',
            color: 'var(--bb-brown)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(92,58,30,0.15)',
            transition: 'all 0.2s',
          }}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* View All Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
        style={{ textAlign: 'center', marginTop: '2.5rem', padding: '0 2rem' }}
      >
        <a href="#all-products" className="btn-outline">VIEW ALL PRODUCTS</a>
      </motion.div>
    </section>
  );
}
