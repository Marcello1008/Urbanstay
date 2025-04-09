import { useState } from 'react';

export default function Prenota() {
  const [date, setDate] = useState('');

  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Prenota il tuo soggiorno</h1>
      <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
        <label>Nome</label>
        <input type="text" name="nome" required />
        <label>Email</label>
        <input type="email" name="email" required />
        <label>Telefono</label>
        <input type="tel" name="telefono" required />
        <label>Appartamento</label>
        <select>
          <option>Bilocale Stazione – Vercelli</option>
          <option>Monolocale Relax – Vercelli</option>
          <option>Rhein Apartment – Duisburg</option>
        </select>
        <label>Data di arrivo e partenza</label>
        <input type="date" onChange={(e) => setDate(e.target.value)} />
        <input type="date" />
        <button type="submit" style={{ marginTop: '1rem' }}>Invia richiesta</button>
      </form>
    </main>
  );
}
