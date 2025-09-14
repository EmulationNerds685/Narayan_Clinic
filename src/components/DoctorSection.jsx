import React from "react";
import { FaUserMd, FaAward, FaBriefcase, FaClinicMedical } from "react-icons/fa";
import { Link } from "react-router-dom";

const DoctorsSection = () => {
  const doctors = [
    {
      name: 'Dr. Sushant Kumar Pathak',
      specialty: 'Interventional Cardiologist',
      image: 'skp.webp',
      link:'/book',
      qualifications: 'MBBS (Kolkata), MD (Medicine, PMCH Patna) - Gold Medalist, DM (Cardiology, IPGME&R)',
      experience: 'Senior Consultant, Ford Hospital, Patna\nAssistant Director, IGIC, PMCH',
    },
    {
      name: 'Dr. Jagriti Bhardwaj',
      specialty: 'Gynecologist & Obstetrician',
      image: 'jbp.webp',
      link:'/book',
      qualifications: 'MBBS (SNMC, Agra), MS (OBG, PGIMS), DNB (OBG)',
      experience: 'SIR Ganga Ram Hospital, New Delhi\nEx. Senior, PGIMS New Delhi\nEx. Assistant Professor, HIMS, Dehradun',
      specializations: 'Laparoscopic Surgeon, Infertility Specialist',
    },
  ];

  return (
 <div className="!py-12 !px-4 sm:!px-6 lg:!px-8 bg-gray-50">
  <div className="max-w-7xl !!mx-auto">
    <h2 className="text-3xl font-bold text-center text-gray-900 !mb-2">
      Our Expert Doctors
    </h2>
    <div className="w-20 h-1 bg-blue-600 !mx-auto !mb-12 rounded-full"></div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {doctors.map((doctor, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
        >
          <div className="md:flex">
            {/* Image Section */}
            <div className="md:w-1/3 p-4 flex justify-center">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-blue-100 hover:scale-105 transition-transform">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info Section */}
            <div className="md:w-2/3 p-4 sm:p-6">
              <div className="flex items-center mb-3">
                <FaUserMd className="text-blue-600 mr-2" />
                <h3 className="text-2xl font-bold text-gray-800">{doctor.name}</h3>
              </div>

              <p className="text-lg text-blue-600 font-medium mb-3">{doctor.specialty}</p>

              {doctor.specializations && (
                <p className="text-sm text-gray-700 mb-3 flex items-center">
                  <FaClinicMedical className="text-blue-600 mr-1" />
                  {doctor.specializations}
                </p>
              )}

              <div className="mb-3 flex items-start">
                <FaAward className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-700">Qualifications</h4>
                  <ul className="list-disc ml-5 text-gray-600 text-sm">
                    {doctor.qualifications.split(',').map((q, i) => (
                      <li key={i}>{q.trim()}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-start">
                <FaBriefcase className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-700">Experience</h4>
                  <ul className="list-disc ml-5 text-gray-600 text-sm">
                    {doctor.experience.split('\n').map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
            <Link to={doctor.link}>
              <button className="w-full bg-[#3CAEA3] hover:bg-[#2F8B82] text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all">
                Book Appointment
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default DoctorsSection;