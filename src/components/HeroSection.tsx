'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Clock, Users, Play, MessageCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" style={{ paddingTop: '120px', paddingBottom: '4rem', background: 'linear-gradient(180deg, #F8FBFF 0%, #E8F0FE 100%)', position: 'relative', overflow: 'hidden' }}>
      
      {/* Decorative BG elements */}
      <div className="animate-float" style={{ position: 'absolute', top: '15%', left: '45%', color: '#FF9900', fontSize: '2rem' }}>⭐</div>
      <div className="animate-float2" style={{ position: 'absolute', top: '25%', right: '15%', color: '#0057B8', fontSize: '3rem', opacity: 0.8 }}>🧩</div>
      <div style={{ position: 'absolute', bottom: '-50px', left: 0, right: 0, height: '150px', background: 'white', borderRadius: '50% 50% 0 0' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2rem', position: 'relative', zIndex: 10 }}>
        
        {/* Left Content */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(3.5rem, 6vw, 5rem)', color: 'var(--bb-blue)', lineHeight: 1.1, marginBottom: '1rem' }}>
            เล่นบอร์ดเกม<br />
            <span style={{ color: '#003366' }}>สนุกได้ทุกวัน</span>
            <span style={{ color: '#FF9900', display: 'inline-block', marginLeft: '10px' }}>⭐</span>
          </h1>
          
          <h2 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '1.2rem', color: 'var(--bb-brown-light)', marginBottom: '1.2rem', lineHeight: 1.5 }}>
            ร้านบอร์ดเกมกำแพงเพชร แนะนำเกมให้ เล่นเป็นภายในวันเดียว
          </h2>
          
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--bb-text-muted)', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '480px' }}>
            ไม่ว่าคุณจะมากับเพื่อน ครอบครัว หรือมาเดท เรามีเกมให้เลือกหลากหลายแนว มีคนสอนให้ เล่นสนุก เป็นกันเอง เริ่มเล่นได้เลย แม้ไม่เคยเล่นมาก่อน!
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <a href="#recommended" className="btn-primary" style={{ background: 'var(--bb-blue)', border: 'none', borderRadius: '30px', boxShadow: '0 6px 15px rgba(0,87,184,0.3)', padding: '0.8rem 1.8rem', fontSize: '1.05rem', fontFamily: 'var(--font-body)' }}>
              <Play size={20} fill="currentColor" /> ดูเกมแนะนำ
            </a>
            <a href="https://line.me" target="_blank" rel="noreferrer" className="btn-primary" style={{ background: '#00B900', border: 'none', borderRadius: '30px', boxShadow: '0 6px 15px rgba(0,185,0,0.3)', padding: '0.8rem 1.8rem', fontSize: '1.05rem', fontFamily: 'var(--font-body)' }}>
              <MessageCircle size={20} fill="currentColor" /> จองโต๊ะผ่าน LINE
            </a>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'white', padding: '0.6rem 1.2rem', borderRadius: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', fontSize: '0.9rem', color: 'var(--bb-blue)', fontWeight: 500 }}>
              <Clock size={18} /> เปิดทุกวัน 12.00 - 21.00
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'white', padding: '0.6rem 1.2rem', borderRadius: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', fontSize: '0.9rem', color: 'var(--bb-blue)', fontWeight: 500 }}>
              <Users size={18} /> มีคนสอน - พาเล่นทุกเกม
            </div>
          </div>
        </motion.div>

        {/* Right Content - Game Boxes composition */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          style={{ position: 'relative', height: '100%', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          
          <div className="animate-float" style={{ position: 'absolute', zIndex: 3, transform: 'rotate(-10deg) scale(0.9)', left: '0%', bottom: '20%', boxShadow: '10px 10px 30px rgba(0,0,0,0.2)', borderRadius: '8px', overflow: 'hidden' }}>
            <Image src="/img/690953298_1332313532099290_2726634727127638217_n.jpg" alt="Dixit" width={180} height={180} style={{ objectFit: 'cover' }} />
          </div>
          
          <div className="animate-float2" style={{ position: 'absolute', zIndex: 2, transform: 'rotate(5deg) scale(0.95)', right: '10%', top: '15%', boxShadow: '10px 10px 30px rgba(0,0,0,0.2)', borderRadius: '8px', overflow: 'hidden' }}>
            <Image src="/img/665990488_4463411690642997_4580202065504028951_n.jpg" alt="Carcassonne" width={190} height={190} style={{ objectFit: 'cover' }} />
          </div>
          
          <div style={{ position: 'absolute', zIndex: 4, transform: 'rotate(2deg)', top: '25%', left: '25%', boxShadow: '15px 15px 40px rgba(0,0,0,0.25)', borderRadius: '8px', overflow: 'hidden', border: '4px solid white' }}>
            <Image src="/img/693435817_2038086813725139_1562932010930628367_n.jpg" alt="Codenames" width={220} height={220} style={{ objectFit: 'cover' }} />
          </div>

          <div style={{ position: 'absolute', right: '5%', bottom: '15%', fontSize: '4rem', filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.1))' }}>🎲</div>
        </motion.div>
      </div>
    </section>
  );
}
