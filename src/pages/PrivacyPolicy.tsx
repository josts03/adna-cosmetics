import { SEO } from '../components/SEO';
import { Shield } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <div className="py-20 animate-fade-in">
      <SEO
        title="Politika zasebnosti - Adna Cosmetics"
        description="Preberite si kako ravnamo z vašimi osebnimi podatki v kozmetičnem salonu Adna Cosmetics na Vrhniki."
        path="/politika-zasebnosti"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Shield className="w-12 h-12 text-brand-nude mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4">Politika zasebnosti</h1>
          <p className="text-brand-taupe text-lg">Kako ravnamo z vašimi osebnimi podatki</p>
        </div>

        <div className="prose prose-brand max-w-none text-brand-dark/80 whitespace-pre-line leading-relaxed">
          <p className="mb-6">
            Vaša zasebnost mi je zelo pomembna. V kozmetičnem salonu <strong>Adna Cosmetics</strong> (v nadaljevanju: "salon") se zavezujem, da bom vaše osebne podatke varovala v skladu z veljavno zakonodajo o varstvu osebnih podatkov (Splošna uredba o varstvu podatkov – GDPR in Zakon o varstvu osebnih podatkov – ZVOP-2).
          </p>

          <h2 className="text-2xl font-serif text-brand-dark mt-10 mb-4">1. Katere osebne podatke zbiramo?</h2>
          <p className="mb-6">
            Zbiram samo tiste osebne podatke, ki mi jih neposredno in prostovoljno posredujete prek kontaktnega obrazca ali ob naročanju:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Ime in priimek</li>
            <li>Telefonska številka</li>
            <li>Elektronski naslov (če me kontaktirate po e-pošti ali prek obrazca)</li>
            <li>Druge informacije, ki jih vključite v svoje sporočilo (npr. želene storitve ali posebne potrebe)</li>
          </ul>

          <h2 className="text-2xl font-serif text-brand-dark mt-10 mb-4">2. Namen obdelave osebnih podatkov</h2>
          <p className="mb-6">
            Vaše osebne podatke uporabljam <strong>izključno</strong> za naslednje namene:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Potrditev vašega termina za storitve.</li>
            <li>Obveščanje in komuniciranje v zvezi z vašim obiskom v salonu (npr. opomniki, morebitne spremembe terminov).</li>
            <li>Odgovarjanje na vaša povpraševanja in vprašanja.</li>
          </ul>
          <p className="mb-6">
            Vaših podatkov v nobenem primeru ne uporabljam za pošiljanje neželene oglasne pošte in jih ne obdelujte za namene neposrednega trženja brez vaše izrecne privolitve.
          </p>

          <h2 className="text-2xl font-serif text-brand-dark mt-10 mb-4">3. Deljenje podatkov s tretjimi osebami</h2>
          <p className="mb-6">
            Vaše osebne podatke skrbno varujemo in jih <strong>ne delim</strong>, ne prodajam ter ne oddajam v najem nobenim tretjim osebam.
          </p>

          <h2 className="text-2xl font-serif text-brand-dark mt-10 mb-4">4. Hramba podatkov</h2>
          <p className="mb-6">
            Vaše osebne podatke hranim le toliko časa, kolikor je to potrebno za izpolnitev namena, za katerega so bili zbrani (tj. za izvedbo storitve in morebitno poznejšo komunikacijo glede termina). Po preteku tega obdobja podatke varno in trajno izbrišem.
          </p>

          <h2 className="text-2xl font-serif text-brand-dark mt-10 mb-4">5. Vaše pravice</h2>
          <p className="mb-6">
            V zvezi z vašimi osebnimi podatki imate naslednje pravice:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Pravica do dostopa do informacij o tem, katere podatke zbiram.</li>
            <li>Pravica do popravka netočnih podatkov.</li>
            <li>Pravica do izbrisa ("pravica do pozabe").</li>
            <li>Pravica do omejitve obdelave in ugovora zoper obdelavo.</li>
          </ul>
          <p>
            Če želite uveljavljati katero od teh pravic ali imate kakršnokoli vprašanje glede politike zasebnosti, me prosim kontaktirajte na elektronski naslov: <strong>adnaacosmetics@gmail.com</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
