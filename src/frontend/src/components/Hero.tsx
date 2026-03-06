import { ArrowRight, IndianRupee, MapPin, Sun, Users, Zap } from "lucide-react";
import React from "react";
import { SiWhatsapp } from "react-icons/si";
import { useTranslation } from "../i18n/useTranslation";

const WHATSAPP_NUMBER = "917838867880";

export default function Hero() {
  const t = useTranslation();

  const stats = [
    { value: t.hero.stat1Value, label: t.hero.stat1Label, icon: MapPin },
    { value: t.hero.stat2Value, label: t.hero.stat2Label, icon: Users },
    { value: t.hero.stat3Value, label: t.hero.stat3Label, icon: IndianRupee },
    { value: t.hero.stat4Value, label: t.hero.stat4Label, icon: Zap },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/sambalpur-solar-hero.dim_1400x700.jpg')",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/75 to-amber-900/50" />

      {/* Decorative solar rays */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
        <div className="w-full h-full rounded-full bg-gold-400 blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10">
        <div className="w-full h-full rounded-full bg-teal-400 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/40 text-gold-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
          <Sun className="w-4 h-4 text-gold-400" />
          {t.hero.badge}
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
          {t.hero.headline}
        </h1>

        {/* Company Name */}
        <div className="text-gold-400 text-xl sm:text-2xl font-bold mb-4 tracking-wide">
          TRI-GITA SERVICES
        </div>

        {/* Subheadline */}
        <p className="text-slate-200 text-lg sm:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
          {t.hero.subheadline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#inquiry"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-8 py-4 rounded-full text-lg transition-all shadow-gold hover:shadow-lg hover:-translate-y-0.5"
          >
            {t.hero.ctaPrimary}
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            <SiWhatsapp className="w-5 h-5" />
            {t.hero.ctaSecondary}
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center"
            >
              <stat.icon className="w-6 h-6 text-gold-400 mx-auto mb-1" />
              <div className="text-2xl font-extrabold text-white">
                {stat.value}
              </div>
              <div className="text-slate-300 text-xs font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Parent Company Badge */}
        <div className="mt-8 text-slate-400 text-sm">
          A unit of{" "}
          <span className="text-gold-400 font-semibold">
            BHAGYALAXMI CONSTRUCTION
          </span>
        </div>
      </div>
    </section>
  );
}
