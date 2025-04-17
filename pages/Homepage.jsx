import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import DoctorsSection from '../components/DoctorSection';
import ServicesSection from './Services';
import WhyChooseUs from '../components/ChooseUs';
const HomePage = () => {
  return (
    <Box sx={{ padding: 2, }}>
      {/* Hero Section */}
      <Box
  sx={{
    backgroundImage: "url('/—Pngtree—3d rendering secure heart concept_13362881.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: '#fff',
    px: { xs: 3, sm: 6 },         // Horizontal padding
    py: { xs: 6, sm: 8 },         // Vertical padding
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
  >
    Book Appointment
  </Button>
</Box>

      <ServicesSection/>
      <DoctorsSection/>
      <WhyChooseUs/>
    </Box>
  );
};

export default HomePage;
