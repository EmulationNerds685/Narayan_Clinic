import React from 'react';
import { Card, CardContent, Typography, Avatar } from '@mui/material';

const testimonials = [
  {
    name: 'Anjali Sharma',
    feedback: 'The doctors and nurses at Narayan Heart & Maternity Center took great care of me during my pregnancy. Highly recommended!',
    image: '/images/anjali.jpg',
  },
  {
    name: 'Ramesh Verma',
    feedback: 'Excellent cardiac care services! Dr. Mehta saved my father’s life. Thank you for the compassionate treatment.',
    image: '/images/ramesh.jpg',
  },
  {
    name: 'Sneha Patel',
    feedback: 'Very hygienic environment and friendly staff. My delivery experience here was smooth and reassuring.',
    image: '/images/sneha.jpg',
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 !py-10 !px-4">
      <h2 className="text-3xl font-bold text-center !mb-8 text-gray-800">
        What Our Patients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="shadow-lg">
            <CardContent>
              <div className="flex items-center gap-4 !mb-4">
                <Avatar src={testimonial.image} alt={testimonial.name} />
                <Typography variant="h6" component="div">
                  {testimonial.name}
                </Typography>
              </div>
              <Typography variant="body2" color="text.secondary">
                {testimonial.feedback}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
