import { useState } from 'react';
import { Menu, X, Sun } from 'lucide-react';
import { useLanguage, type Language } from '../contexts/LanguageContext';
import { useTranslation } from '../i18n/useTranslation';

const LANGUAGE_OPTIONS: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'od', label: 'ଓଡ଼ିଆ' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = useTranslation();

  const navLinks = [
    { label: t.header.nav.home, href: '#' },
    { label: t.header.nav.services, href: '#services' },
    { label: t.header.nav.scheme, href: '#scheme' },
    { label: t.header.nav.guide, href: '#guide' },
    { label: t.header.nav.whyUs, href: '#why-us' },
    { label: t.header.nav.contact, href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Sun className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <span className="font-bold text-lg text-foreground leading-tight block">
                {t.header.brand}
              </span>
              <span className="text-xs text-muted-foreground leading-tight block">
                {t.header.tagline}
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#inquiry"
              className="ml-2 px-4 py-2 text-sm font-semibold bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              {t.header.nav.getQuote}
            </a>
          </nav>

          {/* Desktop Language Switcher */}
          <div className="hidden lg:flex items-center gap-1 ml-4 border border-border rounded-lg p-1">
            {LANGUAGE_OPTIONS.map((opt) => (
              <button
                key={opt.code}
                onClick={() => setLanguage(opt.code)}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  language === opt.code
                    ? 'bg-primary text-primary-foreground font-semibold'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                aria-pressed={language === opt.code}
                aria-label={`Switch to ${opt.label}`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#inquiry"
              className="block px-3 py-2 text-sm font-semibold bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-center mt-2"
              onClick={() => setMobileOpen(false)}
            >
              {t.header.nav.getQuote}
            </a>

            {/* Mobile Language Switcher */}
            <div className="pt-3 border-t border-border mt-3">
              <p className="text-xs text-muted-foreground px-3 mb-2 font-medium uppercase tracking-wide">
                Language
              </p>
              <div className="flex gap-2 px-3">
                {LANGUAGE_OPTIONS.map((opt) => (
                  <button
                    key={opt.code}
                    onClick={() => {
                      setLanguage(opt.code);
                      setMobileOpen(false);
                    }}
                    className={`flex-1 py-2 text-xs font-medium rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      language === opt.code
                        ? 'bg-primary text-primary-foreground font-semibold'
                        : 'border border-border text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                    aria-pressed={language === opt.code}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
