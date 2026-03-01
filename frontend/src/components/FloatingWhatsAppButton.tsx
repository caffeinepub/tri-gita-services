import { MessageCircle } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

export default function FloatingWhatsAppButton() {
  const t = useTranslation();

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <a
        href="https://wa.me/917838867880"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.floatingWhatsApp.tooltip}
        className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-charcoal-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
        {t.floatingWhatsApp.tooltip}
        <div className="absolute top-full right-4 border-4 border-transparent border-t-charcoal-900" />
      </div>
    </div>
  );
}
