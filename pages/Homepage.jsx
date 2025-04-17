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
          padding: 6,
          paddingTop:8,
          textAlign: 'center',
          borderRadius: 2,
          mb: 3,
          height: {
            xs: '70vh',  // Extra-small screens (mobile)
            sm: '60vh',  // Optional: Small screens (tablets)
            md: '50vh',  // Medium and up (laptops/desktops)
          }
          
        }}
      >
        <Typography variant="h3" sx={{ color: '#d32f2f', fontWeight: 'bold' }}>
          Narayan Heart & Maternity Clinic
        </Typography>
        <Typography variant="h6" sx={{ mt: 2, color: '#880e4f' }}>
          Compassionate care for your heart and your family.
        </Typography>
        <Button
          variant="contained"
          color="error"
          size="large"
          sx={{ mt: 4,borderRadius:20 }}
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
