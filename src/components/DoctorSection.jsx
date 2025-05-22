/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';

const doctors = [
  {
    name: 'Dr. Sushant Kumar Pathak',
    specialty: 'Interventional Cardiologist',
    image: 'skp.jpg',
    qualifications: 'MBBS (Kolkata), MD (Medicine, PMCH Patna) - Gold Medalist, DM (Cardiology, IPGME&R)',
    experience: 'Senior Consultant, Ford Hospital, Patna\nAssistant Director, IGIC, PMCH',
  },
  {
    name: 'Dr. Jagriti Bhardwaj',
    specialty: 'Gynecologist & Obstetrician',
    image: 'jbp.png',
    qualifications: 'MBBS (SNMC, Agra), MS (OBG, PGIMS), DNB (OBG)',
    experience: 'SIR Ganga Ram Hospital, New Delhi\nEx. Senior, PGIMS New Delhi\nEx. Assistant Professor, HIMS, Dehradun',
    specializations: 'Laparoscopic Surgeon, Infertility Specialist',
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

const DoctorsSection = () => {
  const theme = useTheme();

  return (
    <Box sx={{ padding: 4, backgroundColor: theme.palette.background.default }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          mb: 4,
          color: theme.palette.primary.dark,
          fontWeight: 'bold',
        }}
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
                <Card
                  sx={{
                    maxWidth: 345,
                    mx: 'auto',
                    boxShadow: 3,
                    backgroundColor: '#fff',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={doc.image}
                    alt={doc.name}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      sx={{ color: theme.palette.primary.main }}
                    >
                      {doc.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {doc.specialty}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      <strong>Qualifications:</strong> {doc.qualifications}
                    </Typography>
                    {doc.specializations && (
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        <strong>Specializations:</strong> {doc.specializations}
                      </Typography>
                    )}
                    <Typography variant="body2" sx={{ mt: 1, whiteSpace: 'pre-line' }}>
                      <strong>Experience:</strong> {doc.experience}
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
