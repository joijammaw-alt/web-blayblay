'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, User, ShoppingCart } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Brewlean', href: '#' },
  { label: 'Bordgame', href: '#' },
  { label: 'Blayblay Play Lab', href: '#' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [cartCount] = useState(2);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(255,248,231,0.97)' : 'rgba(255,248,231,0.92)',
      backdropFilter: 'blur(14px)',
      boxShadow: scrolled ? '0 2px 20px rgba(92,58,30,0.12)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(245,200,66,0.25)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', height: '68px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <div style={{ width: '38px', height: '38px', background: 'var(--bb-amber)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>🐻</div>
          <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.7rem', color: 'var(--bb-brown)', letterSpacing: '1px' }}>BlayBlay</span>
        </Link>

        {/* Nav */}
        <nav style={{ display: 'flex', gap: '0', alignItems: 'center' }}>
          {navLinks.map((item) => (
            <Link key={item.label} href={item.href}
              style={{ fontFamily: 'var(--font-condensed)', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.5px', color: 'var(--bb-brown)', textDecoration: 'none', padding: '0.4rem 1.1rem', borderRadius: '6px', transition: 'all 0.2s', whiteSpace: 'nowrap', opacity: 0.8 }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; (e.currentTarget as HTMLElement).style.background = 'rgba(245,200,66,0.15)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '0.8'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {[<Search key="s" size={20} />, <User key="u" size={20} />].map((icon, i) => (
            <button key={i} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--bb-brown)', padding: '6px', display: 'flex' }}>
              {icon}
            </button>
          ))}
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--bb-brown)', padding: '6px', position: 'relative', display: 'flex' }}>
            <ShoppingCart size={20} />
            <span style={{ position: 'absolute', top: '-2px', right: '-2px', background: 'var(--bb-red)', color: 'white', fontSize: '0.6rem', fontWeight: 700, borderRadius: '50%', width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{cartCount}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
