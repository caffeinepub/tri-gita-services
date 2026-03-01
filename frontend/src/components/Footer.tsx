import { Phone, Mail, MapPin, Clock, Globe, Heart } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

export default function Footer() {
  const t = useTranslation();
  const f = t.footer;
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(window.location.hostname || 'tri-gita-services');

  return (
    <footer id="contact" className="bg-charcoal-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">{f.brand}</h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">{f.tagline}</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">{f.contactTitle}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  {f.phone1Label}:{' '}
                  <a href={`tel:${f.phone1}`} className="text-white hover:text-amber-400 transition-colors">
                    {f.phone1}
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  {f.phone2Label}:{' '}
                  <a href={`tel:${f.phone2}`} className="text-white hover:text-amber-400 transition-colors">
                    {f.phone2}
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href={`mailto:${f.email}`} className="text-white/70 hover:text-amber-400 text-sm transition-colors">
                  {f.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  <span className="text-white/50 text-xs block mb-0.5">{f.addressLabel}</span>
                  {f.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  {f.serviceAreaLabel}: <span className="text-white">{f.serviceArea}</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  {f.hoursLabel}: <span className="text-white">{f.hours}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {year} {f.copyright}
          </p>
          <p className="text-white/40 text-xs flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-amber-400 fill-amber-400" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
