import { Home, Building2, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const domesticFeatures = [
    'Rooftop solar panels for homes & apartments',
    'System capacity: 1 kW to 10 kW',
    'Eligible for PM Surya Ghar subsidy',
    'Net metering for surplus electricity',
    'Complete installation & commissioning',
    '25-year performance warranty on panels',
];

const commercialFeatures = [
    'Large-scale solar for offices & factories',
    'System capacity: 10 kW to 500 kW+',
    'Significant reduction in electricity costs',
    'Accelerated depreciation tax benefits',
    'Custom design & engineering',
    'Dedicated project management team',
];

export default function Services() {
    const scrollTo = (href: string) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="services" className="section-padding bg-solar-50">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <Badge className="green-gradient text-secondary-foreground border-0 mb-4 font-body font-medium px-4 py-1">
                        Our Services
                    </Badge>
                    <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-4">
                        Solar Installation for{' '}
                        <span className="text-forest-600">Every Need</span>
                    </h2>
                    <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto leading-relaxed">
                        Whether you're a homeowner or a business, we provide tailored solar solutions 
                        with expert installation and ongoing support.
                    </p>
                </div>

                {/* Service Cards */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Domestic */}
                    <div className="card-solar overflow-hidden group hover:shadow-solar-lg transition-all duration-300">
                        <div className="relative h-56 overflow-hidden">
                            <img
                                src="/assets/generated/domestic-solar.dim_400x300.png"
                                alt="Domestic solar installation"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                            <div className="absolute bottom-4 left-4">
                                <div className="flex items-center gap-2 bg-solar-400 rounded-full px-3 py-1.5">
                                    <Home className="w-4 h-4 text-primary-foreground" />
                                    <span className="text-primary-foreground font-heading font-700 text-sm">Domestic</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className="font-heading font-800 text-2xl text-foreground mb-2">
                                Domestic Solar Installation
                            </h3>
                            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                                Power your home with clean solar energy. Reduce your electricity bills to near zero 
                                and earn from surplus power generation with our residential solar solutions.
                            </p>
                            <ul className="space-y-2 mb-8">
                                {domesticFeatures.map((f, i) => (
                                    <li key={i} className="flex items-center gap-2.5">
                                        <CheckCircle className="w-4 h-4 text-solar-500 flex-shrink-0" />
                                        <span className="text-foreground/80 font-body text-sm">{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button
                                className="w-full solar-gradient text-primary-foreground font-heading font-700 border-0 shadow-solar hover:shadow-solar-lg transition-all"
                                onClick={() => scrollTo('#inquiry')}
                            >
                                Get Domestic Quote
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </div>

                    {/* Commercial */}
                    <div className="card-solar overflow-hidden group hover:shadow-green transition-all duration-300">
                        <div className="relative h-56 overflow-hidden">
                            <img
                                src="/assets/generated/commercial-solar.dim_400x300.png"
                                alt="Commercial solar installation"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                            <div className="absolute bottom-4 left-4">
                                <div className="flex items-center gap-2 bg-forest-600 rounded-full px-3 py-1.5">
                                    <Building2 className="w-4 h-4 text-secondary-foreground" />
                                    <span className="text-secondary-foreground font-heading font-700 text-sm">Commercial</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className="font-heading font-800 text-2xl text-foreground mb-2">
                                Commercial Solar Installation
                            </h3>
                            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                                Scale your business with industrial-grade solar systems. Dramatically cut operational 
                                costs and demonstrate your commitment to sustainability.
                            </p>
                            <ul className="space-y-2 mb-8">
                                {commercialFeatures.map((f, i) => (
                                    <li key={i} className="flex items-center gap-2.5">
                                        <CheckCircle className="w-4 h-4 text-forest-600 flex-shrink-0" />
                                        <span className="text-foreground/80 font-body text-sm">{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button
                                className="w-full green-gradient text-secondary-foreground font-heading font-700 border-0 shadow-green hover:shadow-green transition-all"
                                onClick={() => scrollTo('#inquiry')}
                            >
                                Get Commercial Quote
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
