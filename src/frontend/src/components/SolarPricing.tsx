import { BadgeIndianRupee, CheckCircle, Tag, Zap } from "lucide-react";
import React from "react";
import { SiWhatsapp } from "react-icons/si";
import { useTranslation } from "../i18n/useTranslation";

const WHATSAPP_NUMBER = "917838867880";

export default function SolarPricing() {
  const t = useTranslation();

  const plans = [
    {
      kw: "1 kW",
      price: "₹75,000",
      badge: t.pricing.popular1,
      features: [t.pricing.feature1, t.pricing.feature2, t.pricing.feature3],
      accent: "teal",
      waMsg:
        "Hi, I am interested in the 1kW Solar System (₹75,000). Please share details.",
    },
    {
      kw: "2 kW",
      price: "₹1,60,000",
      badge: t.pricing.popular2,
      features: [t.pricing.feature1, t.pricing.feature2, t.pricing.feature3],
      accent: "gold",
      highlighted: true,
      waMsg:
        "Hi, I am interested in the 2kW Solar System (₹1,60,000). Please share details.",
    },
    {
      kw: "3 kW",
      price: "₹2,05,000",
      badge: t.pricing.popular3,
      features: [t.pricing.feature1, t.pricing.feature2, t.pricing.feature3],
      accent: "navy",
      waMsg:
        "Hi, I am interested in the 3kW Solar System (₹2,05,000). Please share details.",
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
            <Tag className="w-3.5 h-3.5" />
            {t.pricing.sectionBadge}
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {plans.map((plan) => (
            <div
              key={plan.kw}
              data-ocid={`pricing.${plan.kw.replace(" ", "").toLowerCase()}.card`}
              className={`relative rounded-2xl overflow-hidden border transition-all hover:-translate-y-1 hover:shadow-lg ${
                plan.highlighted
                  ? "border-teal-500 shadow-md bg-gradient-to-br from-teal-50 to-gray-50"
                  : "border-gray-200 bg-white shadow-sm"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 inset-x-0 bg-teal-600 text-white text-xs font-bold text-center py-1.5 tracking-wider uppercase">
                  {t.pricing.mostPopular}
                </div>
              )}
              <div className={`p-7 ${plan.highlighted ? "pt-10" : ""}`}>
                {/* System size */}
                <div className="flex items-center gap-2 mb-3">
                  <Zap
                    className={`w-5 h-5 ${
                      plan.accent === "teal"
                        ? "text-teal-500"
                        : plan.accent === "gold"
                          ? "text-teal-600"
                          : "text-teal-700"
                    }`}
                  />
                  <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                    {plan.kw} {t.pricing.systemLabel}
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-end gap-1 mb-2">
                  <BadgeIndianRupee
                    className={`w-6 h-6 mb-1 ${
                      plan.highlighted ? "text-teal-600" : "text-teal-600"
                    }`}
                  />
                  <span
                    className={`text-4xl font-extrabold ${
                      plan.highlighted ? "text-teal-700" : "text-slate-800"
                    }`}
                  >
                    {plan.price}
                  </span>
                </div>

                <p className="text-slate-400 text-xs mb-6">{plan.badge}</p>

                {/* Features */}
                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-teal-500" />
                      <span className="text-slate-600 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* WhatsApp CTA */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(plan.waMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid={`pricing.${plan.kw.replace(" ", "").toLowerCase()}.button`}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5 hover:shadow-md bg-green-600 hover:bg-green-500 text-white"
                >
                  <SiWhatsapp className="w-4 h-4" />
                  {t.pricing.inquireWhatsApp}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Discount & Registration Note */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-xl px-5 py-4">
            <Tag className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-green-800 text-sm">
                {t.pricing.discountTitle}
              </p>
              <p className="text-green-700 text-xs mt-0.5">
                {t.pricing.discountDesc}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-xl px-5 py-4">
            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-blue-800 text-sm">
                {t.pricing.regFeeTitle}
              </p>
              <p className="text-blue-700 text-xs mt-0.5">
                {t.pricing.regFeeDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
