/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
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
  FaStethoscope
} from 'react-icons/fa';

const Services = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (card) => {
    setExpanded((prev) => (prev === card ? null : card));
  };

  const specialities = [
    {
      title: 'Cardiology',
      icon: <FaHeart className="w-12 h-12" />,
      description: 'Our cardiology department provides state-of-the-art diagnostics and treatment for a wide range of cardiovascular conditions. We focus on early detection, prevention, and personalized treatment plans.',
      id: 'cardiology',
      services: [
        { title: 'Electrocardiogram (ECG)', description: 'Records the electrical activity of your heart.', icon: <FaHeartbeat className="w-6 h-6" /> },
        { title: 'Echocardiogram', description: 'Ultrasound of the heart to assess structure and function.', icon: <FaStethoscope className="w-6 h-6" /> },
        { title: 'Stress Test', description: 'Measures heart function under physical stress.', icon: <FaDumbbell className="w-6 h-6" /> },
        { title: '24-Hour Holter Monitoring', description: 'Continuous heart rhythm monitoring for 24 hours.', icon: <FaSyncAlt className="w-6 h-6" /> },
        { title: 'Heart Disease Risk Assessment', description: 'Evaluates your risk of developing heart disease.', icon: <FaChartBar className="w-6 h-6" /> },
        {
          title: 'Interventional Cardiology Consultation',
          description: [
            'Angioplasty',
            'Coronary and Peripheral Angiography',
            'BMV (Balloon Mitral Valvotomy)',
            'Pacemaker Implantation',
            'CRTP (Cardiac Resynchronization Therapy Pacemaker)',
            'TAVI (Transcatheter Aortic Valve Implantation)',
            'EVAR (Endovascular Aneurysm Repair)',
            'Treatment of Limb Ischemia',
            'Electrophysiology Studies',
          ],
          icon: <FaHospital className="w-6 h-6" />,
        },
        { title: 'Lifestyle & Nutritional Counseling', description: 'Heart-healthy lifestyle and diet plans.', icon: <FaDumbbell className="w-6 h-6" /> },
        { title: 'Pacemaker & Device Monitoring', description: 'Ongoing management of implanted heart devices.', icon: <FaSyncAlt className="w-6 h-6" /> },
        { title: 'Hypertension, Diabetes & Cholesterol Management', description: 'Treatment and monitoring of high BP & lipids.', icon: <FaCheckCircle className="w-6 h-6" /> },
      ],
    },
    {
      title: 'Gynecology',
      icon: <FaFemale className="w-12 h-12" />,
      description: 'We offer a full spectrum of women\'s health services, including routine exams, prenatal care, fertility evaluation, and menopause management. Our team is dedicated to providing compassionate, confidential care.',
      id: 'gynecology',
      services: [
        { title: 'Prenatal & Postnatal Care', description: 'Comprehensive care before and after childbirth.', icon: <FaHospital className="w-6 h-6" /> },
        { title: 'Annual Pelvic Exam & Pap Smear', description: 'Routine screening for women\'s reproductive health.', icon: <FaCheckCircle className="w-6 h-6" /> },
        { title: 'Fertility Assessment & Treatment', description: 'Evaluation and assistance for conception.', icon: <FaHeart className="w-6 h-6" /> },
        { title: 'Management of Menstrual Disorders', description: 'Treatment for irregular or painful periods.', icon: <FaStethoscope className="w-6 h-6" /> },
        { title: 'PCOS Support', description: 'Diagnosis and management of Polycystic Ovary Syndrome.', icon: <FaHeartbeat className="w-6 h-6" /> },
        { title: 'Birth Control Counseling', description: 'Guidance on contraceptive methods.', icon: <FaClinicMedical className="w-6 h-6" /> },
        { title: 'Menopause & Hormone Therapy', description: 'Support through hormonal changes.', icon: <FaChartBar className="w-6 h-6" /> },
        { title: 'Minimally Invasive Surgery', description: 'Advanced surgical solutions with minimal downtime.', icon: <FaHospital className="w-6 h-6" /> },
        { title: 'STD Testing', description: 'Confidential and accurate screening for STDs.', icon: <FaCheckCircle className="w-6 h-6" /> },
        { title: 'Ultrasound & Imaging Services', description: 'Imaging for diagnosis and monitoring.', icon: <FaHeartbeat className="w-6 h-6" /> },
      ],
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
      y: -5,
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white !py-20 !px-8 sm:!px-6 lg:!px-20">
      <Helmet>
  <title>Clinic Services | Cardiology & Gynaecology in Patna</title>
  <meta
    name="description"
    content="Explore the medical services at Narayan Heart & Maternity Centre in Patna, including expert cardiology by Dr. Sushant Kumar Pathak and gynaecological care by Dr. Jagriti Bhardwaj."
  />
</Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center !mb-16  !!mx-auto"
      >
        <h2 className="text-4xl font-bold text-red-600 !mb-4">Our Specialities</h2>
        <div className="w-20 h-1 bg-red-500 !mx-auto rounded-full"></div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1  gap-8  !mx-auto"
      >
        {specialities.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            whileHover="hover"
            className="h-full"
          >
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full overflow-hidden border border-gray-100 w-full">
              <div className="!p-8 text-center">
                <div className="text-red-600 !mb-6 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 !mb-4">{item.title}</h3>
                <p className="text-gray-600 !mb-6">{item.description}</p>
                
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="text-red-600 hover:text-red-700 font-medium flex items-center justify-center !mx-auto transition-colors"
                >
                  {expanded === item.id ? (
                    <>
                      Hide Services
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 !ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                      </svg>
                    </>
                  ) : (
                    <>
                      View Services
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 !ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </>
                  )}
                </button>
              </div>

              {expanded === item.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="!px-6 !pb-8"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-96 overflow-y-auto !pr-2">
                    {item.services.map((service, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg !p-4 border border-gray-200">
                        <div className="flex flex-col items-center text-center">
                          <div className="text-red-600 !mb-2">
                            {service.icon}
                          </div>
                          <h4 className="font-semibold text-gray-800 !mb-2">{service.title}</h4>
                          {Array.isArray(service.description) ? (
                            <ul className="text-sm text-gray-600 !space-y-1 text-left !pl-4">
                              {service.description.map((desc, i) => (
                                <li key={i} className="list-disc">{desc}</li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-sm text-gray-600">{service.description}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;