import { Landmark, TrendingUp, IndianRupee } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

const WHATSAPP_URL = 'https://wa.me/917838867880';

export default function BankFinanceBanner() {
  return (
    <section className="px-4 md:px-8 py-10 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl solar-gradient shadow-solar-lg">
          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white opacity-5" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full bg-white opacity-5" />
          <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-white opacity-5" />

          <div className="relative z-10 p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Icon */}
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-forest-900 bg-opacity-20 flex items-center justify-center">
                <Landmark className="w-10 h-10 text-forest-900" />
              </div>

              {/* Main Content */}
              <div className="flex-1 text-center md:text-left">
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
              <div className="flex flex-row md:flex-col gap-4 md:gap-3 flex-shrink-0">
                <div className="bg-forest-900 bg-opacity-15 rounded-2xl px-6 py-4 text-center min-w-[120px]">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <TrendingUp className="w-4 h-4 text-forest-900" />
                    <span className="font-heading text-3xl font-black text-forest-900">90%</span>
                  </div>
                  <p className="text-forest-800 text-xs font-semibold uppercase tracking-wide">Loan Approved</p>
                </div>
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
            <div className="mt-6 pt-5 border-t border-forest-800 border-opacity-20 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-forest-800 text-sm text-center sm:text-left">
                💡 Combined with government subsidy up to <strong>₹1,38,000</strong>, your effective out-of-pocket cost is minimal.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2 bg-forest-900 text-solar-400 font-heading font-bold text-sm px-6 py-2.5 rounded-full hover:bg-forest-800 transition-colors duration-200"
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
