import { useState } from 'react';
import { MessageCircle, User, Phone, Mail, MapPin, Zap, Send } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

interface FormData {
    fullName: string;
    phoneNumber: string;
    email: string;
    city: string;
    systemSize: string;
    message: string;
}

const SYSTEM_SIZE_OPTIONS = [
    { value: '1-3 kW', label: '1–3 kW (Small Home)' },
    { value: '3-5 kW', label: '3–5 kW (Medium Home)' },
    { value: '5-10 kW', label: '5–10 kW (Large Home / Small Business)' },
    { value: '10+ kW', label: '10+ kW (Commercial / Industrial)' },
];

export default function InquiryForm() {
    const [form, setForm] = useState<FormData>({
        fullName: '',
        phoneNumber: '',
        email: '',
        city: '',
        systemSize: '',
        message: '',
    });
    const [errors, setErrors] = useState<Partial<FormData>>({});

    const handleChange = (field: keyof FormData, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: '' }));
        }
    };

    const validate = (): boolean => {
        const newErrors: Partial<FormData> = {};
        if (!form.fullName.trim()) newErrors.fullName = 'Full name is required.';
        if (!form.phoneNumber.trim()) {
            newErrors.phoneNumber = 'Phone number is required.';
        } else if (!/^[6-9]\d{9}$/.test(form.phoneNumber.trim())) {
            newErrors.phoneNumber = 'Enter a valid 10-digit Indian mobile number.';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        const lines = [
            `🌞 *New Solar Inquiry — TRI-GITA SERVICES*`,
            ``,
            `👤 *Name:* ${form.fullName}`,
            `📞 *Phone:* ${form.phoneNumber}`,
            form.email ? `📧 *Email:* ${form.email}` : null,
            form.city ? `📍 *City/Location:* ${form.city}` : null,
            form.systemSize ? `⚡ *System Size:* ${form.systemSize}` : null,
            form.message ? `💬 *Message:* ${form.message}` : null,
        ]
            .filter(Boolean)
            .join('\n');

        const encoded = encodeURIComponent(lines);
        window.open(`https://wa.me/917838867880?text=${encoded}`, '_blank', 'noopener,noreferrer');
    };

    return (
        <section id="inquiry" className="py-16 md:py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-body font-semibold mb-4">
                        <MessageCircle className="w-4 h-4" />
                        Get a Free Quote
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground mb-4">
                        Send Us Your Inquiry
                    </h2>
                    <p className="text-muted-foreground font-body text-base md:text-lg max-w-2xl mx-auto">
                        Fill in the form below and we'll get back to you instantly on WhatsApp with a
                        personalised solar solution for your home or business.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
                    {/* Left Info Panel */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="rounded-2xl solar-gradient p-6 text-primary-foreground shadow-solar">
                            <div className="flex items-center gap-3 mb-4">
                                <SiWhatsapp className="w-8 h-8" />
                                <div>
                                    <p className="font-heading font-700 text-lg leading-tight">
                                        Instant WhatsApp Reply
                                    </p>
                                    <p className="text-sm opacity-80 font-body">
                                        We respond within minutes
                                    </p>
                                </div>
                            </div>
                            <p className="font-body text-sm opacity-90 leading-relaxed">
                                Your inquiry goes directly to our solar experts on WhatsApp. No waiting,
                                no spam — just a quick, helpful conversation.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-card border border-border p-6 space-y-4">
                            {[
                                {
                                    icon: <Zap className="w-5 h-5 text-primary" />,
                                    title: 'Free Site Assessment',
                                    desc: 'Our team visits your site at no cost.',
                                },
                                {
                                    icon: <Send className="w-5 h-5 text-primary" />,
                                    title: 'Custom Proposal',
                                    desc: 'Tailored system size and savings estimate.',
                                },
                                {
                                    icon: <Phone className="w-5 h-5 text-primary" />,
                                    title: 'End-to-End Support',
                                    desc: 'From subsidy paperwork to installation.',
                                },
                            ].map((item) => (
                                <div key={item.title} className="flex items-start gap-3">
                                    <div className="mt-0.5 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="font-heading font-700 text-sm text-foreground">
                                            {item.title}
                                        </p>
                                        <p className="text-xs text-muted-foreground font-body">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-3">
                        <form
                            onSubmit={handleSubmit}
                            noValidate
                            className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm space-y-5"
                        >
                            {/* Full Name */}
                            <div className="space-y-1.5">
                                <Label
                                    htmlFor="fullName"
                                    className="font-body font-semibold text-foreground flex items-center gap-1.5"
                                >
                                    <User className="w-3.5 h-3.5 text-primary" />
                                    Full Name <span className="text-destructive">*</span>
                                </Label>
                                <Input
                                    id="fullName"
                                    placeholder="e.g. Ramesh Kumar"
                                    value={form.fullName}
                                    onChange={(e) => handleChange('fullName', e.target.value)}
                                    className={errors.fullName ? 'border-destructive' : ''}
                                />
                                {errors.fullName && (
                                    <p className="text-xs text-destructive font-body">{errors.fullName}</p>
                                )}
                            </div>

                            {/* Phone + Email row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <Label
                                        htmlFor="phoneNumber"
                                        className="font-body font-semibold text-foreground flex items-center gap-1.5"
                                    >
                                        <Phone className="w-3.5 h-3.5 text-primary" />
                                        Phone Number <span className="text-destructive">*</span>
                                    </Label>
                                    <Input
                                        id="phoneNumber"
                                        type="tel"
                                        placeholder="10-digit mobile number"
                                        value={form.phoneNumber}
                                        onChange={(e) => handleChange('phoneNumber', e.target.value)}
                                        className={errors.phoneNumber ? 'border-destructive' : ''}
                                    />
                                    {errors.phoneNumber && (
                                        <p className="text-xs text-destructive font-body">
                                            {errors.phoneNumber}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-1.5">
                                    <Label
                                        htmlFor="email"
                                        className="font-body font-semibold text-foreground flex items-center gap-1.5"
                                    >
                                        <Mail className="w-3.5 h-3.5 text-primary" />
                                        Email{' '}
                                        <span className="text-muted-foreground font-normal text-xs">
                                            (optional)
                                        </span>
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="your@email.com"
                                        value={form.email}
                                        onChange={(e) => handleChange('email', e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* City + System Size row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <Label
                                        htmlFor="city"
                                        className="font-body font-semibold text-foreground flex items-center gap-1.5"
                                    >
                                        <MapPin className="w-3.5 h-3.5 text-primary" />
                                        City / Location{' '}
                                        <span className="text-muted-foreground font-normal text-xs">
                                            (optional)
                                        </span>
                                    </Label>
                                    <Input
                                        id="city"
                                        placeholder="e.g. Bhubaneswar, Odisha"
                                        value={form.city}
                                        onChange={(e) => handleChange('city', e.target.value)}
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <Label
                                        htmlFor="systemSize"
                                        className="font-body font-semibold text-foreground flex items-center gap-1.5"
                                    >
                                        <Zap className="w-3.5 h-3.5 text-primary" />
                                        System Size{' '}
                                        <span className="text-muted-foreground font-normal text-xs">
                                            (optional)
                                        </span>
                                    </Label>
                                    <Select
                                        value={form.systemSize}
                                        onValueChange={(val) => handleChange('systemSize', val)}
                                    >
                                        <SelectTrigger id="systemSize">
                                            <SelectValue placeholder="Select capacity" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {SYSTEM_SIZE_OPTIONS.map((opt) => (
                                                <SelectItem key={opt.value} value={opt.value}>
                                                    {opt.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-1.5">
                                <Label
                                    htmlFor="message"
                                    className="font-body font-semibold text-foreground flex items-center gap-1.5"
                                >
                                    <MessageCircle className="w-3.5 h-3.5 text-primary" />
                                    Message / Query{' '}
                                    <span className="text-muted-foreground font-normal text-xs">
                                        (optional)
                                    </span>
                                </Label>
                                <Textarea
                                    id="message"
                                    placeholder="Tell us about your requirements, current electricity bill, roof type, etc."
                                    rows={4}
                                    value={form.message}
                                    onChange={(e) => handleChange('message', e.target.value)}
                                    className="resize-none"
                                />
                            </div>

                            {/* Submit */}
                            <Button
                                type="submit"
                                size="lg"
                                className="w-full bg-forest-600 hover:bg-forest-700 text-white font-heading font-700 text-base flex items-center gap-2 shadow-green transition-all"
                            >
                                <SiWhatsapp className="w-5 h-5" />
                                Send Inquiry on WhatsApp
                            </Button>

                            <p className="text-center text-xs text-muted-foreground font-body">
                                By submitting, you agree to be contacted on WhatsApp. No spam, ever.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
