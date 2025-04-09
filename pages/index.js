import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [selected, setSelected] = useState(null);

  const apartments = [
    { id: 1, name: "Bilocale Stazione – Vercelli", image: "/images/vercelli1.jpg", desc: "A due passi dalla stazione." },
    { id: 2, name: "Monolocale Relax – Vercelli", image: "/images/vercelli2.jpg", desc: "Comfort e semplicità in centro." },
    { id: 3, name: "Rhein Apartment – Duisburg", image: "/images/duisburg.jpg", desc: "Vicino a Düsseldorf." },
  ];

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>UrbanStay</h1>
      <p>Scopri i nostri appartamenti a Vercelli e Duisburg</p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {apartments.map(ap => (
          <div
            key={ap.id}
            onClick={() => setSelected(ap.id)}
            style={{
              cursor: 'pointer',
              border: '2px solid #ccc',
              borderRadius: '8px',
              padding: '1rem',
              width: '300px',
              background: selected === ap.id ? '#f0f0f0' : '#fff'
            }}
          >
            <Image src={ap.image} alt={ap.name} width={280} height={180} />
            <h3>{ap.name}</h3>
            <p>{ap.desc}</p>
            {selected === ap.id && <p style={{ fontStyle: 'italic' }}>Hai selezionato questo appartamento.</p>}
          </div>
        ))}
      </div>
    </main>
  );
}
