import React from 'react';
import SeoHead from '../components/SeoHead';
import { motion } from 'framer-motion';
import { FaUserMd, FaCalendarCheck, FaAward, FaHospital } from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stats = [
  { icon: <FaUserMd />, value: '2+', label: 'Expert Doctors' },
  { icon: <FaCalendarCheck />, value: '1000+', label: 'Patients Treated' },
  { icon: <FaAward />, value: '15+', label: 'Years Experience' },
  { icon: <FaHospital />, value: '2', label: 'Specialities' },
];

const AboutUs = () => {
  return (
    <>
      <SeoHead
        title="About Narayan Heart & Maternity Centre | Our Mission And Vision"
        description="Learn about Narayan Heart & Maternity Centre, a multi-speciality clinic in Patna led by Dr. Sushant Kumar Pathak and Dr. Jagriti Bhardwaj. Dedicated to compassionate and expert healthcare."
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold !mb-4 leading-tight">
            About Our Clinic
          </h1>
          <p className="text-base sm:text-lg text-blue-100 max-w-2xl !mx-auto leading-relaxed">
            Compassionate, world-class healthcare in cardiology and maternity — serving the Patna community with dedication and expertise.
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
              <h2 className="text-2xl sm:text-3xl font-bold text-[#30638E]">Who We Are</h2>
              <div className="w-16 h-1 bg-[#3CAEA3] rounded-full mx-auto lg:mx-0"></div>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                At Narayan Heart & Maternity Centre, we deliver compassionate, world-class healthcare
                in cardiology and maternity. Our experienced doctors and modern facilities ensure a
                seamless experience for every patient.
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
              <h2 className="text-2xl sm:text-3xl font-bold text-[#30638E]">Our Mission</h2>
              <div className="w-16 h-1 bg-[#3CAEA3] rounded-full mx-auto lg:mx-0"></div>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                We aim to provide affordable and accessible medical care while upholding the highest
                standards of ethics and professionalism.
              </p>
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
              <h2 className="text-2xl sm:text-3xl font-bold text-[#30638E]">Our Vision</h2>
              <div className="w-16 h-1 bg-[#3CAEA3] rounded-full mx-auto lg:mx-0"></div>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                To be the region's most trusted healthcare provider, continuously innovating and
                expanding to meet our community's evolving health needs.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
