import { MessageCircle } from "lucide-react";
import React from "react";
import { SiWhatsapp } from "react-icons/si";
import { useTranslation } from "../i18n/useTranslation";

const WHATSAPP_NUMBER = "917838867880";

export default function WhatsAppSection() {
  const t = useTranslation();

  return (
    <section id="whatsapp" className="py-16 bg-[oklch(0.95_0.03_220)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white border border-green-200 rounded-3xl p-10 shadow-sm">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <SiWhatsapp className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-800 mb-3">
            {t.whatsappSection.title}
          </h2>
          <p className="text-slate-500 text-lg mb-4">
            {t.whatsappSection.subtitle}
          </p>
          <div className="text-amber-600 font-bold text-2xl mb-6">
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
          <p className="text-slate-400 text-sm mt-4 flex items-center justify-center gap-2">
            <MessageCircle className="w-4 h-4" />
            {t.whatsappSection.note}
          </p>
        </div>
      </div>
    </section>
  );
}
