import React from 'react';
import {
  CheckCircle,
  Users,
  ClipboardList,
  Wrench,
  CreditCard,
  Globe,
  LogIn,
  List,
  Filter,
  UserCheck,
  FileSignature,
  HardHat,
  FileCheck,
  Gauge,
  Award,
  Banknote,
  BadgeCheck,
  Zap,
  HeartHandshake,
  ExternalLink,
  ArrowRight,
} from 'lucide-react';
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

  // Phase 1 steps
  const phase1Steps = [
    {
      icon: Globe,
      title: 'Visit the Portal',
      desc: 'Go to pmsuryaghar.gov.in — the official PM Surya Ghar registration portal.',
    },
    {
      icon: UserCheck,
      title: 'Register',
      desc: 'Select Odisha as State and your specific DISCOM (e.g., TP Central Odisha).',
    },
    {
      icon: ClipboardList,
      title: 'Enter Details',
      desc: 'Use your Electricity Consumer Number and Mobile Number to register.',
    },
    {
      icon: CheckCircle,
      title: 'Feasibility Approval',
      desc: 'Submit your basic technical details. The DISCOM will review your transformer load and approve "Feasibility" (usually within 7–15 days).',
    },
  ];

  // Phase 2 steps
  const phase2Steps = [
    {
      icon: LogIn,
      title: 'Login',
      desc: 'Log back into the portal using your Consumer Number.',
    },
    {
      icon: List,
      title: 'Vendor List',
      desc: 'Navigate to the "Select Registered Vendor" section.',
    },
    {
      icon: Filter,
      title: 'Filter',
      desc: 'Filter by State (Odisha) and District to narrow down vendors.',
    },
    {
      icon: BadgeCheck,
      title: 'Selection',
      desc: 'Search for and select BHAGYALAXMI CONSTRUCTION from the vendor list.',
    },
    {
      icon: FileSignature,
      title: 'Agreement',
      desc: 'Sign the online agreement (Model Draft) with the vendor to start the installation.',
    },
  ];

  // Phase 3 steps
  const phase3Steps = [
    {
      icon: HardHat,
      title: 'Installation',
      desc: 'Bhagyalaxmi Construction will install the solar panels, inverter, and wiring as per MNRE standards.',
    },
    {
      icon: FileCheck,
      title: 'Completion Report',
      desc: 'Once installed, the vendor (Bhagyalaxmi Construction) submits the installation details and photos on the portal.',
    },
    {
      icon: Gauge,
      title: 'Net-Metering',
      desc: 'Apply for a Net-Meter via the portal. Your DISCOM will visit to install the bi-directional meter.',
    },
  ];

  // Phase 4 steps
  const phase4Steps = [
    {
      icon: Award,
      title: 'Commissioning Certificate',
      desc: 'Issued by the DISCOM after the net-meter is functional.',
    },
    {
      icon: Banknote,
      title: 'Submit Bank Details',
      desc: 'Upload a clear photo of your cancelled cheque to the portal.',
    },
    {
      icon: CreditCard,
      title: 'Payment',
      desc: 'The subsidy (up to ₹1,38,000) is credited directly to your bank account within 30 working days.',
    },
  ];

  // Why Choose Bhagyalaxmi
  const whyChoosePoints = [
    {
      icon: BadgeCheck,
      title: 'Registered Vendor',
      desc: 'Officially empaneled in Odisha under the PM Surya Ghar scheme.',
      color: 'text-gold-400',
      bg: 'bg-gold-500/20',
    },
    {
      icon: Zap,
      title: 'Technical Expertise',
      desc: 'Ensures high-quality mounting and wiring as per MNRE standards.',
      color: 'text-teal-400',
      bg: 'bg-teal-400/20',
    },
    {
      icon: HeartHandshake,
      title: 'Hassle-Free',
      desc: 'They assist with the technical uploads and documentation required on the portal.',
      color: 'text-gold-400',
      bg: 'bg-gold-500/20',
    },
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
        <div className="mb-20">
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

        {/* ── PHASE 1 ── */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center text-navy-900 font-bold text-lg">1</div>
            <h3 className="font-playfair text-2xl font-bold text-white">
              Phase 1 – Registration &amp; Feasibility
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {phase1Steps.map((step, i) => (
              <div key={i} className="bg-navy-800 border border-navy-700 rounded-2xl p-5">
                <div className="w-10 h-10 bg-gold-500/20 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="w-5 h-5 text-gold-400" />
                </div>
                <h4 className="text-white font-semibold text-sm mb-2">{step.title}</h4>
                <p className="text-white/60 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2 bg-navy-800 border border-gold-500/30 rounded-xl px-5 py-3">
            <Globe className="w-4 h-4 text-gold-400 flex-shrink-0" />
            <span className="text-white/70 text-sm">Official Portal:</span>
            <a
              href="https://pmsuryaghar.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 font-semibold text-sm hover:text-gold-300 flex items-center gap-1 transition-colors"
            >
              pmsuryaghar.gov.in
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* ── PHASE 2 ── */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-navy-900 font-bold text-lg">2</div>
            <h3 className="font-playfair text-2xl font-bold text-white">
              Phase 2 – Selecting <span className="text-gold-400">BHAGYALAXMI CONSTRUCTION</span>
            </h3>
          </div>
          <p className="text-white/60 text-sm mb-6">
            Once Feasibility is approved, follow these steps to select your vendor:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {phase2Steps.map((step, i) => (
              <div key={i} className="bg-navy-800 border border-navy-700 rounded-2xl p-5 relative">
                <div className="absolute top-4 right-4 text-teal-400/30 font-playfair font-bold text-3xl">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="w-10 h-10 bg-teal-400/20 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="w-5 h-5 text-teal-400" />
                </div>
                <h4 className="text-white font-semibold text-sm mb-2">{step.title}</h4>
                <p className="text-white/60 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 bg-gold-500/10 border border-gold-500/40 rounded-xl px-5 py-4 flex items-start gap-3">
            <BadgeCheck className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
            <p className="text-white/80 text-sm">
              <span className="text-gold-400 font-bold">BHAGYALAXMI CONSTRUCTION</span> is officially registered and empaneled on the PM Surya Ghar portal for Odisha. Search by name to find and select us quickly.
            </p>
          </div>
        </div>

        {/* ── PHASE 3 ── */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center text-navy-900 font-bold text-lg">3</div>
            <h3 className="font-playfair text-2xl font-bold text-white">
              Phase 3 – Installation &amp; Net-Metering
            </h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {phase3Steps.map((step, i) => (
              <div key={i} className="bg-navy-800 border border-navy-700 rounded-2xl p-5">
                <div className="w-10 h-10 bg-gold-500/20 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="w-5 h-5 text-gold-400" />
                </div>
                <h4 className="text-white font-semibold text-sm mb-2">{step.title}</h4>
                <p className="text-white/60 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            <div className="bg-navy-800 border border-teal-400/30 rounded-xl px-5 py-3 flex items-center gap-3">
              <HardHat className="w-4 h-4 text-teal-400 flex-shrink-0" />
              <span className="text-white/70 text-xs">Installation follows <span className="text-teal-400 font-semibold">MNRE standards</span> for quality and safety</span>
            </div>
            <div className="bg-navy-800 border border-teal-400/30 rounded-xl px-5 py-3 flex items-center gap-3">
              <Gauge className="w-4 h-4 text-teal-400 flex-shrink-0" />
              <span className="text-white/70 text-xs">DISCOM installs a <span className="text-teal-400 font-semibold">bi-directional meter</span> for net metering</span>
            </div>
          </div>
        </div>

        {/* ── PHASE 4 ── */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-navy-900 font-bold text-lg">4</div>
            <h3 className="font-playfair text-2xl font-bold text-white">
              Phase 4 – Subsidy Disbursement
            </h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 mb-5">
            {phase4Steps.map((step, i) => (
              <div key={i} className="bg-navy-800 border border-navy-700 rounded-2xl p-5">
                <div className="w-10 h-10 bg-teal-400/20 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="w-5 h-5 text-teal-400" />
                </div>
                <h4 className="text-white font-semibold text-sm mb-2">{step.title}</h4>
                <p className="text-white/60 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          {/* Subsidy highlight */}
          <div className="bg-gradient-to-r from-gold-500/20 to-teal-400/10 border border-gold-500/40 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center gap-4">
            <div className="text-center sm:text-left">
              <div className="text-gold-400 font-playfair font-bold text-3xl">₹1,38,000</div>
              <div className="text-white/60 text-xs mt-1">Maximum Subsidy Amount</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/20" />
            <div className="text-center sm:text-left">
              <div className="text-teal-400 font-playfair font-bold text-3xl">30 Days</div>
              <div className="text-white/60 text-xs mt-1">Working Days for Credit</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/20" />
            <p className="text-white/70 text-sm flex-1">
              Subsidy is credited <span className="text-gold-400 font-semibold">directly to your bank account</span> after the commissioning certificate is issued and bank details are submitted.
            </p>
          </div>
        </div>

        {/* ── WHY CHOOSE BHAGYALAXMI CONSTRUCTION ── */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-block bg-gold-500/20 text-gold-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
              Your Trusted Vendor
            </div>
            <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white">
              Why Choose <span className="text-gold-400">Bhagyalaxmi Construction?</span>
            </h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {whyChoosePoints.map((point, i) => (
              <div key={i} className="bg-navy-800 border border-navy-700 rounded-2xl p-6 text-center">
                <div className={`w-14 h-14 ${point.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <point.icon className={`w-7 h-7 ${point.color}`} />
                </div>
                <h4 className={`font-playfair font-bold text-lg mb-3 ${point.color}`}>{point.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CONTACT & NEXT STEPS ── */}
        <div className="bg-gradient-to-br from-navy-800 to-navy-900 border border-gold-500/30 rounded-3xl p-8 sm:p-10 text-center">
          <div className="inline-block bg-gold-500/20 text-gold-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
            Contact &amp; Next Steps
          </div>
          <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to Go Solar?
          </h3>
          <p className="text-white/60 text-base max-w-xl mx-auto mb-6">
            Visit the official PM Surya Ghar portal to begin your registration, then select <span className="text-gold-400 font-semibold">BHAGYALAXMI CONSTRUCTION</span> as your vendor for a seamless, hassle-free experience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://pmsuryaghar.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-6 py-3 rounded-full transition-colors text-sm"
            >
              <Globe className="w-4 h-4" />
              pmsuryaghar.gov.in
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="#inquiry"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#inquiry')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm border border-white/20"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-white/40 text-xs">
            <Globe className="w-3.5 h-3.5" />
            <span>Official Website: </span>
            <a
              href="https://pmsuryaghar.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400/70 hover:text-gold-400 transition-colors"
            >
              pmsuryaghar.gov.in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
