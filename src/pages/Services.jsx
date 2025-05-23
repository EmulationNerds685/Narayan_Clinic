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
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FemaleIcon from '@mui/icons-material/Female';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import HealingIcon from '@mui/icons-material/Healing';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import UpdateIcon from '@mui/icons-material/Update';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { motion } from 'framer-motion';

const primaryColor = '#C00008';

const Services = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (card) => {
    setExpanded((prev) => (prev === card ? null : card));
  };

  const specialities = [
    {
      title: 'Cardiology',
      icon: <FavoriteIcon sx={{ fontSize: 50, color: primaryColor }} />,
      description:
        'Our cardiology department provides state-of-the-art diagnostics and treatment for a wide range of cardiovascular conditions. We focus on early detection, prevention, and personalized treatment plans.',
      id: 'cardiology',
      services: [
        { title: 'Electrocardiogram (ECG)', description: 'Records the electrical activity of your heart.', icon: <MonitorHeartIcon sx={{ color: primaryColor }} /> },
        { title: 'Echocardiogram', description: 'Ultrasound of the heart to assess structure and function.', icon: <HealingIcon sx={{ color: primaryColor }} /> },
        { title: 'Stress Test', description: 'Measures heart function under physical stress.', icon: <FitnessCenterIcon sx={{ color: primaryColor }} /> },
        { title: '24-Hour Holter Monitoring', description: 'Continuous heart rhythm monitoring for 24 hours.', icon: <UpdateIcon sx={{ color: primaryColor }} /> },
        { title: 'Heart Disease Risk Assessment', description: 'Evaluates your risk of developing heart disease.', icon: <AssessmentIcon sx={{ color: primaryColor }} /> },
        {
          title: 'Interventional Cardiology Consultation',
          description: [
            'Angioplasty',
            'Coronary and Peripheral Angiography',
            'BMV (Balloon Mitral Valvotomy)',
            'Pacemaker Implantation',
            'CRTP (Cardiac Resynchronization Therapy Pacemaker)',
            'TAVI (Transcatheter Aortic Valve Implantation)',
            'EVAR (Endovascular Aneurysm Repair)',
            'Treatment of Limb Ischemia',
            'Electrophysiology Studies',
          ],
          icon: <LocalHospitalIcon sx={{ color: primaryColor }} />,
        },
        { title: 'Lifestyle & Nutritional Counseling', description: 'Heart-healthy lifestyle and diet plans.', icon: <FitnessCenterIcon sx={{ color: primaryColor }} /> },
        { title: 'Pacemaker & Device Monitoring', description: 'Ongoing management of implanted heart devices.', icon: <UpdateIcon sx={{ color: primaryColor }} /> },
        { title: 'Hypertension, Diabetes & Cholesterol Management', description: 'Treatment and monitoring of high BP & lipids.', icon: <CheckCircleIcon sx={{ color: primaryColor }} /> },
      ],
    },
    {
      title: 'Gynecology',
      icon: <FemaleIcon sx={{ fontSize: 50, color: primaryColor }} />,
      description:
        'We offer a full spectrum of women’s health services, including routine exams, prenatal care, fertility evaluation, and menopause management. Our team is dedicated to providing compassionate, confidential care.',
      id: 'gynecology',
      services: [
        { title: 'Prenatal & Postnatal Care', description: 'Comprehensive care before and after childbirth.', icon: <LocalHospitalIcon sx={{ color: primaryColor }} /> },
        { title: 'Annual Pelvic Exam & Pap Smear', description: 'Routine screening for women’s reproductive health.', icon: <CheckCircleIcon sx={{ color: primaryColor }} /> },
        { title: 'Fertility Assessment & Treatment', description: 'Evaluation and assistance for conception.', icon: <FavoriteIcon sx={{ color: primaryColor }} /> },
        { title: 'Management of Menstrual Disorders', description: 'Treatment for irregular or painful periods.', icon: <HealingIcon sx={{ color: primaryColor }} /> },
        { title: 'PCOS Support', description: 'Diagnosis and management of Polycystic Ovary Syndrome.', icon: <MonitorHeartIcon sx={{ color: primaryColor }} /> },
        { title: 'Birth Control Counseling', description: 'Guidance on contraceptive methods.', icon: <AccessibilityNewIcon sx={{ color: primaryColor }} /> },
        { title: 'Menopause & Hormone Therapy', description: 'Support through hormonal changes.', icon: <AssessmentIcon sx={{ color: primaryColor }} /> },
        { title: 'Minimally Invasive Surgery', description: 'Advanced surgical solutions with minimal downtime.', icon: <LocalHospitalIcon sx={{ color: primaryColor }} /> },
        { title: 'STD Testing', description: 'Confidential and accurate screening for STDs.', icon: <CheckCircleIcon sx={{ color: primaryColor }} /> },
        { title: 'Ultrasound & Imaging Services', description: 'Imaging for diagnosis and monitoring.', icon: <MonitorHeartIcon sx={{ color: primaryColor }} /> },
      ],
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
        className="text-center font-extrabold !mb-10"
        sx={{ color: primaryColor, margin: '20px' }}
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
              <motion.div variants={cardVariants} whileHover={{ scale: 1.02 }}>
                <Card className="text-center shadow-md hover:shadow-lg transition duration-300 !h-full">
                  
                  <CardContent>
                    <Typography
                      variant="h6"
                      className="!mt-2 font-semibold"
                      sx={{ color: primaryColor }}
                    >
                      {item.title}
                    </Typography>

                    <Box sx={{ mt: 1, mb: 2 }}>{item.icon}</Box>

                    <Typography variant="body2" className="!mt-1 text-gray-700 !mb-4">
                      {item.description}
                    </Typography>

                    <Button
                      onClick={() => toggleExpand(item.id)}
                      endIcon={expanded === item.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                      sx={{
                        textTransform: 'none',
                        color: primaryColor,
                        '&:hover': {
                          backgroundColor: '#FDE6E6',
                        },
                      }}
                    >
                      {expanded === item.id ? 'Hide Services' : 'View Services'}
                    </Button>

                    <Collapse in={expanded === item.id} timeout="auto" unmountOnExit>
                      <Box sx={{ mt: 3, maxHeight: 600, overflowY: 'auto' }}>
                        <Grid container spacing={2}>
                          {item.services.map((service, idx) => (
                            <Grid item xs={12} sm={6} key={idx}>
                              <Card variant="outlined" sx={{ height: '100%' }}>
                               <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
  <Box sx={{ display: 'flex',flexDirection:"column", alignItems: 'center', gap: 1 }}>
    {service.icon}
    <Typography variant="subtitle1" fontWeight={600}>
      {service.title}
    </Typography>
  </Box>

  {Array.isArray(service.description) ? (
    <Box component="ul" sx={{ pl: 3, mt: 1, mb: 0 }}>
      {service.description.map((item, subIdx) => (
        <li key={subIdx} style={{ fontSize: '0.875rem', color: '#555', lineHeight: 1.5 }}>
          {item}
        </li>
      ))}
    </Box>
  ) : (
    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
      {service.description}
    </Typography>
  )}
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
