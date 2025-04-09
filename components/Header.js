import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{ backgroundColor: '#fff', borderBottom: '1px solid #ddd', padding: '1rem 2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '1.25rem', margin: 0 }}>UrbanStay</h1>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          background: 'none',
          border: 'none',
          fontSize: '1.5rem',
          display: 'none'
        }} className="mobile-toggle">☰</button>
        <nav className="nav-links" style={{ display: 'flex', gap: '1.5rem' }}>
          <Link href="/">Home</Link>
          <Link href="/chi-siamo">Chi siamo</Link>
          <Link href="/servizi">Servizi</Link>
          <Link href="/regole">Regole della casa</Link>
          <Link href="/checkin">Check-in / Check-out</Link>
        </nav>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .nav-links {
            display: ${menuOpen ? 'flex' : 'none'};
            flex-direction: column;
            gap: 1rem;
            margin-top: 1rem;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}
