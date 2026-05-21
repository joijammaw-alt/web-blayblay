'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { label: 'หน้าแรก', href: '#home' },
  { label: 'เกมแนะนำ', href: '#recommended' },
  { label: 'หมวดหมู่', href: '#categories' },
  { label: 'มือใหม่เริ่มที่นี่', href: '#beginners' },
  { label: 'โปรโมชั่น', href: '#promotions' },
  { label: 'ติดต่อร้าน', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(255,255,255,0.95)' : 'white',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      boxShadow: scrolled ? '0 2px 20px rgba(0,87,184,0.1)' : 'none',
      borderBottom: '1px solid #E8F0FE',
      transition: 'all 0.3s ease',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Image src="/img/695902101_1505839277847633_6383404664583632494_n.png" alt="BlayBlay Logo" width={60} height={60} style={{ objectFit: 'contain' }} />
        </Link>

        {/* Nav */}
        <nav style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          {navLinks.map((item, idx) => (
            <Link key={item.label} href={item.href}
              style={{ fontFamily: 'var(--font-body)', fontWeight: idx === 0 ? 600 : 400, fontSize: '0.95rem', color: idx === 0 ? 'var(--bb-blue)' : 'var(--bb-text-muted)', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: '8px', transition: 'all 0.2s', borderBottom: idx === 0 ? '2px solid var(--bb-blue)' : '2px solid transparent' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--bb-blue)'; }}
              onMouseLeave={e => { if (idx !== 0) (e.currentTarget as HTMLElement).style.color = 'var(--bb-text-muted)'; }}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div>
          <button>
            <MessageCircle size={18} />
            แชทจองโต๊ะ
          </button>
        </div>
      </div>
    </header>
  );
}
