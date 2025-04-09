import Image from 'next/image';
import Link from 'next/link';

export default function Duisburg() {
  return (
    <main style={ fontFamily: 'sans-serif', padding: '2rem' }>
      <h1>Duisburg</h1>
      <Image src="/images/duisburg.jpg" alt="Duisburg" width=600 height=400 />
      <p>Appartamento tranquillo nei pressi del Reno.</p>
      <p><Link href="/">← Torna alla home</Link></p>
    </main>
  );
}
