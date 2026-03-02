import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

export default function Services() {
  const t = useTranslation();

  const handleInquiry = () => {
    const el = document.querySelector('#inquiry');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: t.services.residentialTitle,
      desc: t.services.residentialDesc,
      image: '/assets/generated/domestic-solar.dim_400x300.png',
      features: [
        t.services.residentialFeature1,
        t.services.residentialFeature2,
        t.services.residentialFeature3,
        t.services.residentialFeature4,
      ],
      accent: 'teal',
    },
    {
      title: t.services.commercialTitle,
      desc: t.services.commercialDesc,
      image: '/assets/generated/commercial-solar.dim_400x300.png',
      features: [
        t.services.commercialFeature1,
        t.services.commercialFeature2,
        t.services.commercialFeature3,
        t.services.commercialFeature4,
      ],
      accent: 'gold',
    },
  ];

  return (
    <section id="services" className="bg-navy-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-block bg-navy-100 text-navy-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
            What We Offer
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            {t.services.title}
          </h2>
          <p className="text-navy-600 text-lg max-w-2xl mx-auto">{t.services.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-card border border-navy-100 hover:shadow-navy transition-shadow"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-playfair text-xl font-bold text-white">{service.title}</h3>
                  <p className="text-white/70 text-sm">{service.desc}</p>
                </div>
              </div>

              {/* Features */}
              <div className="p-6">
                <ul className="space-y-2.5 mb-6">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <CheckCircle
                        className={`w-4 h-4 flex-shrink-0 ${
                          service.accent === 'teal' ? 'text-teal-500' : 'text-gold-500'
                        }`}
                      />
                      <span className="text-navy-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={handleInquiry}
                  className={`w-full flex items-center justify-center gap-2 font-semibold text-sm py-3 rounded-xl transition-colors ${
                    service.accent === 'teal'
                      ? 'bg-teal-500 hover:bg-teal-600 text-white'
                      : 'bg-gold-500 hover:bg-gold-600 text-navy-900'
                  }`}
                >
                  {t.services.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
