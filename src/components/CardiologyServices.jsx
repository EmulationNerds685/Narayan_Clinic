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
  FaUserMd,
  FaAward,
  FaBriefcase
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CardiologyServices = () => {
  const iconColor = '#3CAEA3'; // Red color for icons

  const cardiologyServices = [
    { title: 'Electrocardiogram (ECG)', description: 'Records the electrical activity of your heart.', icon: <FaHeartbeat size={38} color={iconColor} /> },
    { title: 'Echocardiogram', description: 'Ultrasound of the heart to assess structure and function.', icon: <FaStethoscope size={40} color={iconColor} /> },
    { title: 'Stress Test', description: 'Measures heart function under physical stress.', icon: <FaRunning size={40} color={iconColor} /> },
    { title: '24-Hour Holter Monitoring', description: 'Continuous heart rhythm monitoring for 24 hours.', icon: <FaClock size={40} color={iconColor} /> },
    { title: 'Heart Disease Risk Assessment', description: 'Evaluates your risk of developing heart disease.', icon: <FaClipboardCheck size={40} color={iconColor} /> },
    {
      title: 'Interventional Cardiology Consultation',
      description: (
        <>
          Expert advice on procedures including:
          <ul className="list-disc list-inside !mt-2 !space-y-1">
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
    { title: 'Lifestyle & Nutritional Counseling', description: 'Heart-healthy lifestyle and diet plans.', icon: <FaAppleAlt size={40} color={iconColor} /> },
    { title: 'Pacemaker & Device Monitoring', description: 'Ongoing management of implanted heart devices.', icon: <FaPlug size={40} color={iconColor} /> },
    { title: 'Hypertension, Diabetes & Cholesterol Management', description: 'Treatment and monitoring of high BP & lipids.', icon: <FaHospitalAlt size={40} color={iconColor} /> },
  ];

  const sushant = {
    name: 'Dr. Sushant Kumar Pathak',
    specialty: 'Interventional Cardiologist',
    image: 'skp.webp',
    link: '/book',
    qualifications: 'MBBS (Kolkata), MD (Medicine, PMCH Patna) - Gold Medalist, DM (Cardiology, IPGME&R)',
    experience: 'Senior Consultant, Ford Hospital, Patna\nAssistant Director, IGIC, PMCH',
  };

  return (
 <div className="bg-gray-50 !py-12 !px-4 sm:!px-6 lg:!px-8">
  {/* Doctor Profile */}
  <div className="max-w-4xl !mx-auto !mb-12">
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100">
      <div className="md:flex">
        <div className="md:w-1/3 !p-6 flex justify-center">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-100">
            <img src={sushant.image} alt={sushant.name} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="md:w-2/3 !p-6">
          <div className="flex items-center !mb-4">
            <FaUserMd className="text-[#3CAEA3] !mr-2" />
            <h3 className="text-2xl font-bold text-gray-800">{sushant.name}</h3>
          </div>
          <p className="text-lg text-[#3CAEA3] font-medium !mb-4">{sushant.specialty}</p>
          <div className="!mb-4 flex items-start">
            <FaAward className="text-[#3CAEA3] !mt-1 !mr-2 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-700">Qualifications</h4>
              <p className="text-gray-600">{sushant.qualifications}</p>
            </div>
          </div>
          <div className="flex items-start">
            <FaBriefcase className="text-[#3CAEA3] !mt-1 !mr-2 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-700">Experience</h4>
              {sushant.experience.split('\n').map((line, i) => (
                <p key={i} className="text-gray-600">{line}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="!px-6 !py-4 bg-gray-50 border-t border-gray-100">
        <Link to={sushant.link}>
          <button className="w-full bg-[#3CAEA3] hover:bg-[#2F8B82] text-white !py-2 !px-4 rounded-lg transition-colors duration-300">
            Book Appointment
          </button>
        </Link>
      </div>
    </div>
  </div>

  {/* Services */}
  <div className="max-w-7xl !mx-auto">
    <h2 className="text-3xl font-bold text-center text-gray-900 !mb-2">
      <span className="text-[#3CAEA3]">Cardiology</span> Services
    </h2>
    <div className="w-20 h-1 bg-[#3CAEA3] !mx-auto !mb-12 rounded-full"></div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cardiologyServices.map((service, index) => (
        <div
          key={index}
          className="group relative bg-white !p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-transparent hover:border-[#3CAEA3] hover:-translate-y-1"
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center !mb-4">
              <div className="!p-3 rounded-full bg-blue-50 !mr-4 group-hover:bg-blue-100 transition-colors duration-300 text-[#3CAEA3]">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
            </div>
            <div className="text-gray-600 flex-grow">{service.description}</div>
            <div className="!mt-4 !pt-4 border-t border-gray-100 group-hover:border-gray-200 transition-colors duration-300">
              <button className="text-[#3CAEA3] hover:underline font-medium text-sm flex items-center">
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 !ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
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

export default CardiologyServices;
