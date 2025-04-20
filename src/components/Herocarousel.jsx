import React, { useState } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const slides = [
  {
    title: 'Compassionate Cardiac Care',
    subtitle: 'Your heart is in good hands.',
    buttonText: 'Meet Our Cardiologists',
    image: '/7118254.jpg',
    link: '/services#cardiology',
  },
  {
    title: 'Advanced Maternity Services',
    subtitle: 'Care for you and your baby.',
    buttonText: 'View Maternity Plans',
    image: '/maternity_img.jpg',
    link: '/services#maternity',
  },
  {
    title: 'Emergency & ICU Services',
    subtitle: '24/7 emergency response team.',
    buttonText: 'Contact Now',
    image: '/EMC.webp',
    link: '/contact',
  },
];

const Herocarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // change slide every 5 seconds
    return () => clearInterval(interval); // cleanup
  }, [current]);

  return (
    <Box sx={{ position: 'relative', height: '60vh', overflow: 'hidden' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              backgroundImage: `url(${slides[current].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '60vh',
              color: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              px: 2,
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.5)',
                zIndex: 1,
              },
            }}
          >
            <Box sx={{ zIndex: 2 }}>
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
          </Box>
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <IconButton onClick={prevSlide} sx={{ position: 'absolute', top: '50%', left: 10, zIndex: 3 }}>
        <ArrowBackIos sx={{ color: '#fff' }} />
      </IconButton>
      <IconButton onClick={nextSlide} sx={{ position: 'absolute', top: '50%', right: 10, zIndex: 3 }}>
        <ArrowForwardIos sx={{ color: '#fff' }} />
      </IconButton>
    </Box>
  );
};

export default Herocarousel;
