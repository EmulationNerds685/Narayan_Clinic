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
        'Electrocardiogram (ECG)',
        'Echocardiogram',
        'Stress Test',
        '24-Hour Holter Monitoring',
        'Cardiac MRI & CT',
        'Heart Disease Risk Assessment',
        'Interventional Cardiology Consultation',
        'Lifestyle & Nutritional Counseling',
        'Pacemaker & Device Monitoring',
        'Hypertension & Cholesterol Management',
      ],
      id: 'cardiology',
    },
    {
      title: 'Gynecology',
      icon: <FemaleIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
      description:
        'We offer a full spectrum of women’s health services, including routine exams, prenatal care, fertility evaluation, and menopause management. Our team is dedicated to providing compassionate, confidential care.',
      services: [
        'Prenatal & Postnatal Care',
        'Annual Pelvic Exam & Pap Smear',
        'Fertility Assessment & Treatment',
        'Management of Menstrual Disorders',
        'Polycystic Ovary Syndrome (PCOS) Support',
        'Birth Control Counseling',
        'Menopause & Hormone Therapy',
        'Minimally Invasive Gynecologic Surgery',
        'Sexual Health & STD Testing',
        'Ultrasound & Imaging Services',
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
    <Box className="px-4 py-20 bg-gray-50" sx={{ marginTop: '20px', marginBottom: '20px' }}>
      <Typography
        variant="h4"
        className="text-center font-extrabold text-blue-800 mb-10"
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
                  <CardMedia className="pt-6">{item.icon}</CardMedia>
                  <CardContent>
                    <Typography
                      variant="h6"
                      className="mt-2 font-semibold text-primary"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="mt-1 text-gray-700 mb-4"
                    >
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
                      <Box className="mt-4 text-left pl-4" sx={{ maxHeight: 200, overflowY: 'auto' }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                          Available Services:
                        </Typography>
                        <ul className="list-disc text-gray-700">
                          {item.services.map((service, idx) => (
                            <li key={idx}>{service}</li>
                          ))}
                        </ul>
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
