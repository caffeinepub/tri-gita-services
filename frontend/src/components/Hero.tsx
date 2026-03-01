import { SiWhatsapp } from 'react-icons/si';
import { Shield, Zap, IndianRupee } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WHATSAPP_URL = 'https://wa.me/917838867880';

export default function Hero() {
    const scrollTo = (href: string) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/assets/generated/hero-solar.dim_1400x600.png"
                    alt="Solar panels on rooftop"
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 hero-overlay" />
            </div>

            {/* Decorative sun rays */}
            <div className="absolute top-0 right-0 w-96 h-96 opacity-20 pointer-events-none">
                <div className="w-full h-full rounded-full solar-gradient blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20">
                <div className="max-w-2xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-solar-400/20 border border-solar-400/40 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
                        <img
                            src="/assets/generated/sun-icon.dim_128x128.png"
                            alt="Sun"
                            className="w-5 h-5 animate-float"
                        />
                        <span className="text-solar-300 text-sm font-body font-medium">
                            PM Surya Ghar Muft Bijli Yojana
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-3">
                        TRI-GITA
                        <span className="block text-solar-400">SERVICES</span>
                    </h1>

                    <p className="text-white/70 text-sm font-body font-medium mb-6 tracking-widest uppercase">
                        A Unit of BHAGYALAXMI CONSTRUCTION
                    </p>

                    {/* Tagline */}
                    <p className="text-white/90 text-lg md:text-xl font-body leading-relaxed mb-8 max-w-xl">
                        Empowering homes and businesses with clean solar energy. 
                        Expert installation for <strong className="text-solar-300">domestic</strong> and{' '}
                        <strong className="text-solar-300">commercial</strong> solar panels under the 
                        Government's free electricity scheme.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <Button
                            size="lg"
                            className="solar-gradient text-primary-foreground font-heading font-700 border-0 shadow-solar-lg hover:shadow-solar-lg hover:scale-105 transition-all text-base px-8"
                            asChild
                        >
                            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                                <SiWhatsapp className="w-5 h-5 mr-2" />
                                Chat on WhatsApp
                            </a>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white/40 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm font-heading font-600 text-base px-8"
                            onClick={() => scrollTo('#scheme')}
                        >
                            Learn About the Scheme
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-6">
                        {[
                            { icon: Zap, label: 'Free Electricity', sub: 'Up to 300 units/month' },
                            { icon: IndianRupee, label: 'Govt. Subsidy', sub: 'Up to ₹78,000' },
                            { icon: Shield, label: 'Trusted Service', sub: 'Domestic & Commercial' },
                        ].map(({ icon: Icon, label, sub }) => (
                            <div key={label} className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-solar-400/20 border border-solar-400/30 flex items-center justify-center backdrop-blur-sm">
                                    <Icon className="w-5 h-5 text-solar-300" />
                                </div>
                                <div>
                                    <div className="text-white font-heading font-700 text-sm">{label}</div>
                                    <div className="text-white/60 text-xs font-body">{sub}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="oklch(0.98 0.01 85)" />
                </svg>
            </div>
        </section>
    );
}
