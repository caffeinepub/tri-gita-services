import { useEffect, useRef, useState } from 'react';
import { MapPin, Info } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

const subsidyTiers = [
  {
    capacity: '1 kW',
    central: '₹30,000',
    state: '₹25,000',
    total: '₹55,000',
    highlight: false,
    note: 'Ideal for small households',
  },
  {
    capacity: '2 kW',
    central: '₹60,000',
    state: '₹50,000',
    total: '₹1,10,000',
    highlight: false,
    note: 'Suitable for medium households',
  },
  {
    capacity: '3 kW+',
    central: '₹78,000',
    state: '₹60,000',
    total: '₹1,38,000',
    highlight: true,
    note: 'Maximum cap',
  },
];

const phases = [
  { phase: 'Phase 1', area: 'Sambalpur, Bargarh, Jharsuguda', status: 'Active', color: 'teal' },
  { phase: 'Phase 2', area: 'Bhubaneswar, Cuttack, Puri', status: 'Active', color: 'teal' },
  { phase: 'Phase 3', area: 'All remaining districts', status: 'Upcoming', color: 'gold' },
];

export default function OdishaGuide() {
  const t = useTranslation();
  const g = t.odishaGuide;

  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { setIsVisible(true); return; }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="odisha-guide" className="py-20 lg:py-28 bg-navy-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-navy-100 text-navy-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            <MapPin className="w-4 h-4" />
            Odisha Specific
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-800 mb-4">
            {g.title}
          </h2>
          <p className="text-navy-500 text-lg max-w-2xl mx-auto">
            {g.subtitle}
          </p>
        </div>

        {/* Subsidy structure */}
        <div
          className={`mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h3 className="font-display text-2xl font-bold text-navy-800 mb-2">{g.subsidy.title}</h3>
          <div className="h-1 w-24 rounded-full subsidy-shimmer-bar mb-8" />

          <div className="grid sm:grid-cols-3 gap-4">
            {subsidyTiers.map((tier, i) => (
              <div
                key={tier.capacity}
                style={{ transitionDelay: `${i * 120}ms` }}
                className={`rounded-2xl p-6 border-2 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${
                  tier.highlight
                    ? 'bg-navy-800 border-gold-500 shadow-gold-md'
                    : 'bg-white border-navy-100 shadow-navy-sm'
                }`}
              >
                {tier.highlight && (
                  <div className="text-xs text-gold-400 font-bold uppercase tracking-widest mb-3">Maximum Cap</div>
                )}
                <div className={`font-display text-lg font-bold mb-1 ${tier.highlight ? 'text-white' : 'text-navy-800'}`}>
                  {tier.capacity}
                </div>
                <div className={`text-xs mb-4 ${tier.highlight ? 'text-navy-300' : 'text-navy-400'}`}>
                  {tier.note}
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className={tier.highlight ? 'text-navy-300' : 'text-navy-500'}>Central Subsidy</span>
                    <span className={`font-semibold ${tier.highlight ? 'text-gold-400' : 'text-navy-700'}`}>{tier.central}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={tier.highlight ? 'text-navy-300' : 'text-navy-500'}>State Subsidy</span>
                    <span className={`font-semibold ${tier.highlight ? 'text-gold-400' : 'text-navy-700'}`}>{tier.state}</span>
                  </div>
                  <div className={`flex justify-between pt-2 border-t ${tier.highlight ? 'border-navy-600' : 'border-navy-100'}`}>
                    <span className={`font-bold ${tier.highlight ? 'text-white' : 'text-navy-800'}`}>Total Subsidy</span>
                    <span className={`font-bold text-lg ${tier.highlight ? 'text-gold-400' : 'text-teal-600'}`}>{tier.total}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation phases */}
        <div
          className={`bg-white rounded-2xl p-8 border border-navy-100 shadow-navy-sm transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="font-display text-2xl font-bold text-navy-800 mb-6">{g.phases.title}</h3>
          <div className="space-y-4">
            {phases.map((p) => (
              <div key={p.phase} className="flex items-center gap-4 p-4 rounded-xl bg-navy-50 border border-navy-100">
                <div className={`w-2 h-12 rounded-full flex-shrink-0 ${p.color === 'teal' ? 'bg-teal-500' : 'bg-gold-500'}`} />
                <div className="flex-1">
                  <div className="font-bold text-navy-800">{p.phase}</div>
                  <div className="text-navy-500 text-sm">{p.area}</div>
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                  p.color === 'teal'
                    ? 'bg-teal-100 text-teal-700'
                    : 'bg-gold-100 text-gold-700'
                }`}>
                  {p.status}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 p-4 bg-gold-50 rounded-xl border border-gold-200">
            <Info className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-navy-600">
              <strong className="text-navy-800">Note:</strong> Subsidy amounts and phases are subject to government updates. Contact TRI-GITA SERVICES for the latest information specific to your district.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
