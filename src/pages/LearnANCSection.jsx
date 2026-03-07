import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaCalendarCheck, FaChild, FaAppleAlt, FaClipboardCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const whyImportant = [
  'Monitors the health of both mother and baby',
  'Detects and prevents complications early',
  'Offers vaccinations and supplements',
  'Provides guidance on diet and exercise',
  'Prepares the mother for delivery and newborn care',
];

const highlights = [
  {
    icon: <FaClipboardCheck />, title: 'Regular Check-Ups', desc: "Track fetal growth and monitor mother's health throughout pregnancy."
  },
  { icon: <FaAppleAlt />, title: 'Nutritional Guidance', desc: 'Customized diet plans to support a healthy pregnancy and fetal development.' },
  { icon: <FaChild />, title: 'Birth Planning', desc: 'Preparation for delivery and counseling for labor and postpartum care.' },
];

const LearnANCSection = () => {
  return (
    <>
      <Helmet>
        <title>Antenatal Care (ANC) in Patna | Dr. Jagriti Bhardwaj</title>
        <meta name="description" content="Learn about Antenatal Care (ANC) services offered at Narayan Heart & Maternity Centre, Patna by Dr. Jagriti Bhardwaj. Ensure a healthy pregnancy with expert checkups and guidance." />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#3CAEA3] to-[#2a8e85] text-white !py-12 sm:!py-16 !px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative max-w-4xl !mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold !mb-2">Antenatal Care (ANC)</h1>
          <p className="text-teal-50 text-sm sm:text-base max-w-2xl !mx-auto">Ensuring a healthy pregnancy journey for every mother and baby.</p>
        </motion.div>
      </section>

      <section className="bg-gray-50 !py-10 sm:!py-14 !px-4 sm:!px-6">
        <div className="max-w-5xl !mx-auto">
          {/* What is ANC + Image */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 !p-5 sm:!p-7 !mb-8 flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
              <h2 className="text-xl font-bold text-gray-800 !mb-3">What is ANC?</h2>
              <p className="text-sm text-gray-600 leading-relaxed !mb-5">
                Antenatal Care refers to the routine health monitoring of pregnant women to diagnose diseases or obstetric conditions early, and to provide information about lifestyle, pregnancy, and delivery.
              </p>
              <h3 className="font-bold text-[#3CAEA3] text-sm !mb-2">Why is ANC Important?</h3>
              <ul className="!space-y-2">
                {whyImportant.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <FaCheckCircle className="text-[#3CAEA3] !mt-0.5 flex-shrink-0 text-xs" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/3">
              <img src="/gyno.webp" alt="Antenatal Care" loading="lazy" className="w-full h-48 sm:h-full object-cover rounded-xl" />
            </div>
          </motion.div>

          {/* At NHMC */}
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
            className="bg-[#3CAEA3]/5 border border-[#3CAEA3]/15 rounded-2xl !p-5 sm:!p-7 !mb-8">
            <p className="text-sm text-gray-700 leading-relaxed">
              At <strong>Narayan Heart & Maternity Centre</strong>, we ensure a compassionate, supportive, and medically sound ANC journey for every expecting mother. Our specialists conduct regular check-ups, perform required screenings, and guide you through every step of your pregnancy.
            </p>
          </motion.div>

          {/* Highlights */}
          <div className="text-center !mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our <span className="text-[#3CAEA3]">ANC Services</span></h2>
            <div className="w-16 h-1 bg-[#3CAEA3] !mx-auto !mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 !mb-10">
            {highlights.map((h, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 !p-5 sm:!p-6 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#3CAEA3]/10 text-[#3CAEA3] flex items-center justify-center !mx-auto !mb-4 text-xl">{h.icon}</div>
                <h3 className="font-bold text-gray-800 !mb-2">{h.title}</h3>
                <p className="text-sm text-gray-500">{h.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
            className="bg-gradient-to-br from-[#3CAEA3] to-[#2a8e85] rounded-2xl !p-6 sm:!p-8 text-white flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-lg sm:text-xl font-bold !mb-1">Start your ANC journey today</h3>
              <p className="text-teal-50 text-sm">Expert prenatal care by Dr. Jagriti Bhardwaj.</p>
            </div>
            <Link to="/book" className="flex-shrink-0">
              <button className="flex items-center gap-2 bg-white text-[#3CAEA3] hover:bg-gray-50 font-semibold text-sm !py-3 !px-6 rounded-xl shadow-md hover:shadow-lg active:scale-[0.98] transition-all">
                <FaCalendarCheck /> Book Appointment
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default LearnANCSection;
