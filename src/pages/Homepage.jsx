import React, { Suspense } from "react";
import SeoHead from "../components/SeoHead";
import Herocarousel from "../components/Herocarousel";
import FadeInSection from "../components/FadeInSection";

// Lazy-load all below-the-fold sections
const ServicesSection = React.lazy(() => import("./Services"));
const DoctorsSection = React.lazy(() => import("../components/DoctorSection"));
const WhyChooseUs = React.lazy(() => import("../components/ChooseUs"));
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const ClinicFAQAccordion = React.lazy(() => import("../components/ClinicFAQAccordion"));

// ── Static JSON-LD schemas (computed once) ──

const organizationSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Narayan Heart & Maternity Centre",
  url: "https://narayanheartandmaternitycentre.com",
  logo: "https://narayanheartandmaternitycentre.com/nc.png",
  image: "https://narayanheartandmaternitycentre.com/nc.png",
  sameAs: [
    "https://maps.app.goo.gl/tsKEg2pHUXZzp1STA",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9708441467",
    contactType: "appointments",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
});

const clinicSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Narayan Heart & Maternity Centre",
  url: "https://narayanheartandmaternitycentre.com",
  logo: "https://narayanheartandmaternitycentre.com/nc.png",
  image: "https://narayanheartandmaternitycentre.com/nc.png",
  telephone: ["+91-9708441467", "+91-9836197624"],
  openingHours: ["Mo-Sa 09:00-10:30", "Mo-Sa 18:30-20:00"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "MIG, 245, Lohia Nagar, Kankarbagh",
    addressLocality: "Patna",
    addressRegion: "Bihar",
    postalCode: "800020",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.5945,
    longitude: 85.1554,
  },
  medicalSpecialty: ["Cardiology", "Gynaecology"],
  sameAs: [
    "https://maps.app.goo.gl/tsKEg2pHUXZzp1STA",
  ],
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
      <SeoHead
        title="Narayan Heart & Maternity Centre | Best Cardiologist & Gynaecologist in Patna"
        description="Narayan Heart & Maternity Centre in Patna offers expert cardiology by Dr. Sushant Kumar Pathak and maternity care by Dr. Jagriti Bhardwaj. Book your appointment today."
        path="/"
      >
        <script type="application/ld+json">{organizationSchema}</script>
        <script type="application/ld+json">{clinicSchema}</script>
      </SeoHead>

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
