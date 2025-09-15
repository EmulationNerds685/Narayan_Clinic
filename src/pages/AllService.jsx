import React from "react";
import CardiologyServices from "../components/CardiologyServices";
import Gynaecology from "../components/Gynaecology";
import { Helmet } from "react-helmet-async";

const AllService = () => {
  return (
    <>
      <Helmet>
        <title>
          Clinic Services | Cardiologist & Gynecologist Services in Patna
        </title>
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
            department: [
              {
                "@type": "MedicalSpecialty",
                name: "Cardiology",
                physician: {
                  "@type": "Physician",
                  name: "Dr. Sushant Kumar Pathak",
                  jobTitle: "Cardiologist",
                },
              },
              {
                "@type": "MedicalSpecialty",
                name: "Gynaecology",
                physician: {
                  "@type": "Physician",
                  name: "Dr. Jagriti Bhardwaj",
                  jobTitle: "Gynaecologist",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      {/* Page Header Section */}
      <div className="bg-gradient-to-r from-blue-50 to-teal-50 py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Medical Services
          </h1>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            At Narayan Heart & Maternity Centre, we provide comprehensive
            healthcare services with a focus on cardiology and gynecology.
            Explore our specialized services and meet our expert doctors
            dedicated to your well-being.
          </p>
        </div>
      </div>

      {/* Services Content */}
      <div className="container !mx-auto !px-2">
        <div id="cardiology" className="!scroll-mt-24">
          <CardiologyServices />
        </div>

        <div className="!my-4 border-t border-gray-200"></div>

        <div id="gynaecology" className="!scroll-mt-24">
          <Gynaecology />
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-50 !py-16 !px-6">
        <div className="max-w-4xl !mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 !mb-6">
            Ready to Schedule an Appointment?
          </h2>
          <p className="text-lg text-gray-600 !mb-8">
            Our team of specialists is here to provide you with personalized
            care and treatment options.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/book"
              className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Book an Appointment
            </a>
            <a
              href="/contact"
              className="border border-teal-600 text-teal-600 hover:bg-teal-50 font-medium !py-3 !px-8 rounded-lg transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllService;
