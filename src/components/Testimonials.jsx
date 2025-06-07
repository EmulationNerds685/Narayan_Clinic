import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, Typography, Avatar } from '@mui/material';

const testimonials = [
  {
    name: 'Anjali Sharma',
    feedback: 'The doctors and nurses at Narayan Heart & Maternity Centre took great care of me during my pregnancy. Highly recommended!',
    image: '/images/anjali.jpg',
  },
  {
    name: 'Ramesh Verma',
    feedback: 'Excellent cardiac care services! Dr. Shushant Kumar saved my fathers life. Thank you for the compassionate treatment.',
    image: '/images/ramesh.jpg',
  },
  {
    name: 'Sneha Patel',
    feedback: 'Very hygienic environment and friendly staff. My delivery experience here was smooth and reassuring. Dr. Jagriti Bhardwaj was amazing throughout.',
    image: '/images/sneha.jpg',
  },
  {
    name: 'Vikram Singh',
    feedback: 'I was diagnosed with a heart condition, and Dr. Shushant Kumar explained everything with clarity and care. I feel much better now thanks to his treatment.',
    image: '/images/vikram.jpg',
  },
  {
    name: 'Pooja Desai',
    feedback: 'Dr. Jagriti Bhardwaj is a wonderful gynaecologist. She made my entire pregnancy journey stress-free and was always available for any concerns.',
    image: '/images/pooja.jpg',
  },
  {
    name: 'Manoj Rathi',
    feedback: 'Narayan Heart & Maternity Centre is the best place for cardiac care. The staff is supportive, and Dr. Shushant Kumar is incredibly skilled and kind.',
    image: '/images/manoj.jpg',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10
    }
  },
  hover: {
    y: -10,
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    transition: {
      duration: 0.3
    }
  }
};

const Testimonials = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 !py-16 !px-4 sm:!px-6 lg:!px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center !mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-900 !mb-4">
          What Our Patients Say
        </h2>
        <div className="w-20 h-1 bg-blue-500 !mx-auto rounded-full"></div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl !mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="hover"
            className="h-full"
          >
            <Card className="h-full shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden border border-gray-100">
              <CardContent className="!p-6 h-full flex flex-col">
                <div className="flex items-center gap-4 !mb-4">
                  <Avatar 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 border-2 border-blue-100"
                  />
                  <Typography 
                    variant="h6" 
                    component="div"
                    className="font-bold text-gray-800"
                  >
                    {testimonial.name}
                  </Typography>
                </div>
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  className="text-gray-600 flex-grow"
                >
                  "{testimonial.feedback}"
                </Typography>
                <div className="!mt-4 flex justify-end">
                  <svg 
                    className="w-8 h-8 text-blue-400 opacity-70" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;