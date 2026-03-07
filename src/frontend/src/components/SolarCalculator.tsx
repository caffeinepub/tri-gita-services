import { Calculator, IndianRupee, Sun, TrendingDown, Zap } from "lucide-react";
import React, { useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { useLanguage } from "../contexts/LanguageContext";

const WHATSAPP_NUMBER = "917838867880";

const SYSTEM_DATA = {
  "1": {
    systemCost: 75000,
    subsidy: 55000,
    netCost: 20000,
    monthlyGeneration: 120,
    annualGeneration: 1440,
    ratePerUnit: 6.5,
    monthlySavings: 780,
    annualSavings: 9360,
    paybackYears: 2.1,
    lifetimeSavings: 225000,
    co2Saved: 1.1,
  },
  "2": {
    systemCost: 160000,
    subsidy: 110000,
    netCost: 50000,
    monthlyGeneration: 240,
    annualGeneration: 2880,
    ratePerUnit: 6.5,
    monthlySavings: 1560,
    annualSavings: 18720,
    paybackYears: 2.7,
    lifetimeSavings: 460000,
    co2Saved: 2.2,
  },
  "3": {
    systemCost: 205000,
    subsidy: 138000,
    netCost: 67000,
    monthlyGeneration: 360,
    annualGeneration: 4320,
    ratePerUnit: 6.5,
    monthlySavings: 2340,
    annualSavings: 28080,
    paybackYears: 2.4,
    lifetimeSavings: 695000,
    co2Saved: 3.3,
  },
};

const labels = {
  en: {
    title: "Solar Savings Calculator",
    subtitle: "See how much you save with solar — instantly",
    selectSystem: "Select System Size",
    "1kw": "1 kW – Small Home",
    "2kw": "2 kW – Medium Home",
    "3kw": "3 kW – Large Home",
    systemCost: "System Cost",
    subsidy: "Govt. Subsidy (Odisha)",
    netCost: "Your Net Cost",
    monthlySavings: "Monthly Savings",
    annualSavings: "Annual Savings",
    payback: "Payback Period",
    lifetimeSavings: "25-Year Savings",
    co2: "CO₂ Saved / Year",
    paybackUnit: "years",
    co2Unit: "tonnes/yr",
    inquire: "Get This System — WhatsApp Us",
    note: "* Savings estimated at ₹6.50/unit average Odisha tariff. Actual savings may vary.",
    resultTitle: "Your Estimated Savings",
  },
  hi: {
    title: "सौर बचत कैलकुलेटर",
    subtitle: "जानें सौर से आप कितना बचा सकते हैं — तुरंत",
    selectSystem: "सिस्टम साइज चुनें",
    "1kw": "1 kW – छोटा घर",
    "2kw": "2 kW – मध्यम घर",
    "3kw": "3 kW – बड़ा घर",
    systemCost: "सिस्टम लागत",
    subsidy: "सरकारी सब्सिडी (ओडिशा)",
    netCost: "आपकी शुद्ध लागत",
    monthlySavings: "मासिक बचत",
    annualSavings: "वार्षिक बचत",
    payback: "लागत वापसी अवधि",
    lifetimeSavings: "25 साल की बचत",
    co2: "CO₂ बचत / वर्ष",
    paybackUnit: "वर्ष",
    co2Unit: "टन/वर्ष",
    inquire: "यह सिस्टम पाएं — व्हाट्सएप करें",
    note: "* बचत ₹6.50/यूनिट औसत ओडिशा टैरिफ पर अनुमानित। वास्तविक बचत भिन्न हो सकती है।",
    resultTitle: "आपकी अनुमानित बचत",
  },
  od: {
    title: "ସୌର ସଞ୍ଚୟ ଗଣକ",
    subtitle: "ସୌର ଶକ୍ତିରୁ ଆପଣ କେତେ ସଞ୍ଚୟ କରିପାରିବେ — ତୁରନ୍ତ ଜାଣନ୍ତୁ",
    selectSystem: "ସିଷ୍ଟମ ଆକାର ଚୟନ କରନ୍ତୁ",
    "1kw": "1 kW – ଛୋଟ ଘର",
    "2kw": "2 kW – ମଧ୍ୟମ ଘର",
    "3kw": "3 kW – ବଡ ଘର",
    systemCost: "ସିଷ୍ଟମ ଖର୍ଚ୍ଚ",
    subsidy: "ସରକାରୀ ସବ୍ସିଡି (ଓଡ଼ିଶା)",
    netCost: "ଆପଣଙ୍କ ନିଟ ଖର୍ଚ୍ଚ",
    monthlySavings: "ମାସିକ ସଞ୍ଚୟ",
    annualSavings: "ବାର୍ଷିକ ସଞ୍ଚୟ",
    payback: "ଖର୍ଚ୍ଚ ଫେରସ୍ତ ଅବଧି",
    lifetimeSavings: "25 ବର୍ଷ ସଞ୍ଚୟ",
    co2: "CO₂ ସଞ୍ଚୟ / ବର୍ଷ",
    paybackUnit: "ବର୍ଷ",
    co2Unit: "ଟନ/ବର୍ଷ",
    inquire: "ଏହି ସିଷ୍ଟମ ପ୍ରାପ୍ତ କରନ୍ତୁ — ହ୍ୱାଟ୍ସଆପ କରନ୍ତୁ",
    note: "* ₹6.50/ୟୁନିଟ ଗଡ଼ ଓଡ଼ିଶା ଟ୍ୟାରିଫ ଆଧାରରେ ସଞ୍ଚୟ ଅନୁମାନ। ପ୍ରକୃତ ସଞ୍ଚୟ ଭିନ୍ନ ହୋଇପାରେ।",
    resultTitle: "ଆପଣଙ୍କ ଅନୁମାନିତ ସଞ୍ଚୟ",
  },
};

function fmt(n: number) {
  return `₹${n.toLocaleString("en-IN")}`;
}

export default function SolarCalculator() {
  const { language } = useLanguage();
  const t = labels[language] ?? labels.en;
  const [selected, setSelected] = useState<"1" | "2" | "3" | null>(null);

  const data = selected ? SYSTEM_DATA[selected] : null;

  const waMsg = selected
    ? `Hi, I want to install a ${selected}kW solar system (Net cost after subsidy: ${fmt(SYSTEM_DATA[selected].netCost)}). Please share details.`
    : "";

  return (
    <section id="calculator" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
            <Calculator className="w-3.5 h-3.5" />
            {t.title}
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-slate-800 mb-3">
            {t.title}
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* System Size Selector */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          {(["1", "2", "3"] as const).map((kw) => (
            <button
              type="button"
              key={kw}
              data-ocid={`calculator.${kw}kw.toggle`}
              onClick={() => setSelected(kw)}
              className={`flex-1 max-w-xs mx-auto sm:mx-0 py-4 px-6 rounded-2xl border-2 font-bold text-base transition-all hover:-translate-y-0.5 focus:outline-none ${
                selected === kw
                  ? "border-teal-500 bg-teal-50 text-teal-700 shadow-md"
                  : "border-slate-200 bg-white text-slate-600 hover:border-teal-300"
              }`}
            >
              <Sun
                className={`w-6 h-6 mx-auto mb-1 ${selected === kw ? "text-amber-500" : "text-slate-400"}`}
              />
              {t[`${kw}kw` as "1kw" | "2kw" | "3kw"]}
            </button>
          ))}
        </div>

        {/* Results */}
        {data && (
          <div
            data-ocid="calculator.results.panel"
            className="bg-gradient-to-br from-slate-50 to-teal-50 border border-teal-200 rounded-3xl p-6 sm:p-8 animate-in fade-in duration-300"
          >
            <h3 className="text-center font-bold text-slate-700 text-xl mb-6">
              {t.resultTitle}
            </h3>

            {/* Cost Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-2xl p-5 text-center border border-slate-200 shadow-sm">
                <IndianRupee className="w-6 h-6 text-slate-500 mx-auto mb-1" />
                <div className="text-2xl font-extrabold text-slate-700">
                  {fmt(data.systemCost)}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  {t.systemCost}
                </div>
              </div>
              <div className="bg-green-50 rounded-2xl p-5 text-center border border-green-200 shadow-sm">
                <TrendingDown className="w-6 h-6 text-green-600 mx-auto mb-1" />
                <div className="text-2xl font-extrabold text-green-600">
                  -{fmt(data.subsidy)}
                </div>
                <div className="text-xs text-green-700 mt-1">{t.subsidy}</div>
              </div>
              <div className="bg-teal-50 rounded-2xl p-5 text-center border border-teal-300 shadow-sm ring-2 ring-teal-400/30">
                <IndianRupee className="w-6 h-6 text-teal-700 mx-auto mb-1" />
                <div className="text-2xl font-extrabold text-teal-700">
                  {fmt(data.netCost)}
                </div>
                <div className="text-xs text-teal-700 mt-1 font-semibold">
                  {t.netCost}
                </div>
              </div>
            </div>

            {/* Savings Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {[
                {
                  icon: Zap,
                  color: "text-teal-600",
                  bg: "bg-teal-50 border-teal-200",
                  value: fmt(data.monthlySavings),
                  label: t.monthlySavings,
                },
                {
                  icon: IndianRupee,
                  color: "text-blue-600",
                  bg: "bg-blue-50 border-blue-200",
                  value: fmt(data.annualSavings),
                  label: t.annualSavings,
                },
                {
                  icon: Calculator,
                  color: "text-purple-600",
                  bg: "bg-purple-50 border-purple-200",
                  value: `${data.paybackYears} ${t.paybackUnit}`,
                  label: t.payback,
                },
                {
                  icon: Sun,
                  color: "text-orange-600",
                  bg: "bg-orange-50 border-orange-200",
                  value: fmt(data.lifetimeSavings),
                  label: t.lifetimeSavings,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`rounded-xl p-4 text-center border ${item.bg}`}
                >
                  <item.icon className={`w-5 h-5 mx-auto mb-1 ${item.color}`} />
                  <div className={`text-lg font-extrabold ${item.color}`}>
                    {item.value}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="text-center">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="calculator.inquire.button"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full text-base transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <SiWhatsapp className="w-5 h-5" />
                {t.inquire}
              </a>
              <p className="text-xs text-slate-400 mt-4">{t.note}</p>
            </div>
          </div>
        )}

        {/* Prompt if nothing selected */}
        {!data && (
          <div
            data-ocid="calculator.empty_state"
            className="text-center py-12 text-slate-400 text-lg"
          >
            <Calculator className="w-12 h-12 mx-auto mb-3 opacity-30" />
            {t.selectSystem}
          </div>
        )}
      </div>
    </section>
  );
}
