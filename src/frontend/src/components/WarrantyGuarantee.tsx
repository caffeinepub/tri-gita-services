import { Cpu, Shield, Wrench } from "lucide-react";
import React from "react";
import { useTranslation } from "../i18n/useTranslation";

type AccentKey = "navy" | "gold" | "teal";

const accentMap: Record<
  AccentKey,
  {
    bg: string;
    border: string;
    yearColor: string;
    iconBg: string;
    iconColor: string;
  }
> = {
  navy: {
    bg: "bg-teal-800",
    border: "border-teal-700",
    yearColor: "text-teal-300",
    iconBg: "bg-teal-300/20",
    iconColor: "text-teal-300",
  },
  gold: {
    bg: "bg-teal-600",
    border: "border-teal-500",
    yearColor: "text-white",
    iconBg: "bg-white/20",
    iconColor: "text-white",
  },
  teal: {
    bg: "bg-teal-500",
    border: "border-teal-400",
    yearColor: "text-white",
    iconBg: "bg-white/20",
    iconColor: "text-white",
  },
};

export default function WarrantyGuarantee() {
  const t = useTranslation();

  const cards = [
    {
      icon: Shield,
      years: t.warranty.card1Years,
      title: t.warranty.card1Title,
      desc: t.warranty.card1Desc,
      accent: "navy" as AccentKey,
    },
    {
      icon: Cpu,
      years: t.warranty.card2Years,
      title: t.warranty.card2Title,
      desc: t.warranty.card2Desc,
      accent: "gold" as AccentKey,
    },
    {
      icon: Wrench,
      years: t.warranty.card3Years,
      title: t.warranty.card3Title,
      desc: t.warranty.card3Desc,
      accent: "teal" as AccentKey,
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-block bg-teal-100 text-teal-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
            Peace of Mind
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            {t.warranty.title}
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            {t.warranty.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => {
            const ac = accentMap[card.accent];
            return (
              <div
                key={card.title}
                className={`${ac.bg} border ${ac.border} rounded-2xl p-8 text-center`}
              >
                <div
                  className={`w-14 h-14 ${ac.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <card.icon className={`w-7 h-7 ${ac.iconColor}`} />
                </div>
                <div
                  className={`font-playfair text-5xl font-bold mb-1 ${ac.yearColor}`}
                >
                  {card.years}
                </div>
                <div
                  className={`text-xs font-semibold mb-3 ${ac.yearColor} opacity-70`}
                >
                  YEARS
                </div>
                <h3 className="font-playfair text-lg font-bold mb-3 text-white">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/80">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
