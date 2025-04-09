import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';

export default function Monolocale_Relax() {
  return (
    <>
      <Header />
      <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
        <h1>Monolocale Relax</h1>
        <Image src="/images/vercelli2.jpg" alt="Monolocale Relax" width={600} height={400} />
        <p>Monolocale nel centro di Vercelli, ideale per brevi soggiorni.</p>
        <p style={{ marginTop: '2rem' }}>
          <Link href="/" style={
            padding: '0.5rem 1rem',
            backgroundColor: '#0070f3',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px'
          }}>← Torna alla Home</Link>
        </p>
      </main>
    </>
  );
}
