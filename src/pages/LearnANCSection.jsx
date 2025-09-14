import React from 'react';
import { Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const LearnANCSection = () => {
  return (
    <section className="bg-gradient-to-b from-pink-50 to-white py-16 px-6 md:px-12 lg:px-24">
      <Helmet>
        <title>Antenatal Care (ANC) in Patna | Dr. Jagriti Bhardwaj</title>
        <meta
          name="description"
          content="Learn about Antenatal Care (ANC) services offered at Narayan Heart & Maternity Centre, Patna by Dr. Jagriti Bhardwaj. Ensure a healthy pregnancy with expert checkups and guidance."
        />
      </Helmet>

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <Typography
            variant="h4"
            className="font-bold text-gray-900"
          >
            Learn About Antenatal Care (ANC)
          </Typography>
          <div className="w-20 h-1 bg-pink-500 mx-auto mt-3 rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600">
            Ensuring a healthy pregnancy journey for every mother and baby.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-semibold text-pink-700 mb-4">What is ANC?</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Antenatal Care (ANC) refers to the routine health control of presumed healthy pregnant women
              without symptoms (screening), in order to diagnose diseases or complicating obstetric conditions 
              and to provide information about lifestyle, pregnancy, and delivery.
            </p>

            <h3 className="text-xl font-semibold text-pink-600 mb-3">Why is ANC Important?</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Monitors the health of both mother and baby</li>
              <li>Detects and prevents complications early</li>
              <li>Offers vaccinations and supplements</li>
              <li>Provides guidance on diet and exercise</li>
              <li>Prepares the mother for delivery and newborn care</li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
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
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Additional Visual Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
              title: "Regular Check-Ups",
              desc: "Track fetal growth and monitor mother’s health throughout pregnancy.",
            },
            {
              img: "https://cdn-icons-png.flaticon.com/512/2920/2920237.png",
              title: "Nutritional Guidance",
              desc: "Customized diet plans to support a healthy pregnancy and fetal development.",
            },
            {
              img: "https://cdn-icons-png.flaticon.com/512/809/809957.png",
              title: "Birth Planning",
              desc: "Preparation for delivery and counseling for labor and postpartum care.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-2 p-6"
            >
              <img src={item.img} alt={item.title} className="w-16 h-16 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900">{item.title}</h4>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnANCSection;
