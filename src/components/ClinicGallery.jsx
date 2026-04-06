import React from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    src: "/reception.png",
    alt: "Modern Reception Area",
    title: "Patient Reception",
    description: "Our welcoming and comfortable reception space.",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/cardiology_room.png",
    alt: "Cardiology Suite",
    title: "Diagnostics Lab",
    description: "Advanced cardiac testing facilities.",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/maternity_ward.png",
    alt: "Maternity Ward",
    title: "Maternity Suites",
    description: "Safe and peaceful recovery rooms.",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    src: "/doctor_consult.png",
    alt: "Consultation Room",
    title: "Consultation Room",
    description: "Private spaces for doctor-patient discussion.",
    span: "md:col-span-1 md:row-span-1",
  },
];

const ClinicGallery = () => {
  return (
    <section className="!py-16 sm:!py-24 !px-4 bg-gray-50/50">
      <div className="max-w-6xl !mx-auto">
        <div className="text-center !mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#30638E] !mb-4">
            Our Modern Facilities
          </h2>
          <p className="text-gray-500 max-w-xl !mx-auto text-sm sm:text-base">
            Take a virtual tour of our clinic. We maintain the highest standards of cleanliness and advanced medical infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 h-auto md:h-[600px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative group overflow-hidden rounded-3xl shadow-sm ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end !p-6">
                <h3 className="text-white font-bold text-lg">{img.title}</h3>
                <p className="text-white/80 text-sm">{img.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicGallery;
