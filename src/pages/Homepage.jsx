/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import DoctorsSection from "../components/DoctorSection";
import ServicesSection from "./Services";
import WhyChooseUs from "../components/ChooseUs";
import { motion } from "framer-motion";

import Herocarousel from "../components/Herocarousel";



const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, delay: 0.3 } },
};

const HomePage = () => {
  

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      <Box sx={{ padding: "15px 0 0 0" }}>
       <Box sx={{marginTop:"10px",marginBottom:"10px"}}>

        <Herocarousel />
       </Box>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        ><Box sx={{marginTop:"10px",marginBottom:"10px"}}>
          <ServicesSection />
          </Box>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        ><Box sx={{marginTop:"10px",marginBottom:"10px"}}>
          <DoctorsSection /></Box>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        ><Box sx={{marginTop:"10px",marginBottom:"10px"}}>
          <WhyChooseUs /></Box>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default HomePage;
