import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

const cardiologyServices = [
  { title: 'Electrocardiogram (ECG)', description: 'Records the electrical activity of your heart.' },
  { title: 'Echocardiogram', description: 'Ultrasound of the heart to assess structure and function.' },
  { title: 'Stress Test', description: 'Measures heart function under physical stress.' },
  { title: '24-Hour Holter Monitoring', description: 'Continuous heart rhythm monitoring for 24 hours.' },
  { title: 'Cardiac MRI & CT', description: 'Advanced imaging of heart and blood vessels.' },
  { title: 'Heart Disease Risk Assessment', description: 'Evaluates your risk of developing heart disease.' },
  { title: 'Interventional Cardiology Consultation', description: 'Expert advice on procedures like angioplasty.' },
  { title: 'Lifestyle & Nutritional Counseling', description: 'Heart-healthy lifestyle and diet plans.' },
  { title: 'Pacemaker & Device Monitoring', description: 'Ongoing management of implanted heart devices.' },
  { title: 'Hypertension & Cholesterol Management', description: 'Treatment and monitoring of high BP & lipids.' },
];

const CardiologyServices = () => {
  return (
    <Box className="!py-10 !px-4 bg-gray-50">
      <Typography variant="h4" className="text-center text-[#C00008] font-bold !mb-6">
        Cardiology Services
      </Typography>

      <Box className="flex justify-center !mb-6">
        <FavoriteIcon sx={{ fontSize: 60 }} color="primary" />
      </Box>

      <Grid container spacing={3} justifyContent="center">
        {cardiologyServices.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="h-full shadow hover:shadow-lg transition">
              <CardContent>
                <MedicalServicesIcon color="primary" className="!mb-2" />
                <Typography variant="subtitle1" fontWeight={600}>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
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

export default CardiologyServices;
