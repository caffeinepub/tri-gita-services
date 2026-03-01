import { useEffect, useRef, useState } from 'react';
import { Landmark, TrendingUp, IndianRupee } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

const WHATSAPP_URL = 'https://wa.me/917838867880';

export default function BankFinanceBanner() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-4 md:px-8 py-10 bg-background">
      <div className="max-w-6xl mx-auto">
        <div
          ref={sectionRef}
          className={[
            'relative overflow-hidden rounded-3xl solar-gradient shadow-solar-lg',
            'transition-all duration-700 ease-out motion-reduce:transition-none',
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10',
          ].join(' ')}
        >
          {/* Shimmer sweep overlay */}
          <div className="banner-shimmer absolute inset-0 pointer-events-none z-0" aria-hidden="true" />

          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white opacity-5" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full bg-white opacity-5" />
          <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-white opacity-5" />

          <div className="relative z-10 p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Icon — floats gently */}
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-forest-900 bg-opacity-20 flex items-center justify-center animate-float motion-reduce:animate-none">
                <Landmark className="w-10 h-10 text-forest-900" />
              </div>

              {/* Main Content */}
              <div
                className={[
                  'flex-1 text-center md:text-left',
                  'transition-all duration-700 delay-150 ease-out motion-reduce:transition-none',
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6',
                ].join(' ')}
              >
                <p className="text-forest-900 text-sm font-bold uppercase tracking-widest mb-1">
                  Easy Bank Finance Available
                </p>
                <h3 className="font-heading text-3xl md:text-4xl font-black text-forest-900 mb-2 leading-tight">
                  Go Solar with Just{' '}
                  <span className="underline decoration-forest-700 decoration-2">10% Down Payment</span>
                </h3>
                <p className="text-forest-800 text-base">
                  Get your rooftop solar system installed today — banks approve up to{' '}
                  <strong>90% of the total cost</strong> as a loan. You only pay the remaining 10%.
                </p>
              </div>

              {/* Stats */}
              <div
                className={[
                  'flex flex-row md:flex-col gap-4 md:gap-3 flex-shrink-0',
                  'transition-all duration-700 delay-300 ease-out motion-reduce:transition-none',
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6',
                ].join(' ')}
              >
                {/* 90% stat — pulse glow */}
                <div className="stat-glow bg-forest-900 bg-opacity-15 rounded-2xl px-6 py-4 text-center min-w-[120px] motion-reduce:animate-none">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <TrendingUp className="w-4 h-4 text-forest-900" />
                    <span className="font-heading text-3xl font-black text-forest-900">90%</span>
                  </div>
                  <p className="text-forest-800 text-xs font-semibold uppercase tracking-wide">Loan Approved</p>
                </div>

                {/* 10% stat */}
                <div className="bg-forest-900 bg-opacity-15 rounded-2xl px-6 py-4 text-center min-w-[120px]">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <IndianRupee className="w-4 h-4 text-forest-900" />
                    <span className="font-heading text-3xl font-black text-forest-900">10%</span>
                  </div>
                  <p className="text-forest-800 text-xs font-semibold uppercase tracking-wide">You Pay</p>
                </div>
              </div>
            </div>

            {/* Bottom note */}
            <div
              className={[
                'mt-6 pt-5 border-t border-forest-800 border-opacity-20 flex flex-col sm:flex-row items-center justify-between gap-3',
                'transition-all duration-700 delay-500 ease-out motion-reduce:transition-none',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
              ].join(' ')}
            >
              <p className="text-forest-800 text-sm text-center sm:text-left">
                💡 Combined with government subsidy up to <strong>₹1,38,000</strong>, your effective out-of-pocket cost is minimal.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-cta flex-shrink-0 inline-flex items-center gap-2 bg-forest-900 text-solar-400 font-heading font-bold text-sm px-6 py-2.5 rounded-full transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_20px_oklch(0.16_0.05_145/0.55)] active:scale-95 motion-reduce:hover:scale-100 motion-reduce:hover:shadow-none"
              >
                <SiWhatsapp className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
