import React, { useRef } from 'react';
import { FaInstagram, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const reelsData = [
  { code: 'DVYy2CaAbdU', type: 'Cardiology', doctor: 'Dr. Sushant' },
  { code: 'DU3QTISAdJC', type: 'Gynecology', doctor: 'Dr. Jagriti' },
  { code: 'DVnBjY1ARtJ', type: 'Cardiology', doctor: 'Dr. Sushant' },
  { code: 'NEWCODE123', type: 'Gynecology', doctor: 'Dr. Jagriti' },
];

const InstagramReelsSection = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300;

    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,1.8fr] gap-10 items-start">
      
      {/* LEFT CONTENT */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#30638E] mb-3 flex items-center gap-3">
          <FaInstagram className="text-pink-500" />
          Short Health Reels by Our Doctors
        </h2>

        <p className="text-gray-600 text-base sm:text-lg mb-4">
          Watch short reels covering heart health, pregnancy care, PCOS, and women’s health by our specialists.
        </p>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#F56040] via-[#E1306C] to-[#5851DB] text-white text-sm font-semibold px-4 py-2.5 shadow-sm hover:shadow-md transition-all"
        >
          View on Instagram
        </a>
      </div>

      {/* RIGHT REELS */}
      <div className="relative">

        {/* LEFT ARROW */}
        <button
          onClick={() => scroll('left')}
          className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full"
        >
          <FaChevronLeft />
        </button>

        {/* SCROLL CONTAINER */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-4 px-6 sm:px-10"
        >
          {reelsData.map((reel) => (
            <div
              key={reel.code}
              className="relative min-w-[220px] sm:min-w-[260px] aspect-[9/16] rounded-xl overflow-hidden bg-black shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Reel */}
              <iframe
                src={`https://www.instagram.com/reel/${reel.code}/embed`}
                title={reel.code}
                loading="lazy"
                className="w-full h-full border-0"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              {/* Category */}
              <div className="absolute top-2 left-2 bg-white/90 text-xs px-2 py-1 rounded-full">
                {reel.type}
              </div>

              {/* Doctor */}
              <div className="absolute bottom-2 left-2 text-white text-xs font-semibold">
                {reel.doctor}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={() => scroll('right')}
          className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default InstagramReelsSection;