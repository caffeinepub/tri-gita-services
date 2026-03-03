import { CheckCircle, IndianRupee, Sparkles, Tag } from "lucide-react";
import { motion } from "motion/react";
import React from "react";
import { SiWhatsapp } from "react-icons/si";

const WHATSAPP_OFFER_URL =
  "https://wa.me/917838867880?text=I+am+interested+in+the+3KW+Solar+Offer+at+%E2%82%B962%2C000";

const WHATSAPP_NEW_POST_URL =
  "https://wa.me/917838867880?text=I+am+interested+in+your+solar+offer";

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
      className="py-16 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 overflow-hidden"
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
          <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/40 text-gold-400 px-5 py-2 rounded-full text-sm font-bold mb-4 uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            Limited Time Offer
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3">
            Special Offer –{" "}
            <span className="text-gold-400">PM Surya Ghar Yojana</span>
          </h2>
          <p className="text-navy-300 text-lg max-w-2xl mx-auto">
            Install a 3KW solar system and save massively with government
            subsidies.
          </p>
        </motion.div>

        {/* Main Card */}
        <div className="bg-gradient-to-br from-navy-800/80 to-navy-950/80 border border-gold-500/25 rounded-3xl p-6 sm:p-10 backdrop-blur-sm shadow-gold">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Offer Image */}
            <motion.div
              className="w-full lg:w-auto lg:flex-shrink-0 flex justify-center"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
              }}
            >
              <div className="relative">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-gold-500/20 blur-2xl rounded-3xl scale-90" />
                <img
                  src="/assets/uploads/1772454579179-1.png"
                  alt="PM Surya Ghar Solar Offer"
                  className="relative z-10 w-full max-w-sm lg:max-w-xs xl:max-w-sm rounded-2xl shadow-2xl border border-gold-500/30 object-cover"
                />
                {/* Badge on image */}
                <div className="absolute -top-3 -right-3 z-20 bg-green-500 text-white text-xs font-extrabold px-3 py-1.5 rounded-full shadow-lg rotate-6">
                  HOT DEAL 🔥
                </div>
              </div>
            </motion.div>

            {/* Offer Details */}
            <div className="flex-1 w-full">
              {/* Price Highlight */}
              <motion.div
                {...fadeUpProps(0)}
                className="bg-green-500/15 border border-green-500/40 rounded-2xl p-5 mb-4 flex items-start gap-4"
              >
                <div className="bg-green-500/20 rounded-full p-2 flex-shrink-0">
                  <Tag className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="text-green-300 text-xs font-bold uppercase tracking-wider mb-1">
                    3KW Solar System – Domestic Use
                  </div>
                  <div className="text-white text-2xl sm:text-3xl font-extrabold flex items-center gap-1">
                    <IndianRupee className="w-6 h-6" />
                    62,000
                    <span className="ml-2 text-sm font-medium text-green-400 bg-green-500/20 px-2 py-0.5 rounded-full">
                      After Subsidy
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Subsidy Badge */}
              <motion.div
                {...fadeUpProps(0.12)}
                className="bg-blue-500/15 border border-blue-400/40 rounded-2xl p-5 mb-4 flex items-start gap-4"
              >
                <div className="bg-blue-500/20 rounded-full p-2 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">
                    Government Subsidy
                  </div>
                  <div className="text-white text-2xl sm:text-3xl font-extrabold flex items-center gap-1">
                    <IndianRupee className="w-6 h-6" />
                    1,38,000
                    <span className="ml-2 text-sm font-medium text-blue-400 bg-blue-500/20 px-2 py-0.5 rounded-full">
                      Central + State
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Provider Info */}
              <motion.div
                {...fadeUpProps(0.24)}
                className="bg-gold-500/10 border border-gold-500/30 rounded-2xl p-4 mb-6 text-sm text-navy-200"
              >
                <span className="text-gold-400 font-bold">
                  Service Provider:
                </span>{" "}
                TRI-GITA SERVICES <span className="text-navy-400 mx-1">|</span>
                <span className="text-gold-400 font-bold">Contact:</span>{" "}
                <a
                  href="tel:+917838867880"
                  className="text-white hover:text-gold-400 transition-colors font-medium"
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
                  className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-bold px-7 py-4 rounded-full text-base sm:text-lg transition-all shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
                >
                  <SiWhatsapp className="w-5 h-5 flex-shrink-0" />
                  Avail This Offer on WhatsApp
                </a>
                <p className="text-navy-500 text-xs mt-3">
                  *T&amp;C Apply. Subject to government guidelines.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* New Post Card */}
        <motion.div
          data-ocid="offer.new_post.card"
          className="mt-10 flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
            delay: 0.1,
          }}
        >
          {/* New Post Label */}
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/40 text-orange-300 px-5 py-2 rounded-full text-xs font-bold mb-5 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Latest Post
          </div>

          <div className="bg-gradient-to-br from-navy-800/80 to-navy-950/80 border border-orange-400/25 rounded-3xl p-6 sm:p-8 backdrop-blur-sm shadow-2xl w-full max-w-2xl">
            <div className="flex flex-col items-center gap-6">
              {/* Post Image with glow */}
              <motion.div
                className="relative w-full"
                initial={{ opacity: 0, scale: 0.94 }}
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
                  delay: 0.2,
                }}
              >
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-orange-500/20 blur-2xl rounded-3xl scale-90" />
                  <img
                    src="/assets/uploads/1772516467109-1-1.png"
                    alt="TRI-GITA SERVICES Solar Offer – ₹19,000 Customer Payment"
                    className="relative z-10 w-full rounded-2xl shadow-2xl border border-orange-400/30 object-contain"
                  />
                  {/* NEW badge */}
                  <div className="absolute -top-3 -left-3 z-20 bg-orange-500 text-white text-xs font-extrabold px-3 py-1.5 rounded-full shadow-lg -rotate-6">
                    NEW ✨
                  </div>
                </div>
              </motion.div>

              {/* Post highlights */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
                <motion.div
                  {...fadeUpProps(0.3)}
                  className="bg-green-500/15 border border-green-500/40 rounded-xl p-4 flex items-start gap-3"
                >
                  <div className="bg-green-500/20 rounded-full p-1.5 flex-shrink-0">
                    <Tag className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <div className="text-green-300 text-xs font-bold uppercase tracking-wider mb-0.5">
                      Customer Pays Only
                    </div>
                    <div className="text-white text-xl font-extrabold flex items-center gap-0.5">
                      <IndianRupee className="w-4 h-4" />
                      19,000
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  {...fadeUpProps(0.38)}
                  className="bg-blue-500/15 border border-blue-400/40 rounded-xl p-4 flex items-start gap-3"
                >
                  <div className="bg-blue-500/20 rounded-full p-1.5 flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-0.5">
                      Govt. Subsidy Up To
                    </div>
                    <div className="text-white text-xl font-extrabold flex items-center gap-0.5">
                      <IndianRupee className="w-4 h-4" />
                      1,38,000
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* WhatsApp CTA */}
              <motion.div {...fadeUpProps(0.46)} className="w-full">
                <a
                  href={WHATSAPP_NEW_POST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="offer.new_post.whatsapp_button"
                  className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-bold px-7 py-4 rounded-full text-base sm:text-lg transition-all shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5 w-full"
                >
                  <SiWhatsapp className="w-5 h-5 flex-shrink-0" />
                  Avail This Offer on WhatsApp
                </a>
                <p className="text-navy-500 text-xs text-center mt-3">
                  *T&amp;C Apply. Subject to government guidelines.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
