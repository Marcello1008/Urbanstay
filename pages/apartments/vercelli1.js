import Image from 'next/image';
import Link from 'next/link';

export default function Vercelli1() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Bilocale Stazione – Vercelli</h1>
      <Image src="/images/vercelli1.jpg" alt="Bilocale Vercelli" width={600} height={400} />
      <p>Bilocale moderno e accogliente situato a pochi passi dalla stazione ferroviaria di Vercelli. Ideale per brevi soggiorni o trasferte lavorative. Include Wi-Fi veloce, cucina attrezzata e aria condizionata.</p>
      <p><Link href="/">← Torna alla home</Link></p>
    </main>
  );
}