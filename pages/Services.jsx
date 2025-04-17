import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const services = [
  {
    title: 'Cardiac Consultation',
    icon: <FavoriteIcon sx={{ fontSize: 50, color: '#d32f2f' }} />,
    description: 'Expert diagnosis and treatment plans for heart conditions.',
  },
  {
    title: 'Heart Monitoring & ECG',
    icon: <MonitorHeartIcon sx={{ fontSize: 50, color: '#d32f2f' }} />,
    description: 'Advanced heart monitoring systems and ECG tests.',
  },
  {
    title: 'Maternity Care',
    icon: <ChildFriendlyIcon sx={{ fontSize: 50, color: '#d32f2f' }} />,
    description: 'Compassionate care for expectant mothers from start to delivery.',
  },
  {
    title: 'Ultrasound Scanning',
    icon: <LocalHospitalIcon sx={{ fontSize: 50, color: '#d32f2f' }} />,
    description: 'High-quality ultrasound for pregnancy and internal scans.',
  },
];

const ServicesSection = () => {
  return (
    <Box sx={{ padding: 7, backgroundColor: '#fff3f3' }}>
      <Typography
        variant="h4"
        sx={{ textAlign: 'center', mb: 4, color: '#d32f2f', fontWeight: 'bold' }}
      >
        Our Services
      </Typography>
      <Grid container spacing={10} justifyContent="center">
        {services.map((service, index) => (
          <Grid size={{xs:12,sm:6,md:4}} key={index}>
            <Card sx={{ textAlign: 'center', p: 2, height: '100%', boxShadow: 3 }}>
              <CardMedia>
                {service.icon}
              </CardMedia>
              <CardContent>
                <Typography variant="h6" sx={{ mt: 2 }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesSection;
