import { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

interface FormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  systemSize: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
}

export default function InquiryForm() {
  const t = useTranslation();
  const f = t.inquiryForm;

  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    city: '',
    systemSize: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = f.validation.nameRequired;
    if (!formData.phone.trim()) {
      newErrors.phone = f.validation.phoneRequired;
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = f.validation.phoneInvalid;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    const msg = `Hello TRI-GITA SERVICES,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email || 'N/A'}\nCity: ${formData.city || 'N/A'}\nSystem Size: ${formData.systemSize || 'N/A'}\nMessage: ${formData.message || 'N/A'}`;
    const url = `https://wa.me/917838867880?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setSubmitting(false);
    setFormData({ name: '', phone: '', email: '', city: '', systemSize: '', message: '' });
    setErrors({});
  };

  return (
    <section id="inquiry" className="py-20 bg-muted/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{f.title}</h2>
          <p className="text-lg text-muted-foreground">{f.subtitle}</p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Name & Phone */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  {f.fields.name} <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={f.fields.namePlaceholder}
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  {f.fields.phone} <span className="text-destructive">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder={f.fields.phonePlaceholder}
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                />
                {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Email & City */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  {f.fields.email}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={f.fields.emailPlaceholder}
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  {f.fields.city}
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder={f.fields.cityPlaceholder}
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                />
              </div>
            </div>

            {/* System Size */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                {f.fields.systemSize}
              </label>
              <select
                value={formData.systemSize}
                onChange={(e) => setFormData({ ...formData, systemSize: e.target.value })}
                className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
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
              <label className="block text-sm font-medium text-foreground mb-1.5">
                {f.fields.message}
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={f.fields.messagePlaceholder}
                rows={4}
                className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-green-500 hover:bg-green-600 disabled:opacity-60 text-white font-semibold rounded-lg transition-colors shadow-md"
            >
              {submitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  {f.submitting}
                </>
              ) : (
                <>
                  <MessageCircle className="w-5 h-5" />
                  {f.submit}
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
