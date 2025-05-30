import React from "react";
import { Link } from "react-router-dom";
import { 
  FaHeart, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#30638E] text-white !py-12 !px-4 sm:!px-6">
      <div className="max-w-6xl !mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="!space-y-4">
            <div className="flex items-center !space-x-2">
              <img
                src="/nc.png"
                alt="Logo"
                className="h-8 w-auto"
              />
              <h3 className="text-xl font-bold">Narayan Heart & Maternity Centre</h3>
            </div>
            <p className="text-blue-100">
              Providing compassionate care with a specialized team in cardiology
              and gynecology in Patna.
            </p>
            
            {/* Social Media */}
            <div className="!pt-2">
              <h4 className="font-medium !mb-3">Connect With Us</h4>
              <div className="flex !space-x-4">
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  <FaYoutube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="!space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <nav className="!space-y-2">
              <Link to="/" className="block text-blue-100 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/services" className="block text-blue-100 hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/doctors" className="block text-blue-100 hover:text-white transition-colors">
                Our Doctors
              </Link>
              <Link to="/contact" className="block text-blue-100 hover:text-white transition-colors">
                Contact
              </Link>
              <a 
                href="https://maps.app.goo.gl/tsKEg2pHUXZzp1STA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-blue-100 hover:text-white transition-colors"
              >
                Reach us
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="!space-y-4">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <address className="not-italic !space-y-2 text-blue-100">
              <div className="flex items-start !space-x-2">
                <FaMapMarkerAlt className="!mt-1 flex-shrink-0" />
                <span>MIG, 245, Lohia Nagar, kankarbagh, Patna-800020</span>
              </div>
              <div className="flex items-center !space-x-2">
                <FaPhone />
                <span>+91 9708441467 | +91 98361 97624</span>
              </div>
              <div className="flex items-center !space-x-2 ">
                <FaEnvelope />
                <span>narayanheartmaternitycentre@gmail.com</span>
              </div>
            </address>
          </div>

          {/* Newsletter */}
        
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-blue-700 !my-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left text-blue-100 text-sm !space-y-2 md:!space-y-0">
          <p>
            © {new Date().getFullYear()} Narayan Heart & Maternity Centre. All rights reserved.
          </p>
       <div className="flex items-center !space-x-4">
  <a
    href="https://merchant.razorpay.com/policy/QaQXGMpbHuXgY5/terms"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition-colors"
  >
    Terms & Conditions
  </a>
  <a
    href="https://merchant.razorpay.com/policy/QaQXGMpbHuXgY5/refund"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition-colors"
  >
    Cancellation & Refund
  </a>
  <a
    href="https://merchant.razorpay.com/policy/QaQXGMpbHuXgY5/shipping"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition-colors"
  >
    Shipping Policy
  </a>
  <p className="flex items-center">
    Made with <FaHeart className="!mx-1 text-red-400" /> in Patna
  </p>
</div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;