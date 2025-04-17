import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from '@mui/material';
import { motion } from 'framer-motion';

const doctors = [
  {
    name: 'Dr. Sushant Pathak',
    specialty: 'Cardiologist',
    image: 'doctor_sample2.jpg',
    description: 'Expert in heart care with 15+ years of experience.',
  },
  {
    name: 'Dr. Jagriti Bhardwaj',
    specialty: 'Gynecologist',
    image: 'doctor_sample.jpg',
    description: 'Specialist in maternity and women’s health for 10+ years.',
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

const DoctorsSection = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography
        variant="h4"
        sx={{ textAlign: 'center', mb: 4, color: '#d32f2f', fontWeight: 'bold' }}
      >
        Meet Our Doctors
      </Typography>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Grid container spacing={4} justifyContent="center">
          {doctors.map((doc, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div variants={cardVariants} whileHover={{ scale: 1.03 }}>
                <Card sx={{ maxWidth: 345, mx: 'auto', boxShadow: 3 }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={doc.image}
                    alt={doc.name}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{ color: '#c62828' }}
                    >
                      {doc.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {doc.specialty}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {doc.description}
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

export default DoctorsSection;
