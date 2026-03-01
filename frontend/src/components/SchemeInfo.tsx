import { CheckCircle2, Star, Users, FileText, Lightbulb } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const benefits = [
    { text: 'Free electricity up to 300 units per month for eligible households' },
    { text: 'Central government subsidy up to ₹78,000 on solar panel installation' },
    { text: 'Reduce electricity bills to near zero for domestic consumers' },
    { text: 'Sell surplus electricity back to the grid and earn extra income' },
    { text: 'One-time investment with 25+ years of clean energy generation' },
    { text: 'Contribute to India\'s clean energy and net-zero carbon goals' },
];

const eligibility = [
    'Indian citizen with a valid residential property',
    'Active electricity connection from a DISCOM (distribution company)',
    'Rooftop space suitable for solar panel installation',
    'Valid Aadhaar card and bank account for subsidy transfer',
    'Annual household income within scheme guidelines',
];

const steps = [
    { step: '01', title: 'Consultation', desc: 'Contact TRI-GITA SERVICES for a free site assessment and eligibility check.' },
    { step: '02', title: 'Application', desc: 'We assist you in registering on the PM Surya Ghar portal and submitting documents.' },
    { step: '03', title: 'Installation', desc: 'Our certified team installs your solar panels with quality assurance.' },
    { step: '04', title: 'Subsidy', desc: 'Receive government subsidy directly in your bank account after inspection.' },
];

export default function SchemeInfo() {
    return (
        <section id="scheme" className="section-padding bg-background">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <Badge className="solar-gradient text-primary-foreground border-0 mb-4 font-body font-medium px-4 py-1">
                        Government Scheme
                    </Badge>
                    <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-4">
                        PM Surya Ghar{' '}
                        <span className="text-solar-500">Muft Bijli Yojana</span>
                    </h2>
                    <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto leading-relaxed">
                        India's flagship solar rooftop scheme launched by the Government of India to provide 
                        free electricity to 1 crore households across the country.
                    </p>
                </div>

                {/* Benefits + Eligibility Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-14">
                    {/* Benefits */}
                    <div className="card-solar p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg solar-gradient flex items-center justify-center">
                                <Star className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <h3 className="font-heading font-800 text-xl text-foreground">Key Benefits</h3>
                        </div>
                        <ul className="space-y-3">
                            {benefits.map((b, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-forest-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-foreground/80 font-body text-sm leading-relaxed">{b.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Eligibility */}
                    <div className="card-solar p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg green-gradient flex items-center justify-center">
                                <Users className="w-5 h-5 text-secondary-foreground" />
                            </div>
                            <h3 className="font-heading font-800 text-xl text-foreground">Eligibility Criteria</h3>
                        </div>
                        <ul className="space-y-3">
                            {eligibility.map((e, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full solar-gradient flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-primary-foreground text-xs font-heading font-800">{i + 1}</span>
                                    </div>
                                    <span className="text-foreground/80 font-body text-sm leading-relaxed">{e}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* How TRI-GITA Helps */}
                <div className="bg-forest-700 rounded-2xl p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-lg solar-gradient flex items-center justify-center">
                            <Lightbulb className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <h3 className="font-heading font-800 text-xl text-white">
                            How TRI-GITA SERVICES Helps You
                        </h3>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((s) => (
                            <div key={s.step} className="relative">
                                <div className="text-solar-400 font-heading font-900 text-4xl mb-3 opacity-60">{s.step}</div>
                                <h4 className="font-heading font-700 text-white text-base mb-2">{s.title}</h4>
                                <p className="text-white/70 font-body text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 pt-8 border-t border-white/10 flex items-start gap-3">
                        <FileText className="w-5 h-5 text-solar-400 flex-shrink-0 mt-0.5" />
                        <p className="text-white/80 font-body text-sm leading-relaxed">
                            <strong className="text-solar-300">TRI-GITA SERVICES</strong>, a unit of BHAGYALAXMI CONSTRUCTION, 
                            provides end-to-end assistance — from eligibility verification and documentation to installation 
                            and post-installation support — ensuring you receive the full benefit of the government scheme 
                            without any hassle.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
