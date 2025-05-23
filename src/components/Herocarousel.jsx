import React, { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: 'Advanced Cardiac Diagnostics',
    subtitle: 'ECG, ECHO, TMT & more — early detection, better outcomes.',
    buttonText: 'View Heart Tests',
    image: '/ECGimage.png',
    link: '/Cardioservices',
  },
  {
    title: 'Preventive & Follow-up Cardiology',
    subtitle: 'Manage risk, adjust treatment, and stay heart healthy.',
    buttonText: 'Cardiology Follow-up',
    image: '/9802344.jpg',
    link: '/Cardioservices',
  },
  {
    title: 'Comprehensive Antenatal Care',
    subtitle: 'Safe and personalized pregnancy monitoring with expert support.',
    buttonText: 'Learn About ANC',
    image: '/maternity_img.jpg',
    link: '/anc',
  },
  {
    title: 'Postnatal & Breastfeeding Support',
    subtitle: 'Caring for you and your baby after delivery.',
    buttonText: 'See Postnatal Services',
    image: '/postnatal.jpg',
    link: '/Gynoservices',
  },
  {
    title: 'Expert Gynaecological Services',
    subtitle: 'From menstrual issues to menopause — care for every stage.',
    buttonText: 'Explore Gynae Care',
    image: '/gyno.jpg',
    link: '/Gynoservices',
  },
];

const Herocarousel = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(nextSlide, 5000);
    return () => resetTimeout();
  }, [current]);

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="relative h-screen w-full overflow-hidden" {...handlers}>
      <div
        style={{ backgroundImage: `url(${slides[current].image})` }}
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center flex items-center justify-center text-center !px-4"
      >
        <div className="z-20 bg-black/60 !p-6 rounded-lg max-w-xl text-white">
          <h2 className="text-3xl font-bold !mb-2">{slides[current].title}</h2>
          <p className="text-lg mb-4">{slides[current].subtitle}</p>
          <Link to={slides[current].link}>
            <button className="bg-red-500 hover:bg-red-600 text-white !px-6 !py-2 rounded-full font-medium transition">
              {slides[current].buttonText}
            </button>
          </Link>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white !p-2 rounded-full z-30"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white !p-2 rounded-full z-30"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === current ? 'bg-red-400 w-4' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Herocarousel;
