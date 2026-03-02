import { useState, useEffect } from 'react';
import { Menu, X, Sun, Phone } from 'lucide-react';
import { useLanguage, type Language } from '../contexts/LanguageContext';
import { useTranslation } from '../i18n/useTranslation';

const LANGUAGE_OPTIONS: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'hi', label: 'HI' },
  { code: 'od', label: 'OD' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = useTranslation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.header.nav.home, href: '#home' },
    { label: t.header.nav.services, href: '#services' },
    { label: t.header.nav.scheme, href: '#scheme' },
    { label: t.header.nav.guide, href: '#odisha-guide' },
    { label: t.header.nav.whyUs, href: '#why-us' },
    { label: t.header.nav.contact, href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-900/95 backdrop-blur-md shadow-navy-md border-b border-navy-700/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-gold-500 rounded-lg flex items-center justify-center shadow-gold-sm group-hover:bg-gold-400 transition-colors">
              <Sun className="w-5 h-5 text-navy-900" />
            </div>
            <div className="leading-tight">
              <div className="text-white font-bold text-sm tracking-wide">{t.header.brand}</div>
              <div className="text-gold-400 text-xs font-medium tracking-wider">{t.header.tagline}</div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-navy-100/80 hover:text-gold-400 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language switcher */}
            <div className="flex items-center bg-navy-800/60 border border-navy-600/50 rounded-lg overflow-hidden">
              {LANGUAGE_OPTIONS.map((opt) => (
                <button
                  key={opt.code}
                  onClick={() => setLanguage(opt.code)}
                  className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors ${
                    language === opt.code
                      ? 'bg-gold-500 text-navy-900'
                      : 'text-navy-300 hover:text-white hover:bg-navy-700/50'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#inquiry"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-5 py-2.5 rounded-xl text-sm transition-all duration-200 shadow-gold-sm hover:shadow-gold-md hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              {t.header.nav.getQuote}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-navy-900/98 backdrop-blur-md border-t border-navy-700/50">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-navy-100/80 hover:text-gold-400 hover:bg-white/5 px-4 py-3 rounded-lg text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Mobile language switcher */}
            <div className="flex items-center gap-2 pt-3 border-t border-navy-700/50 mt-3">
              {LANGUAGE_OPTIONS.map((opt) => (
                <button
                  key={opt.code}
                  onClick={() => { setLanguage(opt.code); setIsMenuOpen(false); }}
                  className={`flex-1 py-2 text-xs font-bold uppercase rounded-lg transition-colors ${
                    language === opt.code
                      ? 'bg-gold-500 text-navy-900'
                      : 'bg-navy-800 text-navy-300 hover:text-white'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <a
              href="#inquiry"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-4 py-3 rounded-xl text-sm mt-2 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {t.header.nav.getQuote}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
