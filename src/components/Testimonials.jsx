import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Your original patient data
const testimonials = [
  {
    id: 1,
    name: 'Anjali Sharma',
    feedback: 'The doctors and nurses at Narayan Heart & Maternity Centre took great care of me during my pregnancy. Highly recommended!',
    image: '/Anjali.jpg',
  },
  {
    id: 2,
    name: 'Ramesh Verma',
    feedback: 'Excellent cardiac care services! Dr. Shushant Kumar saved my father\'s life. Thank you for the compassionate treatment.',
    image: '/Ramesh.jpg',
  },
  {
    id: 3,
    name: 'Sneha Patel',
    feedback: 'Very hygienic environment and friendly staff. My delivery experience here was smooth and reassuring. Dr. Jagriti Bhardwaj was amazing throughout.',
    image: '/Sneha.jpg',
  },
  {
    id: 4,
    name: 'Vikram Singh',
    feedback: 'I was diagnosed with a heart condition, and Dr. Shushant Kumar explained everything with clarity and care. I feel much better now thanks to his treatment.',
    image: '/Vikram.jpg',
  },
  {
    id: 5,
    name: 'Pooja Desai',
    feedback: 'Dr. Jagriti Bhardwaj is a wonderful gynaecologist. She made my entire pregnancy journey stress-free and was always available for any concerns.',
    image: '/Pooja.jpg',
  },
  {
    id: 6,
    name: 'Manoj Rathi',
    feedback: 'Narayan Heart & Maternity Centre is the best place for cardiac care. The staff is supportive, and Dr. Shushant Kumar is incredibly skilled and kind.',
    image: '/Manoj.jpg',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Effect for auto-sliding carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Changes testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-white uppercase tracking-wider">
            What Our <span className="text-blue-400">Patients</span> Say
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mt-4 rounded"></div>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            // Animate the x-position to create the sliding effect
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="flex"
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-2 md:px-4">
                <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
                  <p className="text-gray-300 text-lg italic mb-6">
                    "{testimonial.feedback}"
                  </p>
                  <div className="flex items-center">
                    <div className="h-16 w-16 rounded-full overflow-hidden mr-4 border-2 border-blue-400">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-white text-xl font-bold">{testimonial.name}</h3>
                      <p className="text-blue-400 font-semibold">Verified Patient</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-blue-400' : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;