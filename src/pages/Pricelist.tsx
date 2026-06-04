import { SEO } from '../components/SEO';
import { AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const prices = {
  depilacija: [
    { name: 'Cele noge', price: '30 €' },
    { name: 'Noge od/do kolen', price: '20 €' },
    { name: 'Pazduhe', price: '12 €' },
    { name: 'Roke', price: '20 €' },
    { name: 'Obraz', price: '10 €' },
  ],
  obrviTrepalnice: [
    { name: 'Laminacija obrvi', price: '35 €' },
    { name: 'Laminacija obrvi z barvanjem', price: '40 €' },
    { name: 'Lash lift', price: '35 €' },
    { name: 'Lash lift z barvanjem', price: '40 €' },
    { name: 'Duo', price: '60 €' },
    { name: 'Duo z barvanjem', price: '70 €' },
  ],
  nohti: [
    { name: 'Osnovna manikura', price: '25 €' },
    { name: 'Podaljševanje S', price: '35 €' },
    { name: 'Podaljševanje M', price: '40 €' },
    { name: 'Podaljševanje L', price: '45 €' },
    { name: 'Permanentno lakiranje', price: '30 €' },
    { name: 'Odstranjevanje', price: '15 €' },
    { name: 'Popravilo nohta', price: '4-8 €' },
    { name: 'Grajena francoska', price: '10-15 €' },
    { name: 'Poslikava', price: '5-10 €' },
    { name: 'Dodatki', price: '0,50–2 €' },
    { name: 'Rekonstrukcija / laminacija nohtov', price: '5 €' },
  ]
};

export function Pricelist() {
  return (
    <>
      <SEO
        title="Cenik"
        description="Aktualni cenik vseh storitev salona Adna Cosmetics. Preveri cene depilacije, nege nohtov, urejanja obrvi in trepalnic."
      />
      <div className="pt-24 pb-16 bg-brand-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-brand-dark mb-6">Cenik</h1>
          <p className="text-brand-dark/70 text-lg">
            Transparentne cene za vrhunske storitve.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Depilacija */}
          <div>
            <h2 className="text-3xl font-serif mb-8 text-brand-dark border-b border-brand-nude pb-4">1. Depilacija</h2>
            <div className="space-y-4">
              {prices.depilacija.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center group">
                  <span className="text-lg text-brand-dark/80 group-hover:text-brand-taupe transition-colors">{item.name}</span>
                  <div className="flex-grow border-b border-dotted border-brand-taupe/30 mx-4"></div>
                  <span className="text-lg font-medium text-brand-dark whitespace-nowrap">{item.price}</span>
                  <Link to="/kontakt" className="ml-4 px-4 py-2 border border-brand-dark text-brand-dark uppercase tracking-widest text-xs hover:bg-brand-dark hover:text-brand-light transition-colors whitespace-nowrap">Naroči se</Link>
                </div>
              ))}
            </div>
          </div>

          {/* Obrvi in trepalnice */}
          <div>
            <h2 className="text-3xl font-serif mb-8 text-brand-dark border-b border-brand-nude pb-4">2. Obrvi in trepalnice</h2>
            <div className="space-y-4 mb-4">
              {prices.obrviTrepalnice.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center group">
                  <span className="text-lg text-brand-dark/80 group-hover:text-brand-taupe transition-colors">{item.name}</span>
                  <div className="flex-grow border-b border-dotted border-brand-taupe/30 mx-4"></div>
                  <span className="text-lg font-medium text-brand-dark whitespace-nowrap">{item.price}</span>
                  <Link to="/kontakt" className="ml-4 px-4 py-2 border border-brand-dark text-brand-dark uppercase tracking-widest text-xs hover:bg-brand-dark hover:text-brand-light transition-colors whitespace-nowrap">Naroči se</Link>
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-taupe italic mt-6 flex items-center">
              <AlertCircle className="w-4 h-4 mr-2" /> Opomba: Na termine prosim pridi brez maskare.
            </p>
          </div>

          {/* Nohti */}
          <div>
            <h2 className="text-3xl font-serif mb-8 text-brand-dark border-b border-brand-nude pb-4">3. Nohti</h2>
            <div className="space-y-4 mb-4">
              {prices.nohti.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center group">
                  <span className="text-lg text-brand-dark/80 group-hover:text-brand-taupe transition-colors">{item.name}</span>
                  <div className="flex-grow border-b border-dotted border-brand-taupe/30 mx-4"></div>
                  <span className="text-lg font-medium text-brand-dark whitespace-nowrap">{item.price}</span>
                  <Link to="/kontakt" className="ml-4 px-4 py-2 border border-brand-dark text-brand-dark uppercase tracking-widest text-xs hover:bg-brand-dark hover:text-brand-light transition-colors whitespace-nowrap">Naroči se</Link>
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-taupe italic mt-6 flex items-start">
              <AlertCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" /> 
              <span>Opomba: Korekcij tujega dela ne izvajam. Reklamacije so možne 48h po tretmaju.</span>
            </p>
          </div>
          
        </div>
      </section>

      {/* Cancellation Policy */}
      <section className="py-16 bg-brand-nude/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 border border-brand-rose/20 text-center">
            <h3 className="text-2xl font-serif mb-6 text-brand-dark">Strošek odpovedi rezervacije</h3>
            <div className="space-y-4 text-brand-dark/80">
              <p>
                <strong>Manj kot 24 ur</strong> pred rezervacijo – <span className="text-red-800 font-semibold">100%</span> vrednosti rezervirane storitve.
              </p>
              <p>
                <strong>24 – 48 ur</strong> pred rezervacijo – <span className="text-red-800 font-semibold">50%</span> vrednosti rezervirane storitve.
              </p>
              <div className="w-16 h-px bg-brand-taupe mx-auto my-6"></div>
              <p className="italic text-sm">Strošek se zaračuna ob naslednjem obisku.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
