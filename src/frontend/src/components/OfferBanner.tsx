import { CheckCircle, IndianRupee, Sparkles, Tag } from "lucide-react";
import { motion } from "motion/react";
import React from "react";
import { SiWhatsapp } from "react-icons/si";

const WHATSAPP_OFFER_URL =
  "https://wa.me/917838867880?text=I+am+interested+in+the+3KW+Solar+Offer+at+%E2%82%B962%2C000";

const WHATSAPP_HOT_DEAL_URL =
  "https://wa.me/917838867880?text=I+am+interested+in+the+latest+solar+deal";

function fadeUpProps(delay: number) {
  return {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      delay,
    },
  };
}

export default function OfferBanner() {
  return (
    <section
      id="offer"
      data-ocid="offer_banner.section"
      className="py-16 bg-gradient-to-br from-slate-100 via-[oklch(0.97_0.02_80)] to-slate-100 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/40 text-amber-700 px-5 py-2 rounded-full text-sm font-bold mb-4 uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            Limited Time Offer
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 mb-3">
            Special Offer –{" "}
            <span className="text-amber-600">PM Surya Ghar Yojana</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Install a 3KW solar system and save massively with government
            subsidies.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main 3KW Offer Card */}
          <div className="bg-white border border-amber-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col gap-6">
              {/* Offer Image */}
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  ease: [0.25, 0.1, 0.25, 1] as [
                    number,
                    number,
                    number,
                    number,
                  ],
                }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-amber-400/10 blur-2xl rounded-3xl scale-90" />
                  <img
                    src="/assets/uploads/1772454579179-1.png"
                    alt="PM Surya Ghar Solar Offer"
                    className="relative z-10 w-full max-w-xs rounded-2xl shadow-md border border-amber-200 object-cover"
                  />
                  <div className="absolute -top-3 -right-3 z-20 bg-green-500 text-white text-xs font-extrabold px-3 py-1.5 rounded-full shadow-lg rotate-6">
                    HOT DEAL 🔥
                  </div>
                </div>
              </motion.div>

              {/* Offer Details */}
              <div>
                {/* Price Highlight */}
                <motion.div
                  {...fadeUpProps(0)}
                  className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-3 flex items-start gap-4"
                >
                  <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                    <Tag className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-green-700 text-xs font-bold uppercase tracking-wider mb-1">
                      3KW Solar System – Domestic Use
                    </div>
                    <div className="text-slate-800 text-2xl sm:text-3xl font-extrabold flex items-center gap-1">
                      <IndianRupee className="w-6 h-6" />
                      62,000
                      <span className="ml-2 text-sm font-medium text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                        After Subsidy
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Subsidy Badge */}
                <motion.div
                  {...fadeUpProps(0.12)}
                  className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-3 flex items-start gap-4"
                >
                  <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-blue-700 text-xs font-bold uppercase tracking-wider mb-1">
                      Government Subsidy
                    </div>
                    <div className="text-slate-800 text-2xl sm:text-3xl font-extrabold flex items-center gap-1">
                      <IndianRupee className="w-6 h-6" />
                      1,38,000
                      <span className="ml-2 text-sm font-medium text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">
                        Central + State
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Provider Info */}
                <motion.div
                  {...fadeUpProps(0.24)}
                  className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-5 text-sm text-slate-600"
                >
                  <span className="text-amber-700 font-bold">
                    Service Provider:
                  </span>{" "}
                  TRI-GITA SERVICES{" "}
                  <span className="text-slate-300 mx-1">|</span>
                  <span className="text-amber-700 font-bold">Contact:</span>{" "}
                  <a
                    href="tel:+917838867880"
                    className="text-slate-700 hover:text-amber-700 transition-colors font-medium"
                  >
                    7838867880
                  </a>
                </motion.div>

                {/* CTA */}
                <motion.div {...fadeUpProps(0.36)}>
                  <a
                    href={WHATSAPP_OFFER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="offer.whatsapp_button"
                    className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-bold px-7 py-4 rounded-full text-base sm:text-lg transition-all shadow-md hover:shadow-green-400/30 hover:-translate-y-0.5 w-full justify-center"
                  >
                    <SiWhatsapp className="w-5 h-5 flex-shrink-0" />
                    Avail This Offer on WhatsApp
                  </a>
                  <p className="text-slate-400 text-xs mt-3">
                    *T&amp;C Apply. Subject to government guidelines.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Hot Deal Post Card */}
          <motion.div
            data-ocid="new_deal.card"
            className="bg-white border border-red-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col gap-5"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
            }}
          >
            {/* Badge */}
            <div className="flex items-center gap-2">
              <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-400/40 text-red-600 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest">
                <Sparkles className="w-4 h-4" />🔥 Hot Deal
              </div>
            </div>

            {/* Post Image */}
            <div className="flex justify-center">
              <div className="relative w-full">
                <div className="absolute inset-0 bg-red-400/5 blur-xl rounded-3xl" />
                <img
                  src="/assets/uploads/1772695324345-1.png"
                  alt="Latest Solar Hot Deal"
                  className="relative z-10 w-full rounded-2xl shadow-md border border-red-100 object-cover"
                />
              </div>
            </div>

            {/* Deal CTA */}
            <div className="mt-auto">
              <a
                href={WHATSAPP_HOT_DEAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="new_deal.whatsapp_button"
                className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-bold px-7 py-4 rounded-full text-base transition-all shadow-md hover:shadow-green-400/30 hover:-translate-y-0.5 w-full justify-center"
              >
                <SiWhatsapp className="w-5 h-5 flex-shrink-0" />
                Inquire on WhatsApp
              </a>
              <p className="text-slate-400 text-xs mt-3 text-center">
                Chat with us for latest deals &amp; pricing
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
