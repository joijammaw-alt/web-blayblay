'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const gamesRow = [
  '/img/665990488_4463411690642997_4580202065504028951_n.jpg',
  '/img/690953298_1332313532099290_2726634727127638217_n.jpg',
  '/img/693435817_2038086813725139_1562932010930628367_n.jpg',
  '/img/665990488_4463411690642997_4580202065504028951_n.jpg',
  '/img/690953298_1332313532099290_2726634727127638217_n.jpg',
  '/img/693435817_2038086813725139_1562932010930628367_n.jpg',
  '/img/665990488_4463411690642997_4580202065504028951_n.jpg',
];

export default function Footer() {
  return (
    <footer style={{ background: '#003366', color: 'white' }}>
      {/* Game Images Row */}
      <div style={{ display: 'flex', overflowX: 'auto', background: 'white', padding: '10px 0', borderTop: '1px solid #E8F0FE', borderBottom: '2px solid #0057B8' }}>
        {gamesRow.map((src, i) => (
          <div key={i} style={{ flex: '0 0 auto', width: '120px', height: '120px', margin: '0 10px', position: 'relative', borderRadius: '8px', overflow: 'hidden' }}>
            <Image src={src} alt="Game" fill style={{ objectFit: 'cover' }} />
          </div>
        ))}
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 2rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1.5fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
          
          {/* Logo & Slogan */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <Image src="/img/695902101_1505839277847633_6383404664583632494_n.png" alt="BlayBlay Logo" width={80} height={80} style={{ borderRadius: '8px' }} />
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', lineHeight: 1.1 }}>
              ชวนกันมาเล่น<br/>สนุกได้ทุกวัน
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '1.1rem', marginBottom: '1.2rem', color: 'var(--bb-amber)' }}>ลิงก์ด่วน</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {['หน้าแรก', 'เกมแนะนำ', 'หมวดหมู่', 'ข้อกำหนด'].map(l => (
                <li key={l}>
                  <Link href="#" style={{ color: '#E8F0FE', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--bb-amber)'}
                    onMouseLeave={e => e.currentTarget.style.color = '#E8F0FE'}>
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '1.1rem', marginBottom: '1.2rem', color: 'var(--bb-amber)' }}>ติดต่อเรา</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#E8F0FE', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><Phone size={18} /> 09x-xxx-xxxx</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><Mail size={18} /> @blayblay</div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                <MapPin size={18} style={{ marginTop: '2px', flexShrink: 0 }} /> 
                <span>กำแพงเพชร (ใกล้ตลาดเทศบาล 2)<br/>จ.กำแพงเพชร 62000</span>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '1.1rem', marginBottom: '1.2rem', color: 'var(--bb-amber)' }}>ติดตามเรา</h4>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ width: '40px', height: '40px', background: '#1877F2', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontWeight: 'bold' }}>FB</a>
              <a href="#" style={{ width: '40px', height: '40px', background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontWeight: 'bold' }}>IG</a>
              <a href="#" style={{ width: '40px', height: '40px', background: '#00B900', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}><MessageCircle size={20} /></a>
            </div>
            
            {/* Flying Dice Deco */}
            <div style={{ marginTop: '2rem', fontSize: '3rem', opacity: 0.8, transform: 'rotate(15deg)' }}>🎲🧩</div>
          </div>

        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', textAlign: 'center', fontSize: '0.8rem', color: '#88a8c4' }}>
          © 2024 BlayBlay Board Game Cafe. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
