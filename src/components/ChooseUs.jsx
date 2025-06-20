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
      icon: <FaUserMd className="w-12 h-12" />,
      title: 'Specialized Expertise',
      description: 'Care from top specialists — an Interventional Cardiologist and an Infertility & Laparoscopic Surgeon.',
    },
    {
      icon: <FaHeartbeat className="w-12 h-12" />,
      title: 'Advanced Diagnostic Tools',
      description: 'ECG, ECHO, TMT, Holter, ABPM, and ultrasound services available in one place.',
    },
    {
      icon: <FaHeart className="w-12 h-12" />,
      title: 'Compassionate Women & Heart Care',
      description: 'From pregnancy to post-CABG follow-up — care that\'s empathetic and personalized.',
    },
    {
      icon: <FaClock className="w-12 h-12" />,
      title: 'Continuity of Care',
      description: 'Long-term follow-ups, lifestyle counseling, and preventive screening built into your care.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="bg-gray-50 !py-16 !px-4 sm:!px-6 lg:!px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center !mb-12 max-w-4xl !mx-auto"
      >
        <h2 className="text-4xl font-bold text-red-600 !mb-4">Why Choose Us?</h2>
        <div className="!w-20 h-1 bg-red-500 !mx-auto rounded-full"></div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl !mx-auto"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="hover"
            className="h-full"
          >
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 h-full !p-8 text-center border border-gray-100 flex flex-col items-center">
              <div className="text-red-600 !mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 !mb-3">{feature.title}</h3>
              <p className="text-gray-600 flex-grow">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WhyChooseUs;