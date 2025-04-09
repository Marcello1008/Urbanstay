import Header from '../components/Header';

export default function Checkin() {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>Check-in / Check-out</h1>
        <p>Check-in: dalle ore 14:00</p>
        <p>Check-out: entro le ore 11:00</p>
        <p>Per esigenze particolari, contattaci in anticipo e faremo del nostro meglio per venire incontro alle tue necessità.</p>
      </main>
    </>
  );
}
