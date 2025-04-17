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
import { motion } from 'framer-motion';

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

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const ServicesSection = () => {
  return (
    <Box sx={{ padding: 7, backgroundColor: '#fff3f3' }}>
      <Typography
        variant="h4"
        sx={{ textAlign: 'center', mb: 4, color: '#d32f2f', fontWeight: 'bold' }}
      >
        Our Services
      </Typography>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Grid container spacing={10} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div variants={cardVariants} whileHover={{ scale: 1.05 }}>
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
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default ServicesSection;
