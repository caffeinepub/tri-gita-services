import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

const WHATSAPP_NUMBER = '917838867880';

export default function WhatsAppSection() {
  const t = useTranslation();
  const w = t.whatsappSection;

  return (
    <section className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-navy-900 rounded-3xl p-10 lg:p-16 text-center overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500/10 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="relative z-10">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#25D366]/20 border-2 border-[#25D366]/40 rounded-3xl mb-6">
              <MessageCircle className="w-10 h-10 text-[#25D366]" />
            </div>

            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-4">
              {w.title}
            </h2>
            <p className="text-white/60 text-lg mb-4 max-w-xl mx-auto">
              {w.desc}
            </p>

            <div className="flex items-center justify-center gap-2 text-gold-400 font-semibold text-xl mb-8">
              <Phone className="w-5 h-5" />
              <span>{w.phone}</span>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-10 py-4 rounded-full text-lg transition-colors shadow-teal"
            >
              <MessageCircle className="w-6 h-6" />
              {w.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
