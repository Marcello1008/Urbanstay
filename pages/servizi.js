import Header from '../components/Header';

export default function Servizi() {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>Servizi</h1>
        <ul>
          <li>Wi-Fi veloce e gratuito</li>
          <li>Cucina attrezzata</li>
          <li>Aria condizionata e riscaldamento</li>
          <li>Check-in flessibile</li>
          <li>Assistenza ospiti 24/7</li>
        </ul>
      </main>
    </>
  );
}
