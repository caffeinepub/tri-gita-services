import React from 'react';
import { Sun, Phone, Mail, MapPin, Globe, MessageCircle } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

const WHATSAPP_NUMBER = '917838867880';

export default function Footer() {
  const t = useTranslation();
  const f = t.footer;
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'tri-gita-solar'
  );

  return (
    <footer id="contact" className="bg-navy-900 text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center">
                <Sun className="w-5 h-5 text-navy-900" />
              </div>
              <div>
                <div className="font-playfair font-bold text-white text-lg">{f.brand}</div>
                <div className="text-gold-400 text-xs tracking-wider">{f.brandSub}</div>
                <div className="text-white/50 text-xs mt-0.5 italic">{f.tagline}</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm">{f.desc}</p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-[#25D366] font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              {f.whatsapp}
            </a>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-playfair text-lg font-bold text-white mb-6">{f.contactTitle}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <a
                    href="tel:+917838867880"
                    className="text-white/80 hover:text-gold-400 transition-colors"
                  >
                    {f.phone1}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <a
                    href="tel:+918249286318"
                    className="text-white/80 hover:text-gold-400 transition-colors"
                  >
                    {f.phone2}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${f.email}`}
                  className="text-sm text-white/80 hover:text-gold-400 transition-colors"
                >
                  {f.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/70">{f.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/70">{f.serviceArea}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <span>© {year} {f.copyright}</span>
          <span className="flex items-center gap-1">
            {f.builtWith}{' '}
            <span className="text-gold-500 mx-0.5">♥</span>
            {' '}{f.builtWithSuffix.replace('caffeine.ai', '')}{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 hover:text-gold-300 transition-colors font-medium"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
