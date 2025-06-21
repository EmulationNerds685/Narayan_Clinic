import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'
const CardiacDiagnosticsDetails = ({ onClose }) => {
  const diagnosticTests = [
    {
      name: 'Electrocardiogram (ECG)',
      description: 'Records the electrical activity of your heart to detect abnormalities.',
      duration: '10-15 minutes'
    },
    {
      name: 'Echocardiogram (ECHO)',
      description: 'Uses ultrasound waves to create images of your heart\'s structure and function.',
      duration: '30-45 minutes'
    },
    {
      name: 'Treadmill Test (TMT)',
      description: 'Monitors your heart\'s activity during physical exercise to assess its performance under stress.',
      duration: '45-60 minutes'
    },
    {
      name: 'Holter Monitoring',
      description: 'Continuous ECG recording for 24-48 hours to detect irregular heart rhythms.',
      duration: '24-48 hours'
    }
  ];

  return (
    <div className=" flex items-center justify-center !p-4">
      <Helmet>
  <title>Cardiac Diagnostics in Patna | Dr. Sushant Kumar Pathak</title>
  <meta
    name="description"
    content="Narayan Heart & Maternity Centre offers advanced cardiac diagnostic tests in Patna, including ECG, ECHO, and TMT under the care of Dr. Sushant Kumar Pathak."
  />
</Helmet>

      <div className="bg-white rounded-lg shadow-xl  w-full  overflow-y-auto">
        {/* Header */}
        <div className="bg-indigo-700 text-white !p-6 rounded-t-lg">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold">Advanced Cardiac Diagnostics</h2>
              <p className="!mt-2 opacity-90">Comprehensive heart health assessment for accurate diagnosis</p>
            </div>
            <button 
              onClick={onClose}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
                        </button>
          </div>
        </div>

        {/* Content */}
        <div className="!p-6 md:!p-8">
          {/* Image and intro */}
          <div className="flex flex-col md:flex-row gap-8 !mb-8">
            <div className="md:w-1/3">
              <img 
              loading="lazy"
                src="/ECGimage.webp" 
                alt="Cardiac Diagnostics" 
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold text-gray-800 !mb-4">Why Cardiac Diagnostics Matter</h3>
              <p className="text-gray-600 !mb-4">
                Early detection of heart conditions can significantly improve treatment outcomes. Our advanced diagnostic 
                services provide accurate assessments to guide personalized care plans.
              </p>
              <div className="bg-blue-50 !p-4 rounded-lg border border-blue-100">
                <h4 className="font-medium text-blue-800 !mb-2">Who should consider these tests?</h4>
                <ul className="list-disc list-inside text-blue-700 !space-y-1">
                  <li>Individuals with family history of heart disease</li>
                  <li>Patients experiencing chest pain or palpitations</li>
                  <li>Those with risk factors like diabetes or high blood pressure</li>
                  <li>People preparing for major surgeries</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tests list */}
          <div className="!mb-8">
            <h3 className="text-xl font-semibold text-gray-800 !mb-6 border-b !pb-2">Available Diagnostic Tests</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {diagnosticTests.map((test, index) => (
                <div key={index} className="border rounded-lg !p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start !mb-3">
                    <div className="bg-indigo-100 p-2 rounded-full !mr-4">
                      <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{test.name}</h4>
                      <p className="text-sm text-gray-600 !mt-1">{test.description}</p>
                      <p className="text-xs text-gray-500 !mt-2">Duration: {test.duration}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gray-50 !p-6 rounded-lg border border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <div className="!mb-4 md:!mb-0">
              <h4 className="font-medium text-gray-800">Ready to schedule your test?</h4>
              <p className="text-sm text-gray-600">Our cardiac specialists are here to help</p>
            </div>
            <div className="flex !space-x-3">
                <Link to='/book'>
              <button className="!px-6 !py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                Book Appointment
              </button>
                </Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardiacDiagnosticsDetails;