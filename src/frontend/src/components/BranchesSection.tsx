import { Building2, MapPin, Phone } from "lucide-react";
import React from "react";
import { SiWhatsapp } from "react-icons/si";
import { useTranslation } from "../i18n/useTranslation";

const WHATSAPP_PRIMARY = "917838867880";
const WHATSAPP_BALASORE = "918249286318";

export default function BranchesSection() {
  const t = useTranslation();

  const branches = [
    {
      name: t.branches.branch1Name,
      location: t.branches.branch1Location,
      phone: t.branches.branch1Phone,
      rawPhone: "917838867880",
      whatsapp: WHATSAPP_PRIMARY,
      label: t.branches.branch1Label,
      accent: "border-teal-600",
      labelColor: "bg-teal-700 text-white",
      iconColor: "text-teal-600",
    },
    {
      name: t.branches.branch2Name,
      location: t.branches.branch2Location,
      phone: t.branches.branch2Phone,
      rawPhone: "918249286318",
      whatsapp: WHATSAPP_BALASORE,
      label: t.branches.branch2Label,
      accent: "border-teal-500",
      labelColor: "bg-teal-500 text-white",
      iconColor: "text-teal-400",
    },
  ];

  return (
    <section id="branches" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-teal-500/15 border border-teal-500/30 text-teal-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Building2 className="w-4 h-4" />
            {t.branches.parentCompany}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-3">
            {t.branches.title}
          </h2>
          <p className="text-slate-500 text-lg">{t.branches.subtitle}</p>
        </div>

        {/* Branch Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {branches.map((branch) => (
            <div
              key={branch.name}
              className={`bg-white border-2 ${branch.accent} rounded-3xl p-8 flex flex-col gap-5 hover:shadow-md transition-shadow`}
            >
              {/* Label Badge */}
              <div className="flex items-start justify-between">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${branch.labelColor}`}
                >
                  {branch.label}
                </span>
              </div>

              {/* Branch Name */}
              <div>
                <h3 className="text-slate-800 font-extrabold text-xl tracking-wide mb-1">
                  {branch.name}
                </h3>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin
                  className={`w-5 h-5 flex-shrink-0 mt-0.5 ${branch.iconColor}`}
                />
                <span className="text-slate-600 text-sm leading-relaxed">
                  {branch.location}
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone
                  className={`w-5 h-5 flex-shrink-0 ${branch.iconColor}`}
                />
                <a
                  href={`tel:+${branch.rawPhone}`}
                  className="text-slate-700 font-semibold text-base hover:text-teal-600 transition-colors"
                >
                  {branch.phone}
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-auto pt-2">
                <a
                  href={`tel:+${branch.rawPhone}`}
                  className="flex-1 flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2.5 rounded-full text-sm font-semibold transition-colors border border-slate-300"
                >
                  <Phone className="w-4 h-4" />
                  {t.branches.callNow}
                </a>
                <a
                  href={`https://wa.me/${branch.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white px-4 py-2.5 rounded-full text-sm font-semibold transition-colors"
                >
                  <SiWhatsapp className="w-4 h-4" />
                  {t.branches.whatsapp}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
