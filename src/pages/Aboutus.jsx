import React from 'react';
import SeoHead from '../components/SeoHead';
import { motion } from 'framer-motion';
import { FaUserMd, FaCalendarCheck, FaAward, FaHospital } from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stats = [
  { icon: <FaUserMd />, value: '2', label: 'Senior Consultants' },
  { icon: <FaCalendarCheck />, value: '10,000+', label: 'Cardiac Procedures' },
  { icon: <FaAward />, value: '100%', label: 'Dedicated Patient Care' },
  { icon: <FaHospital />, value: '2 Apex', label: 'Hospital Partners' },
];

const AboutUs = () => {
  return (
    <>
      <SeoHead
        title="About Narayan Heart & Maternity Centre | Patna's Premier Cardiac & Women's Care"
        description="Learn about Narayan Heart & Maternity Centre in Kankarbagh, Patna, founded by Dr. Sushant Kumar Pathak (DM Cardiology, Gold Medalist) and Dr. Jagriti Bhardwaj (MS, DNB OBG, FMAS)."
        path="/about"
      />

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-[#30638E] to-[#1a3d5c] text-white !py-16 sm:!py-20 !px-4 sm:!px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#3CAEA3] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#3CAEA3] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative max-w-4xl !mx-auto text-center"
        >
          <div className="inline-block bg-[#3CAEA3]/20 border border-[#3CAEA3]/40 text-[#3CAEA3] px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            Narayan Heart & Maternity Centre · Kankarbagh, Patna
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold !mb-4 leading-tight">
            Excellence in Heart & Women's Healthcare
          </h1>
          <p className="text-base sm:text-lg text-blue-100 max-w-2xl !mx-auto leading-relaxed">
            Founded with the conviction that clinical excellence, advanced diagnostics, and deep empathy must go hand-in-hand to safeguard our community's heart and family health.
          </p>
        </motion.div>
      </section>

      {/* Stats Strip */}
      <section className="bg-white shadow-sm border-b border-gray-100 !py-8 sm:!py-10 !px-4">
        <div className="max-w-5xl !mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-[#3CAEA3] text-2xl sm:text-3xl !mb-2 flex justify-center">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-bold text-[#30638E]">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-500 !mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Content Sections */}
      <section className="bg-gradient-to-b from-gray-50 to-white !py-16 sm:!py-20 !px-4 sm:!px-6 lg:!px-8">
        <div className="max-w-6xl !mx-auto !space-y-16 sm:!space-y-20">
          {/* About Section */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
          >
            <div className="w-full lg:w-1/2">
              <img
                src="/EMC.webp"
                alt="Inside Narayan Heart & Maternity Centre"
                className="w-full rounded-2xl shadow-lg object-cover aspect-[4/3] hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            <div className="lg:w-1/2 text-center lg:text-left !space-y-4">
              <div className="inline-block px-3 py-1 bg-[#30638E]/10 text-[#30638E] rounded-md text-xs font-bold uppercase tracking-wider">
                Clinical Heritage & Purpose
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#30638E]">Who We Are</h2>
              <div className="w-16 h-1 bg-[#3CAEA3] rounded-full mx-auto lg:mx-0"></div>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Narayan Heart & Maternity Centre (NHMC) is a state-of-the-art super-speciality outpatient and diagnostic clinic conveniently located at Metro Pillar No. 4, Lohia Nagar, Kankarbagh, Patna.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Led by <strong>Dr. Sushant Kumar Pathak</strong> (Assistant Director at IGIC, Senior Consultant at Ford Hospital, and Institutional Gold Medalist) and <strong>Dr. Jagriti Bhardwaj</strong> (MS, DNB, FMAS, FOGSI-certified Infertility Specialist from Sir Ganga Ram Hospital), our centre bridges the gap between everyday outpatient consultations and premier tertiary hospital care.
              </p>
            </div>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12"
          >
            <div className="lg:w-1/2 text-center lg:text-left !space-y-4">
              <div className="inline-block px-3 py-1 bg-[#3CAEA3]/10 text-[#3CAEA3] rounded-md text-xs font-bold uppercase tracking-wider">
                Our Guiding Philosophy
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#30638E]">Our Mission</h2>
              <div className="w-16 h-1 bg-[#3CAEA3] rounded-full mx-auto lg:mx-0"></div>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                We believe healthcare should be unhurried, transparent, and evidence-guided. Our mission is to deliver gold-standard cardiovascular diagnosis and compassionate, judgment-free women's health care under one unified roof.
              </p>
              <ul className="text-gray-600 text-sm space-y-2 text-left">
                <li className="flex items-start gap-2">
                  <span className="text-[#3CAEA3] font-bold">✓</span>
                  <span><strong>Transradial & Imaging-Guided Precision:</strong> Providing millimetric angioplasty evaluations and physiological pacing solutions (LBBAP).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3CAEA3] font-bold">✓</span>
                  <span><strong>Sanctuary Promise in Gynaecology:</strong> 100% confidential and empathetic consultations for every woman across adolescence, fertility, pregnancy, and menopause.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3CAEA3] font-bold">✓</span>
                  <span><strong>On-Site Rapid Diagnostics:</strong> Reducing turnaround time with in-house 12-lead ECG, 2D Echo Doppler, TMT, 48-hr Holter, and Ultrasound.</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <img
                src="/Mission.webp"
                alt="Our Mission"
                className="w-full rounded-2xl shadow-lg object-cover aspect-[4/3] hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </motion.div>

          {/* Vision Section */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
          >
            <div className="w-full lg:w-1/2">
              <img
                src="/about-clinic.webp"
                alt="Our Vision"
                className="w-full rounded-2xl shadow-lg object-cover aspect-[4/3] hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            <div className="lg:w-1/2 text-center lg:text-left !space-y-4">
              <div className="inline-block px-3 py-1 bg-[#30638E]/10 text-[#30638E] rounded-md text-xs font-bold uppercase tracking-wider">
                Looking Ahead
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#30638E]">Our Vision & Facilities</h2>
              <div className="w-16 h-1 bg-[#3CAEA3] rounded-full mx-auto lg:mx-0"></div>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                To establish Bihar's most trusted ambulatory cardiac and maternity care ecosystem, ensuring patients receive timely interventions during the "Golden Hour" as well as dedicated chronic disease management.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                With ground-level patient parking, zero-step wheelchair access, digital EMR integration, and seamless tertiary hospital tie-ups with Ford Hospital (105-bedded tertiary facility with digital Cath Lab and ICCU) and IGIC Patna, we ensure comprehensive care from outpatient checkup to advanced surgical recovery.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
