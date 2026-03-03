import { Banknote, CheckCircle, Clock, TrendingUp } from "lucide-react";
import React from "react";
import { SiWhatsapp } from "react-icons/si";
import { useTranslation } from "../i18n/useTranslation";

const WHATSAPP_NUMBER = "917838867880";

export default function BankFinanceBanner() {
  const t = useTranslation();

  const stats = [
    {
      value: t.bankFinance.stat1Value,
      label: t.bankFinance.stat1Label,
      icon: TrendingUp,
      color: "text-green-400",
      bg: "bg-green-500/10 border-green-500/30",
    },
    {
      value: t.bankFinance.stat2Value,
      label: t.bankFinance.stat2Label,
      icon: CheckCircle,
      color: "text-gold-400",
      bg: "bg-gold-500/10 border-gold-500/30",
    },
    {
      value: t.bankFinance.stat3Value,
      label: t.bankFinance.stat3Label,
      icon: Clock,
      color: "text-teal-400",
      bg: "bg-teal-500/10 border-teal-500/30",
    },
  ];

  return (
    <section id="finance" className="py-16 bg-navy-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-navy-800 to-navy-950 border border-gold-500/30 rounded-3xl p-8 sm:p-12">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/40 text-gold-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Banknote className="w-4 h-4" />
              Easy Finance
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              {t.bankFinance.title}
            </h2>
            <p className="text-navy-300 text-lg">{t.bankFinance.subtitle}</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`border rounded-2xl p-6 text-center ${stat.bg}`}
              >
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <div className={`text-4xl font-extrabold mb-1 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-navy-300 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Finance Flow Visual */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 bg-navy-900/50 rounded-2xl p-6">
            <div className="text-center">
              <div className="text-3xl font-extrabold text-green-400">90%</div>
              <div className="text-navy-300 text-sm">Bank Pays</div>
            </div>
            <div className="text-navy-500 text-2xl font-bold">+</div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-gold-400">10%</div>
              <div className="text-navy-300 text-sm">You Pay</div>
            </div>
            <div className="text-navy-500 text-2xl font-bold">=</div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-white">100%</div>
              <div className="text-navy-300 text-sm">Solar System</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=I'm interested in solar finance options`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <SiWhatsapp className="w-6 h-6" />
              {t.bankFinance.ctaText}
            </a>
            <p className="text-navy-500 text-xs mt-3">{t.bankFinance.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
