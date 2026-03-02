import { Sun, Phone, Mail, MapPin, Globe, Clock } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { useTranslation } from '../i18n/useTranslation';

export default function Footer() {
  const t = useTranslation();
  const f = t.footer;
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'tri-gita-solar');

  return (
    <footer id="contact" className="bg-navy-900 text-navy-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold-500 rounded-xl flex items-center justify-center">
                <Sun className="w-5 h-5 text-navy-900" />
              </div>
              <div>
                <div className="text-white font-bold text-lg tracking-wide">{f.brand}</div>
                <div className="text-gold-400 text-xs font-medium tracking-wider">Solar Energy Solutions</div>
              </div>
            </div>
            <p className="text-navy-400 text-sm leading-relaxed mb-6 max-w-sm">
              {f.tagline}
            </p>
            <a
              href="https://wa.me/917838867880"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-[#25D366] font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
            >
              <SiWhatsapp className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="font-display text-lg font-bold text-white mb-6">{f.contactTitle}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <div className="text-navy-400">{f.phone1Label}</div>
                  <a href={`tel:${f.phone1}`} className="text-white hover:text-gold-400 transition-colors font-medium">
                    {f.phone1}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <div className="text-navy-400">{f.phone2Label}</div>
                  <a href={`tel:${f.phone2}`} className="text-white hover:text-gold-400 transition-colors font-medium">
                    {f.phone2}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <a href={`mailto:${f.email}`} className="text-sm text-white hover:text-gold-400 transition-colors">
                  {f.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-navy-300 leading-relaxed">
                  <span className="text-navy-400 text-xs block mb-0.5">{f.addressLabel}</span>
                  {f.address}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-navy-300">
                  {f.serviceAreaLabel}: <span className="text-white">{f.serviceArea}</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-navy-300">
                  {f.hoursLabel}: <span className="text-white">{f.hours}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-navy-500">
          <span>© {year} {f.copyright}</span>
          <span className="flex items-center gap-1">
            Built with{' '}
            <span className="text-gold-500 mx-0.5">♥</span>
            {' '}using{' '}
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
