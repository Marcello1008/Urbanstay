import Image from 'next/image';
import Link from 'next/link';

export default function Vercelli_1() {
  return (
    <main style={ fontFamily: 'sans-serif', padding: '2rem' }>
      <h1>Vercelli 1</h1>
      <Image src="/images/vercelli1.jpg" alt="Vercelli_1" width=600 height=400 />
      <p>Appartamento vicino alla stazione, arredato e comodo.</p>
      <p><Link href="/">← Torna alla home</Link></p>
    </main>
  );
}
