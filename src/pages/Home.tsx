import { Link } from 'react-router-dom';
import { Sparkles, Heart, CheckCircle, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';

export function Home() {
  return (
    <>
      <SEO
        title="Domov"
        description="Adna Cosmetics - Vaš salon lepote na Vrhniki. Nudimo depilacijo, nego obrvi in trepalnic, manikuro in masažo."
        keywords="kozmetični salon Vrhnika, Adna Cosmetics, depilacija Vrhnika, urejanje obrvi Vrhnika, manikura Vrhnika"
      />
      
      {/* Hero Section */}
      <section className="relative bg-brand-nude overflow-hidden h-[80vh] flex items-center md:bg-[url('/backgroundimage.png')] md:bg-cover md:bg-center md:bg-no-repeat">
        {/* Placeholder background image pattern */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply md:hidden"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-brand-rose opacity-20 blur-3xl transform translate-x-1/4 -skew-x-12 md:hidden"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl">
            <span className="uppercase tracking-[0.2em] text-brand-dark/70 text-sm font-semibold mb-4 block">
              Dobrodošli
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-brand-dark leading-tight mb-6">
              Bodi vse, kar si <br/>
              <span className="italic text-brand-taupe">v Adna Cosmetics</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-dark/80 mb-10 max-w-lg leading-relaxed">
              Kjer se sprostite, napolnite z energijo in poudarite svojo naravno lepoto. Pridite po samozavest na Vrhniko.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/kontakt"
                className="px-8 py-4 bg-brand-dark text-brand-light uppercase tracking-widest text-sm hover:bg-brand-taupe transition-colors text-center"
              >
                Rezerviraj termin
              </Link>
              <Link
                to="/storitve"
                className="px-8 py-4 border border-brand-dark text-brand-dark uppercase tracking-widest text-sm hover:bg-brand-dark hover:text-brand-light transition-colors text-center"
              >
                Naše storitve
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Snippet */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-serif mb-4">Kaj ponujamo?</h2>
            <p className="text-brand-dark/70">
              Celovita ponudba lepotnih storitev za vaš popoln videz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Depilacija',
                desc: 'Gladka koža s profesionalno nego.',
                icon: <Sparkles className="w-6 h-6" />
              },
              {
                title: 'Obrvi in trepalnice',
                desc: 'Lash lift, laminacija in popolna oblika.',
                icon: <Heart className="w-6 h-6" />
              },
              {
                title: 'Nohti',
                desc: 'Manikura in podaljševanje za brezhibne roke.',
                icon: <CheckCircle className="w-6 h-6" />
              },
              {
                title: 'Masaža',
                desc: 'Sprostitev telesa in duha.',
                icon: <Heart className="w-6 h-6" />
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 group border border-brand-nude/50 hover:border-brand-taupe transition-colors">
                <div className="mb-6 p-4 bg-brand-nude/40 text-brand-taupe inline-block rounded-full group-hover:bg-brand-taupe group-hover:text-brand-light transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif mb-3">{service.title}</h3>
                <p className="text-brand-dark/70 text-sm mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <Link to="/storitve" className="inline-flex items-center text-sm font-semibold text-brand-taupe hover:text-brand-dark transition-colors uppercase tracking-widest">
                  Več <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-brand-nude">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="uppercase tracking-[0.2em] text-brand-dark/70 text-sm font-semibold mb-4 block">
              Zakaj Adna Cosmetics?
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Kaj nas odlikuje?
            </h2>
            <div className="space-y-6">
              {[
                'Strokovno in prijazno osebje',
                'Individualen pristop k vsaki stranki',
                'Uporaba visokokakovostnih produktov',
                'Sproščujoč in čist ambient'
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-brand-taupe mr-4 flex-shrink-0 mt-1" />
                  <p className="text-lg text-brand-dark/80">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Link to="/o-meni" className="px-8 py-4 bg-transparent border border-brand-dark text-brand-dark uppercase tracking-widest text-sm hover:bg-brand-dark hover:text-brand-light transition-colors">
                Spoznaj me
              </Link>
            </div>
          </div>
          <div className="relative h-[600px] w-full">
            <div className="absolute inset-0 bg-brand-rose/20 rounded-t-full transform rotate-3"></div>
            <div className="absolute inset-0 bg-brand-dark/5 rounded-t-full overflow-hidden flex items-center justify-center">
              <span className="text-brand-dark/30 font-serif italic text-2xl">Slika salona / Osebja</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
