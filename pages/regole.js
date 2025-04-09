import Header from '../components/Header';

export default function Regole() {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>Regole della casa</h1>
        <ul>
          <li>Non è consentito fumare negli appartamenti</li>
          <li>Non sono ammessi animali domestici</li>
          <li>Silenzio dopo le 22:00</li>
          <li>Si prega di trattare l'appartamento con rispetto</li>
        </ul>
      </main>
    </>
  );
}
