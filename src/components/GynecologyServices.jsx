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

const gynecologyServices = [
  { title: 'Prenatal & Postnatal Care', description: 'Comprehensive care before and after childbirth.' },
  { title: 'Annual Pelvic Exam & Pap Smear', description: 'Routine screening for women’s reproductive health.' },
  { title: 'Fertility Assessment & Treatment', description: 'Evaluation and assistance for conception.' },
  { title: 'Menstrual Disorder Management', description: 'Treatment for irregular or painful periods.' },
  { title: 'PCOS Support', description: 'Diagnosis and management of Polycystic Ovary Syndrome.' },
  { title: 'Birth Control Counseling', description: 'Guidance on contraceptive methods.' },
  { title: 'Menopause & Hormone Therapy', description: 'Support through hormonal changes.' },
  { title: 'Minimally Invasive Surgery', description: 'Advanced surgical solutions with minimal downtime.' },
  { title: 'STD Testing', description: 'Confidential and accurate screening for STDs.' },
  { title: 'Ultrasound & Imaging', description: 'Imaging for diagnosis and monitoring.' },
];

const GynecologyServices = () => {
  return (
    <Box className="!py-10 !px-4 bg-white">
      <Typography variant="h4" className="text-center text-[#C00008] font-bold !mb-6">
        Gynecology Services
      </Typography>

      <Box className="flex justify-center !mb-6">
        <FemaleIcon sx={{ fontSize: 60 }} color="primary" />
      </Box>

      <Grid container spacing={3} justifyContent="center">
        {gynecologyServices.map((service, index) => (
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

export default GynecologyServices;
