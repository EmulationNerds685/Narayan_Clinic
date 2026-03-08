import React from 'react';
import { Link } from 'react-router-dom';
import SeoHead from '../components/SeoHead';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaStethoscope, FaRunning, FaClock, FaCalendarCheck, FaCheckCircle } from 'react-icons/fa';

const diagnosticTests = [
  { name: 'Electrocardiogram (ECG)', description: 'Records the electrical activity of your heart to detect abnormalities.', duration: '10–15 min', icon: <FaHeartbeat /> },
  { name: 'Echocardiogram (ECHO)', description: "Uses ultrasound waves to create images of your heart's structure and function.", duration: '30–45 min', icon: <FaStethoscope /> },
  { name: 'Treadmill Test (TMT)', description: "Monitors your heart's activity during physical exercise to assess performance under stress.", duration: '45–60 min', icon: <FaRunning /> },
  { name: 'Holter Monitoring', description: 'Continuous ECG recording for 24–48 hours to detect irregular heart rhythms.', duration: '24–48 hrs', icon: <FaClock /> },
];

const whoShouldConsider = [
  'Individuals with family history of heart disease',
  'Patients experiencing chest pain or palpitations',
  'Those with risk factors like diabetes or high blood pressure',
  'People preparing for major surgeries',
];

const CardiacDiagnosticsDetails = () => {
  return (
    <>
      <SeoHead
        title="Cardiac Diagnostics in Patna | Dr. Sushant Kumar Pathak"
        description="Narayan Heart & Maternity Centre offers advanced cardiac diagnostic tests in Patna, including ECG, ECHO, and TMT under the care of Dr. Sushant Kumar Pathak."
        path="/cdd"
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#30638E] to-[#1a3d5c] text-white !py-12 sm:!py-16 !px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#3CAEA3] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative max-w-4xl !mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold !mb-2">Advanced Cardiac Diagnostics</h1>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl !mx-auto">Comprehensive heart health assessment for accurate diagnosis and early detection.</p>
        </motion.div>
      </section>

      <section className="bg-gray-50 !py-10 sm:!py-14 !px-4 sm:!px-6">
        <div className="max-w-5xl !mx-auto">
          {/* Intro with image */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 !p-5 sm:!p-7 !mb-8 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <img src="/ECGimage.webp" alt="Cardiac Diagnostics" loading="lazy" className="w-full h-48 sm:h-56 object-cover rounded-xl" />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-xl font-bold text-gray-800 !mb-3">Why Cardiac Diagnostics Matter</h2>
              <p className="text-sm text-gray-600 !mb-4 leading-relaxed">
                Early detection of heart conditions can significantly improve treatment outcomes. Our advanced diagnostic services provide accurate assessments to guide personalized care plans.
              </p>
              <div className="bg-[#30638E]/5 !p-4 rounded-xl">
                <h4 className="font-semibold text-[#30638E] text-sm !mb-2">Who should consider these tests?</h4>
                <ul className="!space-y-1.5">
                  {whoShouldConsider.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <FaCheckCircle className="text-[#3CAEA3] !mt-0.5 flex-shrink-0 text-xs" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Tests Grid */}
          <div className="text-center !mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Available <span className="text-[#30638E]">Diagnostic Tests</span></h2>
            <div className="w-16 h-1 bg-[#3CAEA3] !mx-auto !mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 !mb-10">
            {diagnosticTests.map((test, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.08 }} viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 !p-5 sm:!p-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#30638E]/10 text-[#30638E] flex items-center justify-center flex-shrink-0 text-lg">
                    {test.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 !mb-1">{test.name}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed !mb-2">{test.description}</p>
                    <span className="inline-block text-xs bg-[#3CAEA3]/10 text-[#3CAEA3] font-semibold !px-2.5 !py-1 rounded-full">⏱ {test.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
            className="bg-gradient-to-br from-[#30638E] to-[#1a3d5c] rounded-2xl !p-6 sm:!p-8 text-white flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-lg sm:text-xl font-bold !mb-1">Ready to schedule your test?</h3>
              <p className="text-blue-100 text-sm">Our cardiac specialists are here to help.</p>
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

export default CardiacDiagnosticsDetails;