import { CheckCircle } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

export default function Services() {
  const t = useTranslation();
  const s = t.services;

  const serviceCards = [
    {
      key: 'domestic',
      image: '/assets/generated/domestic-solar.dim_400x300.png',
      data: s.domestic,
    },
    {
      key: 'commercial',
      image: '/assets/generated/commercial-solar.dim_400x300.png',
      data: s.commercial,
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{s.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{s.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {serviceCards.map(({ key, image, data }) => (
            <div
              key={key}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={image}
                  alt={data.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{data.title}</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2 mb-6">
                  {data.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#inquiry"
                  className="block w-full text-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  {data.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
