import React from 'react';
import {
  FaFemale,
  FaChild,
  FaShieldAlt,
  FaHeart,
  FaTint,
  FaFlask,
  FaCheckCircle,
  FaHeartbeat,
  FaUserNurse,
  FaEye,
  FaStethoscope,
} from 'react-icons/fa';

const iconColor = '#C00008';

const gynecologyServices = [
  {
    title: 'Prenatal & Postnatal Care',
    description: 'Comprehensive care before and after childbirth.',
    icon: <FaChild size={40} color={iconColor} />,
  },
  {
    title: 'Annual Pelvic Exam & Pap Smear',
    description: 'Routine screening for women’s reproductive health.',
    icon: <FaShieldAlt size={40} color={iconColor} />,
  },
  {
    title: 'Fertility Assessment & Treatment',
    description: 'Evaluation and assistance for conception.',
    icon: <FaHeart size={40} color={iconColor} />,
  },
  {
    title: 'Menstrual Disorder Management',
    description: 'Treatment for irregular or painful periods.',
    icon: <FaTint size={40} color={iconColor} />,
  },
  {
    title: 'PCOS Support',
    description: 'Diagnosis and management of Polycystic Ovary Syndrome.',
    icon: <FaFlask size={40} color={iconColor} />,
  },
  {
    title: 'Birth Control Counseling',
    description: 'Guidance on contraceptive methods.',
    icon: <FaCheckCircle size={40} color={iconColor} />,
  },
  {
    title: 'Menopause & Hormone Therapy',
    description: 'Support through hormonal changes.',
    icon: <FaHeartbeat size={40} color={iconColor} />,
  },
  {
    title: 'Minimally Invasive Surgery',
    description: 'Advanced surgical solutions with minimal downtime.',
    icon: <FaUserNurse size={40} color={iconColor} />,
  },
  {
    title: 'STD Testing',
    description: 'Confidential and accurate screening for STDs.',
    icon: <FaEye size={40} color={iconColor} />,
  },
  {
    title: 'Ultrasound & Imaging',
    description: 'Imaging for diagnosis and monitoring.',
    icon: <FaStethoscope size={40} color={iconColor} />,
  },
];

const GynecologyServices = () => {
  return (
    <section className="!py-10 !px-4 bg-white">
      <h2 className="text-center text-[#C00008] font-bold text-3xl !mb-8">
        Gynecology Services
      </h2>

      <div className="flex justify-center !mb-8">
        <FaFemale size={60} color={iconColor} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {gynecologyServices.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-lg transition-shadow"
          >
            <div className="!mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold text-center !mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GynecologyServices;
