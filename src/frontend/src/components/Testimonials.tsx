import { Quote, Star, Sun } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "../i18n/useTranslation";

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} stars`}>
      {["s1", "s2", "s3", "s4", "s5"].slice(0, count).map((key) => (
        <Star
          key={key}
          className="w-4 h-4 fill-amber-400 text-amber-400"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  customer,
  index,
}: {
  customer: { name: string; location: string; system: string; quote: string };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const initials = customer.name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");

  return (
    <div
      ref={ref}
      data-ocid={`testimonials.item.${index + 1}`}
      className="group relative bg-card rounded-2xl p-6 shadow-md border border-border
        transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.55s ease ${index * 0.1}s, transform 0.55s ease ${index * 0.1}s, box-shadow 0.2s ease, translate 0.2s ease`,
      }}
    >
      {/* Decorative quote icon */}
      <div className="absolute top-4 right-5 opacity-10 group-hover:opacity-20 transition-opacity">
        <Quote className="w-10 h-10 text-primary" />
      </div>

      {/* Stars */}
      <div className="mb-4">
        <StarRating />
      </div>

      {/* Quote */}
      <p className="text-foreground/80 text-sm leading-relaxed mb-6 line-clamp-5">
        "{customer.quote}"
      </p>

      {/* Divider */}
      <div className="border-t border-border mb-4" />

      {/* Customer info */}
      <div className="flex items-center gap-3">
        <div
          className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center
            text-primary font-bold text-sm font-playfair shrink-0 border border-primary/20"
          aria-hidden="true"
        >
          {initials}
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-foreground text-sm truncate font-outfit">
            {customer.name}
          </p>
          <p className="text-muted-foreground text-xs truncate">
            {customer.location}
          </p>
        </div>
        <div className="ml-auto shrink-0">
          <span className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">
            {customer.system}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const t = useTranslation();
  const section = t.testimonials;

  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        background: "oklch(0.97 0.02 80)",
      }}
    >
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, oklch(0.75 0.05 220 / 0.3) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* Radial glow accent */}
      <div
        className="absolute -top-24 right-0 w-96 h-96 rounded-full pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.18 68 / 0.4) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 left-0 w-80 h-80 rounded-full pointer-events-none opacity-15"
        style={{
          background:
            "radial-gradient(circle, oklch(0.38 0.1 220 / 0.3) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
            <Sun className="w-3.5 h-3.5" aria-hidden="true" />
            Customer Stories
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {section.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {section.subtitle}
          </p>

          {/* Aggregate rating badge */}
          <div className="mt-6 inline-flex items-center gap-3 bg-white/80 border border-border rounded-2xl px-5 py-2.5 shadow-sm">
            <div className="flex gap-0.5">
              {["r1", "r2", "r3", "r4", "r5"].map((key) => (
                <Star
                  key={key}
                  className="w-4 h-4 fill-amber-400 text-amber-400"
                  aria-hidden="true"
                />
              ))}
            </div>
            <span className="font-playfair font-bold text-foreground text-sm">
              5.0
            </span>
            <span className="text-muted-foreground text-sm">
              from 500+ installations across Odisha
            </span>
          </div>
        </div>

        {/* Testimonial grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="testimonials.list"
        >
          {section.customers.map((customer, idx) => (
            <TestimonialCard
              key={customer.name}
              customer={customer}
              index={idx}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-muted-foreground text-sm mb-4">
            Ready to join thousands of happy solar customers in Odisha?
          </p>
          <a
            href="https://wa.me/917838867880?text=Hi%2C%20I%20want%20to%20install%20solar%20panels%20through%20PM%20Surya%20Ghar%20scheme"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="testimonials.primary_button"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground
              font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg
              hover:bg-primary/90 transition-all duration-200 text-sm"
          >
            <Sun className="w-4 h-4" aria-hidden="true" />
            Get Your Free Solar Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
