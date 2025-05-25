import React from 'react';
import { Link } from 'react-router-dom';

const PostnatalServicesModal = ({ onClose }) => {
  const services = [
    {
      title: "Postpartum Checkups",
      description: "Comprehensive physical and emotional wellness exams for new mothers",
      details: [
        "Incision/wound care (for C-section moms)",
        "Blood pressure monitoring",
        "Mental health screening",
        "Contraception counseling"
      ],
      icon: "👩‍⚕️"
    },
    {
      title: "Newborn Care",
      description: "Specialized care for your baby in the first weeks",
      details: [
        "Feeding support (breastfeeding/formula)",
        "Umbilical cord care",
        "Newborn screening tests",
        "Weight gain monitoring"
      ],
      icon: "👶"
    },
    {
      title: "Recovery Programs",
      description: "Tailored recovery plans for postpartum healing",
      details: [
        "Pelvic floor rehabilitation",
        "Postpartum exercise guidance",
        "Nutrition planning",
        "Scar tissue massage"
      ],
      icon: "💪"
    }
  ];

  const resources = [
    "24/7 nurse helpline",
    "Postpartum support groups",
    "Lactation consultants",
    "Mental health resources"
  ];

  return (
    <div className="flex items-center justify-center !p-4 ">
      <div className="bg-white rounded-xl shadow-2xl  w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-pink-600 text-white !p-6 rounded-t-xl">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold">Postnatal Care Services</h2>
              <p className="!mt-2 opacity-90">Comprehensive support for you and your baby after delivery</p>
            </div>
           
          </div>
        </div>

        {/* Main Content */}
        <div className="!p-6 md:!p-8">
          {/* Hero Section */}
          <div className="flex flex-col md:flex-row gap-8 !mb-10">
            <div className="md:w-2/5">
              <div className="bg-pink-100 rounded-lg !p-6 h-full flex items-center justify-center">
                <img 
                  src="/postnatal.jpg" 
                  alt="Mother and newborn" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            </div>
            <div className="md:w-3/5">
              <h3 className="text-xl font-semibold text-gray-800 !mb-4">Why Postnatal Care Matters</h3>
              <p className="text-gray-600 !mb-4">
                The first six weeks after delivery are crucial for recovery and bonding. Our postnatal services provide 
                medical care, emotional support, and practical guidance during this transitional period.
              </p>
              <div className="bg-pink-50 !p-4 rounded-lg border border-pink-200">
                <h4 className="font-medium text-pink-800 !mb-2">Key Focus Areas:</h4>
                <ul className="list-disc list-inside text-pink-700 !space-y-1">
                  <li>Physical recovery from birth</li>
                  <li>Newborn health and development</li>
                  <li>Emotional wellbeing</li>
                  <li>Family adjustment support</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="!mb-10">
            <h3 className="text-2xl font-semibold text-gray-800 !mb-6 border-b !pb-2">Our Postnatal Services</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service, index) => (
                <div key={index} className="border rounded-lg !p-5 hover:shadow-md transition-shadow">
                  <div className="text-3xl !mb-3">{service.icon}</div>
                  <h4 className="text-lg font-bold text-gray-800 !mb-2">{service.title}</h4>
                  <p className="text-gray-600 !mb-3">{service.description}</p>
                  <ul className="!space-y-2">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-4 w-4 text-pink-500 !mt-1 !mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Support */}
          <div className="flex flex-col md:flex-row gap-8 !mb-8">
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold text-gray-800 !mb-4">Additional Resources</h3>
              <div className="bg-gray-50 rounded-lg !p-5">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {resources.map((resource, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="h-5 w-5 text-pink-500 !mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{resource}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:w-1/3">
              <h3 className="text-xl font-semibold text-gray-800 !mb-4">When to Seek Help</h3>
              <div className="bg-red-50 border border-red-200 rounded-lg p-5">
                <ul className="!space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-red-600 font-medium !mr-2">•</span>
                    Fever {' > '}100.4°F (38°C)
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-medium !mr-2">•</span>
                    Heavy bleeding (soaking pad in 1 hour)
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-medium !mr-2">•</span>
                    Severe headache or vision changes
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-medium !mr-2">•</span>
                    Signs of postpartum depression
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-pink-700 rounded-lg !p-6 text-white">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="!mb-4 md:!mb-0">
                <h3 className="text-xl font-bold !mb-2">Ready to schedule your postnatal care?</h3>
                <p className="text-pink-100">Our team specializes in postpartum and newborn care.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
               <Link to='/book'>
                <button className="bg-white text-pink-700 hover:bg-gray-100 font-medium !py-3 !px-6 rounded-lg transition-colors">
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

export default PostnatalServicesModal;