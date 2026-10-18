import React from 'react';
import { Link } from 'react-router-dom';
import SeoHead from './SeoHead';
import { motion } from 'framer-motion';
import {
  FaChild, FaShieldAlt, FaHeart, FaTint, FaFlask,
  FaCheckCircle, FaHeartbeat, FaUserNurse, FaEye, FaStethoscope,
  FaCalendarCheck,
} from 'react-icons/fa';

const gynecologyServices = [
  { title: 'Antenatal & High-Risk Pregnancy Care', description: 'Comprehensive trimester care, fetal monitoring, Gestational Diabetes, and PIH management.', icon: <FaChild /> },
  { title: 'Pelvic Examination & Pap Smear', description: 'Cervical cancer screening (Pap Smear & HPV DNA) and routine pelvic health assessments.', icon: <FaShieldAlt /> },
  { title: 'Preconception & Infertility Assessment', description: 'FOGSI-certified ovulation induction, fertility evaluations, and compassionate couple counseling.', icon: <FaHeart /> },
  { title: 'Adolescent Menstrual & PCOS Clinic', description: 'Gentle, empathetic care for pubertal changes, irregular periods, heavy bleeding, and PCOS/PCOD.', icon: <FaTint /> },
  { title: 'Minimally Invasive Laparoscopy', description: 'Advanced keyhole surgeries for ovarian cysts, fibroids, endometriosis, and diagnostic hysteroscopy.', icon: <FaUserNurse /> },
  { title: 'Postpartum Care & 4th Trimester Support', description: 'Maternal healing, surgical wound monitoring, lactation support, and pelvic floor rehabilitation.', icon: <FaCheckCircle /> },
  { title: 'Perimenopause & Menopause Vitality', description: 'Support for hot flashes, night sweats, bone mineral density preservation, and healthy hormonal balance.', icon: <FaHeartbeat /> },
  { title: 'Ultrasound & Fetal Well-being Imaging', description: 'In-house obstetric and pelvic ultrasound for precise fetal tracking and pelvic assessment.', icon: <FaStethoscope /> },
  { title: 'Confidential Sanctuary Consultations', description: '100% judgment-free, confidential reproductive health, contraception, and wellness counseling.', icon: <FaEye /> },
];

const doctor = {
  name: 'Dr. Jagriti Bhardwaj',
  specialty: 'Consultant Gynecologist, Obstetrician & Laparoscopic Surgeon',
  image: 'jbp.webp',
  regNo: 'State Medical Council Reg. No. 58388',
  qualifications: [
    'MS (Obstetrics & Gynaecology) — Pt. B.D. Sharma PGIMS, Rohtak',
    'DNB (Obstetrics & Gynaecology) — National Board of Examinations, New Delhi',
    'FMAS — Fellowship in Minimal Access Surgery',
    'FOGSI-Certified Infertility Training — Sir Ganga Ram Hospital, New Delhi',
    'MBBS — S.N. Medical College, Agra',
  ],
  experience: [
    'Consultant Gynecologist & Obstetrician — Narayan Heart & Maternity Centre',
    'Senior Consultant — Ford Hospital & Research Center, Patna',
    'Ex-Assistant Professor — Himalayan Institute of Medical Sciences (HIMS), Dehradun',
    'Ex-Senior Resident — ESIC PGIMSR, New Delhi',
  ],
};

const GynecologyServices = () => {
  return (
    <>
      <SeoHead
        title="Dr. Jagriti Bhardwaj | Consultant Gynaecologist & Obstetrician in Patna"
        description="Dr. Jagriti Bhardwaj (MS, DNB, FMAS, FOGSI Infertility) offers advanced gynaecological care, pregnancy checkups, and women's health services in Patna."
        path="/Gynoservices"
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#3CAEA3] to-[#2a8e85] text-white !py-12 sm:!py-16 !px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative max-w-4xl !mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold !mb-2">Gynecology & Maternity Services</h1>
          <p className="text-teal-50 text-sm sm:text-base max-w-2xl !mx-auto">Specialized, compassionate healthcare for every phase of a woman's life — from adolescence to motherhood and beyond.</p>
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
              <p className="text-sm font-medium text-[#3CAEA3] !mt-0.5">{doctor.specialty}</p>
              {doctor.regNo && (
                <p className="text-[11px] font-mono text-gray-500 !mt-0.5">
                  Reg: {doctor.regNo}
                </p>
              )}
              <div className="flex flex-wrap gap-2 !mt-2 justify-center sm:justify-start">
                {doctor.qualifications.map((q, i) => (
                  <span key={i} className="text-xs bg-gray-100 text-gray-600 !px-2.5 !py-1 rounded-full">{q}</span>
                ))}
              </div>
            </div>
            <Link to="/book" className="flex-shrink-0">
              <button className="flex items-center gap-2 text-white text-sm font-semibold !py-2.5 !px-5 rounded-xl shadow-sm hover:shadow-md active:scale-[0.98] transition-all bg-[#3CAEA3] hover:bg-[#2F9E94]">
                <FaCalendarCheck className="text-xs" /> Book
              </button>
            </Link>
          </motion.div>

          {/* Title */}
          <div className="text-center !mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our <span className="text-[#3CAEA3]">Gynecology</span> Services</h2>
            <div className="w-16 h-1 bg-[#3CAEA3] !mx-auto !mt-3 rounded-full"></div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 !mb-10">
            {gynecologyServices.map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} viewport={{ once: true }}
                whileHover={{ y: -4 }} className="group h-full">
                <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 hover:border-gray-200 transition-all duration-300 h-full !p-5 sm:!p-6 flex flex-col">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-lg !mb-4 bg-[#3CAEA3]/10 text-[#3CAEA3]">{service.icon}</div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-800 !mb-2 leading-snug">{service.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-grow">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
            className="bg-gradient-to-br from-[#3CAEA3] to-[#2a8e85] rounded-2xl !p-6 sm:!p-8 text-white flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-lg sm:text-xl font-bold !mb-1">Need a gynecology consultation?</h3>
              <p className="text-teal-50 text-sm">Expert care by Dr. Jagriti Bhardwaj.</p>
            </div>
            <Link to="/book" className="flex-shrink-0">
              <button className="flex items-center gap-2 bg-white text-[#3CAEA3] hover:bg-gray-50 font-semibold text-sm !py-3 !px-6 rounded-xl shadow-md hover:shadow-lg active:scale-[0.98] transition-all">
                <FaCalendarCheck /> Book Appointment
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default GynecologyServices;
