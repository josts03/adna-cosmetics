import { SEO } from '../components/SEO';
import { Mail, MapPin, Instagram, Clock, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [succeeded, setSucceeded] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    
    const form = e.currentTarget;
    const data = new FormData(form);
    const params = new URLSearchParams();
    for (const [key, value] of data.entries()) {
      params.append(key, value.toString());
    }
    
    try {
      const response = await fetch("https://formspree.io/f/mjgzkgnz", {
        method: "POST",
        body: params.toString(),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      
      if (response.ok) {
        setSucceeded(true);
      } else {
        // Fallback error handling if needed, though formspree usually returns OK
        console.error("Formspree submission failed");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Kontakt in Naročanje"
        description="Stopite v stik z nami in si rezervirajte svoj termin. Nahajamo se na Vrhniki."
      />
      <div className="pt-24 pb-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-brand-dark mb-6">Kontakt</h1>
          <p className="max-w-2xl mx-auto text-brand-dark/70 text-lg">
            Stopite v stik ali rezervirajte svoj termin.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="bg-brand-nude/10 p-8 md:p-12 border border-brand-nude">
            <h2 className="text-3xl font-serif mb-8 text-brand-dark">Informacije</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-brand-taupe mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-brand-dark mb-1">Lokacija</h3>
                  <p className="text-brand-dark/70">Vrhnika<br/>Natančen naslov ob naročilu</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-brand-taupe mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-brand-dark mb-1">Email</h3>
                  <a href="mailto:adnaacosmetics@gmail.com" className="text-brand-dark/70 hover:text-brand-taupe transition-colors">
                    adnaacosmetics@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Instagram className="w-6 h-6 text-brand-taupe mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-brand-dark mb-1">Družbena omrežja</h3>
                  <a href="https://www.instagram.com/adnaa_cosmetics/" target="_blank" rel="noopener noreferrer" className="text-brand-dark/70 hover:text-brand-taupe transition-colors block mb-1">
                    Instagram: @adnaa_cosmetics
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 text-brand-taupe mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-brand-dark mb-1">Delovni čas</h3>
                  <p className="text-brand-dark/70">Po dogovoru / Naročilu</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-serif mb-8 text-brand-dark">Pošlji povpraševanje</h2>
            {succeeded ? (
              <div className="bg-brand-nude/20 p-8 border border-brand-nude text-center">
                <CheckCircle className="w-12 h-12 text-brand-taupe mx-auto mb-4" />
                <h3 className="text-2xl font-serif text-brand-dark mb-2">Hvala za povpraševanje!</h3>
                <p className="text-brand-dark/80">Vaše sporočilo je bilo uspešno poslano, kmalu vas bomo kontaktirali.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-dark/80 mb-2">Ime in priimek</label>
                  <input
                    type="text"
                    id="name"
                    name="Ime"
                    required
                    className="w-full px-4 py-3 border border-brand-nude bg-brand-light/50 focus:outline-none focus:border-brand-taupe focus:ring-1 focus:ring-brand-taupe transition-colors"
                    placeholder="Vaše ime in priimek"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-brand-dark/80 mb-2">Telefonska številka</label>
                  <input
                    type="tel"
                    id="phone"
                    name="Telefon"
                    required
                    className="w-full px-4 py-3 border border-brand-nude bg-brand-light/50 focus:outline-none focus:border-brand-taupe focus:ring-1 focus:ring-brand-taupe transition-colors"
                    placeholder="041 123 456"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-brand-dark/80 mb-2">Želena storitev</label>
                  <select
                    id="service"
                    name="Storitev"
                    required
                    className="w-full px-4 py-3 border border-brand-nude bg-brand-light/50 focus:outline-none focus:border-brand-taupe focus:ring-1 focus:ring-brand-taupe transition-colors"
                  >
                    <option value="">Izberite storitev</option>
                    <option value="manikura">Manikura</option>
                    <option value="pedikura">Pedikura</option>
                    <option value="depilacija">Depilacija</option>
                    <option value="obrvi">Obrvi in trepalnice</option>
                    <option value="masaza">Masaža</option>
                    <option value="vec_storitev">Več storitev</option>
                    <option value="posvetovanje">Posvetovanje</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-dark/80 mb-2">Sporočilo</label>
                  <textarea
                    id="message"
                    name="Sporocilo"
                    rows={4}
                    className="w-full px-4 py-3 border border-brand-nude bg-brand-light/50 focus:outline-none focus:border-brand-taupe focus:ring-1 focus:ring-brand-taupe transition-colors"
                    placeholder="Želeni datum in ura, ali druga vprašanja..."
                  ></textarea>
                </div>
                <div className="flex flex-col gap-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full px-8 py-4 bg-brand-dark text-brand-light uppercase tracking-widest text-sm hover:bg-brand-taupe transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? 'Pošiljanje...' : 'Pošlji povpraševanje'}
                  </button>
                  <a
                    href="https://www.instagram.com/adnaa_cosmetics/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-8 py-4 border border-brand-dark text-brand-dark uppercase tracking-widest text-sm hover:bg-brand-dark hover:text-brand-light transition-colors text-center flex items-center justify-center gap-2"
                  >
                    <Instagram className="w-5 h-5" /> NAROČI SE NA IG
                  </a>
                </div>
                <p className="text-xs text-brand-dark/50 text-center mt-4">
                  To je samo informativno povpraševanje. Kontaktirali vas bomo za potrditev termina.
                </p>
              </form>
            )}
          </div>

        </div>
      </section>
    </>
  );
}
