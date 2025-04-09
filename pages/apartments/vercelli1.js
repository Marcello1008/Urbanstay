import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';

export default function Bilocale_Stazione() {
  return (
    <>
      <Header />
      <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
        <h1>Bilocale Stazione</h1>
        <Image src="/images/vercelli1.jpg" alt="Bilocale_Stazione" width=600 height=400 />
        <p>Appartamento moderno e accogliente situato vicino alla stazione.</p>
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
