import Image from 'next/image';
import Link from 'next/link';

export default function Duisburg() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Rhein Apartment – Duisburg</h1>
      <Image src="/images/duisburg.jpg" alt="Appartamento Duisburg" width={600} height={400} />
      <p>Appartamento tranquillo e ben arredato nella zona del Reno a Duisburg. Ideale per visitare la Ruhr o recarsi a Düsseldorf in pochi minuti. Include soggiorno con divano letto, cucina completa e terrazza.</p>
      <p><Link href="/">← Torna alla home</Link></p>
    </main>
  );
}