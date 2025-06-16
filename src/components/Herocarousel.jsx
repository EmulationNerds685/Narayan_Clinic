import React, { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: 'Advanced Cardiac Diagnostics',
    subtitle: 'ECG, ECHO, TMT & more — early detection, better outcomes.',
    buttonText: 'View Heart Tests',
    image: '/ECGimage.webp',
    link: '/cdd',
  },
  {
    title: 'Preventive & Follow-up Cardiology',
    subtitle: 'Manage risk, adjust treatment, and stay heart healthy.',
    buttonText: 'Cardiology Follow-up',
    image: '/9802344.jpg',
    link: '/FollowUp',
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
    link: '/postnatal',
  },
  {
    title: 'Expert Gynaecological Services',
    subtitle: 'From menstrual issues to menopause — care for every stage.',
    buttonText: 'Explore Gynae Care',
    image: '/gyno.jpg',
    link: '/Gynoservices',
  },
  {
    title: 'Consult a Specialist Today',
    subtitle: 'Expert care in Cardiology and Gynecology — book your appointment in just a few clicks.',
    buttonText: 'Book Appointment',
    image: '/appointment.jpg',
    link: '/book',
  }
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef(null);
  const transitionRef = useRef(null);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === current) return;
    setIsTransitioning(true);
    setCurrent(index);
  };

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    // Reset transitioning state after animation completes
    if (transitionRef.current) clearTimeout(transitionRef.current);
    transitionRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match this with your CSS transition duration
  }, [current]);

  useEffect(() => {
    if (!isHovered) {
      resetTimeout();
      timeoutRef.current = setTimeout(nextSlide, 5000);
    }
    return () => resetTimeout();
  }, [current, isHovered]);

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div 
      className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] max-h-screen overflow-hidden"
      {...handlers}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides container with smooth transition */}
      <div 
        className="absolute inset-0 transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div 
            key={index}
            laoding="lazy"
            className="absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out"
            style={{
              left: `${index * 100}%`,
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Overlay */}
            <div className="bg-opacity-40" />
            
            {/* Content */}
            <div className="relative h-full flex items-center justify-center !px-4 sm:!px-6 lg:!px-8">
              <div className="text-center max-w-2xl md:max-w-3xl lg:max-w-4xl w-full rounded-lg !p-6 sm:!p-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white !mb-2 sm:!mb-3">
                  {slide.title}
                </h2>
                <p className="text-white text-base sm:text-lg md:text-xl !mb-4 sm:!mb-6">
                  {slide.subtitle}
                </p>
                <Link to={slide.link}>
                  <button className="bg-red-500 hover:bg-red-600 text-white !px-5 !py-2 sm:!px-6 sm:!py-2.5 rounded-full font-medium transition-colors duration-300 text-sm sm:text-base">
                    {slide.buttonText}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white !p-2 rounded-full z-10 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white !p-2 rounded-full z-10 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex !space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full transition-all duration-300 ${
              index === current ? 'bg-red-400 w-6 sm:w-8' : 'bg-gray-400 hover:bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;