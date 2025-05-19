import React, { useState } from 'react';

const ServiceCards = () => {
  const [openCard, setOpenCard] = useState(null);

  const services = {
    cardiology: [
      'ECG',
      'Echocardiogram',
      'Stress Test',
      'Heart Consultation',
    ],
    gynecology: [
      'Prenatal Care',
      'Pap Smear',
      'Fertility Consultation',
      'Menstrual Disorder Treatment',
    ],
  };

  const toggleDropdown = (card) => {
    setOpenCard(openCard === card ? null : card);
  };

  return (
    <div className="!p-6 !max-w-6xl !mx-auto">
      <div className="grid gap-6 !sm:grid-cols-1 !md:grid-cols-2">
        {/* Cardiology Card */}
        <div className="bg-white shadow-md rounded-lg !p-6">
          <h2 className="text-2xl font-semibold !mb-2">Cardiology</h2>
          <p className="text-gray-600 !mb-4">Expert heart and vascular care.</p>
          <button
            onClick={() => toggleDropdown('cardiology')}
            className="text-blue-600 hover:underline focus:outline-none"
          >
            View Services
          </button>
          {openCard === 'cardiology' && (
            <ul className="!mt-4 list-disc list-inside text-gray-700">
              {services.cardiology.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Gynecology Card */}
        <div className="bg-white shadow-md rounded-lg !p-6">
          <h2 className="text-2xl font-semibold !mb-2">Gynecology</h2>
          <p className="text-gray-600 !mb-4">Comprehensive women’s health services.</p>
          <button
            onClick={() => toggleDropdown('gynecology')}
            className="text-blue-600 hover:underline focus:outline-none"
          >
            View Services
          </button>
          {openCard === 'gynecology' && (
            <ul className="!mt-4 list-disc list-inside text-gray-700">
              {services.gynecology.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
