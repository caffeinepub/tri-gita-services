import React from "react";
import { SiWhatsapp } from "react-icons/si";
import { useTranslation } from "../i18n/useTranslation";

const WHATSAPP_NUMBER = "917838867880";

export default function FloatingWhatsAppButton() {
  const t = useTranslation();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip */}
      <div className="bg-navy-900 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg border border-navy-700 opacity-0 group-hover:opacity-100 pointer-events-none">
        {t.floating.tooltip}
      </div>

      {/* Button with pulse */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.floating.tooltip}
        className="relative group"
      >
        {/* Pulse rings */}
        <span className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping" />
        <span className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-pulse" />

        {/* Main button */}
        <div className="relative w-14 h-14 bg-green-600 hover:bg-green-500 rounded-full flex items-center justify-center shadow-lg transition-colors">
          <SiWhatsapp className="w-7 h-7 text-white" />
        </div>
      </a>
    </div>
  );
}
