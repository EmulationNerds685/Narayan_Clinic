/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Collapse,
  Button,
  useTheme,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FemaleIcon from '@mui/icons-material/Female';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { motion } from 'framer-motion';

const Services = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (card) => {
    setExpanded((prev) => (prev === card ? null : card));
  };

  const specialities = [
    {
      title: 'Cardiology',
      icon: <FavoriteIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
      description:
        'Our cardiology department provides state-of-the-art diagnostics and treatment for a wide range of cardiovascular conditions. We focus on early detection, prevention, and personalized treatment plans.',
      services: [
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
      ],
      id: 'cardiology',
    },
    {
      title: 'Gynecology',
      icon: <FemaleIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
      description:
        'We offer a full spectrum of women’s health services, including routine exams, prenatal care, fertility evaluation, and menopause management. Our team is dedicated to providing compassionate, confidential care.',
      services: [
        { title: 'Prenatal & Postnatal Care', description: 'Comprehensive care before and after childbirth.' },
        { title: 'Annual Pelvic Exam & Pap Smear', description: 'Routine screening for women’s reproductive health.' },
        { title: 'Fertility Assessment & Treatment', description: 'Evaluation and assistance for conception.' },
        { title: 'Management of Menstrual Disorders', description: 'Treatment for irregular or painful periods.' },
        { title: 'PCOS Support', description: 'Diagnosis and management of Polycystic Ovary Syndrome.' },
        { title: 'Birth Control Counseling', description: 'Guidance on contraceptive methods.' },
        { title: 'Menopause & Hormone Therapy', description: 'Support through hormonal changes.' },
        { title: 'Minimally Invasive Surgery', description: 'Advanced surgical solutions with minimal downtime.' },
        { title: 'STD Testing', description: 'Confidential and accurate screening for STDs.' },
        { title: 'Ultrasound & Imaging Services', description: 'Imaging for diagnosis and monitoring.' },
      ],
      id: 'gynecology',
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
    <Box className="!px-4 !py-20 bg-gray-50" sx={{ marginTop: '20px', marginBottom: '20px' }}>
      <Typography
        variant="h4"
        className="text-center font-extrabold text-blue-800 !mb-10"
        sx={{ margin: '20px' }}
      >
        Our Specialities
      </Typography>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Grid container spacing={6} justifyContent="center">
          {specialities.map((item) => (
            <Grid item xs={12} sm={6} key={item.id}>
              <motion.div variants={cardVariants} whileHover={{ scale: 1.03 }}>
                <Card className="text-center shadow-md hover:shadow-lg transition duration-300 h-full">
                  <CardMedia className="!pt-6">{item.icon}</CardMedia>
                  <CardContent>
                    <Typography variant="h6" className="!mt-2 font-semibold text-primary">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" className="!mt-1 text-gray-700 !mb-4">
                      {item.description}
                    </Typography>

                    <Button
                      onClick={() => toggleExpand(item.id)}
                      endIcon={expanded === item.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                      sx={{ textTransform: 'none' }}
                    >
                      {expanded === item.id ? 'Hide Services' : 'View Services'}
                    </Button>

                    <Collapse in={expanded === item.id} timeout="auto" unmountOnExit>
                      <Box sx={{ mt: 3, maxHeight: 400, overflowY: 'auto' }}>
                        <Grid container spacing={2}>
                          {item.services.map((service, idx) => (
                            <Grid item xs={12} sm={6} key={idx}>
                              <Card variant="outlined" sx={{ height: '100%' }}>
                                <CardContent>
                                  <MedicalServicesIcon
                                    color="primary"
                                    sx={{ fontSize: 30, mb: 1 }}
                                  />
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
                    </Collapse>
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

export default Services;
