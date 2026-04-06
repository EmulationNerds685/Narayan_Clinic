import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const QuickConnectBar = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8, type: 'spring' }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-lg"
      >
        <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-full !p-2 flex items-center justify-between gap-2 overflow-hidden">
          {/* Call Now */}
          <a
            href="tel:+919708441467"
            className="flex-1 flex items-center justify-center gap-2 !py-3 rounded-full bg-[#30638E] text-white hover:bg-[#1a4a6e] transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
          >
            <FaPhoneAlt className="text-sm" />
            <span className="text-xs font-bold whitespace-nowrap">Call Now</span>
          </a>

          {/* Location */}
          <a
            href="https://maps.app.goo.gl/tsKEg2pHUXZzp1STA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 !py-3 rounded-full bg-white text-[#30638E] hover:bg-gray-50 transition-all duration-300 border border-gray-100 shadow-sm active:scale-95"
          >
            <FaMapMarkerAlt className="text-sm" />
            <span className="text-xs font-bold whitespace-nowrap">Get Directions</span>
          </a>

          {/* WhatsApp Icon Only */}
          <a
            href="https://wa.me/919708441467"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#25D366] text-white hover:bg-[#128C7E] transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 flex-shrink-0"
            title="WhatsApp Us"
          >
            <FaWhatsapp className="text-xl" />
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default QuickConnectBar;
