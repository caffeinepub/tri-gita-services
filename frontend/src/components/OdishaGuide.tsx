import React, { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

export default function OdishaGuide() {
  const t = useTranslation();
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const tiers = [
    {
      label: t.odishaGuide.tier1kw,
      central: t.odishaGuide.tier1Central,
      state: t.odishaGuide.tier1State,
      total: t.odishaGuide.tier1Total,
      note: null,
      accent: 'teal',
    },
    {
      label: t.odishaGuide.tier2kw,
      central: t.odishaGuide.tier2Central,
      state: t.odishaGuide.tier2State,
      total: t.odishaGuide.tier2Total,
      note: null,
      accent: 'gold',
    },
    {
      label: t.odishaGuide.tier3kw,
      central: t.odishaGuide.tier3Central,
      state: t.odishaGuide.tier3State,
      total: t.odishaGuide.tier3Total,
      note: t.odishaGuide.tier3Note,
      accent: 'navy',
    },
  ];

  const accentClasses: Record<string, { border: string; badge: string; total: string }> = {
    teal: {
      border: 'border-teal-400',
      badge: 'bg-teal-400/20 text-teal-300',
      total: 'text-teal-400',
    },
    gold: {
      border: 'border-gold-400',
      badge: 'bg-gold-400/20 text-gold-300',
      total: 'text-gold-400',
    },
    navy: {
      border: 'border-navy-400',
      badge: 'bg-navy-400/20 text-navy-300',
      total: 'text-white',
    },
  };

  return (
    <section className="bg-white py-20" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-block bg-navy-100 text-navy-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
            Odisha Exclusive
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            {t.odishaGuide.title}
          </h2>
          <p className="text-navy-600 text-lg max-w-2xl mx-auto">{t.odishaGuide.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {tiers.map((tier, i) => {
            const ac = accentClasses[tier.accent];
            return (
              <div
                key={i}
                className={`bg-navy-900 border-2 ${ac.border} rounded-2xl p-8 transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${ac.badge}`}>
                  {tier.label}
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-white/60 text-sm">{t.odishaGuide.central}</span>
                    <span className="text-white font-semibold">{tier.central}</span>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="flex justify-between items-center">
                    <span className="text-white/60 text-sm">{t.odishaGuide.state}</span>
                    <span className="text-white font-semibold">{tier.state}</span>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 text-sm font-semibold">{t.odishaGuide.total}</span>
                    <span className={`font-bold text-xl font-playfair ${ac.total}`}>{tier.total}</span>
                  </div>
                </div>
                {tier.note && (
                  <div className="text-center">
                    <span className="text-xs bg-gold-500/20 text-gold-400 px-3 py-1 rounded-full">
                      {tier.note}
                    </span>
                  </div>
                )}
                {/* Shimmer bar */}
                <div className="mt-4 h-1.5 bg-white/10 rounded-full subsidy-shimmer-bar overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      tier.accent === 'teal' ? 'bg-teal-400' :
                      tier.accent === 'gold' ? 'bg-gold-400' : 'bg-navy-400'
                    }`}
                    style={{ width: tier.accent === 'navy' ? '100%' : tier.accent === 'gold' ? '80%' : '40%' }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Rollout Info */}
        <div className="bg-navy-50 border border-navy-200 rounded-2xl p-6 flex items-start gap-4">
          <div className="w-10 h-10 bg-navy-900 rounded-full flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5 text-gold-400" />
          </div>
          <div>
            <h4 className="font-semibold text-navy-900 mb-1">{t.odishaGuide.rolloutTitle}</h4>
            <p className="text-navy-600 text-sm">{t.odishaGuide.rolloutDesc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
