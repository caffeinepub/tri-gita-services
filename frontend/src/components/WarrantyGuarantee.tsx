import { ShieldCheck, Zap, Wrench } from 'lucide-react';

const warranties = [
    {
        icon: ShieldCheck,
        years: '25',
        unit: 'Years',
        title: 'Solar Panel Warranty',
        description:
            'Our premium solar panels come with an industry-leading 25-year performance warranty, ensuring long-term energy production and peace of mind for your investment.',
        highlight: 'Performance Guaranteed',
        color: 'amber',
    },
    {
        icon: Zap,
        years: '10',
        unit: 'Years',
        title: 'Inverter Warranty',
        description:
            'Every inverter we install is backed by a comprehensive 10-year warranty, covering parts and labour so your system keeps converting solar energy efficiently.',
        highlight: 'Full Coverage',
        color: 'orange',
    },
    {
        icon: Wrench,
        years: '5',
        unit: 'Years',
        title: 'Free Service Guarantee',
        description:
            'Enjoy 5 years of complimentary maintenance and service visits by our certified vendor team — no hidden charges, no surprises, just reliable after-sales support.',
        highlight: 'By Certified Vendor',
        color: 'amber',
    },
];

export default function WarrantyGuarantee() {
    return (
        <section id="warranty" className="section-padding bg-charcoal-900">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-14">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/15 text-amber-400 font-body text-xs font-semibold uppercase tracking-widest mb-4">
                        Our Commitment to You
                    </span>
                    <h2 className="font-heading font-800 text-3xl md:text-4xl text-amber-50 mb-4">
                        Warranty &amp; Guarantee
                    </h2>
                    <p className="font-body text-charcoal-300 max-w-2xl mx-auto text-base leading-relaxed">
                        We stand behind every installation with industry-leading warranties and a vendor-backed free service guarantee — because your trust matters.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {warranties.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.title}
                                className="relative group rounded-2xl border border-amber-500/20 bg-charcoal-800 p-8 flex flex-col items-center text-center hover:border-amber-400/50 hover:shadow-amber transition-all duration-300"
                            >
                                {/* Badge */}
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                                    <div className="flex items-baseline gap-1 px-5 py-2 rounded-full solar-gradient shadow-amber">
                                        <span className="font-heading font-800 text-2xl text-charcoal-900 leading-none">
                                            {item.years}
                                        </span>
                                        <span className="font-heading font-700 text-sm text-charcoal-900/80">
                                            {item.unit}
                                        </span>
                                    </div>
                                </div>

                                {/* Icon */}
                                <div className="mt-8 mb-5 w-16 h-16 rounded-full solar-gradient flex items-center justify-center shadow-amber group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="w-8 h-8 text-charcoal-900" />
                                </div>

                                {/* Content */}
                                <h3 className="font-heading font-700 text-xl text-amber-50 mb-3">
                                    {item.title}
                                </h3>
                                <p className="font-body text-charcoal-300 text-sm leading-relaxed mb-5">
                                    {item.description}
                                </p>

                                {/* Highlight pill */}
                                <span className="mt-auto inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-body text-xs font-semibold">
                                    {item.highlight}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom note */}
                <p className="text-center font-body text-charcoal-400 text-xs mt-10">
                    * Warranty terms are subject to manufacturer and vendor conditions. Contact us for full details.
                </p>
            </div>
        </section>
    );
}
