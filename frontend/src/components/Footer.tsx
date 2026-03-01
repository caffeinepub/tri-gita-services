import { Sun, Heart, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
    const year = new Date().getFullYear();
    const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'tri-gita-services');

    return (
        <footer className="bg-charcoal-950 text-charcoal-200">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
                <div className="grid md:grid-cols-2 gap-10 mb-10">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full solar-gradient flex items-center justify-center">
                                <Sun className="w-5 h-5 text-charcoal-900" />
                            </div>
                            <div>
                                <div className="font-heading font-800 text-base text-amber-50 leading-tight">
                                    TRI-GITA SERVICES
                                </div>
                                <div className="text-xs text-charcoal-400 font-body">
                                    A Unit of BHAGYALAXMI CONSTRUCTION
                                </div>
                            </div>
                        </div>
                        <p className="text-charcoal-400 font-body text-sm leading-relaxed mb-5">
                            Empowering India with clean solar energy through the PM Surya Ghar Muft Bijli Yojana. Your trusted partner for domestic and commercial solar installation.
                        </p>
                        <div className="flex items-center gap-2 text-charcoal-400 font-body text-xs">
                            <Clock className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                            <span>Mon–Sat: 9 AM – 6 PM</span>
                        </div>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h4 className="font-heading font-700 text-amber-50 text-sm mb-5 uppercase tracking-wider">
                            Contact Us
                        </h4>

                        {/* Firm Identity */}
                        <div className="mb-5 pb-5 border-b border-charcoal-700">
                            <p className="text-amber-50 font-heading font-700 text-sm leading-tight">
                                TRI-GITA SERVICES
                            </p>
                            <p className="text-charcoal-400 font-body text-xs mt-0.5">
                                A Unit of BHAGYALAXMI CONSTRUCTION
                            </p>
                        </div>

                        <ul className="space-y-3 text-sm font-body">
                            {/* Ashok */}
                            <li className="flex items-start gap-3">
                                <div className="w-7 h-7 rounded-full solar-gradient flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Phone className="w-3.5 h-3.5 text-charcoal-900" />
                                </div>
                                <div>
                                    <p className="text-charcoal-400 text-xs mb-0.5">Ashok (Sales &amp; Consultation)</p>
                                    <a
                                        href="tel:7838867880"
                                        className="text-charcoal-200 hover:text-amber-400 transition-colors font-medium"
                                    >
                                        +91 78388 67880
                                    </a>
                                </div>
                            </li>

                            {/* Deepak */}
                            <li className="flex items-start gap-3">
                                <div className="w-7 h-7 rounded-full solar-gradient flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Phone className="w-3.5 h-3.5 text-charcoal-900" />
                                </div>
                                <div>
                                    <p className="text-charcoal-400 text-xs mb-0.5">Deepak (Technical Support)</p>
                                    <a
                                        href="tel:8249286318"
                                        className="text-charcoal-200 hover:text-amber-400 transition-colors font-medium"
                                    >
                                        +91 82492 86318
                                    </a>
                                </div>
                            </li>

                            {/* Email */}
                            <li className="flex items-start gap-3">
                                <div className="w-7 h-7 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Mail className="w-3.5 h-3.5 text-charcoal-900" />
                                </div>
                                <div>
                                    <p className="text-charcoal-400 text-xs mb-0.5">Email</p>
                                    <a
                                        href="mailto:trigitaservices@gmail.com"
                                        className="text-charcoal-200 hover:text-amber-400 transition-colors font-medium break-all"
                                    >
                                        trigitaservices@gmail.com
                                    </a>
                                </div>
                            </li>

                            {/* Location */}
                            <li className="flex items-start gap-3">
                                <div className="w-7 h-7 rounded-full bg-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <MapPin className="w-3.5 h-3.5 text-charcoal-900" />
                                </div>
                                <div>
                                    <p className="text-charcoal-400 text-xs mb-0.5">Service Area</p>
                                    <span className="text-charcoal-200 font-medium">Pan India (Odisha Focus)</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-charcoal-700 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-charcoal-400 font-body text-sm">
                        © {year} TRI-GITA SERVICES, A Unit of BHAGYALAXMI CONSTRUCTION. All rights reserved.
                    </p>
                    <p className="text-charcoal-500 font-body text-xs flex items-center gap-1">
                        Built with{' '}
                        <Heart className="w-3 h-3 text-amber-400 fill-amber-400 mx-0.5" />
                        {' '}using{' '}
                        <a
                            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-amber-400 hover:text-amber-300 transition-colors"
                        >
                            caffeine.ai
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
