import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{ backgroundColor: '#fff', borderBottom: '1px solid #ddd', padding: '1rem', position: 'sticky', top: 0, zIndex: 1000 }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '1.5rem', margin: 0 }}>UrbanStay</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', fontSize: '1.5rem', display: 'none' }} id="menu-toggle">☰</button>
          <ul style={{
            display: 'flex',
            gap: '1.5rem',
            listStyle: 'none',
            margin: 0,
            padding: 0
          }} className="menu-desktop">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/chi-siamo">Chi siamo</Link></li>
            <li><Link href="/servizi">Servizi</Link></li>
            <li><Link href="/regole">Regole della casa</Link></li>
            <li><Link href="/checkin">Check-in / Check-out</Link></li>
          </ul>
        </div>
      </nav>
      <style jsx>{`
        @media (max-width: 768px) {
          #menu-toggle {
            display: block;
          }
          .menu-desktop {
            display: ${open ? 'flex' : 'none'};
            flex-direction: column;
            background: #fff;
            padding: 1rem;
            border-top: 1px solid #ddd;
          }
        }
      `}</style>
    </header>
  );
}
