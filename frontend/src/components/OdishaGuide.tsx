import { useEffect, useRef, useState } from 'react';
import { CheckCircle, FileText, MapPin, Phone, Globe, Zap, ClipboardList, Wrench, Banknote } from 'lucide-react';

const phases = [
  {
    number: '01',
    title: 'Registration & Feasibility',
    icon: <ClipboardList className="w-6 h-6" />,
    color: 'forest',
    steps: [
      'Visit the official portal: pmsuryaghar.gov.in',
      'Select Odisha as your State and your specific DISCOM (e.g., TP Central Odisha)',
      'Enter your Electricity Consumer Number and Mobile Number',
      'Submit basic technical details for feasibility review',
      'DISCOM reviews transformer load — approval in 7–15 days',
    ],
  },
  {
    number: '02',
    title: 'Selecting BHAGYALAXMI CONSTRUCTION',
    icon: <CheckCircle className="w-6 h-6" />,
    color: 'solar',
    steps: [
      'Log back into the portal using your Consumer Number',
      'Navigate to the "Select Registered Vendor" section',
      'Filter by State (Odisha) and your District',
      'Search for and select BHAGYALAXMI CONSTRUCTION',
      'Sign the online agreement (Model Draft) with the vendor to begin installation',
    ],
  },
  {
    number: '03',
    title: 'Installation & Net-Metering',
    icon: <Wrench className="w-6 h-6" />,
    color: 'forest',
    steps: [
      'Bhagyalaxmi Construction installs solar panels, inverter & wiring per MNRE standards',
      'Vendor submits installation details and photos on the portal',
      'Apply for a Net-Meter via the portal',
      'Your DISCOM visits to install the bi-directional meter',
    ],
  },
  {
    number: '04',
    title: 'Subsidy Disbursement',
    icon: <Banknote className="w-6 h-6" />,
    color: 'solar',
    steps: [
      'Commissioning Certificate issued by DISCOM after net-meter is functional',
      'Upload a clear photo of your cancelled cheque on the portal',
      'Subsidy up to ₹1,38,000 credited directly to your bank account',
      'Payment processed within 30 working days',
    ],
  },
];

const subsidyTiers = [
  {
    capacity: '1 kW',
    central: '₹30,000',
    state: '₹25,000',
    total: '₹55,000',
  },
  {
    capacity: '2 kW',
    central: '₹60,000',
    state: '₹50,000',
    total: '₹1,10,000',
  },
  {
    capacity: '3 kW+',
    central: '₹78,000',
    state: '₹60,000',
    total: '₹1,38,000',
    note: 'Maximum Cap',
  },
];

const eligibility = [
  'Must be an Indian citizen residing in Odisha',
  'Ownership of a house with a suitable rooftop',
  'Valid consumer number with an Odisha DISCOM',
];

const documents = [
  'Aadhaar Card',
  'Latest Electricity Bill (to verify Consumer Number)',
  'Proof of Rooftop Ownership (Property Tax Receipt / Sale Deed)',
  'Bank Passbook / Cancelled Cheque (for subsidy credit)',
];

const discoms = ['TPCODL', 'TPSODL', 'TPNODL', 'TPWODL'];

export default function OdishaGuide() {
  const subsidyRef = useRef<HTMLDivElement>(null);
  const [subsidyVisible, setSubsidyVisible] = useState(false);

  useEffect(() => {
    const el = subsidyRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSubsidyVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="odisha-guide" className="section-padding bg-forest-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-solar-400 text-forest-900 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Step-by-Step Guide
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-solar-400 mb-4">
            PM Surya Ghar Muft Bijli Yojana
          </h2>
          <p className="text-solar-100 text-lg max-w-2xl mx-auto">
            How to apply in Odisha and select{' '}
            <span className="text-solar-400 font-semibold">BHAGYALAXMI CONSTRUCTION</span> as your trusted vendor
          </p>
        </div>

        {/* Scheme Overview */}
        <div className="bg-forest-800 rounded-2xl p-6 mb-10 border border-forest-600">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-6 h-6 text-solar-400" />
            <h3 className="font-heading text-xl font-bold text-solar-300">Scheme Overview</h3>
          </div>
          <p className="text-solar-100 mb-4">
            A national scheme providing up to <span className="text-solar-400 font-bold">300 units of free electricity</span> monthly to eligible households.
            Odisha benefits from net-metering support through all four DISCOMs:
          </p>
          <div className="flex flex-wrap gap-2">
            {discoms.map((d) => (
              <span
                key={d}
                className="bg-forest-700 border border-solar-600 text-solar-300 text-sm font-semibold px-3 py-1 rounded-full"
              >
                {d}
              </span>
            ))}
          </div>
        </div>

        {/* Subsidy Breakdown — animated */}
        <div ref={subsidyRef} className="mb-12">
          {/* Section heading animates in */}
          <h3
            className={[
              'font-heading text-2xl font-bold text-solar-300 mb-6 text-center',
              'transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none',
              subsidyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
            ].join(' ')}
          >
            Odisha Subsidy Structure
          </h3>

          {/* Shimmer bar under heading */}
          <div
            className={[
              'mx-auto mb-6 h-1 rounded-full subsidy-shimmer-bar',
              'transition-all duration-700 delay-100 ease-out motion-reduce:transition-none',
              subsidyVisible ? 'opacity-100 w-24' : 'opacity-0 w-0',
            ].join(' ')}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {subsidyTiers.map((tier, index) => (
              <div
                key={tier.capacity}
                className={[
                  'relative bg-forest-800 border border-forest-600 rounded-2xl p-6 text-center hover:border-solar-400 transition-colors duration-200',
                  'transition-all ease-out motion-reduce:transition-none motion-reduce:transform-none',
                  subsidyVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8',
                ].join(' ')}
                style={{
                  transitionDuration: subsidyVisible ? '600ms' : '0ms',
                  transitionDelay: subsidyVisible ? `${200 + index * 120}ms` : '0ms',
                }}
              >
                {tier.note && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-solar-400 text-forest-900 text-xs font-bold px-3 py-0.5 rounded-full">
                    {tier.note}
                  </span>
                )}
                <div className="text-solar-400 font-heading text-2xl font-black mb-4">{tier.capacity}</div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm text-solar-200">
                    <span>Central Subsidy</span>
                    <span className="font-semibold">{tier.central}</span>
                  </div>
                  <div className="flex justify-between text-sm text-solar-200">
                    <span>State Subsidy</span>
                    <span className="font-semibold">{tier.state}</span>
                  </div>
                  <div className="border-t border-forest-600 pt-2 flex justify-between text-solar-400 font-bold">
                    <span>Total Subsidy</span>
                    <span className="text-lg">{tier.total}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Animated total note */}
          <p
            className={[
              'text-center text-solar-300 text-sm mt-5 font-medium',
              'transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none',
              subsidyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
            ].join(' ')}
            style={{ transitionDelay: subsidyVisible ? '560ms' : '0ms' }}
          >
            ✦ Maximum combined subsidy up to <span className="text-solar-400 font-bold">₹1,38,000</span> for 3 kW and above
          </p>
        </div>

        {/* Four Phases */}
        <div className="mb-12">
          <h3 className="font-heading text-2xl font-bold text-solar-300 mb-8 text-center">
            Application Process — 4 Phases
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {phases.map((phase) => (
              <div
                key={phase.number}
                className="bg-forest-800 border border-forest-600 rounded-2xl p-6 hover:border-solar-500 transition-colors duration-200"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-solar-400 text-forest-900 flex items-center justify-center font-heading font-black text-lg">
                    {phase.number}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-solar-400">{phase.icon}</span>
                    <h4 className="font-heading font-bold text-solar-200 text-base leading-tight">
                      {phase.title}
                    </h4>
                  </div>
                </div>
                <ul className="space-y-2">
                  {phase.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-solar-100">
                      <CheckCircle className="w-4 h-4 text-solar-500 flex-shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility & Documents */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Eligibility */}
          <div className="bg-forest-800 border border-forest-600 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-5 h-5 text-solar-400" />
              <h3 className="font-heading text-lg font-bold text-solar-300">Eligibility Criteria</h3>
            </div>
            <ul className="space-y-3">
              {eligibility.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-solar-100">
                  <CheckCircle className="w-4 h-4 text-solar-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Documents */}
          <div className="bg-forest-800 border border-forest-600 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-5 h-5 text-solar-400" />
              <h3 className="font-heading text-lg font-bold text-solar-300">Required Documents</h3>
            </div>
            <ul className="space-y-3">
              {documents.map((doc, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-solar-100">
                  <CheckCircle className="w-4 h-4 text-solar-400 flex-shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact & Resources */}
        <div className="bg-solar-400 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Globe className="w-5 h-5 text-forest-900" />
            <div>
              <p className="text-forest-900 text-xs font-semibold uppercase tracking-wide">Official Portal</p>
              <a
                href="https://pmsuryaghar.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest-900 font-bold text-base hover:underline"
              >
                pmsuryaghar.gov.in
              </a>
            </div>
          </div>
          <div className="h-px sm:h-10 sm:w-px w-full bg-forest-700 opacity-30" />
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-forest-900" />
            <div>
              <p className="text-forest-900 text-xs font-semibold uppercase tracking-wide">Helpline</p>
              <p className="text-forest-900 font-bold text-base">15555</p>
            </div>
          </div>
          <div className="h-px sm:h-10 sm:w-px w-full bg-forest-700 opacity-30" />
          <div className="text-center sm:text-right">
            <p className="text-forest-900 text-xs font-semibold uppercase tracking-wide">Your Service Provider</p>
            <p className="text-forest-900 font-bold text-base">TRI-GITA SERVICES</p>
            <p className="text-forest-800 text-sm">(Bhagyalaxmi Construction)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
