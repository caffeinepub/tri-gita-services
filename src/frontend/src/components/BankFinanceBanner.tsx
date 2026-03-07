import {
  Banknote,
  CheckCircle,
  Clock,
  Percent,
  Shield,
  TrendingUp,
  University,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { useTranslation } from "../i18n/useTranslation";

const WHATSAPP_NUMBER = "917838867880";

const BANKS = ["SBI", "Canara Bank", "Bank of Baroda", "Union Bank", "PNB"];

export default function BankFinanceBanner() {
  const t = useTranslation();
  const [activeBankIdx, setActiveBankIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBankIdx((prev) => (prev + 1) % BANKS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
      color: "text-teal-600",
      bg: "bg-teal-50 border-teal-200",
    },
    {
      value: t.bankFinance.stat3Value,
      label: t.bankFinance.stat3Label,
      icon: Clock,
      color: "text-teal-400",
      bg: "bg-teal-500/10 border-teal-500/30",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: t.bankFinance.collateralFree,
      desc: t.bankFinance.collateralFreeDesc,
      color: "text-green-400",
      bg: "bg-green-500/10 border-green-500/20",
    },
    {
      icon: Percent,
      title: t.bankFinance.interestRate,
      desc: t.bankFinance.interestRateLabel,
      color: "text-teal-700",
      bg: "bg-teal-50 border-teal-200",
    },
    {
      icon: University,
      title: "Top Banks",
      desc: t.bankFinance.banks,
      color: "text-teal-400",
      bg: "bg-teal-500/10 border-teal-500/20",
    },
  ];

  return (
    <section id="finance" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-teal-200 rounded-3xl p-8 sm:p-12 shadow-sm">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-teal-100 border border-teal-300 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Banknote className="w-4 h-4" />
              Easy Finance
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-3">
              {t.bankFinance.title}
            </h2>
            <p className="text-slate-500 text-lg">{t.bankFinance.subtitle}</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`border rounded-2xl p-6 text-center ${stat.bg}`}
              >
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <div className={`text-4xl font-extrabold mb-1 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-slate-500 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Finance Flow Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 bg-slate-100 rounded-2xl p-6"
          >
            <div className="text-center">
              <div className="text-3xl font-extrabold text-green-400">90%</div>
              <div className="text-slate-500 text-sm">Bank Pays</div>
            </div>
            <div className="text-slate-400 text-2xl font-bold">+</div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-teal-700">10%</div>
              <div className="text-slate-500 text-sm">You Pay</div>
            </div>
            <div className="text-slate-400 text-2xl font-bold">=</div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-slate-800">100%</div>
              <div className="text-slate-500 text-sm">Solar System</div>
            </div>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`border rounded-2xl p-5 ${feature.bg}`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <feature.icon
                    className={`w-6 h-6 flex-shrink-0 ${feature.color}`}
                  />
                  <span className={`font-bold text-sm ${feature.color}`}>
                    {feature.title}
                  </span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Animated Bank Ticker */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-8 bg-slate-100 rounded-xl px-6 py-3"
          >
            <University className="w-4 h-4 text-teal-400 flex-shrink-0" />
            <span className="text-slate-500 text-sm">Partner Banks:</span>
            <div className="relative h-6 overflow-hidden min-w-[120px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeBankIdx}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute left-0 text-teal-400 font-bold text-sm whitespace-nowrap"
                >
                  {BANKS[activeBankIdx]}
                </motion.span>
              </AnimatePresence>
            </div>
            <span className="text-slate-400 text-sm">& more</span>
          </motion.div>

          {/* CTA */}
          <div className="text-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=I'm interested in solar finance options`}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="finance.primary_button"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <SiWhatsapp className="w-6 h-6" />
              {t.bankFinance.ctaText}
            </a>
            <p className="text-slate-400 text-xs mt-3">{t.bankFinance.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
