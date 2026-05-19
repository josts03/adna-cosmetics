import { SEO } from '../components/SEO';

const servicesList = [
  {
    id: 'depilacija',
    title: 'Depilacija',
    description: 'Zagotavljamo vam gladko in mehko kožo. Odstranjevanje nezaželenih dlačic s profesionalnimi izdelki, ki so nežni do vaše kože in zagotavljajo dolgotrajne rezultate.',
  },
  {
    id: 'obrvi-trepalnice',
    title: 'Obrvi in trepalnice',
    description: 'Popolno oblikovane obrvi in poudarjene trepalnice za definiran pogled. Nudimo barvanje, oblikovanje in napredne tehnike nege.',
  },
  {
    id: 'lash-lift-laminacija',
    title: 'Lash lift in laminacija obrvi',
    description: 'Lash lift naravno privzdigne vaše trepalnice, laminacija obrvi pa ukroti in oblikuje dlačice obrvi v popolno obliko za več tednov. Popoln nadomestek za podaljševanje.',
  },
  {
    id: 'nohti',
    title: 'Nohti',
    description: 'Zdravi in lepi nohti so odraz urejenosti. Nudimo osnovno manikuro, permanentno lakiranje, ter različne tehnike grajenja in podaljševanja nohtov po vaših željah.',
  },
  {
    id: 'masaza',
    title: 'Masaža',
    description: 'Sprostite se ob pomirjujoči masaži, ki poskrbi za sprostitev napetih mišic in odpravo stresa. Čas samo za vas in vaše telo.',
  }
];

export function Services() {
  return (
    <>
      <SEO
        title="Storitve"
        description="Raznolika ponudba storitev v salonu Adna Cosmetics: Depilacija, urejanje obrvi, lash lift, laminacija nohtov, manikura in sproščujoča masaža."
      />
      <div className="pt-24 pb-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-brand-dark mb-6">Naše storitve</h1>
          <p className="max-w-2xl mx-auto text-brand-dark/70 text-lg">
            Prepustite se strokovnim rokam in uživajte v vrhunskih lepotnih tretmajih.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {servicesList.map((service, index) => (
              <div 
                key={service.id} 
                className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="w-full lg:w-1/2 aspect-[4/3] bg-brand-nude/30 relative group overflow-hidden">
                   <div className="absolute inset-0 flex items-center justify-center text-brand-dark/20 font-serif italic text-xl transition-transform duration-700 group-hover:scale-105">
                     Slika: {service.title}
                   </div>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <h2 className="text-3xl font-serif mb-4 text-brand-dark">{service.title}</h2>
                  <div className="w-12 h-0.5 bg-brand-taupe mb-6"></div>
                  <p className="text-brand-dark/70 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
