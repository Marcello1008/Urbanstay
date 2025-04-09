import Image from 'next/image';
import Link from 'next/link';

export default function Vercelli2() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Monolocale Relax – Vercelli</h1>
      <Image src="/images/vercelli2.jpg" alt="Monolocale Vercelli" width={600} height={400} />
      <p>Accogliente monolocale nel cuore di Vercelli, perfetto per soggiorni in totale relax. Dotato di zona giorno con letto matrimoniale, angolo cottura, bagno privato e connessione internet gratuita.</p>
      <p><Link href="/">← Torna alla home</Link></p>
    </main>
  );
}