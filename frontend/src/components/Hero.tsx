import { Sun, ArrowRight, ChevronDown } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

export default function Hero() {
  const t = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/generated/hero-bg.dim_1920x1080.png')" }}
      />

      {/* Deep navy gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900/90 via-navy-800/75 to-navy-700/60" />

      {/* Subtle darkening at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900/80 to-transparent" />

      {/* Decorative gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-400/40 text-gold-300 px-4 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
          <Sun className="w-4 h-4 text-gold-400" />
          <span>{t.hero.subheadline}</span>
        </div>

        {/* Main headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          {t.hero.headline}
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
          {t.hero.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/917838867880"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 shadow-gold-lg hover:-translate-y-0.5 hover:scale-105"
          >
            {t.hero.cta}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#scheme"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 backdrop-blur-sm"
          >
            {t.hero.ctaSecondary}
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          {[
            { value: '500+', label: 'Installations' },
            { value: '₹78K', label: 'Max Subsidy' },
            { value: '25yr', label: 'Panel Warranty' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gold-400 font-display">{stat.value}</div>
              <div className="text-sm text-white/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
