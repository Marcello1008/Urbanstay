import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem', background: '#f9f9f9' }}>
      <section style={{ background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Benvenuto su UrbanStay</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>Soggiorni di qualità a Vercelli e Duisburg</p>
      </section>
      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem' }}>I nostri appartamenti</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><Link href="/apartments/vercelli1">🏠 Bilocale Stazione – Vercelli</Link></li>
          <li><Link href="/apartments/vercelli2">🛏 Monolocale Relax – Vercelli</Link></li>
          <li><Link href="/apartments/duisburg">🌉 Rhein Apartment – Duisburg</Link></li>
        </ul>
      </section>
      <section style={{ marginTop: '2rem' }}>
        <Link href="/prenota" style={{ backgroundColor: '#0070f3', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', display: 'inline-block', textDecoration: 'none' }}>📅 Prenota ora</Link>
      </section>
    </main>
  );
}
