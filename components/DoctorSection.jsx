import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from '@mui/material';

const doctors = [
  {
    name: 'Dr. Sushant Pathak',
    specialty: 'Cardiologist',
    image: 'doctor_sample2.jpg', // Put your image in public/images folder
    description: 'Expert in heart care with 15+ years of experience.',
  },
  {
    name: 'Dr. Jagriti Bhardwaj',
    specialty: 'Gynecologist',
    image: 'doctor_sample.jpg',
    description: 'Specialist in maternity and women’s health for 10+ years.',
  },
];

const DoctorsSection = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography
        variant="h4"
        sx={{ textAlign: 'center', mb: 4, color: '#d32f2f', fontWeight: 'bold' }}
      >
        Meet Our Doctors
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {doctors.map((doc, index) => (
          <Grid size={{sx:12,sm:6,md:4}} key={index}>
            <Card sx={{ maxWidth: 345, mx: 'auto', boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="300"
                image={doc.image}
                alt={doc.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: '#c62828' }}>
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
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DoctorsSection;
