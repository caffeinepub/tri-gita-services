import { MessageCircle } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

export default function WhatsAppSection() {
  const t = useTranslation();
  const w = t.whatsAppSection;

  return (
    <section className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-3xl p-12 shadow-xl">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">{w.title}</h2>
          <p className="text-white/80 text-lg mb-4 leading-relaxed">{w.description}</p>
          <p className="text-white font-bold text-xl mb-8">{w.phone}</p>
          <a
            href="https://wa.me/917838867880"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-700 font-bold rounded-xl hover:bg-white/90 transition-all duration-200 shadow-lg hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            {w.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
