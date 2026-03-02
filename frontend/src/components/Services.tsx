import { CheckCircle, ArrowRight } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

export default function Services() {
  const t = useTranslation();
  const s = t.services;

  return (
    <section id="services" className="py-20 lg:py-28 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-gold-100 text-gold-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-800 mb-4">
            {s.title}
          </h2>
          <p className="text-navy-500 text-lg max-w-2xl mx-auto">
            {s.subtitle}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Domestic */}
          <div className="group bg-white rounded-2xl overflow-hidden shadow-navy-sm hover:shadow-navy-md transition-all duration-300 hover:-translate-y-1 border border-navy-100">
            <div className="relative h-56 overflow-hidden">
              <img
                src="/assets/generated/domestic-solar.dim_400x300.png"
                alt={s.domestic.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="bg-gold-500 text-navy-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Residential
                </span>
              </div>
            </div>
            <div className="p-6 lg:p-8">
              <h3 className="font-display text-2xl font-bold text-navy-800 mb-2">{s.domestic.title}</h3>
              <ul className="space-y-3 mb-8">
                {s.domestic.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#inquiry"
                className="group/btn inline-flex items-center gap-2 bg-navy-700 hover:bg-navy-800 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 text-sm shadow-navy-sm hover:shadow-navy-md"
              >
                {s.domestic.cta}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Commercial */}
          <div className="group bg-white rounded-2xl overflow-hidden shadow-navy-sm hover:shadow-navy-md transition-all duration-300 hover:-translate-y-1 border border-navy-100">
            <div className="relative h-56 overflow-hidden">
              <img
                src="/assets/generated/commercial-solar.dim_400x300.png"
                alt={s.commercial.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Commercial
                </span>
              </div>
            </div>
            <div className="p-6 lg:p-8">
              <h3 className="font-display text-2xl font-bold text-navy-800 mb-2">{s.commercial.title}</h3>
              <ul className="space-y-3 mb-8">
                {s.commercial.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#inquiry"
                className="group/btn inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold px-6 py-3 rounded-xl transition-all duration-200 text-sm shadow-gold-sm hover:shadow-gold-md"
              >
                {s.commercial.cta}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
