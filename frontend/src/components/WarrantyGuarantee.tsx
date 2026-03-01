import { Shield, Zap, Wrench } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

const ICONS = [Shield, Zap, Wrench];

export default function WarrantyGuarantee() {
  const t = useTranslation();
  const w = t.warrantyGuarantee;

  return (
    <section className="py-20 bg-muted/30">
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
                className="bg-card border border-amber-200 dark:border-amber-800 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
