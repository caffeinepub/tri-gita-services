import { useState } from 'react';
import { Send, User, Phone, Mail, MapPin, Zap, MessageSquare } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

interface FormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  systemSize: string;
  message: string;
}

const initialForm: FormData = {
  name: '',
  phone: '',
  email: '',
  city: '',
  systemSize: '',
  message: '',
};

export default function InquiryForm() {
  const t = useTranslation();
  const f = t.inquiryForm;

  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = f.validation.nameRequired;
    if (!form.phone.trim()) {
      newErrors.phone = f.validation.phoneRequired;
    } else if (!/^\d{10}$/.test(form.phone.trim())) {
      newErrors.phone = f.validation.phoneInvalid;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const msg = [
      `*New Solar Inquiry*`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      form.city ? `City: ${form.city}` : null,
      form.systemSize ? `System Size: ${form.systemSize}` : null,
      form.message ? `Message: ${form.message}` : null,
    ]
      .filter(Boolean)
      .join('%0A');

    window.open(`https://wa.me/917838867880?text=${msg}`, '_blank');
    setForm(initialForm);
    setErrors({});
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const inputClass = (field: keyof FormData) =>
    `w-full bg-white border rounded-xl px-4 py-3 text-navy-800 placeholder-navy-400 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 ${
      errors[field] ? 'border-red-400 bg-red-50' : 'border-navy-200 hover:border-navy-300'
    }`;

  return (
    <section id="inquiry" className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-gold-100 text-gold-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            Free Consultation
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
            {f.title}
          </h2>
          <p className="text-navy-500 text-lg">
            {f.subtitle}
          </p>
        </div>

        {/* Form card */}
        <div className="bg-navy-50 border border-navy-100 rounded-3xl p-8 lg:p-10 shadow-navy-sm">
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Name + Phone */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-navy-700 mb-2">
                  <User className="w-4 h-4 text-gold-500" />
                  {f.fields.name} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder={f.fields.namePlaceholder}
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={inputClass('name')}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-navy-700 mb-2">
                  <Phone className="w-4 h-4 text-gold-500" />
                  {f.fields.phone} <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder={f.fields.phonePlaceholder}
                  value={form.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className={inputClass('phone')}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Email + City */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-navy-700 mb-2">
                  <Mail className="w-4 h-4 text-teal-500" />
                  {f.fields.email}
                </label>
                <input
                  type="email"
                  placeholder={f.fields.emailPlaceholder}
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={inputClass('email')}
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-navy-700 mb-2">
                  <MapPin className="w-4 h-4 text-teal-500" />
                  {f.fields.city}
                </label>
                <input
                  type="text"
                  placeholder={f.fields.cityPlaceholder}
                  value={form.city}
                  onChange={(e) => handleChange('city', e.target.value)}
                  className={inputClass('city')}
                />
              </div>
            </div>

            {/* System size */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-navy-700 mb-2">
                <Zap className="w-4 h-4 text-gold-500" />
                {f.fields.systemSize}
              </label>
              <select
                value={form.systemSize}
                onChange={(e) => handleChange('systemSize', e.target.value)}
                className={`${inputClass('systemSize')} cursor-pointer`}
              >
                <option value="">{f.fields.systemSizePlaceholder}</option>
                {f.systemSizes.map((size) => (
                  <option key={size.value} value={size.value}>
                    {size.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-navy-700 mb-2">
                <MessageSquare className="w-4 h-4 text-navy-400" />
                {f.fields.message}
              </label>
              <textarea
                rows={4}
                placeholder={f.fields.messagePlaceholder}
                value={form.message}
                onChange={(e) => handleChange('message', e.target.value)}
                className={`${inputClass('message')} resize-none`}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold py-4 rounded-xl text-base transition-all duration-200 shadow-gold-sm hover:shadow-gold-md hover:-translate-y-0.5"
            >
              <Send className="w-5 h-5" />
              {f.submit}
            </button>

            <p className="text-center text-xs text-navy-400">
              Your details will be sent securely via WhatsApp. We respond within 2 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
