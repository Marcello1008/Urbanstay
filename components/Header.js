import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

  return (
    <header style={{
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e0e0e0',
      padding: '1rem 2rem',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.04)'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        fontFamily: 'sans-serif'
      }}>
        <h1 style={{ fontSize: '1.25rem', fontWeight: 600 }}>UrbanStay</h1>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{
          display: 'none',
          background: 'none',
          border: 'none',
          fontSize: '1.5rem'
        }} className="menu-toggle">☰</button>
        <nav className="desktop-menu" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <Link href="/">Home</Link>
          <Link href="/chi-siamo">Chi siamo</Link>
          <Link href="/servizi">Servizi</Link>
          <Link href="/regole">Regole della casa</Link>
          <Link href="/checkin">Check-in / Check-out</Link>
          <div style={{ position: 'relative' }} onMouseEnter={() => setShowSubMenu(true)} onMouseLeave={() => setShowSubMenu(false)}>
            <span style={{ cursor: 'pointer' }}>Cosa fare a...</span>
            {showSubMenu && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                backgroundColor: '#fff',
                border: '1px solid #ddd',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                padding: '0.5rem 1rem',
                zIndex: 10
              }}>
                <div><Link href="/vercelli">Vercelli e dintorni</Link></div>
                <div><Link href="/duisburg">Duisburg e dintorni</Link></div>
              </div>
            )}
          </div>
        </nav>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: ${mobileMenuOpen ? 'flex' : 'none'};
            flex-direction: column;
            gap: 1rem;
            margin-top: 1rem;
          }
          .menu-toggle {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}
