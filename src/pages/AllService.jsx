import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FaHeartbeat, FaStethoscope, FaRunning, FaClock, FaClipboardCheck,
  FaProcedures, FaAppleAlt, FaPlug, FaHospitalAlt,
  FaChild, FaShieldAlt, FaHeart, FaTint, FaFlask,
  FaCheckCircle, FaUserNurse, FaEye, FaCalendarCheck, FaFemale, FaArrowRight
} from "react-icons/fa";

const cardiologyServices = [
  { title: 'Electrocardiogram (ECG)', description: 'Records the electrical activity of your heart.', icon: <FaHeartbeat /> },
  { title: 'Echocardiogram', description: 'Ultrasound of the heart to assess structure and function.', icon: <FaStethoscope /> },
  { title: 'Stress Test (TMT)', description: 'Measures heart function under physical stress.', icon: <FaRunning /> },
  { title: '24-Hour Holter Monitoring', description: 'Continuous heart rhythm monitoring for 24 hours.', icon: <FaClock /> },
  { title: 'Heart Disease Risk Assessment', description: 'Evaluates your risk of developing heart disease.', icon: <FaClipboardCheck /> },
  { title: 'Interventional Cardiology', description: 'Angioplasty, pacemaker, TAVI, EVAR, and more.', icon: <FaProcedures /> },
  { title: 'Lifestyle & Nutrition Counseling', description: 'Heart-healthy lifestyle and diet plans.', icon: <FaAppleAlt /> },
  { title: 'Device Monitoring', description: 'Ongoing management of pacemakers and implanted devices.', icon: <FaPlug /> },
  { title: 'BP, Diabetes & Lipid Management', description: 'Monitoring and treatment of hypertension, diabetes & cholesterol.', icon: <FaHospitalAlt /> },
];

const gynecologyServices = [
  { title: 'Prenatal & Postnatal Care', description: 'Comprehensive care before and after childbirth.', icon: <FaChild /> },
  { title: 'Pelvic Exam & Pap Smear', description: 'Routine screening for reproductive health.', icon: <FaShieldAlt /> },
  { title: 'Fertility Assessment', description: 'Evaluation and assistance for conception.', icon: <FaHeart /> },
  { title: 'Menstrual Disorder Management', description: 'Treatment for irregular or painful periods.', icon: <FaTint /> },
  { title: 'PCOS Support', description: 'Diagnosis and management of Polycystic Ovary Syndrome.', icon: <FaFlask /> },
  { title: 'Birth Control Counseling', description: 'Guidance on contraceptive methods.', icon: <FaCheckCircle /> },
  { title: 'Menopause & Hormone Therapy', description: 'Support through hormonal changes.', icon: <FaHeartbeat /> },
  { title: 'Minimally Invasive Surgery', description: 'Laparoscopic surgical solutions with minimal downtime.', icon: <FaUserNurse /> },
  { title: 'STD Testing', description: 'Confidential and accurate screening.', icon: <FaEye /> },
  { title: 'Ultrasound & Imaging', description: 'Diagnostic imaging and monitoring.', icon: <FaStethoscope /> },
];

const categories = [
  {
    id: 'cardiology',
    label: 'Cardiology',
    icon: <FaHeartbeat />,
    color: '#30638E',
    lightBg: 'bg-[#30638E]/5',
    services: cardiologyServices,
    doctor: {
      name: 'Dr. Sushant Kumar Pathak',
      specialty: 'Interventional Cardiologist',
      image: 'skp.webp',
      qualifications: ['MBBS (Kolkata)', 'MD (Medicine, PMCH Patna) — Gold Medalist', 'DM (Cardiology, IPGME&R)'],
    },
  },
  {
    id: 'gynecology',
    label: 'Gynecology',
    icon: <FaFemale />,
    color: '#3CAEA3',
    lightBg: 'bg-[#3CAEA3]/5',
    services: gynecologyServices,
    doctor: {
      name: 'Dr. Jagriti Bhardwaj',
      specialty: 'Gynecologist & Obstetrician',
      image: 'jbp.webp',
      qualifications: ['MBBS (SNMC, Agra)', 'MS (OBG, PGIMS)', 'DNB (OBG)', 'Laparoscopic Surgeon & Infertility Specialist'],
    },
  },
];

const ServiceCard = ({ service, index, accentColor }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    viewport={{ once: true }}
    whileHover={{ y: -4 }}
    className="group h-full"
  >
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 hover:border-gray-200 transition-all duration-300 h-full !p-5 sm:!p-6 flex flex-col">
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-lg !mb-4 transition-colors duration-300"
        style={{ backgroundColor: `${accentColor}10`, color: accentColor }}
      >
        {service.icon}
      </div>

      {/* Title */}
      <h3 className="text-base sm:text-lg font-bold text-gray-800 !mb-2 leading-snug">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-500 leading-relaxed flex-grow">
        {service.description}
      </p>
    </div>
  </motion.div>
);

const AllService = () => {
  const [activeTab, setActiveTab] = useState('cardiology');
  const activeCategory = categories.find(c => c.id === activeTab);

  return (
    <>
      <Helmet>
        <title>Clinic Services | Cardiologist & Gynecologist Services in Patna</title>
        <meta
          name="description"
          content="Explore the medical services at Narayan Heart & Maternity Centre in Patna, including expert cardiology by Dr. Sushant Kumar Pathak and gynaecological care by Dr. Jagriti Bhardwaj."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            name: "Narayan Heart & Maternity Centre",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Patna",
              addressRegion: "Bihar",
              addressCountry: "IN",
            },
            medicalSpecialty: ["Cardiology", "Gynaecology"],
          })}
        </script>
      </Helmet>

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-[#30638E] to-[#1a3d5c] text-white !py-14 sm:!py-18 !px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#3CAEA3] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#3CAEA3] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl !mx-auto text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold !mb-3 leading-tight">
            Our Medical Services
          </h1>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl !mx-auto leading-relaxed">
            Comprehensive healthcare in cardiology and gynecology — advanced diagnostics, expert treatment, and compassionate follow-up care.
          </p>
        </motion.div>
      </section>

      {/* Category Tabs */}
      <section className="bg-white sticky top-[64px] z-30 shadow-sm border-b border-gray-100">
        <div className="max-w-4xl !mx-auto flex">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex-1 flex items-center justify-center gap-2 !py-4 text-sm sm:text-base font-semibold transition-all duration-200 border-b-3 ${activeTab === cat.id
                  ? 'border-current text-[' + cat.color + ']'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
                }`}
              style={activeTab === cat.id ? { color: cat.color, borderBottomColor: cat.color } : {}}
            >
              <span className="text-lg">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Active Category Content */}
      <AnimatePresence mode="wait">
        <motion.section
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-50 !py-10 sm:!py-14 !px-4 sm:!px-6 lg:!px-8"
        >
          <div className="max-w-6xl !mx-auto">
            {/* Doctor Mini Banner */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 !p-5 sm:!p-6 !mb-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                <img
                  src={activeCategory.doctor.image}
                  alt={activeCategory.doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center sm:text-left flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">{activeCategory.doctor.name}</h3>
                <p className="text-sm font-medium !mt-0.5" style={{ color: activeCategory.color }}>{activeCategory.doctor.specialty}</p>
                <div className="flex flex-wrap gap-2 !mt-2 justify-center sm:justify-start">
                  {activeCategory.doctor.qualifications.map((q, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-600 !px-2.5 !py-1 rounded-full">
                      {q}
                    </span>
                  ))}
                </div>
              </div>
              <Link to="/book" className="flex-shrink-0">
                <button
                  className="flex items-center gap-2 text-white text-sm font-semibold !py-2.5 !px-5 rounded-xl shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-200"
                  style={{ backgroundColor: activeCategory.color }}
                >
                  <FaCalendarCheck className="text-xs" />
                  Book
                </button>
              </Link>
            </motion.div>

            {/* Section Title */}
            <div className="text-center !mb-8 sm:!mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                <span style={{ color: activeCategory.color }}>{activeCategory.label}</span> Services
              </h2>
              <div className="w-16 h-1 !mx-auto !mt-3 rounded-full" style={{ backgroundColor: activeCategory.color }}></div>
            </div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
              {activeCategory.services.map((service, index) => (
                <ServiceCard
                  key={`${activeTab}-${index}`}
                  service={service}
                  index={index}
                  accentColor={activeCategory.color}
                />
              ))}
            </div>
          </div>
        </motion.section>
      </AnimatePresence>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#30638E] to-[#1a3d5c] !py-14 sm:!py-16 !px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl !mx-auto text-center text-white"
        >
          <h2 className="text-2xl sm:text-3xl font-bold !mb-3">
            Ready to Schedule an Appointment?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base !mb-7 max-w-lg !mx-auto">
            Our team of specialists is here to provide you with personalized care and treatment options.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              to="/book"
              className="inline-flex items-center justify-center gap-2 bg-[#3CAEA3] hover:bg-[#2F9E94] text-white font-semibold text-sm !py-3 !px-7 rounded-xl shadow-md hover:shadow-lg active:scale-[0.98] transition-all duration-200"
            >
              <FaCalendarCheck />
              Book an Appointment
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold text-sm !py-3 !px-7 rounded-xl transition-all duration-200"
            >
              Contact Us
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default AllService;
