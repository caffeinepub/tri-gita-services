import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';
import type { Language } from '../i18n/translations';

const WHATSAPP_NUMBER = '917838867880';

export default function Header() {
  const t = useTranslation();
  const { language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.header.home, href: '#home' },
    { label: t.header.scheme, href: '#scheme' },
    { label: t.header.services, href: '#services' },
    { label: t.header.whyUs, href: '#why-us' },
    { label: t.header.contact, href: '#inquiry' },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: t.header.langEn },
    { code: 'hi', label: t.header.langHi },
    { code: 'od', label: t.header.langOd },
  ];

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-900 shadow-navy py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <img
              src="/assets/generated/bhagyalaxmi-logo.dim_400x400.png"
              alt="TRI-GITA SERVICES Logo"
              className="h-11 w-11 object-contain rounded-full"
            />
            <div>
              <div className="font-playfair font-bold text-white text-sm leading-tight">
                TRI-GITA SERVICES
              </div>
              <div className="text-gold-400 text-xs font-outfit tracking-wider">
                BHAGYALAXMI CONSTRUCTION
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-white/80 hover:text-gold-400 text-sm font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="hidden sm:flex items-center gap-1 bg-white/10 rounded-full px-1 py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
                    language === lang.code
                      ? 'bg-gold-500 text-navy-900'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold text-sm px-4 py-2 rounded-full transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              {t.header.whatsappCta}
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white p-1"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <nav className="flex flex-col gap-2 mt-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-white/80 hover:text-gold-400 text-sm font-medium py-2 text-left transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
            <div className="flex items-center gap-2 mt-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    language === lang.code
                      ? 'bg-gold-500 text-navy-900'
                      : 'bg-white/10 text-white/70 hover:text-white'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 bg-gold-500 text-navy-900 font-semibold text-sm px-4 py-2.5 rounded-full"
            >
              <MessageCircle className="w-4 h-4" />
              {t.header.whatsappCta}
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
