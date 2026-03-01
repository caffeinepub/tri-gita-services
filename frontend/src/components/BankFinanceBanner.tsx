import { useEffect, useRef, useState } from 'react';
import { Landmark, MessageCircle } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

export default function BankFinanceBanner() {
  const t = useTranslation();
  const b = t.bankFinanceBanner;

  const bannerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (bannerRef.current) observer.observe(bannerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={bannerRef} className="py-20 bg-charcoal-900 relative overflow-hidden">
      {/* Shimmer overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 animate-[banner-shimmer_4s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/20 rounded-full mb-6">
            <Landmark className="w-8 h-8 text-amber-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{b.title}</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-12">{b.subtitle}</p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {b.stats.map((stat, i) => (
            <div
              key={i}
              className={`text-center bg-white/10 rounded-xl p-6 border border-white/10 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${i === 1 ? 'animate-[stat-pulse-glow_3s_ease-in-out_infinite]' : ''}`}
              style={{ transitionDelay: visible ? `${200 + i * 150}ms` : '0ms' }}
            >
              <div className="text-4xl font-black text-amber-400 mb-2">{stat.value}</div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-700 delay-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="https://wa.me/917838867880"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            {b.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
