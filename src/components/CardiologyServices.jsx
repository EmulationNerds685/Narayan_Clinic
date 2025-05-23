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
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DevicesIcon from '@mui/icons-material/Devices';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const iconColor = '#C00008';

const cardiologyServices = [
  {
    title: 'Electrocardiogram (ECG)',
    description: 'Records the electrical activity of your heart.',
    icon: <MonitorHeartIcon sx={{ color: iconColor }} />,
  },
  {
    title: 'Echocardiogram',
    description: 'Ultrasound of the heart to assess structure and function.',
    icon: <MedicalServicesIcon sx={{ color: iconColor }} />,
  },
  {
    title: 'Stress Test',
    description: 'Measures heart function under physical stress.',
    icon: <FitnessCenterIcon sx={{ color: iconColor }} />,
  },
  {
    title: '24-Hour Holter Monitoring',
    description: 'Continuous heart rhythm monitoring for 24 hours.',
    icon: <AvTimerIcon sx={{ color: iconColor }} />,
  },
  {
    title: 'Heart Disease Risk Assessment',
    description: 'Evaluates your risk of developing heart disease.',
    icon: <AssessmentIcon sx={{ color: iconColor }} />,
  },
  {
    title: 'Interventional Cardiology Consultation',
    description: (
      <>
        Expert advice on procedures including:
        <ul style={{ paddingLeft: '1rem', marginTop: '0.5rem' }}>
          <li>Angioplasty</li>
          <li>Coronary and Peripheral Angiography</li>
          <li>BMV (Balloon Mitral Valvotomy)</li>
          <li>Pacemaker</li>
          <li>CRTP</li>
          <li>TAVI</li>
          <li>EVAR</li>
          <li>Treatment of Limb Ischemia</li>
          <li>Electrophysiology</li>
        </ul>
      </>
    ),
    icon: <HeartBrokenIcon sx={{ color: iconColor }} />,
  },
  {
    title: 'Lifestyle & Nutritional Counseling',
    description: 'Heart-healthy lifestyle and diet plans.',
    icon: <TipsAndUpdatesIcon sx={{ color: iconColor }} />,
  },
  {
    title: 'Pacemaker & Device Monitoring',
    description: 'Ongoing management of implanted heart devices.',
    icon: <DevicesIcon sx={{ color: iconColor }} />,
  },
  {
    title: 'Hypertension, Diabetes & Cholesterol Management',
    description: 'Treatment and monitoring of high BP & lipids.',
    icon: <LocalHospitalIcon sx={{ color: iconColor }} />,
  },
];

const CardiologyServices = () => {
  return (
    <Box className="!py-10 !px-4 bg-gray-50">
      <Typography variant="h4" className="text-center text-[#C00008] font-bold !mb-6">
        Cardiology Services
      </Typography>

      <Box className="flex justify-center !mb-6">
        <FavoriteIcon sx={{ fontSize: 60, color: iconColor }} />
      </Box>

      <Grid container spacing={3} justifyContent="center">
        {cardiologyServices.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="h-full shadow hover:shadow-lg transition">
              <CardContent sx={{ display: 'flex', flexDirection: 'column',justifyContent:"center", gap: 1 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column',alignItems: 'center',justifyContent:"center", gap: 1 }}>
                  {service.icon}
                  <Typography variant="subtitle1" fontWeight={600}>
                    {service.title}
                  </Typography>
                </Box>
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
