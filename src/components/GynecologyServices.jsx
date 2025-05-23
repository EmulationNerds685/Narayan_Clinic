import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
} from '@mui/material';
import FemaleIcon from '@mui/icons-material/Female';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import FavoriteIcon from '@mui/icons-material/Favorite';
import OpacityIcon from '@mui/icons-material/Opacity';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import ScienceIcon from '@mui/icons-material/Science';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';

const gynecologyServices = [
  {
    title: 'Prenatal & Postnatal Care',
    description: 'Comprehensive care before and after childbirth.',
    icon: <ChildCareIcon sx={{ color: '#C00008' }} />,
  },
  {
    title: 'Annual Pelvic Exam & Pap Smear',
    description: 'Routine screening for women’s reproductive health.',
    icon: <HealthAndSafetyIcon sx={{ color: '#C00008' }} />,
  },
  {
    title: 'Fertility Assessment & Treatment',
    description: 'Evaluation and assistance for conception.',
    icon: <FavoriteIcon sx={{ color: '#C00008' }} />,
  },
  {
    title: 'Menstrual Disorder Management',
    description: 'Treatment for irregular or painful periods.',
    icon: <OpacityIcon sx={{ color: '#C00008' }} />,
  },
  {
    title: 'PCOS Support',
    description: 'Diagnosis and management of Polycystic Ovary Syndrome.',
    icon: <ScienceIcon sx={{ color: '#C00008' }} />,
  },
  {
    title: 'Birth Control Counseling',
    description: 'Guidance on contraceptive methods.',
    icon: <CheckCircleIcon sx={{ color: '#C00008' }} />,
  },
  {
    title: 'Menopause & Hormone Therapy',
    description: 'Support through hormonal changes.',
    icon: <MonitorHeartIcon sx={{ color: '#C00008' }} />,
  },
  {
    title: 'Minimally Invasive Surgery',
    description: 'Advanced surgical solutions with minimal downtime.',
    icon: <PregnantWomanIcon sx={{ color: '#C00008' }} />,
  },
  {
    title: 'STD Testing',
    description: 'Confidential and accurate screening for STDs.',
    icon: <VisibilityIcon sx={{ color: '#C00008' }} />,
  },
  {
    title: 'Ultrasound & Imaging',
    description: 'Imaging for diagnosis and monitoring.',
    icon: <MedicalServicesIcon sx={{ color: '#C00008' }} />,
  },
];

const GynecologyServices = () => {
  return (
    <Box className="!py-10 !px-4 bg-white">
      <Typography variant="h4" className="text-center text-[#C00008] font-bold !mb-6">
        Gynecology Services
      </Typography>

     <Box className="flex justify-center !mb-6">
  <FemaleIcon sx={{ fontSize: 60, color: '#C00008' }} />
</Box>


      <Grid container spacing={3} justifyContent="center">
        {gynecologyServices.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="h-full shadow hover:shadow-lg transition">
              <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Box sx={{ display: 'flex',flexDirection: 'column', alignItems: 'center', gap: 1 }}>
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

export default GynecologyServices;
