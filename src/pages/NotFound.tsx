import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export function NotFound() {
  return (
    <>
      <SEO
        title="404 – Stran ni najdena | Adna Cosmetics"
        description="Ta stran ne obstaja. Vrni se na začetno stran Adna Cosmetics."
        path="/404"
      />

      <div className="min-h-[80vh] flex items-center justify-center bg-brand-light px-4 py-24">
        <div className="max-w-xl w-full text-center">

          {/* Decorative number */}
          <div className="relative inline-block mb-8 select-none">
            <span className="text-[9rem] sm:text-[12rem] font-serif leading-none text-brand-nude block">
              404
            </span>
            <span className="absolute inset-0 text-[9rem] sm:text-[12rem] font-serif leading-none text-brand-taupe/20 block translate-x-1 translate-y-1 -z-10">
              404
            </span>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-brand-taupe/40"></div>
            <span className="text-brand-taupe text-xs uppercase tracking-[0.3em]">Adna Cosmetics</span>
            <div className="h-px w-16 bg-brand-taupe/40"></div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-dark mb-6 leading-snug">
            Ups! Ta stran je šla<br className="hidden sm:block" /> na lepotni počitek.
          </h1>

          {/* Subtitle */}
          <p className="text-brand-dark/60 text-base sm:text-lg leading-relaxed mb-12 max-w-md mx-auto">
            Izgleda, da povezava, ki jo iščete, ne obstaja več ali pa se je preselila na lepše.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="w-full sm:w-auto px-8 py-4 bg-brand-dark text-brand-light uppercase tracking-widest text-sm hover:bg-brand-taupe transition-colors text-center"
            >
              Nazaj na prvo stran
            </Link>
            <Link
              to="/storitve"
              className="w-full sm:w-auto px-8 py-4 border border-brand-dark text-brand-dark uppercase tracking-widest text-sm hover:bg-brand-dark hover:text-brand-light transition-colors text-center"
            >
              Preglej ponudbo storitev
            </Link>
          </div>

          {/* Tertiary link */}
          <div className="mt-8">
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 text-sm text-brand-taupe hover:text-brand-dark transition-colors uppercase tracking-widest font-semibold"
            >
              Rezerviraj svoj termin →
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
