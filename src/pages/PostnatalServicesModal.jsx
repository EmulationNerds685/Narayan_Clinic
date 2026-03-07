/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaCalendarCheck, FaExclamationTriangle } from 'react-icons/fa';

const services = [
  {
    title: 'Postpartum Checkups',
    description: 'Comprehensive physical and emotional wellness exams for new mothers.',
    details: ['Incision/wound care (C-section)', 'Blood pressure monitoring', 'Mental health screening', 'Contraception counseling'],
    emoji: '👩‍⚕️',
  },
  {
    title: 'Newborn Care',
    description: 'Specialized care for your baby in the first weeks.',
    details: ['Feeding support (breast/formula)', 'Umbilical cord care', 'Newborn screening tests', 'Weight gain monitoring'],
    emoji: '👶',
  },
  {
    title: 'Recovery Programs',
    description: 'Tailored recovery plans for postpartum healing.',
    details: ['Pelvic floor rehabilitation', 'Postpartum exercise guidance', 'Nutrition planning', 'Scar tissue massage'],
    emoji: '💪',
  },
];

const resources = ['24/7 nurse helpline', 'Postpartum support groups', 'Lactation consultants', 'Mental health resources'];

const warnings = [
  'Fever > 100.4°F (38°C)',
  'Heavy bleeding (soaking pad in 1 hour)',
  'Severe headache or vision changes',
  'Signs of postpartum depression',
];

const PostnatalServicesModal = () => {
  return (
    <>
      <Helmet>
        <title>Postnatal Care Services in Patna | Dr. Jagriti Bhardwaj</title>
        <meta name="description" content="Get expert postnatal care for new mothers at Narayan Heart & Maternity Centre, Patna. Led by Dr. Jagriti Bhardwaj, our services ensure complete recovery and support." />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#3CAEA3] to-[#2a8e85] text-white !py-12 sm:!py-16 !px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative max-w-4xl !mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold !mb-2">Postnatal Care Services</h1>
          <p className="text-teal-50 text-sm sm:text-base max-w-2xl !mx-auto">Comprehensive support for you and your baby after delivery.</p>
        </motion.div>
      </section>

      <section className="bg-gray-50 !py-10 sm:!py-14 !px-4 sm:!px-6">
        <div className="max-w-5xl !mx-auto">
          {/* Why it matters + Image */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 !p-5 sm:!p-7 !mb-8 flex flex-col md:flex-row gap-6">
            <div className="md:w-2/5">
              <img src="/postnatal.webp" alt="Postnatal Care" loading="lazy" className="w-full h-48 sm:h-full object-cover rounded-xl" />
            </div>
            <div className="md:w-3/5">
              <h2 className="text-xl font-bold text-gray-800 !mb-3">Why Postnatal Care Matters</h2>
              <p className="text-sm text-gray-600 leading-relaxed !mb-4">
                The first six weeks after delivery are crucial for recovery and bonding. Our postnatal services provide medical care, emotional support, and practical guidance.
              </p>
              <div className="bg-[#3CAEA3]/5 !p-4 rounded-xl">
                <h4 className="font-semibold text-[#3CAEA3] text-sm !mb-2">Key Focus Areas</h4>
                <ul className="!space-y-1.5">
                  {['Physical recovery from birth', 'Newborn health and development', 'Emotional wellbeing', 'Family adjustment support'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <FaCheckCircle className="text-[#3CAEA3] !mt-0.5 flex-shrink-0 text-xs" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Services Grid */}
          <div className="text-center !mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our <span className="text-[#3CAEA3]">Postnatal Services</span></h2>
            <div className="w-16 h-1 bg-[#3CAEA3] !mx-auto !mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 !mb-8">
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 !p-5 sm:!p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl !mb-3">{s.emoji}</div>
                <h3 className="font-bold text-gray-800 !mb-1.5">{s.title}</h3>
                <p className="text-sm text-gray-500 !mb-3">{s.description}</p>
                <ul className="!space-y-1.5">
                  {s.details.map((d, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-gray-600">
                      <FaCheckCircle className="text-[#3CAEA3] !mt-0.5 flex-shrink-0" style={{ fontSize: '0.6rem' }} />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Resources + Warning */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 !mb-10">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 !p-5 sm:!p-6">
              <h3 className="font-bold text-gray-800 !mb-3">Additional Resources</h3>
              <ul className="!space-y-2.5">
                {resources.map((r, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <FaCheckCircle className="text-[#3CAEA3] flex-shrink-0 text-xs" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
              className="bg-red-50 rounded-2xl border border-red-100 !p-5 sm:!p-6">
              <h3 className="font-bold text-red-700 !mb-3 flex items-center gap-2">
                <FaExclamationTriangle className="text-sm" /> When to Seek Help
              </h3>
              <ul className="!space-y-2">
                {warnings.map((w, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-red-600">
                    <span className="font-bold !mt-0.5">•</span>
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
            className="bg-gradient-to-br from-[#3CAEA3] to-[#2a8e85] rounded-2xl !p-6 sm:!p-8 text-white flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-lg sm:text-xl font-bold !mb-1">Ready to schedule your postnatal care?</h3>
              <p className="text-teal-50 text-sm">Our team specializes in postpartum and newborn care.</p>
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

export default PostnatalServicesModal;