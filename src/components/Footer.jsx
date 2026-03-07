import React from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#30638E] text-white !py-12 !px-4 sm:!px-6 overflow-x-hidden">
      <div className="max-w-6xl !mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Clinic Info */}
          <div className="!space-y-4">
            <div className="flex items-center !space-x-2">
              <img src="/nc.webp" alt="Narayan Heart & Maternity Centre Logo" className="h-9 w-auto" />
              <h3 className="text-lg font-bold leading-snug">
                Narayan Heart &<br className="sm:hidden" /> Maternity Centre
              </h3>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Providing compassionate care with a specialized team in cardiology
              and gynecology in Patna.
            </p>
          </div>

          {/* Quick Links */}
          <div className="!space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <nav className="!space-y-2 text-sm">
              <Link to="/" className="block text-blue-100 hover:text-white transition-colors duration-200">Home</Link>
              <Link to="/services" className="block text-blue-100 hover:text-white transition-colors duration-200">Services</Link>
              <Link to="/doctors" className="block text-blue-100 hover:text-white transition-colors duration-200">Our Doctors</Link>
              <Link to="/contact" className="block text-blue-100 hover:text-white transition-colors duration-200">Contact</Link>
              <a href="https://maps.app.goo.gl/tsKEg2pHUXZzp1STA" target="_blank" rel="noopener noreferrer" className="block text-blue-100 hover:text-white transition-colors duration-200">
                Reach Us
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="!space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <address className="not-italic !space-y-3 text-blue-100 text-sm">
              <div className="flex items-start !space-x-2">
                <FaMapMarkerAlt className="!mt-0.5 flex-shrink-0 text-[#3CAEA3]" />
                <span>MIG, 245, Lohia Nagar, Kankarbagh, Patna-800020</span>
              </div>
              <div className="flex items-center !space-x-2">
                <FaPhone className="flex-shrink-0 text-[#3CAEA3]" />
                <div className="flex flex-wrap gap-x-2">
                  <a href="tel:+919708441467" className="hover:text-white transition-colors duration-200">+91 97084 41467</a>
                  <span className="opacity-50">|</span>
                  <a href="tel:+919836197624" className="hover:text-white transition-colors duration-200">+91 98361 97624</a>
                </div>
              </div>
              <div className="flex items-center !space-x-2">
                <FaEnvelope className="flex-shrink-0 text-[#3CAEA3]" />
                <a href="mailto:narayanheartmaternitycentre@gmail.com" className="hover:text-white transition-colors duration-200 break-all text-xs sm:text-sm">
                  narayanheartmaternitycentre@gmail.com
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-blue-400/30 !my-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left text-blue-100 text-xs sm:text-sm !space-y-3 md:!space-y-0">
          <p>© {new Date().getFullYear()} Narayan Heart & Maternity Centre. All rights reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 sm:gap-4">
            <Link to="/terms" className="hover:text-white transition-colors duration-200">Terms & Conditions</Link>
            <Link to="/privacypolicy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
            <Link to="/cancellationRefund" className="hover:text-white transition-colors duration-200">Cancellation & Refund</Link>
            <Link to="/shipping" className="hover:text-white transition-colors duration-200">Shipping Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
