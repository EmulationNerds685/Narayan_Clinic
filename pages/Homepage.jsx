import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import DoctorsSection from '../components/DoctorSection';
import ServicesSection from './Services';
import WhyChooseUs from '../components/ChooseUs';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, delay: 0.3 } },
};

const HomePage = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <Box sx={{ padding: 2 }}>
        {/* Hero Section */}
        <motion.div variants={fadeInUp}>
          <Box
            sx={{
              backgroundImage: "url('/—Pngtree—3d rendering secure heart concept_13362881.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              color: '#fff',
              px: { xs: 3, sm: 6 },
              py: { xs: 6, sm: 8 },
              textAlign: 'center',
              borderRadius: 2,
              mb: 3,
              height: {
                xs: '60vh',
                sm: '60vh',
                md: '50vh',
              },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h3"
                sx={{
                  color: '#d32f2f',
                  fontWeight: 'bold',
                  fontSize: {
                    xs: '1.8rem',
                    sm: '2.4rem',
                    md: '3rem',
                  },
                }}
              >
                Narayan Heart & Maternity Clinic
              </Typography>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Typography
                variant="h6"
                sx={{
                  mt: 2,
                  color: '#880e4f',
                  fontSize: {
                    xs: '1rem',
                    sm: '1.2rem',
                    md: '1.25rem',
                  },
                  maxWidth: '80%',
                }}
              >
                Compassionate care for your heart and your family.
              </Typography>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Button
                variant="contained"
                color="error"
                size="large"
                sx={{
                  mt: 4,
                  borderRadius: 20,
                  px: { xs: 3, sm: 5 },
                  py: { xs: 1, sm: 1.5 },
                  fontSize: {
                    xs: '0.875rem',
                    sm: '1rem',
                  },
                }}
                whilehover={{ scale: 1.05 }}
                whiletap={{ scale: 0.95 }}
              >
                Book Appointment
              </Button>
            </motion.div>
          </Box>
        </motion.div>

        {/* Other Sections (fade in one by one) */}
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <ServicesSection />
        </motion.div>

        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <DoctorsSection />
        </motion.div>

        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <WhyChooseUs />
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default HomePage;
