import { MessageCircle } from "lucide-react";
import React from "react";
import { SiWhatsapp } from "react-icons/si";
import { useTranslation } from "../i18n/useTranslation";

const WHATSAPP_NUMBER = "917838867880";

export default function WhatsAppSection() {
  const t = useTranslation();

  return (
    <section id="whatsapp" className="py-16 bg-navy-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-navy-900 border border-green-500/30 rounded-3xl p-10">
          <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <SiWhatsapp className="w-8 h-8 text-green-400" />
          </div>
          <h2 className="text-3xl font-extrabold text-white mb-3">
            {t.whatsappSection.title}
          </h2>
          <p className="text-navy-300 text-lg mb-4">
            {t.whatsappSection.subtitle}
          </p>
          <div className="text-gold-400 font-bold text-2xl mb-6">
            {t.whatsappSection.phone}
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold px-10 py-4 rounded-full text-xl transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            <SiWhatsapp className="w-6 h-6" />
            {t.whatsappSection.ctaText}
          </a>
          <p className="text-navy-500 text-sm mt-4 flex items-center justify-center gap-2">
            <MessageCircle className="w-4 h-4" />
            {t.whatsappSection.note}
          </p>
        </div>
      </div>
    </section>
  );
}
