import Image from 'next/image';
import Link from 'next/link';

export default function Vercelli_2() {
  return (
    <main style={ fontFamily: 'sans-serif', padding: '2rem' }>
      <h1>Vercelli 2</h1>
      <Image src="/images/vercelli2.jpg" alt="Vercelli_2" width=600 height=400 />
      <p>Monolocale accogliente per brevi soggiorni.</p>
      <p><Link href="/">← Torna alla home</Link></p>
    </main>
  );
}
