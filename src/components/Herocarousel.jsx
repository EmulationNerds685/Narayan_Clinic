import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';

const slides = [
  {
    title: 'Comprehensive Antenatal Care',
    subtitle: 'Safe and personalized pregnancy monitoring with expert support.',
    buttonText: 'Learn About ANC',
    image: '/maternity_img.jpg',
    link: '/services#antenatal',
  },
  {
    title: 'Postnatal & Breastfeeding Support',
    subtitle: 'Caring for you and your baby after delivery.',
    buttonText: 'See Postnatal Services',
    image: '/postnatal.jpg',
    link: '/services#postnatal',
  },
  {
    title: 'Expert Gynaecological Services',
    subtitle: 'From menstrual issues to menopause — care for every stage.',
    buttonText: 'Explore Gynae Care',
    image: '/gyno.jpg',
    link: '/services#gynaecology',
  },
  {
    title: 'Advanced Cardiac Diagnostics',
    subtitle: 'ECG, ECHO, TMT & more — early detection, better outcomes.',
    buttonText: 'View Heart Tests',
    image: '/7118254.jpg',
    link: '/services#diagnostics',
  },
  {
    title: 'Preventive & Follow-up Cardiology',
    subtitle: 'Manage risk, adjust treatment, and stay heart healthy.',
    buttonText: 'Cardiology Follow-up',
    image: '/9802344.jpg',
    link: '/services#cardiology',
  },
];


const Herocarousel = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
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
    <Box className="relative h-[60vh] overflow-hidden" {...handlers}>
  <AnimatePresence initial={false} mode="wait">
  <motion.div
    key={current}
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -300, opacity: 0 }}
    transition={{ duration: 0.6 }}
    style={{
      backgroundImage: `url(${slides[current].image})`,
    }}
    className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center px-4 bg-cover bg-center"
  >
    <Box className="z-[2] text-white">
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        {slides[current].title}
      </Typography>
      <Typography variant="h6" gutterBottom>
        {slides[current].subtitle}
      </Typography>
      <Link to={slides[current].link} style={{ textDecoration: 'none' }}>
        <Button variant="contained" sx={{ mt: 2, borderRadius: 20 }}>
          {slides[current].buttonText}
        </Button>
      </Link>
    </Box>
  </motion.div>
</AnimatePresence>

        

      {/* Arrows */}
      <IconButton
  onClick={prevSlide}
  sx={{
    position: 'absolute',
    top: '50%',
    left: '1rem',
    transform: 'translateY(-50%)',
    zIndex: 3,
    backgroundColor: 'rgba(0,0,0,0.6)',
    color: '#fff',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.8)',
    },
  }}
>
  <ArrowBackIos />
</IconButton>

<IconButton
  onClick={nextSlide}
  sx={{
    position: 'absolute',
    top: '50%',
    right: '1rem',
    transform: 'translateY(-50%)',
    zIndex: 3,
    backgroundColor: 'rgba(0,0,0,0.6)',
    color: '#fff',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.8)',
    },
  }}
>
  <ArrowForwardIos />
</IconButton>


      {/* Dots */}
      <Box className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-[3] flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === current ? 'bg-white' : 'bg-gray-400'} transition-all duration-300`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Herocarousel;
