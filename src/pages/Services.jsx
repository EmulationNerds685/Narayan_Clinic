import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHeart,
  FaFemale,
  FaHeartbeat,
  FaClinicMedical,
  FaCheckCircle,
  FaDumbbell,
  FaSyncAlt,
  FaChartBar,
  FaHospital,
  FaStethoscope,
  FaArrowRight
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Services = () => {
  const specialities = [
    {
      title: 'Cardiology',
      icon: <FaHeart className="w-12 h-12" />,
      description: 'Our cardiology department provides state-of-the-art diagnostics and treatment for a wide range of cardiovascular conditions. We focus on early detection, prevention, and personalized treatment plans.',
      id: 'cardiology',
      link: '/Cardioservices',
      highlights: [
        'Electrocardiogram (ECG)',
        'Echocardiogram',
        'Stress Test',
        '24-Hour Holter Monitoring',
        'Interventional Procedures'
      ]
    },
    {
      title: 'Gynecology',
      icon: <FaFemale className="w-12 h-12" />,
      description: 'We offer a full spectrum of women\'s health services, including routine exams, prenatal care, fertility evaluation, and menopause management. Our team is dedicated to providing compassionate, confidential care.',
      id: 'gynecology',
      link: '/Gynoservices',
      highlights: [
        'Prenatal & Postnatal Care',
        'Annual Pelvic Exams',
        'Fertility Assessment',
        'PCOS Support',
        'Minimally Invasive Surgery'
      ]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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
      y: -8,
      scale: 1.02,
      boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.15)',
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white !py-20 !px-8 sm:!px-6 lg:!px-20">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center !mb-16 !mx-auto max-w-3xl"
      >
        <h2 className="text-4xl font-bold text-[#30638E] !mb-4">Our Specialities</h2>
        <p className="text-lg text-gray-600 !mb-6">
          We provide comprehensive healthcare services with a focus on excellence and patient-centered care.
        </p>
        <div className="w-20 h-1 bg-[#3CAEA3] !mx-auto rounded-full"></div>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl !mx-auto"
      >
        {specialities.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            whileHover="hover"
            className="h-full"
          >
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-full overflow-hidden border border-gray-100 flex flex-col">
              <div className="!p-8 flex-1">
                <div className="text-[#3CAEA3] !mb-6 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 !mb-4 text-center">{item.title}</h3>
                <p className="text-gray-600 !mb-6 text-center">{item.description}</p>
                
                {/* Service Highlights */}
                <div className="!mb-8">
                  <h4 className="font-semibold text-gray-800 !mb-3 text-center">Key Services:</h4>
                  <ul className="!space-y-2">
                    {item.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheckCircle className="text-[#3CAEA3] !mt-1 !mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Explore Services Button */}
              <div className="!px-8 !pb-8 !pt-4 bg-gray-50 border-t border-gray-100">
                <motion.a
                  href={item.link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#3CAEA3] hover:bg-[#2A8E83] text-white font-medium !py-3 !px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
                >
                  Explore {item.title} Services
                  <FaArrowRight className="!ml-2" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center !mt-16"
      >
        <p className="text-gray-600 !mb-6">Looking for other medical services?</p>
        <Link 
          to="/services" 
          className="inline-flex items-center text-[#30638E] hover:text-[#3CAEA3] font-medium transition-colors"
        >
          View All Medical Services
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </motion.div>
    </div>
  );
};

export default Services;