import React from 'react';
import SeoHead from '../components/SeoHead';
import { motion } from 'framer-motion';
import { FaHeart, FaBaby, FaQuoteLeft, FaStar } from 'react-icons/fa';

const cardiologyReviews = [
  {
    id: 1,
    name: 'Ramesh Verma',
    feedback: 'Excellent cardiac care services! Dr. Shushant Kumar saved my father\'s life. Thank you for the compassionate treatment.',
    image: '/Ramesh.webp',
  },
  {
    id: 2,
    name: 'Vikram Singh',
    feedback: 'I was diagnosed with a heart condition, and Dr. Shushant Kumar explained everything with clarity and care. I feel much better now thanks to his treatment.',
    image: '/Vikram.webp',
  },
  {
    id: 3,
    name: 'Manoj Rathi',
    feedback: 'Narayan Heart & Maternity Centre is the best place for cardiac care. The staff is supportive, and Dr. Shushant Kumar is incredibly skilled and kind.',
    image: '/Manoj.webp',
  },
];

const gynaecologyReviews = [
  {
    id: 1,
    name: 'Anjali Sharma',
    feedback: 'The doctors and nurses at Narayan Heart & Maternity Centre took great care of me during my pregnancy. Highly recommended!',
    image: '/Anjali.webp',
  },
  {
    id: 2,
    name: 'Sneha Patel',
    feedback: 'Very hygienic environment and friendly staff. My delivery experience here was smooth and reassuring. Dr. Jagriti Bhardwaj was amazing throughout.',
    image: '/Sneha.webp',
  },
  {
    id: 3,
    name: 'Pooja Desai',
    feedback: 'Dr. Jagriti Bhardwaj is a wonderful gynaecologist. She made my entire pregnancy journey stress-free and was always available for any concerns.',
    image: '/Pooja.webp',
  },
];

const ReviewCard = ({ review }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow"
  >
    <div className="flex items-center gap-1 text-[#3CAEA3] mb-4">
      {[...Array(5)].map((_, i) => <FaStar key={i} size={14} />)}
    </div>
    <div className="relative mb-6">
      <FaQuoteLeft className="absolute -top-2 -left-2 text-gray-100 text-4xl -z-0" />
      <p className="text-gray-700 italic relative z-10 text-sm sm:text-base leading-relaxed">
        "{review.feedback}"
      </p>
    </div>
    <div className="mt-auto flex items-center gap-4 pt-4 border-t border-gray-50">
      <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-[#3CAEA3]/20">
        <img src={review.image} alt={review.name} className="h-full w-full object-cover" />
      </div>
      <div>
        <h4 className="text-[#30638E] font-bold text-sm sm:text-base">{review.name}</h4>
        <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wide">Verified Patient</p>
      </div>
    </div>
  </motion.div>
);

const PatientReviews = () => {
  return (
    <>
      <SeoHead
        title="Patient Reviews | Narayan Heart & Maternity Centre, Patna"
        description="Read testimonials from our patients about their experiences with Cardiology and Gynaecology care at Narayan Heart & Maternity Centre, Patna."
        path="/patient-reviews"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#30638E] to-[#1a3a5a] text-white py-16 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            What Our Patients Say
          </motion.h1>
          <p className="text-blue-100 text-sm sm:text-lg max-w-2xl mx-auto">
            Honest feedback from individuals and families who trusted us with their heart and maternity care.
          </p>
        </div>
      </section>

      {/* Cardiology Reviews */}
      <section className="py-12 sm:py-16 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-10 border-b border-gray-200 pb-4">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center">
              <FaHeart size={24} />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#30638E]">Cardiology Care</h2>
              <p className="text-gray-500 text-sm sm:text-base">Experiences with Dr. Sushant Kumar Pathak</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {cardiologyReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* Gynaecology Reviews */}
      <section className="py-12 sm:py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-10 border-b border-gray-200 pb-4">
            <div className="w-12 h-12 bg-[#3CAEA3]/10 text-[#3CAEA3] rounded-xl flex items-center justify-center">
              <FaBaby size={24} />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#30638E]">Gynaecology & Maternity</h2>
              <p className="text-gray-500 text-sm sm:text-base">Experiences with Dr. Jagriti Bhardwaj</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {gynaecologyReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto bg-gray-900 rounded-3xl p-8 sm:p-12 text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Have Your Own Experience to Share?</h2>
          <p className="text-gray-400 mb-8">We value your feedback. It helps us improve our care for future patients.</p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#3CAEA3] hover:bg-[#2F9E94] text-white text-sm font-bold px-8 py-4 transition-all shadow-lg"
          >
            Leave Feedback
          </a>
        </div>
      </section>
    </>
  );
};

export default PatientReviews;
