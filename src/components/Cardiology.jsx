import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  FaHeartbeat, FaStethoscope, FaRunning, FaClock, FaClipboardCheck,
  FaProcedures, FaAppleAlt, FaPlug, FaHospitalAlt, FaCalendarCheck, FaAward,
} from 'react-icons/fa';

const cardiologyServices = [
  { title: 'Electrocardiogram (ECG)', description: 'Instant 12-lead digital ECG recording electrical conduction and acute ischemic changes.', icon: <FaHeartbeat /> },
  { title: '2D Echocardiogram with Color Doppler', description: 'Advanced cardiac ultrasound evaluating ventricular ejection fraction, valve dynamics, and wall motion.', icon: <FaStethoscope /> },
  { title: 'Stress Treadmill Test (TMT)', description: 'Evaluates coronary reserve and exercise tolerance under monitored cardiac workload protocols.', icon: <FaRunning /> },
  { title: '24 to 48-Hour Holter Monitoring', description: 'Continuous ambulatory ECG capture detecting occult arrhythmias, pauses, and palpitations.', icon: <FaClock /> },
  { title: 'Imaging-Guided Precision Angioplasty', description: 'Mastery in IVUS and OCT optical guidance, Rotablation, and IVL lithotripsy for complex calcified lesions.', icon: <FaProcedures /> },
  { title: 'Complex Coronary Interventions (PCI)', description: 'Left Main stenting, DK-crush bifurcation techniques, and Chronic Total Occlusion (CTO) revascularization.', icon: <FaHospitalAlt /> },
  { title: 'Physiological Pacing (LBBAP) & Devices', description: 'Left Bundle Branch Area Pacing, dual-chamber pacemakers, AICD defibrillators, and CRT heart failure devices.', icon: <FaPlug /> },
  { title: 'Structural Defect Closures & Valvuloplasty', description: 'Catheter-based ASD, VSD, and PDA device closures and Balloon Mitral Valvuloplasty (BMV) without open-heart surgery.', icon: <FaClipboardCheck /> },
  { title: 'Hypertension, Diabetes & Lipid Clinic', description: 'Aggressive preventive cardiometabolic care to protect arterial endothelium and halt cardiovascular progression.', icon: <FaAppleAlt /> },
];

const doctor = {
  name: 'Dr. Sushant Kumar Pathak',
  specialty: 'Senior Consultant Interventional Cardiologist',
  image: 'skp.webp',
  regNo: 'BCMR-43700 · NMC 43700',
  qualifications: [
    'DM (Cardiology) — IPGMER & SSKM Hospital, Kolkata',
    'MD (Medicine) — PMCH Patna (Institutional Gold Medalist)',
    'MBBS — R.G. Kar Medical College, Kolkata',
    'Fellow of European Society of Cardiology (FESC)',
  ],
  experience: [
    'Assistant Director & Cardiologist, IGIC Patna',
    'Senior Consultant, Ford Hospital & Research Center, Patna',
    'Senior Consultant & Director, Narayan Heart & Maternity Centre',
  ],
};

const Cardiology = () => {
  return (
    <>
      <Helmet>
        <title>Cardiology Services | Dr. Sushant Kumar Pathak, Patna</title>
        <meta name="description" content="Comprehensive cardiology services including ECG, ECHO, TMT, and interventional procedures at Narayan Heart & Maternity Centre, Patna." />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#30638E] to-[#1a3d5c] text-white !py-12 sm:!py-16 !px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#3CAEA3] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative max-w-4xl !mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold !mb-2">Cardiology Services</h1>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl !mx-auto">Advanced diagnostics and comprehensive heart care under one roof.</p>
        </motion.div>
      </section>

      <section className="bg-gray-50 !py-10 sm:!py-14 !px-4 sm:!px-6">
        <div className="max-w-5xl !mx-auto">
          {/* Doctor Mini Banner */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 !p-5 sm:!p-6 !mb-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
              <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
            </div>
            <div className="text-center sm:text-left flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">{doctor.name}</h3>
              <p className="text-sm font-medium text-[#30638E] !mt-0.5">{doctor.specialty}</p>
              <div className="flex flex-wrap gap-2 !mt-2 justify-center sm:justify-start">
                {doctor.qualifications.map((q, i) => (
                  <span key={i} className="text-xs bg-gray-100 text-gray-600 !px-2.5 !py-1 rounded-full">{q}</span>
                ))}
              </div>
            </div>
            <Link to="/book" className="flex-shrink-0">
              <button className="flex items-center gap-2 text-white text-sm font-semibold !py-2.5 !px-5 rounded-xl shadow-sm hover:shadow-md active:scale-[0.98] transition-all bg-[#30638E] hover:bg-[#1a4a6e]">
                <FaCalendarCheck className="text-xs" /> Book
              </button>
            </Link>
          </motion.div>

          {/* Title */}
          <div className="text-center !mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our <span className="text-[#30638E]">Cardiology</span> Services</h2>
            <div className="w-16 h-1 bg-[#3CAEA3] !mx-auto !mt-3 rounded-full"></div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 !mb-10">
            {cardiologyServices.map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} viewport={{ once: true }}
                whileHover={{ y: -4 }} className="group h-full">
                <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 hover:border-gray-200 transition-all duration-300 h-full !p-5 sm:!p-6 flex flex-col">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-lg !mb-4 bg-[#30638E]/10 text-[#30638E]">{service.icon}</div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-800 !mb-2 leading-snug">{service.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-grow">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
            className="bg-gradient-to-br from-[#30638E] to-[#1a3d5c] rounded-2xl !p-6 sm:!p-8 text-white flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-lg sm:text-xl font-bold !mb-1">Need a cardiac consultation?</h3>
              <p className="text-blue-100 text-sm">Schedule a visit with our expert cardiologist today.</p>
            </div>
            <Link to="/book" className="flex-shrink-0">
              <button className="flex items-center gap-2 bg-[#3CAEA3] hover:bg-[#2F9E94] text-white font-semibold text-sm !py-3 !px-6 rounded-xl shadow-md hover:shadow-lg active:scale-[0.98] transition-all">
                <FaCalendarCheck /> Book Appointment
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Cardiology;