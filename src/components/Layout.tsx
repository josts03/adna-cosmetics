import { ReactNode, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Domov', path: '/' },
    { name: 'O meni', path: '/o-meni' },
    { name: 'Storitve', path: '/storitve' },
    { name: 'Cenik', path: '/cenik' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <div className="bg-brand-dark text-brand-light py-2 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>Vrhnika</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="mailto:adnaacosmetics@gmail.com" className="flex items-center space-x-1 hover:text-brand-nude transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">adnaacosmetics@gmail.com</span>
            </a>
            <a href="https://www.instagram.com/adnaa_cosmetics/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-nude transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-light/95 backdrop-blur-md shadow-sm py-1 md:py-0' : 'bg-brand-light py-3 md:py-2'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="text-brand-dark hover:text-brand-taupe transition-colors">
            <Logo className="h-[76px] md:h-24 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm uppercase tracking-widest transition-colors hover:text-brand-taupe ${
                  location.pathname === link.path ? 'font-semibold text-brand-taupe border-b border-brand-taupe' : 'text-brand-dark/80'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/kontakt"
              className="px-6 py-2 bg-brand-dark text-brand-light text-sm uppercase tracking-widest hover:bg-brand-taupe transition-colors"
            >
              Naroči se
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-brand-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-light pt-32 px-6 flex flex-col md:hidden pb-10"
          >
            <div className="flex flex-col space-y-6 text-center h-full">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-2xl font-serif ${
                    location.pathname === link.path ? 'text-brand-taupe italic' : 'text-brand-dark'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/kontakt"
                className={`text-2xl font-serif ${
                  location.pathname === '/kontakt' ? 'text-brand-taupe italic' : 'text-brand-dark'
                }`}
              >
                Naroči se
              </Link>
              <div className="mt-auto items-center flex flex-col gap-6 pt-10 border-t border-brand-nude">
                  <a href="mailto:adnaacosmetics@gmail.com" className="flex items-center gap-2">
                      <Mail className="w-5 h-5"/> adnaacosmetics@gmail.com
                  </a>
                  <a href="https://www.instagram.com/adnaa_cosmetics/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Instagram className="w-5 h-5" /> @adnaa_cosmetics
                  </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-brand-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="flex flex-col space-y-4 items-center md:items-start">
            <Link to="/" className="text-brand-light hover:text-brand-nude transition-colors mb-2">
              <Logo src="/logo_white.png" className="h-20 md:h-24 w-auto" />
            </Link>
            <p className="text-brand-nude opacity-80 max-w-sm mx-auto md:mx-0">
              Kozmetični salon Adna Cosmetics, kjer lepota sreča strokovnost in poudarja vašo unikatnost.
            </p>
          </div>
          
          <div className="flex flex-col space-y-4">
            <h4 className="font-serif text-xl mb-2">Kontakt</h4>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-4 h-4 text-brand-nude" /> Vrhnika
            </p>
            <a href="mailto:adnaacosmetics@gmail.com" className="flex items-center justify-center md:justify-start gap-2 hover:text-brand-light transition-colors">
              <Mail className="w-4 h-4 text-brand-nude" /> adnaacosmetics@gmail.com
            </a>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="font-serif text-xl mb-2">Delovni čas</h4>
            <div className="text-sm space-y-2">
              <p className="flex justify-center md:justify-start gap-2">
                <span>Pon - Pet:</span> <span className="text-brand-nude">Po dogovoru</span>
              </p>
              <p className="flex justify-center md:justify-start gap-2">
                <span>Sob, Ned, prazniki:</span> <span className="text-brand-nude">Zaprto</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="font-serif text-xl mb-2">Sledite nam</h4>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="https://www.instagram.com/adnaa_cosmetics/" target="_blank" rel="noopener noreferrer" className="p-3 border border-brand-nude/30 rounded-full hover:bg-brand-nude/10 hover:border-brand-nude transition-all">
                <Instagram className="w-5 h-5 text-brand-nude" />
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-brand-nude/20 text-center text-sm text-brand-nude/60">
          &copy; {new Date().getFullYear()} Adna Cosmetics. Vse pravice pridržane.
        </div>
      </footer>
    </div>
  );
}
