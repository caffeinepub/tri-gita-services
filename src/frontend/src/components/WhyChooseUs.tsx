import { Award, HeadphonesIcon, Tag } from "lucide-react";
import React from "react";
import { useTranslation } from "../i18n/useTranslation";

type AccentKey = "navy" | "gold" | "teal";

const accentMap: Record<
  AccentKey,
  { bg: string; icon: string; border: string; title: string }
> = {
  navy: {
    bg: "bg-teal-800",
    icon: "text-teal-300",
    border: "border-teal-700",
    title: "text-teal-300",
  },
  gold: {
    bg: "bg-teal-600",
    icon: "text-white",
    border: "border-teal-500",
    title: "text-white",
  },
  teal: {
    bg: "bg-teal-500",
    icon: "text-white",
    border: "border-teal-400",
    title: "text-white",
  },
};

export default function WhyChooseUs() {
  const t = useTranslation();

  const cards = [
    {
      icon: Award,
      title: t.whyChooseUs.card1Title,
      desc: t.whyChooseUs.card1Desc,
      accent: "navy" as AccentKey,
    },
    {
      icon: Tag,
      title: t.whyChooseUs.card2Title,
      desc: t.whyChooseUs.card2Desc,
      accent: "gold" as AccentKey,
    },
    {
      icon: HeadphonesIcon,
      title: t.whyChooseUs.card3Title,
      desc: t.whyChooseUs.card3Desc,
      accent: "teal" as AccentKey,
    },
  ];

  return (
    <section id="why-us" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-block bg-gray-100 text-slate-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
            Our Advantage
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            {t.whyChooseUs.title}
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            {t.whyChooseUs.subtitle}
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
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <card.icon className={`w-8 h-8 ${ac.icon}`} />
                </div>
                <h3
                  className={`font-playfair text-xl font-bold mb-3 ${ac.title}`}
                >
                  {card.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    card.accent === "navy"
                      ? "text-white/80"
                      : card.accent === "gold"
                        ? "text-white/90"
                        : "text-white/80"
                  }`}
                >
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
