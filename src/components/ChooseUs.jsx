/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupsIcon from '@mui/icons-material/Groups';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { motion } from 'framer-motion';

const primaryColor = '#C00008';

const WhyChooseUs = () => {
  const addresss = [
    {
      icon: <GroupsIcon sx={{ fontSize: 50, color: primaryColor }} />,
      title: 'Specialized Expertise',
      description:
        'Care from top specialists — an Interventional Cardiologist and an Infertility & Laparoscopic Surgeon.',
    },
    {
      icon: <MedicalServicesIcon sx={{ fontSize: 50, color: primaryColor }} />,
      title: 'Advanced Diagnostic Tools',
      description:
        'ECG, ECHO, TMT, Holter, ABPM, and ultrasound services available in one place.',
    },
    {
      icon: <FavoriteBorderIcon sx={{ fontSize: 50, color: primaryColor }} />,
      title: 'Compassionate Women & Heart Care',
      description:
        'From pregnancy to post-CABG follow-up — care that’s empathetic and personalized.',
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 50, color: primaryColor }} />,
      title: 'Continuity of Care',
      description:
        'Long-term follow-ups, lifestyle counseling, and preventive screening built into your care.',
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
    <Box sx={{ padding: 4, backgroundColor: '#f9f9f9' }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          mb: 4,
          color: primaryColor,
          fontWeight: 'bold',
        }}
      >
        Why Choose Us?
      </Typography>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Grid container spacing={4} justifyContent="center">
          {addresss.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <motion.div variants={cardVariants} whileHover={{ scale: 1.05 }}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    height: '100%',
                    boxShadow: 2,
                    borderRadius: 3,
                    backgroundColor: '#ffffff',
                  }}
                >
                  {item.icon}
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{ mt: 2, color: primaryColor }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {item.description}
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

export default WhyChooseUs;
