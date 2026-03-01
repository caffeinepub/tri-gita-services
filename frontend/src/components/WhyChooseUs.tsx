import { BadgeCheck, Wrench, HeartHandshake } from 'lucide-react';

const benefits = [
  {
    icon: <BadgeCheck className="w-8 h-8" />,
    title: 'Registered Vendor',
    description:
      'Officially empaneled under PM Surya Ghar Muft Bijli Yojana in Odisha — ensuring your subsidy is processed without delays.',
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: 'Technical Expertise',
    description:
      'Ensures high-quality mounting, wiring, and inverter installation per MNRE standards for maximum efficiency and longevity.',
  },
  {
    icon: <HeartHandshake className="w-8 h-8" />,
    title: 'Hassle-Free Process',
    description:
      'We assist with all technical uploads, portal documentation, and coordination with your DISCOM — so you don\'t have to.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-forest-100 text-forest-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Our Advantage
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest-700 mb-4">
            Why Choose{' '}
            <span className="text-solar-500">BHAGYALAXMI CONSTRUCTION</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Your trusted partner for a seamless solar journey — from application to subsidy credit.
          </p>
        </div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-8 text-center hover:shadow-solar hover:border-solar-300 transition-all duration-300"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-solar-50 text-solar-500 group-hover:bg-solar-400 group-hover:text-forest-900 transition-colors duration-300 mb-5 mx-auto">
                {benefit.icon}
              </div>

              {/* Number badge */}
              <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-forest-600 text-white text-xs font-bold flex items-center justify-center font-heading">
                {index + 1}
              </div>

              <h3 className="font-heading text-xl font-bold text-forest-700 mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom accent bar */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <div className="h-px flex-1 max-w-xs bg-border" />
          <span className="text-solar-500 font-heading font-bold text-sm uppercase tracking-widest">
            Empaneled · Trusted · Experienced
          </span>
          <div className="h-px flex-1 max-w-xs bg-border" />
        </div>
      </div>
    </section>
  );
}
