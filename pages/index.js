import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';

export default function Home() {
  const apartments = [
    {
      name: 'Bilocale Stazione – Vercelli',
      slug: 'vercelli1',
      image: '/images/vercelli1.jpg'
    },
    {
      name: 'Monolocale Relax – Vercelli',
      slug: 'vercelli2',
      image: '/images/vercelli2.jpg'
    },
    {
      name: 'Rhein Apartment – Duisburg',
      slug: 'duisburg',
      image: '/images/duisburg.jpg'
    }
  ];

  return (
    <>
      <Header />
      <main style={{ fontFamily: 'sans-serif', padding: '2rem', background: '#f5f5f5' }}>
        <h1 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}>UrbanStay</h1>
        <section style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          {apartments.map((apartment) => (
            <Link href={`/apartments/${apartment.slug}`} key={apartment.slug} style={{ textDecoration: 'none' }}>
              <div style={{
                background: '#fff',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s',
                cursor: 'pointer'
              }}>
                <Image src={apartment.image} alt={apartment.name} width={600} height={400} />
                <div style={{ padding: '1rem' }}>
                  <h2 style={{ margin: 0, fontSize: '1.2rem', color: '#333' }}>{apartment.name}</h2>
                </div>
              </div>
            </Link>
          ))}
        </section>
        <div style={{ textAlign: 'center' }}>
          <Link href="/prenota" style={{
            backgroundColor: '#0070f3',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            textDecoration: 'none'
          }}>📅 Prenota ora</Link>
        </div>
      </main>
    </>
  );
}
