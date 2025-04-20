/* eslint-disable no-unused-vars */
import React from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import DoctorsSection from '../components/DoctorSection';
import ServicesSection from './Services';
import WhyChooseUs from '../components/ChooseUs';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Herocarousel from '../components/Herocarousel';
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
  const theme = useTheme();

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      <Box sx={{ padding: '15px 0 0 0' }}>
        {/* Hero Section */}
        <Herocarousel/>
        
       {/* <motion.div variants={fadeInUp}>
          <Box
            sx={{
              backgroundImage:
                "url('/—Pngtree—3d rendering secure heart concept_13362881.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              color: '#fff',
              px: { xs: 3, sm: 6 },
              py: { xs: 6, sm: 8 },
              textAlign: 'center',
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
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.4)',
                zIndex: 1,
              },
              zIndex: 2,
            }}
          >
            <motion.div variants={fadeInUp} style={{ zIndex: 3 }}>
              <Typography
                variant="h3"
                sx={{
                  color: theme.palette.primary.light,
                  fontWeight: 'bold',
                  fontSize: {
                    xs: '1.8rem',
                    sm: '2.4rem',
                    md: '3rem',
                  },
                }}
              >
                Narayan Heart & Maternity Center
              </Typography>
            </motion.div>

            <motion.div variants={fadeInUp} style={{ zIndex: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  mt: 2,
                  color: '#e3f2fd',
                  fontSize: {
                    xs: '1rem',
                    sm: '1.2rem',
                    md: '1.25rem',
                  },
                  maxWidth: '100%',
                }}
              >
                Compassionate care for your heart and your family.
              </Typography>
            </motion.div>
       
            <motion.div variants={fadeInUp} style={{ zIndex: 3 }}>
              <Link to="/book" style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  color="primary"
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
                    boxShadow: theme.shadows[3],
                    '&:hover': {
                      backgroundColor: theme.palette.primary.dark,
                    },
                  }}
                >
                  Book Appointment
                </Button>
              </Link>
            </motion.div>
          </Box>
        </motion.div>

        {/* Other Sections */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ServicesSection />
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <DoctorsSection />
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <WhyChooseUs />
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default HomePage;
