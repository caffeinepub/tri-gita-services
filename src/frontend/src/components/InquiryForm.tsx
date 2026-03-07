import { AlertCircle, CheckCircle, Loader2, MessageCircle } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { useSubmitLead } from "../hooks/useQueries";
import { useTranslation } from "../i18n/useTranslation";

const WHATSAPP_NUMBER = "917838867880";

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
  email?: string;
  city?: string;
  systemSize?: string;
}

export default function InquiryForm() {
  const t = useTranslation();
  const submitLead = useSubmitLead();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    city: "",
    systemSize: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = t.inquiryForm.nameRequired;
    if (!formData.phone.trim()) {
      newErrors.phone = t.inquiryForm.phoneRequired;
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = t.inquiryForm.phoneInvalid;
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.inquiryForm.emailInvalid;
    }
    if (!formData.city.trim()) newErrors.city = t.inquiryForm.cityRequired;
    if (!formData.systemSize)
      newErrors.systemSize = t.inquiryForm.systemSizeRequired;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await submitLead.mutateAsync({
        name: formData.name,
        phone: formData.phone,
        email: formData.email || "noemail@trigita.com",
        city: formData.city,
        systemSize: formData.systemSize,
        message: formData.message,
      });

      const msg = encodeURIComponent(
        `Hi TRI-GITA SERVICES,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nCity: ${formData.city}\nSystem Size: ${formData.systemSize}\n${formData.message ? `Message: ${formData.message}` : ""}\n\nPlease share a free solar quote.`,
      );
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");

      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        city: "",
        systemSize: "",
        message: "",
      });
    } catch {
      // error handled by mutation state
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const systemSizes = [
    { value: "1kW", label: t.inquiryForm.size1kw },
    { value: "2kW", label: t.inquiryForm.size2kw },
    { value: "3kW", label: t.inquiryForm.size3kw },
    { value: "5kW", label: t.inquiryForm.size5kw },
    { value: "10kW+", label: t.inquiryForm.size10kw },
  ];

  const inputClass = (error?: string) =>
    `w-full bg-white border ${error ? "border-red-400" : "border-gray-300"} text-slate-800 placeholder-slate-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-500 transition-colors`;

  return (
    <section id="inquiry" className="bg-gray-50 py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-block bg-teal-100 text-teal-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
            Free Quote
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            {t.inquiryForm.title}
          </h2>
          <p className="text-slate-500 text-lg">{t.inquiryForm.subtitle}</p>
        </div>

        {submitted && (
          <div className="flex items-center gap-3 bg-teal-50 border border-teal-300 text-teal-700 rounded-xl px-4 py-3 mb-6">
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm">{t.inquiryForm.successMsg}</span>
          </div>
        )}

        {submitLead.isError && (
          <div className="flex items-center gap-3 bg-red-500/20 border border-red-400/40 text-red-300 rounded-xl px-4 py-3 mb-6">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm">{t.inquiryForm.errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder={t.inquiryForm.namePlaceholder}
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className={inputClass(errors.name)}
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <input
                type="tel"
                placeholder={t.inquiryForm.phonePlaceholder}
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className={inputClass(errors.phone)}
              />
              {errors.phone && (
                <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <input
                type="email"
                placeholder={t.inquiryForm.emailPlaceholder}
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={inputClass(errors.email)}
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder={t.inquiryForm.cityPlaceholder}
                value={formData.city}
                onChange={(e) => handleChange("city", e.target.value)}
                className={inputClass(errors.city)}
              />
              {errors.city && (
                <p className="text-red-400 text-xs mt-1">{errors.city}</p>
              )}
            </div>
          </div>

          <div>
            <select
              value={formData.systemSize}
              onChange={(e) => handleChange("systemSize", e.target.value)}
              className={`${inputClass(errors.systemSize)} appearance-none cursor-pointer`}
            >
              <option value="" disabled>
                {t.inquiryForm.systemSizeDefault}
              </option>
              {systemSizes.map((s) => (
                <option key={s.value} value={s.value} className="bg-white">
                  {s.label}
                </option>
              ))}
            </select>
            {errors.systemSize && (
              <p className="text-red-400 text-xs mt-1">{errors.systemSize}</p>
            )}
          </div>

          <div>
            <textarea
              placeholder={t.inquiryForm.messagePlaceholder}
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              rows={4}
              className={`${inputClass()} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={submitLead.isPending}
            className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 disabled:opacity-60 text-white font-bold text-base py-4 rounded-xl transition-colors shadow-sm"
          >
            {submitLead.isPending ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                {t.inquiryForm.submitting}
              </>
            ) : (
              <>
                <MessageCircle className="w-5 h-5" />
                {t.inquiryForm.submitBtn}
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
