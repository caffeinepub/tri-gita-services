import { Shield, Zap, Wrench } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

type AccentKey = 'navy' | 'gold' | 'teal';

interface WarrantyCard {
  icon: typeof Shield;
  years: string;
  unit: string;
  accent: AccentKey;
}

const accentMap: Record<AccentKey, {
  iconBg: string;
  iconColor: string;
  border: string;
  cardBg: string;
  yearColor: string;
}> = {
  navy: {
    iconBg: 'bg-navy-700',
    iconColor: 'text-white',
    border: 'border-navy-200',
    cardBg: 'bg-navy-50',
    yearColor: 'text-navy-800',
  },
  gold: {
    iconBg: 'bg-gold-500',
    iconColor: 'text-navy-900',
    border: 'border-gold-200',
    cardBg: 'bg-gold-50',
    yearColor: 'text-gold-600',
  },
  teal: {
    iconBg: 'bg-teal-500',
    iconColor: 'text-white',
    border: 'border-teal-200',
    cardBg: 'bg-teal-50',
    yearColor: 'text-teal-600',
  },
};

const ICONS = [Shield, Zap, Wrench];
const ACCENTS: AccentKey[] = ['navy', 'gold', 'teal'];
const YEARS = ['25', '10', '5'];

export default function WarrantyGuarantee() {
  const t = useTranslation();
  const w = t.warrantyGuarantee;

  return (
    <section id="warranty" className="py-20 lg:py-28 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-teal-100 text-teal-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            Our Commitment
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-800 mb-4">
            {w.title}
          </h2>
          <p className="text-navy-500 text-lg max-w-2xl mx-auto">
            {w.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {w.cards.map((card, i) => {
            const Icon = ICONS[i];
            const accent = ACCENTS[i];
            const a = accentMap[accent];
            return (
              <div
                key={i}
                className={`${a.cardBg} border-2 ${a.border} rounded-2xl p-8 text-center hover:shadow-navy-md transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`w-16 h-16 ${a.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-navy-sm`}>
                  <Icon className={`w-8 h-8 ${a.iconColor}`} />
                </div>
                <div className="mb-4">
                  <span className={`font-display text-5xl font-bold ${a.yearColor}`}>
                    {YEARS[i]}
                  </span>
                  <span className="text-navy-400 text-lg font-medium ml-1">Years</span>
                </div>
                <h3 className="font-display text-xl font-bold text-navy-800 mb-3">{card.title}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
