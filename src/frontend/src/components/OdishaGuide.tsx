import { IndianRupee, TrendingUp, Zap } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "../i18n/useTranslation";

const subsidyTiers = [
  {
    kw: "1 kW",
    central: "₹30,000",
    state: "₹25,000",
    total: "₹55,000",
    centralRaw: 30000,
    stateRaw: 25000,
    totalRaw: 55000,
    maxCap: false,
  },
  {
    kw: "2 kW",
    central: "₹60,000",
    state: "₹50,000",
    total: "₹1,10,000",
    centralRaw: 60000,
    stateRaw: 50000,
    totalRaw: 110000,
    maxCap: false,
  },
  {
    kw: "3 kW+",
    central: "₹78,000",
    state: "₹60,000",
    total: "₹1,38,000",
    centralRaw: 78000,
    stateRaw: 60000,
    totalRaw: 138000,
    maxCap: true,
  },
];

export default function OdishaGuide() {
  const t = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="subsidy"
      className="py-16 bg-[oklch(0.95_0.03_220)]"
      ref={sectionRef}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-400/30 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <IndianRupee className="w-4 h-4" />
            Odisha PM Surya Ghar
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-3">
            {t.odishaGuide.title}
          </h2>
          <p className="text-slate-500 text-lg">{t.odishaGuide.subtitle}</p>
        </div>

        {/* Subsidy Tier Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
          {subsidyTiers.map((tier, idx) => (
            <div
              key={tier.kw}
              className={`relative bg-white border-2 rounded-3xl p-6 flex flex-col gap-4 transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              } ${tier.maxCap ? "border-amber-500 shadow-md" : "border-slate-200"}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {tier.maxCap && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                  {t.odishaGuide.maxCap}
                </div>
              )}

              {/* kW Label */}
              <div className="text-center">
                <div className="inline-flex items-center gap-1 bg-slate-100 border border-slate-300 text-slate-700 font-bold text-xl px-4 py-2 rounded-full">
                  <Zap className="w-5 h-5 text-gold-400" />
                  {tier.kw}
                </div>
              </div>

              {/* Subsidy Breakdown */}
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-blue-500/10 border border-blue-500/30 rounded-xl px-4 py-2.5">
                  <span className="text-slate-600 text-sm font-medium">
                    {t.odishaGuide.centralSubsidy}
                  </span>
                  <span className="text-blue-300 font-bold">
                    {tier.central}
                  </span>
                </div>
                <div className="flex items-center justify-between bg-teal-500/10 border border-teal-500/30 rounded-xl px-4 py-2.5">
                  <span className="text-slate-600 text-sm font-medium">
                    {t.odishaGuide.stateSubsidy}
                  </span>
                  <span className="text-teal-300 font-bold">{tier.state}</span>
                </div>
                <div className="flex items-center justify-between bg-gold-500/15 border border-gold-500/40 rounded-xl px-4 py-3">
                  <span className="text-slate-800 font-bold text-sm">
                    {t.odishaGuide.totalSubsidy}
                  </span>
                  <span className="text-amber-600 font-extrabold text-lg">
                    {tier.total}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Note */}
        <div className="bg-white border border-teal-200 rounded-2xl p-6 flex items-start gap-4 shadow-sm">
          <TrendingUp className="w-6 h-6 text-teal-500 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-slate-800 font-bold mb-1">
              Subsidy Disbursement
            </h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              Subsidy is credited directly to your bank account within 30
              working days after the commissioning certificate is issued by
              DISCOM. Maximum subsidy cap is{" "}
              <span className="text-amber-600 font-bold">₹1,38,000</span> for 3
              kW and above systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
