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

const reasons = [
  {
    icon: <GroupsIcon sx={{ fontSize: 50, color: '#d32f2f' }} />,
    title: 'Experienced Specialists',
    description: 'Highly skilled cardiologist and gynecologist with decades of combined experience.',
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: 50, color: '#d32f2f' }} />,
    title: '24/7 Emergency Care',
    description: 'Round-the-clock support for emergency heart or maternity needs.',
  },
  {
    icon: <MedicalServicesIcon sx={{ fontSize: 50, color: '#d32f2f' }} />,
    title: 'Modern Medical Equipment',
    description: 'Equipped with advanced diagnostic and monitoring tools.',
  },
  {
    icon: <FavoriteBorderIcon sx={{ fontSize: 50, color: '#d32f2f' }} />,
    title: 'Compassionate Care',
    description: 'We treat every patient like family with warmth and attention.',
  },
];

// Animation Variants
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

const WhyChooseUs = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#fff' }}>
      <Typography
        variant="h4"
        sx={{ textAlign: 'center', mb: 4, color: '#d32f2f', fontWeight: 'bold' }}
      >
        Why Choose Us?
      </Typography>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Grid container spacing={10} justifyContent="center">
          {reasons.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div variants={cardVariants} whileHover={{ scale: 1.05 }}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    height: '100%',
                    boxShadow: 2,
                    borderRadius: 3,
                  }}
                >
                  {item.icon}
                  <CardContent>
                    <Typography variant="h6" sx={{ mt: 2 }}>
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
