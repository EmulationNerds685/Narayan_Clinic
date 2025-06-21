import React from 'react';
import { 
  FaHeartbeat, 
  FaStethoscope, 
  FaRunning, 
  FaClock, 
  FaClipboardCheck, 
  FaProcedures, 
  FaAppleAlt, 
  FaPlug, 
  FaHospitalAlt 
} from 'react-icons/fa';

const Cardiology = () => {
  const iconColor = '#C00008'; // Red color for icons
  
  const cardiologyServices = [
    {
      title: 'Electrocardiogram (ECG)',
      description: 'Records the electrical activity of your heart.',
      icon: <FaHeartbeat size={40} color={iconColor} />,
    },
    {
      title: 'Echocardiogram',
      description: 'Ultrasound of the heart to assess structure and function.',
      icon: <FaStethoscope size={40} color={iconColor} />,
    },
    {
      title: 'Stress Test',
      description: 'Measures heart function under physical stress.',
      icon: <FaRunning size={40} color={iconColor} />,
    },
    {
      title: '24-Hour Holter Monitoring',
      description: 'Continuous heart rhythm monitoring for 24 hours.',
      icon: <FaClock size={40} color={iconColor} />,
    },
    {
      title: 'Heart Disease Risk Assessment',
      description: 'Evaluates your risk of developing heart disease.',
      icon: <FaClipboardCheck size={40} color={iconColor} />,
    },
    {
      title: 'Interventional Cardiology Consultation',
      description: (
        <>
          Expert advice on procedures including:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Angioplasty</li>
            <li>Coronary and Peripheral Angiography</li>
            <li>BMV (Balloon Mitral Valvotomy)</li>
            <li>Pacemaker</li>
            <li>CRTP</li>
            <li>TAVI</li>
            <li>EVAR</li>
            <li>Treatment of Limb Ischemia</li>
            <li>Electrophysiology</li>
          </ul>
        </>
      ),
      icon: <FaProcedures size={40} color={iconColor} />,
    },
    {
      title: 'Lifestyle & Nutritional Counseling',
      description: 'Heart-healthy lifestyle and diet plans.',
      icon: <FaAppleAlt size={40} color={iconColor} />,
    },
    {
      title: 'Pacemaker & Device Monitoring',
      description: 'Ongoing management of implanted heart devices.',
      icon: <FaPlug size={40} color={iconColor} />,
    },
    {
      title: 'Hypertension, Diabetes & Cholesterol Management',
      description: 'Treatment and monitoring of high BP & lipids.',
      icon: <FaHospitalAlt size={40} color={iconColor} />,
    },
  ];

  return (
    <div className="bg-gray-50 !py-12 !px-4 sm:!px-6 lg:!px-8">
      <div className="max-w-7xl !mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 !mb-2">Cardiology Services</h2>
        <div className="w-20 h-1 bg-red-600 !mx-auto !mb-12 rounded-full"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardiologyServices.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white !p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-transparent hover:border-red-500"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center !mb-4">
                  <div className="!p-3 rounded-full bg-red-50 !mr-4 group-hover:bg-red-100 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                </div>
                
                <div className="text-gray-600 flex-grow">
                  {service.description}
                </div>
                
                <div className="!mt-4 !pt-4 border-t border-gray-100 group-hover:border-gray-200 transition-colors duration-300">
                  <button className="text-red-600 hover:text-red-700 font-medium text-sm flex items-center">
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

export default Cardiology;