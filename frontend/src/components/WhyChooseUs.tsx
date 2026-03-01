import { Shield, Wrench, Smile } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

const ICONS = [Shield, Wrench, Smile];

export default function WhyChooseUs() {
  const t = useTranslation();
  const w = t.whyChooseUs;

  return (
    <section id="why-us" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{w.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{w.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {w.cards.map((card, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={i}
                className="group relative bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute top-6 right-6 text-5xl font-black text-muted/20 select-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
