import { Sun, Menu, X, Phone } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const WHATSAPP_URL = 'https://wa.me/917838867880';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { label: 'Home', href: '#home' },
        { label: 'Scheme', href: '#scheme' },
        { label: 'Services', href: '#services' },
        { label: 'Get Quote', href: '#inquiry' },
        { label: 'Contact', href: '#contact' },
    ];

    const scrollTo = (href: string) => {
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-xs">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full solar-gradient flex items-center justify-center shadow-solar animate-pulse-glow">
                            <Sun className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
                        </div>
                        <div>
                            <div className="font-heading font-800 text-base md:text-lg leading-tight text-foreground tracking-tight">
                                TRI-GITA SERVICES
                            </div>
                            <div className="text-xs text-muted-foreground font-body leading-none hidden sm:block">
                                A Unit of BHAGYALAXMI CONSTRUCTION
                            </div>
                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => scrollTo(link.href)}
                                className={`px-4 py-2 text-sm font-body font-medium transition-colors rounded-lg ${
                                    link.href === '#inquiry'
                                        ? 'text-primary font-semibold hover:bg-primary/10'
                                        : 'text-foreground/80 hover:text-primary hover:bg-solar-50'
                                }`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </nav>

                    {/* CTA + Mobile Menu */}
                    <div className="flex items-center gap-3">
                        <a
                            href="tel:7838867880"
                            className="hidden lg:flex items-center gap-2 text-sm font-body font-medium text-forest-600 hover:text-forest-700 transition-colors"
                        >
                            <Phone className="w-4 h-4" />
                            <span>Call Now</span>
                        </a>
                        <Button
                            size="sm"
                            className="hidden md:flex items-center gap-1.5 bg-forest-600 hover:bg-forest-700 text-white font-heading font-700 border-0 shadow-green transition-all"
                            asChild
                        >
                            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                                <SiWhatsapp className="w-4 h-4" />
                                WhatsApp Us
                            </a>
                        </Button>
                        <button
                            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden border-t border-border py-4 space-y-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => scrollTo(link.href)}
                                className={`w-full text-left px-4 py-3 text-sm font-body font-medium rounded-lg transition-colors ${
                                    link.href === '#inquiry'
                                        ? 'text-primary font-semibold hover:bg-primary/10'
                                        : 'text-foreground/80 hover:text-primary hover:bg-solar-50'
                                }`}
                            >
                                {link.label}
                            </button>
                        ))}
                        <div className="pt-2 px-4">
                            <Button
                                className="w-full bg-forest-600 hover:bg-forest-700 text-white font-heading font-700 border-0 flex items-center gap-2"
                                asChild
                            >
                                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                                    <SiWhatsapp className="w-4 h-4" />
                                    Chat on WhatsApp
                                </a>
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
