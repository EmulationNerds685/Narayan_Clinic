/* eslint-disable no-unused-vars */
import React from "react";
import { Box } from "@mui/material";
import DoctorsSection from "../components/DoctorSection";
import ServicesSection from "./Services";
import WhyChooseUs from "../components/ChooseUs";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Herocarousel from "../components/Herocarousel";
import Testimonials from "../components/Testimonials";
import ClinicFAQAccordion from "../components/ClinicFAQAccordion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
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

      {/* Hero Carousel — no extra padding, full bleed */}
      <Herocarousel />

      {/* Services Section */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <ServicesSection />
      </motion.div>

      {/* Doctors Section */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <DoctorsSection />
      </motion.div>

      {/* Why Choose Us */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <WhyChooseUs />
      </motion.div>

      {/* Testimonials */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Testimonials />
      </motion.div>

      {/* FAQ */}
      <ClinicFAQAccordion />
    </motion.div>
  );
};

export default HomePage;
