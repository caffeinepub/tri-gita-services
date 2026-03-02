import React from 'react';
import { CheckCircle, Users, ClipboardList, Wrench, CreditCard } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

export default function SchemeInfo() {
  const t = useTranslation();

  const benefits = [
    t.schemeInfo.benefit1,
    t.schemeInfo.benefit2,
    t.schemeInfo.benefit3,
    t.schemeInfo.benefit4,
    t.schemeInfo.benefit5,
  ];

  const eligibility = [
    t.schemeInfo.eligibility1,
    t.schemeInfo.eligibility2,
    t.schemeInfo.eligibility3,
    t.schemeInfo.eligibility4,
  ];

  const steps = [
    { icon: ClipboardList, title: t.schemeInfo.step1Title, desc: t.schemeInfo.step1Desc, num: '01' },
    { icon: Users, title: t.schemeInfo.step2Title, desc: t.schemeInfo.step2Desc, num: '02' },
    { icon: Wrench, title: t.schemeInfo.step3Title, desc: t.schemeInfo.step3Desc, num: '03' },
    { icon: CreditCard, title: t.schemeInfo.step4Title, desc: t.schemeInfo.step4Desc, num: '04' },
  ];

  return (
    <section id="scheme" className="bg-navy-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block bg-gold-500/20 text-gold-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
            Government Scheme
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.schemeInfo.title}
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">{t.schemeInfo.subtitle}</p>
        </div>

        {/* Benefits & Eligibility */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Benefits */}
          <div className="bg-navy-800 rounded-2xl p-8 border border-navy-700">
            <h3 className="font-playfair text-xl font-bold text-gold-400 mb-6">
              {t.schemeInfo.benefitsTitle}
            </h3>
            <ul className="space-y-3">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Eligibility */}
          <div className="bg-navy-800 rounded-2xl p-8 border border-navy-700">
            <h3 className="font-playfair text-xl font-bold text-gold-400 mb-6">
              {t.schemeInfo.eligibilityTitle}
            </h3>
            <ul className="space-y-3">
              {eligibility.map((e, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm">{e}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Process Steps */}
        <div>
          <h3 className="font-playfair text-2xl font-bold text-white text-center mb-10">
            {t.schemeInfo.processTitle}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gold-500/30 z-0" />
                )}
                <div className="bg-navy-800 border border-navy-700 rounded-2xl p-6 text-center relative z-10">
                  <div className="text-gold-500/30 font-playfair font-bold text-4xl mb-3">{step.num}</div>
                  <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                  <p className="text-white/60 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
