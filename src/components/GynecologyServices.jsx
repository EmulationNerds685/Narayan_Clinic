import React from 'react';
import { 
  FaChild, 
  FaShieldAlt, 
  FaHeart, 
  FaTint, 
  FaFlask, 
  FaCheckCircle, 
  FaHeartbeat, 
  FaUserNurse, 
  FaEye, 
  FaStethoscope 
} from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
const GynecologyServices = () => {
  const iconColor = '#8E44AD'; // Purple color for icons (differentiates from cardiology)
  
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

  return (
    <div className="bg-gradient-to-b from-purple-50 to-white !py-12 !px-4 sm:!px-6 lg:!px-8">
      <Helmet>
  <title>Dr. Jagriti Bhardwaj | Top Gynaecologist in Patna</title>
  <meta
    name="description"
    content="Dr. Jagriti Bhardwaj offers advanced gynaecological care, pregnancy checkups, and women's health services in Patna. Book a consultation today."
  />
</Helmet>

      <div className="max-w-7xl !mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 !mb-2">Gynecology Services</h2>
        <div className="w-20 h-1 bg-purple-600 !mx-auto !mb-12 rounded-full"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gynecologyServices.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white !p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-transparent hover:border-purple-500"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center !mb-4">
                  <div className="p-3 rounded-full bg-purple-50 !mr-4 group-hover:bg-purple-100 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                </div>
                
                <div className="text-gray-600 flex-grow">
                  {service.description}
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100 group-hover:border-gray-200 transition-colors duration-300">
                  <button className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center">
                    Learn more
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 !ml-1" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GynecologyServices;