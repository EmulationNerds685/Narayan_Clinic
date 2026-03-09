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

      {/* Heart Health Videos Preview */}
      <FadeInSection>
        <section className="bg-white !py-12 sm:!py-16 !px-4 sm:!px-6 lg:!px-8 border-t border-gray-100">
          <div className="max-w-6xl !mx-auto grid grid-cols-1 lg:grid-cols-[1.6fr,1.4fr] gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#30638E] !mb-3">
                Learn About Your Heart With Short Videos
              </h2>
              <p className="text-gray-600 text-sm sm:text-base !mb-4">
                Watch cardiology and heart health videos recorded by
                {" "}Dr. Sushant Kumar Pathak to better understand symptoms, tests and treatment options.
              </p>
              <p className="text-gray-600 text-sm sm:text-base !mb-5">
                These educational videos and reels help you and your family make informed decisions
                about heart care.
              </p>
              <a
                href="/heart-health-videos"
                className="inline-flex items-center justify-center rounded-full bg-[#3CAEA3] hover:bg-[#2F9E94] text-white text-sm font-semibold !px-6 !py-3 no-underline shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-200"
              >
                View heart health videos
              </a>
            </div>
            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg bg-black aspect-video">
              <img
                src="/ECGimage.webp"
                alt="Heart health education"
                className="w-full h-full object-cover opacity-80"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center !px-4">
                <span className="text-white text-sm sm:text-base font-semibold !mb-2">
                  Heart Health Video Library
                </span>
                <span className="text-white/80 text-xs sm:text-sm max-w-xs">
                  Short, easy-to-understand videos on cardiac health, risk factors and lifestyle tips.
                </span>
              </div>
            </div>
          </div>
        </section>
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
