import { SEO } from '../components/SEO';

export function About() {
  return (
    <>
      <SEO
        title="O meni"
        description="Spoznajte mene in mojo vizijo. Adna Cosmetics je salon na Vrhniki z dolgoletnimi izkušnjami in certifikati s področja lepote."
      />
      <div className="pt-24 pb-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-brand-dark mb-6">O meni</h1>
          <p className="max-w-2xl mx-auto text-brand-dark/70 text-lg">
            Spoznajte zgodbo salona Adna Cosmetics.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px] w-full">
            <div className="absolute inset-0 bg-brand-nude translate-x-4 translate-y-4"></div>
            <div className="absolute inset-0 bg-brand-dark/5 flex items-center justify-center border border-brand-rose">
              <span className="text-brand-dark/30 font-serif italic text-xl">Profilna slika</span>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-serif mb-8">Adna Cosmetics</h2>
            <div className="prose prose-lg text-brand-dark/80 max-w-none">
              <p className="mb-6">
                Dobrodošli v mojem kotičku lepote. Že od nekdaj me navdihuje estetika in dobro počutje, zato sem se odločila svoje znanje in strast pretopiti v profesionalen kozmetični salon.
              </p>
              <h3 className="text-2xl font-serif text-brand-dark mt-10 mb-4">Vizija</h3>
              <p className="mb-6">
                Moja vizija je ponuditi prostor, kjer se vsaka stranka počuti cenjeno in sproščeno. Želim poudariti vašo naravno lepoto in poskrbeti za vaše dobro počutje z individualnim pristopom.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-brand-nude/30 p-6">
                  <h4 className="font-serif text-xl mb-3">Certifikati</h4>
                  <ul className="list-disc list-inside space-y-2 text-brand-dark/70">
                    <li>Certifikat za Laminacijo obrvi</li>
                    <li>Certifikat za Lash Lift</li>
                    <li>Certifikat za modeliranje nohtov</li>
                  </ul>
                </div>
                <div className="bg-brand-nude/30 p-6">
                  <h4 className="font-serif text-xl mb-3">Izkušnje</h4>
                  <ul className="list-disc list-inside space-y-2 text-brand-dark/70">
                    <li>Večletne izkušnje v kozmetični negi</li>
                    <li>Nenehno izobraževanje in sledenje trendom</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
