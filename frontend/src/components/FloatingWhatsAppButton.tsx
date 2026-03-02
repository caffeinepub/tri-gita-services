import { SiWhatsapp } from 'react-icons/si';
import { useTranslation } from '../i18n/useTranslation';

export default function FloatingWhatsAppButton() {
  const t = useTranslation();

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
        <div className="bg-navy-900 text-white text-xs font-semibold px-3 py-2 rounded-xl whitespace-nowrap shadow-navy-md border border-navy-700">
          {t.floatingWhatsApp.tooltip}
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-navy-900" />
        </div>
      </div>

      {/* Button */}
      <a
        href="https://wa.me/917838867880"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.floatingWhatsApp.tooltip}
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-2xl shadow-teal-md hover:scale-110 transition-all duration-300"
      >
        <SiWhatsapp className="w-7 h-7" />
      </a>

      {/* Pulse ring */}
      <div className="absolute inset-0 rounded-2xl bg-[#25D366]/30 animate-ping pointer-events-none" />
    </div>
  );
}
