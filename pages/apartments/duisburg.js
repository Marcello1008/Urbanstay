import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';

export default function Rhein_Apartment() {
  return (
    <>
      <Header />
      <main style={ fontFamily: 'sans-serif', padding: '2rem' }>
        <h1>Rhein Apartment</h1>
        <Image src="/images/duisburg.jpg" alt="Rhein_Apartment" width=600 height=400 />
        <p>Tranquillo appartamento nei pressi del Reno, vicino a Düsseldorf.</p>
        <p style={ marginTop: '2rem' }>
          <Link href="/" style={
            padding: '0.5rem 1rem',
            backgroundColor: '#0070f3',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px'
          }>← Torna alla Home</Link>
        </p>
      </main>
    </>
  );
}
