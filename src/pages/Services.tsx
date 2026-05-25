import { SEO } from '../components/SEO';

const servicesList = [
  {
    id: 'manikura',
    title: 'Manikura',
    description: 'Pri storitvi manikure poskrbim za urejeno obnohtno kožico, nato odvisno od želje stranke in nohtne plošče, naraven noht pokrijem z izbranim materialom. Zelo rada naredim francosko manikuro, delam pa tudi enostavne poslikave. Pri svojem delu uporabljam kvalitetne materijale in ponujam široko paleto barv. Stranka pride na ponovni obisk v roku 3 - 4 tednov, nega doma pa sloni na uporabi olja in čuvanju nohtov pred mehanskimi poškodbami. Za dobro obstojnost nohtov dam 50% jaz, drugih 50% pa stranka.',
  },
  {
    id: 'pedikura',
    title: 'Pedikura',
    description: 'Pedikura je izraz, ki označuje urejanje stopal. Stranke, ki se na pedikuro naročijo, si večinoma želijo imeti bolj obstojen lak in bolj natančno nanesen. Jaz z urejanjem obnohtne kožice, krajšanjem in oblikovanjem nohtov poskrbim za bolj lahkoten korak in estetski videz.',
  },
  {
    id: 'vihanje-trepalnic',
    title: 'Vihanje trepalnic',
    description: 'Vihanje trepalnic je tehnika s katero privzdignemo naravne trepalnice, po želji lahko trepalnice tudi pobarvamo. Po končani storitvi bodo oči videti bolj odprte, trepalnice pa zavihane, bolj goste in daljše. Za najboljše rezultate se prvih 24h po tretmaju izogibamo savnam in močenju trepalnic, prav tako ne nanašamo maskare.',
  },
  {
    id: 'laminacija-obrvi',
    title: 'Laminacija obrvi',
    description: 'Pri laminaciji obrvi lahko prav tako vključimo tudi barvanje. Laminacija nam pomaga obvladovati obrvi in narediti lepo obliko brez uporabe gelov, dlačice tako ukrotimo. K storitvi ni vključeno oblikovanje obrvi.',
  },
  {
    id: 'depilacija',
    title: 'Depilacija',
    description: 'S pomočjo vročega voska izpulimo dlačico z mešičkom. Depilacija nam omogoča mehko kožo nekaj tednov, pri redni depilaciji se dlačice stanjšajo, posvetlijo in razredčijo. Po depilaciji se prvih 24-48h izogibamo direktnemu soncu.',
  },
  {
    id: 'masaza',
    title: 'Masaža',
    description: 'Klasična masaža telesa vključuje masažo hrbta, rok in nog spredaj in zadaj. 1 ura sprostitve v današnjem hitrem življenju bo vsakemu prav prišla. Za tiste, ki nimajo toliko časa pa obstaja masaža zgornjega hrbta in vratu, ta je krajša in traja 30 min, je kot nalašč za hitro sprostitev.',
  }
];

export function Services() {
  return (
    <>
      <SEO
        title="Storitve"
        description="Raznolika ponudba storitev v salonu Adna Cosmetics: Depilacija, urejanje obrvi, lash lift, laminacija obrvi, manikura in sproščujoča masaža."
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
