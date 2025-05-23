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
  FaHospitalAlt,
} from 'react-icons/fa';

const iconColor = '#C00008';

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

const CardiologyServices = () => {
  return (
    <section className="!py-10 !px-4 bg-gray-50">
      <h2 className="text-center text-[#C00008] font-bold text-3xl !mb-8">
        Cardiology Services
      </h2>

      <div className="flex justify-center !mb-8">
        <FaHeartbeat size={60} color={iconColor} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {cardiologyServices.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg !p-6 flex flex-col items-center hover:shadow-lg transition-shadow"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold text-center !mb-2">{service.title}</h3>
            <div className="text-gray-600 text-sm text-center">{service.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardiologyServices;
