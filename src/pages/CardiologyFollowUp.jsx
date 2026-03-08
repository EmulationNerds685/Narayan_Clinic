import React from 'react';
import { Link } from 'react-router-dom';
import SeoHead from '../components/SeoHead';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaCalendarCheck, FaHeartbeat, FaAppleAlt, FaCalendarAlt } from 'react-icons/fa';

const features = [
  { icon: <FaCheckCircle />, title: 'Progress Monitoring', text: 'Regular check-ins to track improvement and adjust medications.' },
  { icon: <FaAppleAlt />, title: 'Lifestyle Guidance', text: 'Personalized diet and exercise recommendations for heart health.' },
  { icon: <FaCalendarAlt />, title: 'Flexible Scheduling', text: 'Convenient appointment options for your follow-up visits.' },
];

const benefits = [
  'Reduced risk of complications',
  'Early detection of potential issues',
  'Continuity of care with your cardiologist',
  'Personalized treatment adjustments',
];

const CardiologyFollowUp = () => {
  return (
    <>
      <SeoHead
        title="Cardiology Follow-Up Care | Dr. Sushant Kumar Pathak, Patna"
        description="Continue your heart treatment journey with regular follow-up consultations by Dr. Sushant Kumar Pathak at Narayan Heart & Maternity Centre, Patna."
        path="/FollowUp"
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#30638E] to-[#1a3d5c] text-white !py-12 sm:!py-16 !px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#3CAEA3] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative max-w-4xl !mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold !mb-2">Cardiology Follow-Up Care</h1>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl !mx-auto">Personalized ongoing care to monitor your heart health and adjust treatment plans as needed.</p>
        </motion.div>
      </section>

      <section className="bg-gray-50 !py-10 sm:!py-14 !px-4 sm:!px-6">
        <div className="max-w-5xl !mx-auto">
          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 !mb-10">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 !p-5 sm:!p-6 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#3CAEA3]/10 text-[#3CAEA3] flex items-center justify-center !mx-auto !mb-4 text-xl">{f.icon}</div>
                <h3 className="font-bold text-gray-800 !mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500">{f.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Benefits + CTA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 !p-5 sm:!p-7">
              <h2 className="text-xl font-bold text-gray-800 !mb-4 flex items-center gap-2">
                <FaHeartbeat className="text-[#30638E]" /> Benefits of Regular Follow-Ups
              </h2>
              <ul className="!space-y-3">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <FaCheckCircle className="text-[#3CAEA3] !mt-0.5 flex-shrink-0 text-xs" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 !p-5 sm:!p-7 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-800 !mb-3">Schedule Your Follow-Up</h2>
                <p className="text-sm text-gray-500 leading-relaxed !mb-5">
                  Maintain your heart health with regular check-ins tailored to your specific needs. Our cardiologist will review your progress and guide next steps.
                </p>
              </div>
              <Link to="/book">
                <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#3CAEA3] to-[#2F9E94] hover:from-[#2F9E94] hover:to-[#278A81] text-white font-semibold text-sm !py-3 rounded-xl shadow-sm hover:shadow-md active:scale-[0.98] transition-all">
                  <FaCalendarCheck /> Book Appointment
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardiologyFollowUp;