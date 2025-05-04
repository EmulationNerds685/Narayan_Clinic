/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  useTheme,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import FemaleIcon from '@mui/icons-material/Female';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const theme = useTheme();

  const services = [
    {
      title: 'Antenatal & Postnatal Care',
      icon: <ChildFriendlyIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
      description:
        'Routine pregnancy checkups, ultrasound, and post-delivery care for mother and child.',
    },
    {
      title: 'Gynaecological Services',
      icon: <FemaleIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
      description:
        'Treatment of menstrual issues, menopause, infections, and infertility evaluations.',
    },
    {
      title: 'Cardiac Consultations',
      icon: <FavoriteIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
      description:
        'Hypertension, CAD, heart failure, and preventive cardiac care with follow-ups.',
    },
    {
      title: 'Cardiac Diagnostics',
      icon: <MonitorHeartIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
      description:
        'Tests including ECG, ECHO, TMT, Holter Monitoring and ABPM for precise heart evaluation.',
    },
    {
      title: 'Family Planning',
      icon: <AccessibilityNewIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
      description:
        'Contraceptive counseling, IUD insertions, oral/injectable options tailored to you.',
    },
    {
      title: 'Screening & Preventive Care',
      icon: <LocalHospitalIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
      description:
        'Pap smears, HPV testing, breast exams, and lifestyle guidance for better health.',
    },
  ];

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

  return (
    <Box className="px-4 py-20 bg-gray-50 " sx={{marginTop:"20px",marginBottom:"20px"}}>
      <Typography
        variant="h4"
        className="text-center font-extrabold text-blue-800 mb-10"
      sx={{margin:"20px"}}>
        Our Services
      </Typography>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Grid container spacing={6} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="text-center shadow-md hover:shadow-lg transition duration-300 h-full">
                  <CardMedia className="pt-6">
                    {service.icon}
                  </CardMedia>
                  <CardContent>
                    <Typography
                      variant="h6"
                      className="mt-2 font-semibold text-primary"
                    >
                      {service.title}
                    </Typography>
                    <Typography variant="body2" className="mt-1 text-gray-700">
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
