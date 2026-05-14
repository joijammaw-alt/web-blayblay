'use client';
import Link from 'next/link';
import { Share2, Camera, Play, MessageCircle, Music } from 'lucide-react';

const cols = {
  SHOP: ['All Products', 'Categories', 'New Arrival', 'Promotions'],
  'HELP & INFO': ['คำถามที่พบบ่อย', 'การจัดส่งสินค้า', 'นโยบายการคืนสินค้า', 'ติดต่อเรา'],
  'ABOUT US': ['เกี่ยวกับเรา', 'รีวิวลูกค้า', 'ร่วมงานกับเรา'],
};
const socials = [
  { icon: <Share2 size={14} />, l: 'f' },
  { icon: <Camera size={14} />, l: 'ig' },
  { icon: <Play size={14} />, l: 'yt' },
  { icon: <MessageCircle size={14} />, l: 'd' },
  { icon: <Music size={14} />, l: 'tt' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#F5EDD0', borderTop: '2px solid rgba(245,200,66,0.3)', padding: '3rem 2rem 1.25rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1.2fr 1fr 1.5fr', gap: '2.5rem', marginBottom: '2rem' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <div style={{ width: '32px', height: '32px', background: 'var(--bb-amber)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>🐻</div>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--bb-brown)' }}>BlayBlay</span>
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--bb-brown-light)', lineHeight: 1.7, marginBottom: '0.9rem', maxWidth: '200px' }}>
              มากกว่าร้านค้า คือพื้นที่แห่งแรงบันดาลใจ<br />สำหรับทุกการใช้ชีวิตของคุณ<br />
              ติดต่อเรา เลย 10110<br />ติดตามเราได้ที่
            </p>
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              {socials.map(s => (
                <a key={s.l} href="#" aria-label={s.l}
                  style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'var(--bb-amber)', color: 'var(--bb-brown)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--bb-brown)'; (e.currentTarget as HTMLElement).style.color = 'white'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--bb-amber)'; (e.currentTarget as HTMLElement).style.color = 'var(--bb-brown)'; }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(cols).map(([title, links]) => (
            <div key={title}>
              <h4 style={{ fontFamily: 'var(--font-condensed)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--bb-brown)', letterSpacing: '1px', marginBottom: '0.7rem' }}>{title}</h4>
              <ul style={{ listStyle: 'none' }}>
                {links.map(l => (
                  <li key={l} style={{ marginBottom: '0.38rem' }}>
                    <Link href="#" style={{ fontSize: '0.78rem', color: 'var(--bb-brown-light)', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--bb-brown)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--bb-brown-light)')}>
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-condensed)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--bb-brown)', letterSpacing: '1px', marginBottom: '0.7rem' }}>CONTACT US</h4>
            {[
              { icon: '📞', text: '067-123-4567' },
              { icon: '✉️', text: 'hello@blayblay.com' },
              { icon: '🕐', text: 'อ.-ส. 19:00 – 20:00 น.' },
            ].map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.45rem' }}>
                <span style={{ fontSize: '0.9rem' }}>{c.icon}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--bb-brown-light)' }}>{c.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(92,58,30,0.12)', paddingTop: '1rem', textAlign: 'center', fontSize: '0.75rem', color: 'var(--bb-brown-light)' }}>
          © 2023 BlayBlay. All rights reserved. 🎲
        </div>
      </div>
    </footer>
  );
}
