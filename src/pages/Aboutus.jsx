import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-white !py-16 !px-4 !sm:px-6 lg:px-8">
      <div className="max-w-7xl !mx-auto space-y-16">
        {/* About Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <img
            src="/EMC.webp"
            alt="About the Clinic"
            className="w-full lg:w-1/2 rounded-lg shadow-md object-cover"
          />
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-900">About Our Clinic</h2>
            <p className="!mt-4 text-gray-600">
              At Narayan Heart & Maternity Center, we deliver compassionate, world-class healthcare
              in cardiology and maternity. Our experienced doctors and modern facilities ensure a
              seamless experience for every patient.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="!mt-4 text-gray-600">
              We aim to provide affordable and accessible medical care while upholding the highest
              standards of ethics and professionalism.
            </p>
          </div>
          <img
            src="/Mission.webp"
            alt="Our Mission"
            className="w-full lg:w-1/2 rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Vision Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <img
            src="/about-clinic.webp"
            alt="Our Vision"
            className="w-full lg:w-1/2 rounded-lg shadow-md object-cover"
          />
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            <p className="!mt-4 text-gray-600">
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
