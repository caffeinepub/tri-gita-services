import { useEffect, useRef, useState } from 'react';
import { Landmark, TrendingUp, Clock, CheckCircle } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { useTranslation } from '../i18n/useTranslation';

export default function BankFinanceBanner() {
  const t = useTranslation();
  const b = t.bankFinanceBanner;

  const bannerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { setIsVisible(true); return; }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (bannerRef.current) observer.observe(bannerRef.current);
    return () => observer.disconnect();
  }, []);

  const statIcons = [TrendingUp, CheckCircle, Clock];

  return (
    <section
      ref={bannerRef}
      className="relative py-20 lg:py-28 overflow-hidden bg-navy-800"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-teal-900/50" />

      {/* Shimmer overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-banner-shimmer" />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Icon + heading */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-500/20 border border-gold-500/30 rounded-2xl mb-6">
              <Landmark className="w-8 h-8 text-gold-400" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {b.title}
            </h2>
            <p className="text-navy-300 text-lg max-w-2xl mx-auto">
              {b.subtitle}
            </p>
          </div>

          {/* Stats */}
          <div
            className={`grid sm:grid-cols-3 gap-6 mb-12 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {b.stats.map((stat, i) => {
              const StatIcon = statIcons[i];
              return (
                <div
                  key={i}
                  className={`bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center ${
                    i === 0 ? 'animate-stat-pulse-glow' : ''
                  }`}
                  style={{ transitionDelay: `${200 + i * 150}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-gold-500/20 rounded-xl mb-4">
                    <StatIcon className="w-5 h-5 text-gold-400" />
                  </div>
                  <div className="font-display text-3xl font-bold text-gold-400 mb-1">{stat.value}</div>
                  <div className="text-navy-300 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div
            className={`text-center transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a
              href="https://wa.me/917838867880"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 shadow-teal-md hover:-translate-y-0.5 hover:scale-105"
            >
              <SiWhatsapp className="w-6 h-6" />
              {b.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
