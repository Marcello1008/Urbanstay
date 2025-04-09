import { useState } from 'react';
import Header from '../components/Header';

export default function Prenota() {
  const [dateIn, setDateIn] = useState('');
  const [dateOut, setDateOut] = useState('');

  return (
    <>
      <Header />
      <main style={{ fontFamily: 'sans-serif', padding: '2rem', backgroundColor: '#f9f9f9' }}>
        <div style={{ background: '#fff', padding: '2rem', maxWidth: '600px', margin: '0 auto', borderRadius: '12px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
          <h1 style={{ marginBottom: '1.5rem' }}>Prenota il tuo soggiorno</h1>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label>Nome</label>
              <input type="text" name="nome" required style={{ width: '100%', padding: '0.5rem' }} />
            </div>
            <div>
              <label>Email</label>
              <input type="email" name="email" required style={{ width: '100%', padding: '0.5rem' }} />
            </div>
            <div>
              <label>Telefono</label>
              <input type="tel" name="telefono" required style={{ width: '100%', padding: '0.5rem' }} />
            </div>
            <div>
              <label>Appartamento</label>
              <select style={{ width: '100%', padding: '0.5rem' }}>
                <option>Bilocale Stazione – Vercelli</option>
                <option>Monolocale Relax – Vercelli</option>
                <option>Rhein Apartment – Duisburg</option>
              </select>
            </div>
            <div>
              <label>Data di arrivo</label>
              <input type="date" value={dateIn} onChange={(e) => setDateIn(e.target.value)} style={{ width: '100%', padding: '0.5rem' }} />
            </div>
            <div>
              <label>Data di partenza</label>
              <input type="date" value={dateOut} onChange={(e) => setDateOut(e.target.value)} style={{ width: '100%', padding: '0.5rem' }} />
            </div>
            <button type="submit" style={{ backgroundColor: '#0070f3', color: 'white', padding: '0.75rem', border: 'none', borderRadius: '8px' }}>
              Invia richiesta
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
