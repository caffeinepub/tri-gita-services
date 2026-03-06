import { Heart, Mail, MapPin, Phone, Sun } from "lucide-react";
import React from "react";
import { SiWhatsapp } from "react-icons/si";
import { useTranslation } from "../i18n/useTranslation";

const WHATSAPP_NUMBER = "917838867880";

export default function Footer() {
  const t = useTranslation();
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== "undefined"
      ? window.location.hostname
      : "tri-gita-services",
  );

  return (
    <footer className="bg-slate-800 border-t border-slate-700 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center">
                <Sun className="w-6 h-6 text-navy-900" />
              </div>
              <div>
                <div className="text-white font-bold text-base">
                  TRI-GITA SERVICES
                </div>
                <div className="text-amber-400 text-xs">
                  BHAGYALAXMI CONSTRUCTION
                </div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              {t.footer.tagline}
            </p>
            <div className="text-slate-500 text-xs">
              {t.footer.parentCompany}
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              {t.footer.contactUs}
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>{t.footer.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a
                  href="tel:+917838867880"
                  className="text-slate-300 hover:text-amber-400 text-sm transition-colors"
                >
                  {t.footer.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a
                  href="mailto:trigitaservices@gmail.com"
                  className="text-slate-300 hover:text-amber-400 text-sm transition-colors"
                >
                  {t.footer.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <SiWhatsapp className="w-4 h-4 text-green-400 flex-shrink-0" />
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-green-400 text-sm transition-colors"
                >
                  WhatsApp: +91 78388 67880
                </a>
              </div>
            </div>
          </div>

          {/* Branches Column */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Our Branches
            </h4>
            <div className="space-y-4">
              <div className="bg-slate-900 rounded-xl p-3 border border-slate-700">
                <div className="text-amber-400 font-bold text-sm">
                  TRI-GITA SERVICES
                </div>
                <div className="text-slate-400 text-xs mt-1">
                  Sambalpur, Odisha 768006
                </div>
                <a
                  href="tel:+917838867880"
                  className="text-slate-300 text-xs hover:text-amber-400 transition-colors"
                >
                  +91 78388 67880
                </a>
              </div>
              <div className="bg-slate-900 rounded-xl p-3 border border-slate-700">
                <div className="text-teal-400 font-bold text-sm">
                  KRISHIV SOLAR SOLUTION
                </div>
                <div className="text-slate-400 text-xs mt-1">
                  Balasore, Odisha
                </div>
                <a
                  href="tel:+917788951091"
                  className="text-slate-300 text-xs hover:text-teal-400 transition-colors"
                >
                  +91 77889 51091
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            © {year} TRI-GITA SERVICES. {t.footer.rights}
          </div>
          <div className="flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-amber-400 mx-1" /> using{" "}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 transition-colors ml-1"
            >
              caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
