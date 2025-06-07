import React, { useState } from 'react';

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
      "Our Clinic Timings is Morning:09:00 AM-10:30 AM And Evening: 06:30 PM -08:00 PM.",
  },
  {
    question: "When to visit a Cardiologist?",
    answer:
      "When patient have symptoms such as shortness of breath, chest pain, syncope, palpitation, headache,uneaseiness, they can consult cardiologist",
  },
];

const ClinicFAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl !mx-auto !px-4 !py-12">
      <h2 className="text-3xl font-bold text-center !mb-8 text-gray-800">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-md overflow-hidden">
            <button
              className="w-full !px-4 !py-3 text-left flex justify-between items-center bg-gray-100 hover:bg-gray-200 transition"
              onClick={() => toggle(index)}
            >
              <span className="text-base font-medium text-gray-800">{faq.question}</span>
              <span className="text-xl text-blue-600">{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="!px-4 !py-3 bg-white text-gray-700 transition-all duration-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClinicFAQAccordion;
