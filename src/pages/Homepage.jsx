import React, { Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Herocarousel from "../components/Herocarousel";
import FadeInSection from "../components/FadeInSection";

// Lazy-load all below-the-fold sections
const ServicesSection = React.lazy(() => import("./Services"));
const DoctorsSection = React.lazy(() => import("../components/DoctorSection"));
const WhyChooseUs = React.lazy(() => import("../components/ChooseUs"));
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const ClinicFAQAccordion = React.lazy(() => import("../components/ClinicFAQAccordion"));

// Static JSON-LD – computed once, no re-renders
const schemaJsonLd = JSON.stringify({
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
});

const SectionFallback = () => (
  <div style={{ minHeight: "200px" }} />
);

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>
          Narayan Heart &amp; Maternity Centre | Best Cardiologist &amp; Gynaecologist
          in Patna
        </title>
        <meta
          name="description"
          content="Narayan Heart & Maternity Centre in Patna offers expert cardiology by Dr. Sushant Kumar Pathak and maternity care by Dr. Jagriti Bhardwaj. Book your appointment today."
        />
        <script type="application/ld+json">{schemaJsonLd}</script>
      </Helmet>

      {/* Hero Carousel — no extra padding, full bleed */}
      <Herocarousel />

      {/* Services Section */}
      <FadeInSection>
        <Suspense fallback={<SectionFallback />}>
          <ServicesSection />
        </Suspense>
      </FadeInSection>

      {/* Doctors Section */}
      <FadeInSection>
        <Suspense fallback={<SectionFallback />}>
          <DoctorsSection />
        </Suspense>
      </FadeInSection>

      {/* Why Choose Us */}
      <FadeInSection>
        <Suspense fallback={<SectionFallback />}>
          <WhyChooseUs />
        </Suspense>
      </FadeInSection>

      {/* Testimonials */}
      <FadeInSection>
        <Suspense fallback={<SectionFallback />}>
          <Testimonials />
        </Suspense>
      </FadeInSection>

      {/* FAQ */}
      <FadeInSection>
        <Suspense fallback={<SectionFallback />}>
          <ClinicFAQAccordion />
        </Suspense>
      </FadeInSection>
    </div>
  );
};

export default HomePage;
