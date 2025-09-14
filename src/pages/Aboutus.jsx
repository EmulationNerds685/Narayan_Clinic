import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutUs = () => {
 

  return (
    <section className="bg-gradient-to-b from-purple-50 to-white !py-16 !px-4 sm:!px-6 lg:!px-8">
      <Helmet>
        <title>About Narayan Heart & Maternity Centre | Our Mission And Vision</title>
        <meta
          name="description"
          content="Learn about Narayan Heart & Maternity Centre, a multi-speciality clinic in Patna led by Dr. Sushant Kumar Pathak and Dr. Jagriti Bhardwaj. Dedicated to compassionate and expert healthcare."
        />
      </Helmet>

      <div className="max-w-7xl !mx-auto !space-y-20">
        {/* Hero / About Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <img
            src="/EMC.webp"
            alt="About the Clinic"
            className="w-full lg:w-1/2 rounded-xl shadow-lg object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="lg:w-1/2 text-center lg:text-left !space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">About Our Clinic</h2>
            <p className="text-gray-700 text-lg">
              At Narayan Heart & Maternity Center, we deliver compassionate, world-class healthcare
              in cardiology and maternity. Our experienced doctors and modern facilities ensure a
              seamless experience for every patient.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 text-center lg:text-left !space-y-4">
            <h2 className="text-3xl font-bold text-purple-800">Our Mission</h2>
            <p className="text-gray-700 text-lg">
              We aim to provide affordable and accessible medical care while upholding the highest
              standards of ethics and professionalism.
            </p>
          </div>
          <img
            src="/Mission.webp"
            alt="Our Mission"
            className="w-full lg:w-1/2 rounded-xl shadow-lg object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Vision Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <img
            src="/about-clinic.webp"
            alt="Our Vision"
            className="w-full lg:w-1/2 rounded-xl shadow-lg object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="lg:w-1/2 text-center lg:text-left !space-y-4">
            <h2 className="text-3xl font-bold text-purple-800">Our Vision</h2>
            <p className="text-gray-700 text-lg">
              To be the region's most trusted healthcare provider, continuously innovating and
              expanding to meet our community’s evolving health needs.
            </p>
          </div>
        </div>

     
      </div>
    </section>
  );
};

export default AboutUs;
