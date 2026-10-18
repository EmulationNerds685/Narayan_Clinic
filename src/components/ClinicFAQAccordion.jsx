import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What cardiac treatments and interventional procedures does Dr. Sushant Kumar Pathak specialize in?",
    answer:
      "Dr. Sushant Kumar Pathak specializes in imaging-guided complex coronary angioplasty (utilizing IVUS and OCT for millimetric accuracy), 24/7 emergency primary PCI during acute heart attacks, physiological pacing (Left Bundle Branch Area Pacing — LBBAP), AICD defibrillators, CRT heart failure devices, Balloon Mitral Valvuloplasty (BMV), catheter structural defect closures (ASD/VSD/PDA), and complete non-invasive diagnostics (2D Echo Color Doppler, TMT, 24/48-hr Holter).",
  },
  {
    question: "What are the clinic outpatient (OPD) consultation hours and working days?",
    answer:
      "Regular outpatient consultation at Narayan Heart & Maternity Centre operates Monday through Saturday in two daily slots: Morning Session from 09:00 AM to 10:30 AM, and Evening Session from 06:30 PM to 08:00 PM. Prior appointment booking via phone (+91 97084 41467, +91 98361 97624) or our online portal is recommended.",
  },
  {
    question: "What is Left Bundle Branch Area Pacing (LBBAP) and why is it recommended?",
    answer:
      "LBBAP is a state-of-the-art physiological pacing technique that directly captures the heart's natural electrical conduction bundle rather than pacing the heart muscle itself. This maintains physiological ventricular synchrony, significantly reducing the long-term risk of pacemaker-induced cardiomyopathy and heart failure.",
  },
  {
    question: "How do I get an expert second opinion on Angioplasty (stenting) vs. Bypass Surgery (CABG)?",
    answer:
      "You can bring your existing coronary angiogram CD/pen drive, recent ECG, and 2D Echocardiography reports to the clinic. Dr. Pathak conducts a detailed anatomical evaluation to determine whether optimal medical therapy, complex multi-vessel stenting, or surgical bypass offers the safest and most durable long-term outcome.",
  },
  {
    question: "What maternity, pregnancy, and gynaecological care pathways does Dr. Jagriti Bhardwaj provide?",
    answer:
      "Dr. Jagriti Bhardwaj provides complete life-stage care: adolescent menstrual disorder & PCOS/PCOD clinic, FOGSI-certified preconception and fertility assessments, high-risk antenatal care (Gestational Diabetes, hypertension, twin pregnancies, recurrent pregnancy loss), safe normal and caesarean delivery planning, minimally invasive laparoscopic surgery, cervical cancer screening (Pap Smear & HPV DNA), and menopause wellness.",
  },
  {
    question: "What diagnostic investigations can be performed directly on-site at the clinic?",
    answer:
      "Our in-house diagnostic suite is equipped for instant 12-lead digital ECG, 2D Echocardiography with Color Doppler, Stress Treadmill Test (TMT), 24 to 48-Hour Holter monitoring, Obstetric and Pelvic Ultrasound, Non-Stress Test (NST) for fetal monitoring, and comprehensive blood pathology (CBC, Blood Sugar, HbA1c, Lipid Profile, Troponin-I, BNP).",
  },
  {
    question: "What is the clinic's Sanctuary Promise regarding confidentiality in women's healthcare?",
    answer:
      "Consultations with Dr. Jagriti Bhardwaj are guarded under absolute medical discretion and privacy. Whether you are an adolescent seeking guidance on irregular cycles, an unmarried woman with PCOS or contraception queries, or a couple seeking fertility support, care is delivered with total dignity, empathy, and zero judgment.",
  },
  {
    question: "How should I prepare for my first appointment?",
    answer:
      "Please bring your past medical prescriptions, recent blood investigation reports, ECG strips, angiogram CDs, or ultrasound scans. For cardiology follow-ups, bring a record of your daily blood pressure readings if available; for obstetrics, bring your last menstrual period (LMP) date and prior ultrasound reports.",
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
