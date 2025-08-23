/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import DoctorsSection from "../components/DoctorSection";
import ServicesSection from "./Services";
import WhyChooseUs from "../components/ChooseUs";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Herocarousel from "../components/Herocarousel";
import Testimonials from "../components/Testimonials";
import ClinicFAQAccordion from "../components/ClinicFAQAccordion";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, delay: 0.3 } },
};

const HomePage = () => {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      <Helmet>
        <title>
          Narayan Heart & Maternity Centre | Best Cardiologist & Gynaecologist
          in Patna
        </title>
        <meta
          name="description"
          content="Narayan Heart & Maternity Centre in Patna offers expert cardiology by Dr. Sushant Kumar Pathak and maternity care by Dr. Jagriti Bhardwaj. Book your appointment today."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            name: "Narayan Heart & Maternity Centre",
            url: "https://narayanheartandmaternitycentre.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Patna",
              addressRegion: "Bihar",
              postalCode: "800001",
              addressCountry: "IN",
            },
            medicalSpecialty: ["Cardiology", "Gynaecology"],
            employee: [
              {
                "@type": "Physician",
                name: "Dr. Sushant Kumar Pathak",
                jobTitle: "Interventional Cardiologist",
                description:
                  "MBBS (Kolkata), MD (Medicine, PMCH Patna) - Gold Medalist, DM (Cardiology, IPGME&R)",
                affiliation: {
                  "@type": "Hospital",
                  name: "Ford Hospital, Patna",
                },
                alumniOf: ["PMCH Patna", "IPGME&R", "Kolkata University"],
              },
              {
                "@type": "Physician",
                name: "Dr. Jagriti Bhardwaj",
                jobTitle: "Gynecologist & Obstetrician",
                description:
                  "MBBS (SNMC, Agra), MS (OBG, PGIMS), DNB (OBG), Laparoscopic Surgeon, Infertility Specialist",
                alumniOf: [
                  "SNMC Agra",
                  "PGIMS",
                  "National Board of Examinations",
                ],
                affiliation: {
                  "@type": "Hospital",
                  name: "Sir Ganga Ram Hospital, New Delhi",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      <Box sx={{ padding: "15px 0 0 0" }}>
        <Box sx={{ marginTop: "10px", marginBottom: "10px" }}>
          <Herocarousel />
        </Box>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Box sx={{ marginTop: "10px", marginBottom: "10px" }}>
            <ServicesSection />
          </Box>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Box sx={{ marginTop: "10px", marginBottom: "10px" }}>
            <DoctorsSection />
          </Box>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Box sx={{ marginTop: "10px", marginBottom: "10px" }}>
            <WhyChooseUs />
          </Box>
          <Testimonials />
          <ClinicFAQAccordion />
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default HomePage;
