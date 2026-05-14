'use client';
import { motion } from 'framer-motion';
import { PartyPopper, Users, Map, Lightbulb, UserCheck, UsersRound, GraduationCap, Smile, Package, MessageCircle } from 'lucide-react';

const categories = [
  { icon: <PartyPopper size={28} />, label: 'ปาร์ตี้', color: '#FF477E', bg: '#FFF0F5' },
  { icon: <Users size={28} />, label: 'ครอบครัว', color: '#FF9900', bg: '#FFF8E7' },
  { icon: <Map size={28} />, label: 'วางแผน', color: '#27AE60', bg: '#EAFDF2' },
  { icon: <Lightbulb size={28} />, label: 'มือใหม่เล่นได้', color: '#0057B8', bg: '#E8F0FE' },
  { icon: <UserCheck size={28} />, label: 'เล่น 2 คน', color: '#8E44AD', bg: '#F4E8FC' },
  { icon: <UsersRound size={28} />, label: 'เล่นหลายคน', color: '#00C4CC', bg: '#E0FAFA' },
];

const features = [
  { icon: <GraduationCap size={32} />, title: 'มีคนสอนทุกเกม', desc: 'สอนเข้าใจง่าย เล่นเป็นภายในวันเดียว', color: '#0057B8' },
  { icon: <Smile size={32} />, title: 'เหมาะกับมือใหม่', desc: 'ไม่เคยเล่นก็สนุกได้ ทีมงานใจดี เป็นกันเอง', color: '#FF9900' },
  { icon: <Package size={32} />, title: 'มีเกมให้เลือกหลายแนว', desc: 'เกมใหม่มาเรื่อยๆ ไม่ซ้ำจำเจ', color: '#27AE60' },
  { icon: <MessageCircle size={32} />, title: 'จองโต๊ะสะดวกผ่าน LINE', desc: 'ทักง่าย ตอบไว จองได้ทันที', color: '#00B900' },
];

export default function FeaturesAndCategories() {
  return (
    <section id="categories" style={{ padding: '4rem 2rem', background: '#F8FBFF' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
        
        {/* Left: Categories */}
        <div>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--bb-blue)', marginBottom: '2rem' }}>เลือกเกมตามสไตล์ที่ใช่</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {categories.map((cat, i) => (
              <motion.div key={cat.label} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}
                style={{ background: cat.bg, border: `1px solid ${cat.color}30`, borderRadius: '16px', padding: '1.5rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', cursor: 'pointer', transition: 'all 0.2s' }}
                whileHover={{ y: -5, boxShadow: `0 8px 20px ${cat.color}20` }}>
                <div style={{ color: cat.color }}>{cat.icon}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.9rem', color: cat.color }}>{cat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Features */}
        <div>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--bb-blue)', marginBottom: '2rem' }}>ทำไมต้องที่ BLAY BLAY?</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
            {features.map((feat, i) => (
              <motion.div key={feat.title} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                style={{ background: 'white', border: '1px solid #E8F0FE', borderRadius: '16px', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                <div style={{ color: feat.color, marginBottom: '1rem', background: `${feat.color}15`, padding: '1rem', borderRadius: '50%' }}>
                  {feat.icon}
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '1rem', color: 'var(--bb-blue)', marginBottom: '0.5rem' }}>{feat.title}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--bb-text-muted)', lineHeight: 1.5 }}>{feat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
