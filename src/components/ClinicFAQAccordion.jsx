import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What services are offered at Narayan Heart and Maternity Centre?",
    answer:
      "We provide comprehensive cardiology and maternity services including ECG, echocardiograms, stress testing, prenatal care, delivery, and postnatal support.",
  },
  {
    question: "Do I need a referral to see a cardiologist?",
    answer:
      "While referrals are helpful, they are not mandatory. You can directly book an appointment with our cardiologist.",
  },
  {
    question: "What should I bring for my first maternity consultation?",
    answer:
      "Please bring any prior medical reports, prescriptions, and a valid ID. If you're already pregnant, bring your previous scan or test results if available.",
  },
  {
    question: "What is Timing for Visit?",
    answer:
      "Our Clinic Timings is Morning: 09:00 AM – 10:30 AM and Evening: 06:30 PM – 08:00 PM.",
  },
  {
    question: "When to visit a Cardiologist?",
    answer:
      "When patient have symptoms such as shortness of breath, chest pain, syncope, palpitation, headache, uneasiness, they can consult cardiologist.",
  },
];

// FAQPage JSON-LD for Google rich results
const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

const ClinicFAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl !mx-auto !px-4 !py-16 sm:!py-20">
      <Helmet>
        <script type="application/ld+json">{faqSchema}</script>
      </Helmet>

      <div className="text-center !mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 !mb-3">
          Frequently Asked <span className="text-[#3CAEA3]">Questions</span>
        </h2>
        <div className="w-20 h-1 bg-[#30638E] !mx-auto rounded-full"></div>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                className="w-full !px-5 !py-4 text-left flex justify-between items-center gap-3 hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
              >
                <span className="text-base font-medium text-gray-800 leading-relaxed">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-xl text-[#3CAEA3] font-bold flex-shrink-0 w-6 h-6 flex items-center justify-center"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="!px-5 !pb-4 !pt-1 text-gray-600 leading-relaxed border-t border-gray-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div >
  );
};

export default ClinicFAQAccordion;
