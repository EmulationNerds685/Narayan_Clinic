import React, { useState } from 'react';
import axios from 'axios';
import FeedbackDialog from '../components/Feedback';
import SeoHead from '../components/SeoHead';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const localBusinessSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Narayan Heart & Maternity Centre",
  image: "https://narayanheartandmaternitycentre.com/nc.png",
  url: "https://narayanheartandmaternitycentre.com",
  telephone: ["+91-9708441467", "+91-9836197624"],
  email: "narayanheartmaternitycentre@gmail.com",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "10:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "18:30",
      closes: "20:00",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "MIG, 245, Lohia Nagar, Kankarbagh",
    addressLocality: "Patna",
    addressRegion: "Bihar",
    postalCode: "800020",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.5945,
    longitude: 85.1554,
  },
  sameAs: ["https://maps.app.goo.gl/tsKEg2pHUXZzp1STA"],
});

const Contact = () => {
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const [feedbackData, setFeedbackData] = useState({
    name: '',
    feedback: '',
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [dialogOpen, setDialogOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [response, setResponse] = useState('');
  const [isSubmittingMessage, setIsSubmittingMessage] = useState(false);
  const [isSubmittingFeedback, setIsSubmittingFeedback] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmittingMessage(true);
    try {
      const result = await axios.post(`${backendURL}/contact`, formData);
      setResponse(result.data.message || 'Message sent successfully!');
      setIsError(false);
    } catch (err) {
      console.error(err);
      setResponse('There was an error sending your message.');
      setIsError(true);
    } finally {
      setDialogOpen(true);
      setFormData({ name: '', email: '', message: '' });
      setIsSubmittingMessage(false);
    }
  };

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    setIsSubmittingFeedback(true);
    try {
      const result = await axios.post(`${backendURL}/feedback`, feedbackData);
      setResponse(result.data.message || 'Feedback submitted successfully!');
      setIsError(false);
    } catch (err) {
      console.error(err);
      setResponse('There was an error submitting your feedback.');
      setIsError(true);
    } finally {
      setDialogOpen(true);
      setFeedbackData({ name: '', feedback: '' });
      setIsSubmittingFeedback(false);
    }
  };

  const inputClasses = "w-full !px-4 !py-3 border border-gray-200 rounded-xl bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3CAEA3]/50 focus:border-[#3CAEA3] hover:border-gray-300 transition-all duration-200 text-sm sm:text-base";

  return (
    <>
      <SeoHead
        title="Contact Narayan Heart & Maternity Centre | Best Cardiologist and Gynecologist Clinic in Patna"
        description="Get in touch with Dr. Sushant Kumar Pathak and Dr. Jagriti Bhardwaj. View clinic timings, address, and contact info for appointments in Patna."
        path="/contact"
      >
        <script type="application/ld+json">{localBusinessSchema}</script>
      </SeoHead>

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-[#30638E] to-[#1a3d5c] text-white !py-14 sm:!py-18 !px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-56 h-56 bg-[#3CAEA3] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#3CAEA3] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl !mx-auto text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold !mb-3">
            Contact Us
          </h1>
          <p className="text-sm sm:text-base text-blue-100 max-w-xl !mx-auto">
            We're here to help. Reach out for appointments, queries, or feedback.
          </p>
        </motion.div>
      </section>

      {/* Quick Contact Cards */}
      <section className="bg-white !py-6 sm:!py-8 !px-4 shadow-sm border-b border-gray-100">
        <div className="max-w-5xl !mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: <FaPhone />, title: 'Call Us', value: '+91 97084 41467', href: 'tel:+919708441467' },
            { icon: <FaPhone />, title: 'Alternate', value: '+91 98361 97624', href: 'tel:+919836197624' },
            { icon: <FaEnvelope />, title: 'Email', value: 'narayanhmc@gmail.com', href: 'mailto:narayanheartmaternitycentre@gmail.com' },
            { icon: <FaClock />, title: 'Timings', value: '9-10:30 AM, 6:30-8 PM', href: null },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex items-center gap-3 !p-4 rounded-xl bg-gray-50 border border-gray-100"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#3CAEA3]/10 text-[#3CAEA3] flex-shrink-0">
                {item.icon}
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-400 uppercase tracking-wider">{item.title}</p>
                {item.href ? (
                  <a href={item.href} className="text-sm font-medium text-gray-800 hover:text-[#3CAEA3] transition-colors truncate block">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-gray-800 truncate">{item.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-gray-50 !py-10 sm:!py-14 !px-4 sm:!px-6 lg:!px-8">
        <div className="max-w-6xl !mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Map + Address */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="!space-y-5"
            >
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
                <iframe
                  title="Clinic Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.312158118437!2d85.15537607415408!3d25.594541477457266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59001b844559%3A0xc68a23d3c5f4ed77!2sNarayan%20Heart%20%26%20Maternity%20Centre!5e0!3m2!1sen!2sin!4v1747651924946!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  className="border-0"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
                <div className="!p-5 !space-y-3">
                  <h3 className="text-lg font-bold text-[#30638E]">Our Clinic</h3>
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <FaMapMarkerAlt className="text-[#3CAEA3] !mt-0.5 flex-shrink-0" />
                    <span>MIG, 245, Lohia Nagar, Kankarbagh, Patna-800020</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Forms Column */}
            <div className="!space-y-6">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm !p-6 sm:!p-8 border border-gray-100"
              >
                <h3 className="text-lg sm:text-xl font-bold text-[#30638E] !mb-5">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit} className="!space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-600 !mb-1.5">Name</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className={inputClasses} placeholder="Your full name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600 !mb-1.5">Email</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className={inputClasses} placeholder="your@email.com" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-600 !mb-1.5">Message</label>
                    <textarea id="message" name="message" rows="3" required value={formData.message} onChange={handleChange} className={inputClasses} placeholder="How can we help you?" />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmittingMessage}
                    className={`w-full flex justify-center items-center !py-3 !px-4 rounded-xl text-sm font-semibold transition-all duration-200
                      ${isSubmittingMessage
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-[#30638E] text-white hover:bg-[#25516F] active:scale-[0.98] shadow-sm hover:shadow-md'
                      }`}
                  >
                    {isSubmittingMessage ? (
                      <>
                        <svg className="animate-spin !-ml-1 !mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : 'Send Message'}
                  </button>
                </form>
              </motion.div>

              {/* Feedback Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm !p-6 sm:!p-8 border border-gray-100"
              >
                <h3 className="text-lg sm:text-xl font-bold text-[#30638E] !mb-5">
                  Give Us Your Feedback
                </h3>
                <form onSubmit={handleFeedbackSubmit} className="!space-y-4">
                  <div>
                    <label htmlFor="feedback-name" className="block text-sm font-medium text-gray-600 !mb-1.5">Your Name</label>
                    <input
                      type="text" id="feedback-name" name="name" required
                      value={feedbackData.name}
                      onChange={(e) => setFeedbackData({ ...feedbackData, name: e.target.value })}
                      className={inputClasses}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="feedback-text" className="block text-sm font-medium text-gray-600 !mb-1.5">Your Feedback</label>
                    <textarea
                      id="feedback-text" name="feedback" rows="3" required
                      value={feedbackData.feedback}
                      onChange={(e) => setFeedbackData({ ...feedbackData, feedback: e.target.value })}
                      className={inputClasses}
                      placeholder="Share your experience with us..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmittingFeedback}
                    className={`w-full flex justify-center items-center !py-3 !px-4 rounded-xl text-sm font-semibold transition-all duration-200
                      ${isSubmittingFeedback
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-[#30638E] border-2 border-[#30638E] hover:bg-[#30638E] hover:text-white active:scale-[0.98]'
                      }`}
                  >
                    {isSubmittingFeedback ? (
                      <>
                        <svg className="animate-spin !-ml-1 !mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : 'Submit Feedback'}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <FeedbackDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        isError={isError}
        message={response}
      />
    </>
  );
};

export default Contact;