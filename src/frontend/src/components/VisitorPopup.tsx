import { Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { SiWhatsapp } from "react-icons/si";

const WHATSAPP_VISIT_URL =
  "https://wa.me/917838867880?text=Hello!+I+visited+your+website+and+I+am+interested+in+solar+installation.+Please+contact+me.";

const POPUP_DELAY_MS = 5000;
const SESSION_KEY = "popupShown";

export default function VisitorPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show once per session
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
      sessionStorage.setItem(SESSION_KEY, "true");
    }, POPUP_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setIsVisible(false);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-50 bg-navy-950/75 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
          />

          {/* Modal Card */}
          <motion.div
            key="modal"
            data-ocid="visitor_popup.modal"
            aria-labelledby="popup-heading"
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none px-4"
          >
            <motion.div
              className="relative bg-gradient-to-br from-navy-800 to-navy-950 border border-gold-500/40 rounded-3xl shadow-2xl shadow-navy-950/60 p-7 sm:p-10 max-w-md w-full pointer-events-auto"
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 20 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
            >
              {/* Decorative glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gold-500/10 blur-3xl rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-500/10 blur-3xl rounded-full pointer-events-none" />

              {/* Close Button */}
              <button
                type="button"
                onClick={handleClose}
                data-ocid="visitor_popup.close_button"
                aria-label="Close popup"
                className="absolute top-4 right-4 text-navy-400 hover:text-white transition-colors bg-navy-700/50 hover:bg-navy-600/70 rounded-full p-1.5 z-10"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="bg-gold-500/20 border border-gold-500/40 rounded-full p-4">
                  <Sun className="w-8 h-8 text-gold-400" />
                </div>
              </div>

              {/* Heading */}
              <h2
                id="popup-heading"
                className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-3"
              >
                Get a <span className="text-gold-400">FREE</span> Solar
                Consultation!
              </h2>

              {/* Body text */}
              <p className="text-navy-300 text-center text-sm sm:text-base mb-7 leading-relaxed">
                Talk to our solar experts today. We serve all{" "}
                <span className="text-gold-400 font-semibold">
                  30 districts of Odisha
                </span>{" "}
                under PM Surya Ghar Muft Bijli Yojana.
              </p>

              {/* WhatsApp CTA */}
              <a
                href={WHATSAPP_VISIT_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="visitor_popup.whatsapp_button"
                className="flex items-center justify-center gap-3 w-full bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-extrabold px-6 py-4 rounded-2xl text-base sm:text-lg transition-all shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5 mb-4"
              >
                <SiWhatsapp className="w-6 h-6 flex-shrink-0" />
                Chat on WhatsApp Now
              </a>

              {/* Dismiss link */}
              <button
                type="button"
                onClick={handleClose}
                className="block w-full text-center text-navy-500 hover:text-navy-300 text-xs transition-colors py-1"
              >
                No thanks, I'll explore on my own
              </button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
