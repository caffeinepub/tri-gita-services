import { Shield, Wrench, Smile, Award } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

type AccentKey = 'navy' | 'gold' | 'teal';

const colorMap: Record<AccentKey, {
  bg: string;
  border: string;
  iconBg: string;
  iconColor: string;
  badge: string;
}> = {
  navy: {
    bg: 'bg-navy-50',
    border: 'border-navy-200',
    iconBg: 'bg-navy-700',
    iconColor: 'text-white',
    badge: 'text-navy-400',
  },
  gold: {
    bg: 'bg-gold-50',
    border: 'border-gold-200',
    iconBg: 'bg-gold-500',
    iconColor: 'text-navy-900',
    badge: 'text-gold-500',
  },
  teal: {
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    iconBg: 'bg-teal-500',
    iconColor: 'text-white',
    badge: 'text-teal-500',
  },
};

const ICONS = [Shield, Wrench, Smile];
const ACCENTS: AccentKey[] = ['navy', 'gold', 'teal'];

export default function WhyChooseUs() {
  const t = useTranslation();
  const w = t.whyChooseUs;

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-gold-100 text-gold-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            <Award className="w-4 h-4" />
            Why Choose Us
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
            const c = colorMap[accent];
            return (
              <div
                key={i}
                className={`group relative ${c.bg} border-2 ${c.border} rounded-2xl p-8 hover:shadow-navy-md transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`text-5xl font-bold ${c.badge} font-display opacity-30 absolute top-6 right-6`}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className={`w-14 h-14 ${c.iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-navy-sm group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${c.iconColor}`} />
                </div>
                <h3 className="font-display text-xl font-bold text-navy-800 mb-3">{card.title}</h3>
                <p className="text-navy-500 leading-relaxed text-sm">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
