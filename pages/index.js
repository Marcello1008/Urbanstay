
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-6 space-y-10 max-w-6xl mx-auto font-sans text-neutral-800">
        <section className="text-center space-y-2">
          <h1 className="text-5xl font-bold tracking-tight">UrbanStay</h1>
          <p className="text-lg text-muted-foreground">
            Soggiorna con stile e convenienza tra Vercelli e Duisburg – a un passo da Milano e Düsseldorf
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="space-y-4">
              <img src="https://source.unsplash.com/400x300/?apartment,modern" alt="Appartamento Vercelli 1" className="rounded-xl shadow" />
              <h3 className="text-xl font-medium">Bilocale Stazione</h3>
              <p className="text-sm text-gray-600">
                A due passi dalla stazione di Vercelli. Wi-Fi veloce, cucina attrezzata, aria condizionata.
              </p>
              <Button className="w-full">Scopri di più</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-4">
              <img src="https://source.unsplash.com/400x300/?apartment,minimal" alt="Appartamento Vercelli 2" className="rounded-xl shadow" />
              <h3 className="text-xl font-medium">Monolocale Relax</h3>
              <p className="text-sm text-gray-600">
                Comfort e semplicità nel centro città. Ideale per soggiorni brevi e trasfertisti.
              </p>
              <Button className="w-full">Scopri di più</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-4">
              <img src="https://source.unsplash.com/400x300/?apartment,germany" alt="Appartamento Duisburg" className="rounded-xl shadow" />
              <h3 className="text-xl font-medium">Rhein Apartment</h3>
              <p className="text-sm text-gray-600">
                Soggiorno tranquillo a pochi minuti da Düsseldorf. Appartamento completo di ogni comfort.
              </p>
              <Button className="w-full">Scopri di più</Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </>
  );
}
