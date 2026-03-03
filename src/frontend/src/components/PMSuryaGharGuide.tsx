import {
  CheckCircle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Phone,
  Star,
} from "lucide-react";
import React, { useState } from "react";
import { useTranslation } from "../i18n/useTranslation";

const PHASE_ICONS = ["📋", "🏢", "🔧", "💰"];
const PHASE_COLORS = [
  "border-blue-500 bg-blue-500/10",
  "border-gold-500 bg-gold-500/10",
  "border-teal-500 bg-teal-500/10",
  "border-green-500 bg-green-500/10",
];
const PHASE_NUMBER_COLORS = [
  "bg-blue-500 text-white",
  "bg-gold-500 text-navy-900",
  "bg-teal-500 text-white",
  "bg-green-500 text-white",
];

export default function PMSuryaGharGuide() {
  const t = useTranslation();
  const [expandedPhase, setExpandedPhase] = useState<number | null>(0);

  const phases = [
    { ...t.pmGuide.phase1 },
    { ...t.pmGuide.phase2 },
    { ...t.pmGuide.phase3 },
    { ...t.pmGuide.phase4 },
  ];

  const whyCards = [
    { title: t.pmGuide.why1Title, desc: t.pmGuide.why1Desc, icon: "✅" },
    { title: t.pmGuide.why2Title, desc: t.pmGuide.why2Desc, icon: "⚡" },
    { title: t.pmGuide.why3Title, desc: t.pmGuide.why3Desc, icon: "📄" },
  ];

  return (
    <section id="pm-guide" className="py-16 bg-navy-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/40 text-gold-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4" />
            PM Surya Ghar Muft Bijli Yojana
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            {t.pmGuide.title}
          </h2>
          <p className="text-navy-300 text-lg max-w-2xl mx-auto">
            {t.pmGuide.subtitle}
          </p>
        </div>

        {/* 4-Phase Stepper */}
        <div className="space-y-4 mb-14">
          {phases.map((phase, idx) => (
            <div
              key={phase.title}
              className={`border rounded-2xl overflow-hidden transition-all ${PHASE_COLORS[idx]}`}
            >
              <button
                type="button"
                className="w-full flex items-center gap-4 p-5 text-left"
                onClick={() =>
                  setExpandedPhase(expandedPhase === idx ? null : idx)
                }
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 ${PHASE_NUMBER_COLORS[idx]}`}
                >
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{PHASE_ICONS[idx]}</span>
                    <span className="text-white font-bold text-lg">
                      {phase.title}
                    </span>
                  </div>
                </div>
                <div className="text-navy-400 flex-shrink-0">
                  {expandedPhase === idx ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>

              {expandedPhase === idx && (
                <div className="px-5 pb-5">
                  <ul className="space-y-3">
                    {phase.steps.map((step: string) => (
                      <li key={step} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-navy-200 text-sm leading-relaxed">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Why Choose Bhagyalaxmi */}
        <div className="bg-navy-900 border border-gold-500/30 rounded-3xl p-8 mb-10">
          <h3 className="text-2xl font-bold text-white text-center mb-6">
            {t.pmGuide.whyTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="bg-navy-800 rounded-2xl p-5 text-center border border-navy-700 hover:border-gold-500/50 transition-colors"
              >
                <div className="text-4xl mb-3">{card.icon}</div>
                <h4 className="text-gold-400 font-bold text-base mb-2">
                  {card.title}
                </h4>
                <p className="text-navy-300 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Portal & Helpline */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center bg-navy-900 border border-teal-500/30 rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <ExternalLink className="w-5 h-5 text-teal-400" />
            <div>
              <div className="text-navy-400 text-xs font-medium uppercase tracking-wider">
                {t.pmGuide.portalLabel}
              </div>
              <a
                href="https://pmsuryaghar.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 font-bold hover:text-teal-300 transition-colors"
              >
                {t.pmGuide.portalLink}
              </a>
            </div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-navy-700" />
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-gold-400" />
            <div>
              <div className="text-navy-400 text-xs font-medium uppercase tracking-wider">
                {t.pmGuide.helplineLabel}
              </div>
              <a
                href="tel:15555"
                className="text-gold-400 font-bold text-xl hover:text-gold-300 transition-colors"
              >
                {t.pmGuide.helplineNumber}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
