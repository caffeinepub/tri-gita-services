import { Building2, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { SiWhatsapp } from "react-icons/si";
import { useTranslation } from "../i18n/useTranslation";

const WHATSAPP_NUMBER = "917838867880";

export default function Contact() {
  const t = useTranslation();

  return (
    <section id="contact" className="py-16 bg-navy-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            {t.contact.title}
          </h2>
          <p className="text-navy-300 text-lg">{t.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main Contact */}
          <div className="bg-navy-800 border border-gold-500/30 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-6 h-6 text-gold-400" />
              <div>
                <div className="text-white font-bold text-lg">
                  TRI-GITA SERVICES
                </div>
                <div className="text-gold-400 text-xs">
                  Head Office – Sambalpur
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="text-navy-200 text-sm">
                  {t.contact.address}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <a
                  href="tel:+917838867880"
                  className="text-navy-200 hover:text-gold-400 text-sm transition-colors font-medium"
                >
                  +91 78388 67880 ({t.contact.ashokLabel})
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <a
                  href="mailto:trigitaservices@gmail.com"
                  className="text-navy-200 hover:text-gold-400 text-sm transition-colors"
                >
                  trigitaservices@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <SiWhatsapp className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-200 hover:text-green-400 text-sm transition-colors font-medium"
                >
                  WhatsApp: +91 78388 67880
                </a>
              </div>
            </div>
          </div>

          {/* Balasore Branch */}
          <div className="bg-navy-800 border border-teal-500/30 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-6 h-6 text-teal-400" />
              <div>
                <div className="text-white font-bold text-lg">
                  KRISHIV SOLAR SOLUTION
                </div>
                <div className="text-teal-400 text-xs">
                  Branch Office – Balasore
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <span className="text-navy-200 text-sm">Balasore, Odisha</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <a
                  href="tel:+917788951091"
                  className="text-navy-200 hover:text-teal-400 text-sm transition-colors font-medium"
                >
                  +91 77889 51091
                </a>
              </div>
              <div className="flex items-center gap-3">
                <SiWhatsapp className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a
                  href="https://wa.me/917788951091"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-200 hover:text-green-400 text-sm transition-colors font-medium"
                >
                  WhatsApp: +91 77889 51091
                </a>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-navy-700">
              <div className="text-navy-400 text-xs">Parent Company</div>
              <div className="text-gold-400 font-bold text-sm mt-1">
                BHAGYALAXMI CONSTRUCTION
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
