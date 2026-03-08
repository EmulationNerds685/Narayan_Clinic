import React from "react";
import { Helmet } from "react-helmet-async";
import { FaUserMd, FaAward, FaBriefcase, FaClinicMedical, FaCalendarCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Physician JSON-LD — helps Google show doctor info in search
const physicianSchemas = JSON.stringify([
  {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Dr. Sushant Kumar Pathak",
    jobTitle: "Interventional Cardiologist",
    url: "https://narayanheartandmaternitycentre.com/doctors",
    image: "https://narayanheartandmaternitycentre.com/skp.webp",
    description: "MBBS (Kolkata), MD (Medicine, PMCH Patna) - Gold Medalist, DM (Cardiology, IPGME&R). Senior Consultant at Ford Hospital, Patna.",
    medicalSpecialty: "Cardiology",
    worksFor: {
      "@type": "MedicalClinic",
      name: "Narayan Heart & Maternity Centre",
    },
    alumniOf: ["PMCH Patna", "IPGME&R", "Kolkata University"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Dr. Jagriti Bhardwaj",
    jobTitle: "Gynecologist & Obstetrician",
    url: "https://narayanheartandmaternitycentre.com/doctors",
    image: "https://narayanheartandmaternitycentre.com/jbp.webp",
    description: "MBBS (SNMC, Agra), MS (OBG, PGIMS), DNB (OBG). Laparoscopic Surgeon & Infertility Specialist.",
    medicalSpecialty: "Gynecology",
    worksFor: {
      "@type": "MedicalClinic",
      name: "Narayan Heart & Maternity Centre",
    },
    alumniOf: ["SNMC Agra", "PGIMS", "National Board of Examinations"],
  },
]);

const DoctorsSection = () => {
  const doctors = [
    {
      name: 'Dr. Sushant Kumar Pathak',
      specialty: 'Interventional Cardiologist',
      image: 'skp.webp',
      link: '/book',
      qualifications: [
        'MBBS (Kolkata)',
        'MD (Medicine, PMCH Patna) — Gold Medalist',
        'DM (Cardiology, IPGME&R)',
      ],
      experience: [
        'Senior Consultant, Ford Hospital, Patna',
        'Assistant Director, IGIC, PMCH',
      ],
      accentColor: '#30638E',
      accentLight: '#30638E10',
    },
    {
      name: 'Dr. Jagriti Bhardwaj',
      specialty: 'Gynecologist & Obstetrician',
      image: 'jbp.webp',
      link: '/book',
      qualifications: [
        'MBBS (SNMC, Agra)',
        'MS (OBG, PGIMS)',
        'DNB (OBG)',
      ],
      experience: [
        'SIR Ganga Ram Hospital, New Delhi',
        'Ex. Senior, PGIMS New Delhi',
        'Ex. Assistant Professor, HIMS, Dehradun',
      ],
      specializations: 'Laparoscopic Surgeon, Infertility Specialist',
      accentColor: '#3CAEA3',
      accentLight: '#3CAEA310',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="!py-16 sm:!py-20 !px-4 sm:!px-6 lg:!px-8 bg-white">
      <Helmet>
        <script type="application/ld+json">{physicianSchemas}</script>
      </Helmet>
      <div className="max-w-6xl !mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center !mb-12 sm:!mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 !mb-3">
            Our Expert <span className="text-[#3CAEA3]">Doctors</span>
          </h2>
          <div className="w-20 h-1 bg-[#30638E] !mx-auto rounded-full"></div>
          <p className="!mt-4 text-gray-500 max-w-lg !mx-auto text-sm sm:text-base">
            Trusted specialists with decades of combined experience in cardiology and women's health.
          </p>
        </motion.div>

        {/* Doctor Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
        >
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-gray-200 overflow-hidden transition-all duration-400 h-full flex flex-col">
                {/* Top: Photo + Name Banner */}
                <div className="relative bg-gradient-to-br from-[#30638E] to-[#1a3d5c] !p-6 sm:!p-8 text-white">
                  {/* Decorative blob */}
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20" style={{ backgroundColor: doctor.accentColor }}></div>

                  <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-5">
                    {/* Profile Photo */}
                    <div className="relative flex-shrink-0">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-3 border-white/20 shadow-lg group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          loading="lazy"
                          width={112}
                          height={112}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Online indicator */}
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#3CAEA3] rounded-lg border-2 border-white flex items-center justify-center">
                        <FaUserMd className="text-white text-[10px]" />
                      </div>
                    </div>

                    {/* Name & Specialty */}
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                        {doctor.name}
                      </h3>
                      <p className="text-[#3CAEA3] font-medium !mt-1 text-sm sm:text-base">
                        {doctor.specialty}
                      </p>
                      {doctor.specializations && (
                        <div className="flex items-center justify-center sm:justify-start gap-1.5 !mt-2">
                          <FaClinicMedical className="text-white/60 text-xs" />
                          <span className="text-white/70 text-xs sm:text-sm">{doctor.specializations}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Middle: Qualifications & Experience */}
                <div className="!p-5 sm:!p-7 flex-1 !space-y-5">
                  {/* Qualifications */}
                  <div>
                    <div className="flex items-center gap-2 !mb-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#30638E]/10 flex items-center justify-center flex-shrink-0">
                        <FaAward className="text-[#30638E] text-xs" />
                      </div>
                      <h4 className="font-semibold text-gray-800 text-sm">Qualifications</h4>
                    </div>
                    <div className="!ml-9 !space-y-1.5">
                      {doctor.qualifications.map((q, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3CAEA3] !mt-1.5 flex-shrink-0"></span>
                          <span className="text-gray-600 text-sm leading-relaxed">{q}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Experience */}
                  <div>
                    <div className="flex items-center gap-2 !mb-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#3CAEA3]/10 flex items-center justify-center flex-shrink-0">
                        <FaBriefcase className="text-[#3CAEA3] text-xs" />
                      </div>
                      <h4 className="font-semibold text-gray-800 text-sm">Experience</h4>
                    </div>
                    <div className="!ml-9 !space-y-1.5">
                      {doctor.experience.map((line, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#30638E] !mt-1.5 flex-shrink-0"></span>
                          <span className="text-gray-600 text-sm leading-relaxed">{line}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom: CTA */}
                <div className="!px-5 sm:!px-7 !pb-6">
                  <Link to={doctor.link} className="block">
                    <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#3CAEA3] to-[#2F9E94] hover:from-[#2F9E94] hover:to-[#278A81] text-white !py-3 !px-5 rounded-xl font-semibold text-sm shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-200">
                      <FaCalendarCheck className="text-sm" />
                      Book Appointment
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default DoctorsSection;