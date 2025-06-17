import React from 'react';
import { Typography } from '@mui/material';

const LearnANCSection = () => {
  return (
    <section className="bg-white !py-16 !px-6 md:!px-12 lg:!px-24">
      <div className="max-w-6xl !mx-auto">
        {/* Heading */}
        <div className="text-center !mb-12">
          <Typography variant="h4" className="font-bold text-gray-800">
            Learn About Antenatal Care (ANC)
          </Typography>
          <p className="!mt-4 text-lg text-gray-600">
            Ensuring a healthy pregnancy journey for every mother and baby.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-semibold text-pink-700 !mb-4">What is ANC?</h3>
            <p className="text-gray-700 !mb-4">
              Antenatal Care (ANC) refers to the routine health control of presumed healthy pregnant women
              without symptoms (screening), in order to diagnose diseases or complicating obstetric conditions 
              and to provide information about lifestyle, pregnancy, and delivery.
            </p>

            <h3 className="text-xl font-semibold text-pink-600 !mb-2">Why is ANC Important?</h3>
            <ul className="list-disc list-inside text-gray-700 !mb-4 space-y-1">
              <li>Monitors the health of both mother and baby</li>
              <li>Detects and prevents complications early</li>
              <li>Offers vaccinations and supplements</li>
              <li>Provides guidance on diet and exercise</li>
              <li>Prepares the mother for delivery and newborn care</li>
            </ul>

            <p className="text-gray-700 !mb-4">
              At Narayan Heart & Maternity Center, we ensure a compassionate, supportive, and medically sound ANC journey 
              for every expecting mother. Our specialists conduct regular check-ups, perform required screenings, and 
              guide you through every step of your pregnancy.
            </p>
          </div>

          {/* Image */}
          <div className="w-full">
            <img
              src="/gyno.webp"
              alt="Pregnant woman with doctor"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Additional Visual Info */}
        <div className="!mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Check-ups"
              className="w-16 h-16 !mx-auto !mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-800">Regular Check-Ups</h4>
            <p className="text-gray-600 !mt-2">Track fetal growth and monitor mother’s health throughout pregnancy.</p>
          </div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2920/2920237.png"
              alt="Nutrition"
              className="w-16 h-16 !mx-auto !mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-800">Nutritional Guidance</h4>
            <p className="text-gray-600 !mt-2">Customized diet plans to support a healthy pregnancy and fetal development.</p>
          </div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/809/809957.png"
              alt="Birth Planning"
              className="w-16 h-16 !mx-auto !mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-800">Birth Planning</h4>
            <p className="text-gray-600 !mt-2">Preparation for delivery and counseling for labor and postpartum care.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnANCSection;
