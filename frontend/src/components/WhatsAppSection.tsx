import { MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { useTranslation } from '../i18n/useTranslation';

export default function WhatsAppSection() {
  const t = useTranslation();
  const w = t.whatsAppSection;

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-navy-800 to-navy-900 rounded-3xl p-10 lg:p-16 text-center overflow-hidden shadow-navy-lg">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            {/* WhatsApp icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#25D366]/20 border-2 border-[#25D366]/40 rounded-3xl mb-6">
              <SiWhatsapp className="w-10 h-10 text-[#25D366]" />
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              {w.title}
            </h2>
            <p className="text-navy-300 text-lg mb-3 max-w-xl mx-auto">
              {w.description}
            </p>

            <div className="flex items-center justify-center gap-2 text-gold-400 font-semibold text-xl mb-8">
              <Phone className="w-5 h-5" />
              <span>{w.phone}</span>
            </div>

            <a
              href="https://wa.me/917838867880"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-10 py-4 rounded-xl text-lg transition-all duration-300 shadow-teal-md hover:-translate-y-0.5 hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              {w.cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
