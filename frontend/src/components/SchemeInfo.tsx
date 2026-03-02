import { CheckCircle, Star, ArrowRight, Users, Zap, FileText, Wrench } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

const benefits = [
  'Free electricity up to 300 units/month',
  'Central subsidy up to ₹78,000',
  'Additional state subsidy available',
  'Net metering — sell surplus power',
  'Increase property value',
  'Zero carbon footprint',
];

const eligibility = [
  'Indian citizen with valid Aadhaar',
  'Residential property owner',
  'Active electricity connection',
  'Rooftop area of at least 10 sq. meters',
];

const steps = [
  { icon: FileText, title: 'Application', desc: 'We handle the complete online application on the PM Surya Ghar portal on your behalf.' },
  { icon: Users, title: 'Site Survey', desc: 'Our technical team visits your property for a free feasibility assessment.' },
  { icon: Wrench, title: 'Installation', desc: 'Certified engineers install your solar system with minimal disruption.' },
  { icon: Zap, title: 'Subsidy Credit', desc: 'Subsidy amount is directly credited to your bank account after inspection.' },
];

export default function SchemeInfo() {
  const t = useTranslation();
  const s = t.schemeInfo;

  return (
    <section id="scheme" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-teal-100 text-teal-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            Government Scheme
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-800 mb-4">
            {s.title}
          </h2>
          <p className="text-navy-500 text-lg max-w-3xl mx-auto">
            {s.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Benefits */}
          <div className="bg-navy-50 rounded-2xl p-8 border border-navy-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold-500 rounded-xl flex items-center justify-center">
                <Star className="w-5 h-5 text-navy-900" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy-800">{s.benefits.title}</h3>
            </div>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span className="text-navy-600">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Eligibility */}
          <div className="bg-gold-50 rounded-2xl p-8 border border-gold-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-navy-700 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy-800">{s.eligibility.title}</h3>
            </div>
            <ul className="space-y-3">
              {eligibility.map((e) => (
                <li key={e} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span className="text-navy-600">{e}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-white rounded-xl border border-gold-200">
              <p className="text-sm text-navy-600 font-medium">
                💡 Not sure if you qualify? Contact us for a free eligibility check.
              </p>
            </div>
          </div>
        </div>

        {/* How we help — 4 steps */}
        <div className="bg-navy-800 rounded-3xl p-8 lg:p-12">
          <h3 className="font-display text-2xl lg:text-3xl font-bold text-white text-center mb-10">
            {s.process.title}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.title} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-gold-500/30 z-0" />
                )}
                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 bg-gold-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-gold-md">
                    <step.icon className="w-6 h-6 text-navy-900" />
                  </div>
                  <div className="text-xs text-gold-400 font-bold uppercase tracking-widest mb-2">Step {i + 1}</div>
                  <h4 className="font-display text-lg font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-navy-300 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="#inquiry"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-gold-md hover:shadow-gold-lg hover:-translate-y-0.5"
            >
              {t.header.nav.getQuote}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
