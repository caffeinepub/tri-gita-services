import { useEffect, useRef, useState } from 'react';
import { FileText, CheckCircle } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

export default function OdishaGuide() {
  const t = useTranslation();
  const g = t.odishaGuide;

  const subsidyRef = useRef<HTMLDivElement>(null);
  const [subsidyVisible, setSubsidyVisible] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setSubsidyVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSubsidyVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (subsidyRef.current) observer.observe(subsidyRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="guide" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{g.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{g.subtitle}</p>
        </div>

        {/* Installation Phases */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">{g.phases.title}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {g.phases.items.map((item, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {item.phase}
                  </span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Subsidy Structure */}
        <div ref={subsidyRef} className="mb-16">
          <h3
            className={`text-2xl font-bold text-foreground mb-2 text-center transition-all duration-700 ${
              subsidyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {g.subsidy.title}
          </h3>
          <div
            className={`h-1 w-24 mx-auto mb-8 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-700 delay-100 ${
              subsidyVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          />
          <div className="grid sm:grid-cols-3 gap-6">
            {g.subsidy.tiers.map((tier, i) => (
              <div
                key={i}
                className={`bg-card border-2 border-amber-200 dark:border-amber-800 rounded-xl p-6 text-center shadow-sm transition-all duration-700 ${
                  subsidyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: subsidyVisible ? `${200 + i * 120}ms` : '0ms' }}
              >
                <div className="text-3xl font-bold text-amber-600 mb-1">{tier.capacity}</div>
                <div className="text-2xl font-bold text-foreground mb-2">{tier.subsidy}</div>
                <div className="text-sm text-muted-foreground">{tier.note}</div>
              </div>
            ))}
          </div>
          <p
            className={`text-xs text-muted-foreground text-center mt-4 transition-all duration-700 delay-500 ${
              subsidyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {g.subsidy.note}
          </p>
        </div>

        {/* Bottom Grid: Eligibility, Documents, DISCOMs */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Eligibility */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-foreground mb-4">{g.eligibility.title}</h3>
            <ul className="space-y-2">
              {g.eligibility.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Documents */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-foreground mb-4">{g.documents.title}</h3>
            <ul className="space-y-2">
              {g.documents.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <FileText className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* DISCOMs */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-foreground mb-4">{g.discoms.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.discoms.items.map((discom, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full"
                >
                  {discom}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
