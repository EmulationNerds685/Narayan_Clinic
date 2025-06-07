import React from 'react';
import { Link } from 'react-router-dom';
const CardiologyFollowUp = () => {
  const followUpData = {
    title: "Cardiology Follow-Up Care",
    description: "Personalized ongoing care to monitor your heart health and adjust treatment plans as needed.",
    features: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        title: "Progress Monitoring",
        text: "Regular check-ins to track improvement and adjust medications"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
        title: "Lifestyle Guidance",
        text: "Personalized diet and exercise recommendations"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        ),
        title: "Appointment Scheduling",
        text: "Flexible scheduling for your follow-up visits"
      }
    ],
    benefits: [
      "Reduced risk of complications",
      "Early detection of potential issues",
      "Continuity of care with your cardiologist",
      "Personalized treatment adjustments"
    ]
  };

  return (
    <div className=" !mx-auto !px-4 !py-12 sm:!px-6 lg:!px-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-blue-700 !px-6 !py-8 sm:px-10 sm:!py-12 text-white">
          <h2 className="text-3xl font-bold !mb-3">{followUpData.title}</h2>
          <p className="text-blue-100 max-w-2xl">{followUpData.description}</p>
        </div>
        
        {/* Main Content */}
        <div className="!px-6 !py-8 sm:!px-10 sm:!py-12">
          {/* Features Grid */}
          <div className="grid gap-8 md:grid-cols-3 !mb-12">
            {followUpData.features.map((feature, index) => (
              <div key={index} className="bg-blue-50 rounded-lg !p-6 hover:shadow-md transition-shadow">
                <div className="text-blue-600 !mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 !mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.text}</p>
              </div>
            ))}
          </div>
          
          {/* Benefits and CTA */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800 !mb-4">Benefits of Regular Follow-Ups</h3>
              <ul className="!space-y-3">
                {followUpData.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 !mt-0.5 !mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:w-1/2 bg-gray-50 rounded-lg !p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 !mb-4">Schedule Your Follow-Up</h3>
              <p className="text-gray-600 !mb-6">Maintain your heart health with regular check-ins tailored to your specific needs.</p>
              <div className="!space-y-4">
                <Link to='/book'>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium !py-3 !px-6 rounded-lg transition-colors">
                  Book Appointment
                </button>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
        
      
      </div>
    </div>
  );
};

export default CardiologyFollowUp;