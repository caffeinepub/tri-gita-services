import { SiWhatsapp } from 'react-icons/si';
import { MessageCircle, Phone } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/917838867880';

export default function WhatsAppSection() {
    return (
        <section id="whatsapp" className="px-4 md:px-8 py-16 bg-background">
            <div className="max-w-4xl mx-auto text-center">
                {/* Section label */}
                <div className="inline-flex items-center gap-2 bg-forest-100 border border-forest-200 rounded-full px-4 py-1.5 mb-6">
                    <MessageCircle className="w-4 h-4 text-forest-600" />
                    <span className="text-forest-700 text-sm font-body font-semibold uppercase tracking-wider">
                        Get in Touch
                    </span>
                </div>

                <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-4 leading-tight">
                    Have Questions? <span className="text-forest-600">Chat with Us!</span>
                </h2>
                <p className="text-muted-foreground text-lg font-body mb-10 max-w-xl mx-auto">
                    Reach out to our solar experts instantly on WhatsApp. We're here to help you go solar — fast, easy, and hassle-free.
                </p>

                {/* WhatsApp Card */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-forest-600 to-forest-800 shadow-green-lg p-10 md:p-14">
                    {/* Decorative blobs */}
                    <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-white opacity-5 pointer-events-none" />
                    <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-white opacity-5 pointer-events-none" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-solar-400 opacity-5 pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center gap-6">
                        {/* WhatsApp icon */}
                        <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center shadow-lg">
                            <SiWhatsapp className="w-12 h-12 text-white" />
                        </div>

                        <div>
                            <h3 className="font-heading font-black text-2xl md:text-3xl text-white mb-2">
                                Chat with Us on WhatsApp
                            </h3>
                            <div className="flex items-center justify-center gap-2 text-white/80 font-body text-lg">
                                <Phone className="w-5 h-5" />
                                <span className="font-semibold tracking-wide">+91 78388 67880</span>
                            </div>
                        </div>

                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-white text-forest-700 font-heading font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-solar-50 hover:scale-105 transition-all duration-200"
                        >
                            <SiWhatsapp className="w-6 h-6 text-forest-600" />
                            Start Chat Now
                        </a>

                        <p className="text-white/60 text-sm font-body">
                            Tap to open WhatsApp — no app download required on desktop
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
