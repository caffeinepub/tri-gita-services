import { Menu, Phone, X } from "lucide-react";
import React, { useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../i18n/useTranslation";

const WHATSAPP_NUMBER = "917838867880";

export default function Header() {
  const t = useTranslation();
  const { language, setLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.subsidy, href: "#subsidy" },
    { label: t.nav.guide, href: "#pm-guide" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <img
              src="/assets/uploads/Screenshot_20260228_060558_Chrome-2-3-1.jpg"
              alt="TRI-GITA SERVICES Logo"
              className="w-12 h-12 rounded-full object-cover shadow-md"
            />
            <div className="leading-tight">
              <div className="text-slate-800 font-bold text-base tracking-wide">
                TRI-GITA SERVICES
              </div>
              <div className="text-amber-600 text-xs font-medium tracking-wider">
                BHAGYALAXMI CONSTRUCTION
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-amber-600 text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="hidden sm:flex items-center gap-1 bg-slate-100 rounded-full px-2 py-1">
              {(["en", "hi", "od"] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  className={`px-2 py-0.5 rounded-full text-xs font-medium transition-colors ${
                    language === lang
                      ? "bg-amber-500 text-white"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {t.language[lang]}
                </button>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
            >
              <SiWhatsapp className="w-4 h-4" />
              <span>{t.nav.getQuote}</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+917838867880"
              className="hidden lg:flex items-center gap-1 text-amber-600 hover:text-amber-700 text-sm font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>+91 78388 67880</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-slate-700 p-1"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-slate-200 py-4 space-y-3 bg-white">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-slate-600 hover:text-amber-600 text-sm font-medium py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-2">
              {(["en", "hi", "od"] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    language === lang
                      ? "bg-amber-500 text-white"
                      : "bg-slate-100 text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {t.language[lang]}
                </button>
              ))}
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold w-fit"
            >
              <SiWhatsapp className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
