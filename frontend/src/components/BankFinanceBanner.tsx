import React from 'react';
import { MessageCircle, Landmark } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

const WHATSAPP_NUMBER = '917838867880';

export default function BankFinanceBanner() {
  const t = useTranslation();

  const stats = [
    { value: t.bankFinance.stat1Value, label: t.bankFinance.stat1Label },
    { value: t.bankFinance.stat2Value, label: t.bankFinance.stat2Label },
    { value: t.bankFinance.stat3Value, label: t.bankFinance.stat3Label },
  ];

  return (
    <section className="bg-navy-950 py-16 relative overflow-hidden">
      {/* Shimmer overlay */}
      <div className="absolute inset-0 animate-shimmer pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-gold-500/20 text-gold-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
            <Landmark className="w-4 h-4" />
            Easy Bank Finance
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-3">
            {t.bankFinance.title}
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">{t.bankFinance.subtitle}</p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-gold-500/10 border border-gold-500/30 rounded-2xl p-5 text-center"
            >
              <div className="font-playfair text-3xl font-bold text-gold-400 mb-1">{stat.value}</div>
              <div className="text-white/60 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in bank financing for solar installation.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-8 py-4 rounded-full transition-colors shadow-gold"
          >
            <MessageCircle className="w-5 h-5" />
            {t.bankFinance.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
