import React from 'react';
import { MessageCircle, ChevronRight, Zap, IndianRupee, Shield } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

const WHATSAPP_NUMBER = '917838867880';

export default function Hero() {
  const t = useTranslation();

  const stats = [
    { icon: Zap, value: t.hero.stat1Value, label: t.hero.stat1Label },
    { icon: IndianRupee, value: t.hero.stat2Value, label: t.hero.stat2Label },
    { icon: Shield, value: t.hero.stat3Value, label: t.hero.stat3Label },
  ];

  const handleSchemeClick = () => {
    const el = document.querySelector('#scheme');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image - Odisha State Map with Solar AI Illustration */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/generated/hero-odisha-solar-map.dim_1920x1080.png')`,
        }}
      />

      {/* Warm gradient overlay for text legibility over the solar illustration */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950/75 via-navy-900/60 to-amber-900/50" />

      {/* Subtle warm sun-glow at top */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-navy-950/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gold-500/25 border border-gold-400/50 text-gold-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
          {t.hero.badge}
        </div>

        {/* Headline */}
        <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
          {t.hero.headline}{' '}
          <span className="text-gold-400">{t.hero.headlineAccent}</span>
        </h1>

        {/* Tagline */}
        <p className="text-white/85 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow">
          {t.hero.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in solar installation. Please share a free quote.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold text-base px-8 py-4 rounded-full transition-all shadow-gold hover:shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            {t.hero.ctaWhatsapp}
          </a>
          <button
            onClick={handleSchemeClick}
            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-full transition-all backdrop-blur-sm"
          >
            {t.hero.ctaScheme}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-sm border border-gold-400/25 rounded-2xl p-4 text-center"
            >
              <stat.icon className="w-6 h-6 text-gold-400 mx-auto mb-2" />
              <div className="text-white font-bold text-xl font-playfair">{stat.value}</div>
              <div className="text-white/65 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
