import React from 'react';
import { motion } from 'framer-motion';
import { FaDoorOpen, FaUserMd, FaVial, FaHistory } from 'react-icons/fa';

const steps = [
  {
    icon: <FaDoorOpen />,
    title: "Arrival",
    description: "Welcome! Our reception team will help you with a quick check-in process.",
    color: "bg-blue-50 text-[#30638E]",
  },
  {
    icon: <FaUserMd />,
    title: "Consultation",
    description: "Meet our specialists for a private, dedicated discussion about your health.",
    color: "bg-teal-50 text-[#3CAEA3]",
  },
  {
    icon: <FaVial />,
    title: "Diagnostics",
    description: "If needed, get your ECG, Echo, or prenatal tests done instantly on-site.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: <FaHistory />,
    title: "Care & Follow-up",
    description: "Receive your prescription, health plan, and schedule your next visit.",
    color: "bg-orange-50 text-orange-600",
  },
];

const PatientJourney = () => {
  return (
    <section className="!py-16 sm:!py-24 !px-4 bg-white overflow-hidden">
      <div className="max-w-6xl !mx-auto">
        <div className="text-center !mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#3CAEA3] font-bold tracking-widest text-xs uppercase"
          >
            Your Experience Matters
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-[#30638E] !mt-2"
          >
            The Patient Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 !mt-4 max-w-2xl !mx-auto text-sm sm:text-base"
          >
            From the moment you walk in to the completion of your treatment, we ensure a seamless and supportive experience.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-3xl !p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-50 group text-center lg:text-left"
              >
                <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center text-3xl !mb-6 mx-auto lg:mx-0 group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 !mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
                <div className="text-4xl font-black text-gray-50 !mt-6 opacity-40 group-hover:text-[#3CAEA3]/10 transition-colors">
                  0{index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientJourney;
