import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>UrbanStay</h1>
      <p>Benvenuto su UrbanStay – scegli il tuo appartamento:</p>
      <ul>
        <li><Link href="/apartments/vercelli1">Bilocale Stazione – Vercelli</Link></li>
        <li><Link href="/apartments/vercelli2">Monolocale Relax – Vercelli</Link></li>
        <li><Link href="/apartments/duisburg">Rhein Apartment – Duisburg</Link></li>
      </ul>
      <p><Link href="/prenota">📅 Prenota ora</Link></p>
    </main>
  );
}
