import React from 'react';
import { motion } from 'framer-motion';
import {
  FaUserMd,
  FaHeartbeat,
  FaHeart,
  FaClock
} from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaUserMd className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: 'Specialized Expertise',
      description: 'Care from top specialists — an Interventional Cardiologist and an Infertility & Laparoscopic Surgeon.',
    },
    {
      icon: <FaHeartbeat className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: 'Advanced Diagnostic Tools',
      description: 'ECG, ECHO, TMT, Holter, ABPM, and ultrasound services available in one place.',
    },
    {
      icon: <FaHeart className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: 'Compassionate Women & Heart Care',
      description: 'From pregnancy to post-CABG follow-up — care that\'s empathetic and personalized.',
    },
    {
      icon: <FaClock className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: 'Continuity of Care',
      description: 'Long-term follow-ups, lifestyle counseling, and preventive screening built into your care.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="bg-gray-50 !py-16 sm:!py-20 !px-4 sm:!px-6 lg:!px-8">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center !mb-12 sm:!mb-14 max-w-4xl !mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 !mb-4">
          Why Choose <span className="text-[#3CAEA3]">Us?</span>
        </h2>
        <div className="w-20 h-1 bg-[#30638E] !mx-auto rounded-full"></div>
      </motion.div>

      {/* Feature Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 max-w-7xl !mx-auto"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="h-full"
          >
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 h-full !p-6 sm:!p-8 text-center border border-gray-100 hover:border-[#3CAEA3]/30 flex flex-col items-center group">

              {/* Icon with gradient background */}
              <div className="w-18 h-18 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#30638E]/10 to-[#3CAEA3]/15 text-[#30638E] !mb-5 sm:!mb-6 group-hover:from-[#30638E]/15 group-hover:to-[#3CAEA3]/25 transition-all duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 !mb-2 sm:!mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WhyChooseUs;