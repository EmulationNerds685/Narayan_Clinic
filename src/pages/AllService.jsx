import React from 'react'
import CardiologyServices from '../components/CardiologyServices'
import Gynaecology from '../components/Gynaecology'
import { Helmet } from 'react-helmet-async'

const AllService = () => {
  return (
    <>
      <Helmet>
        <title>Clinic Services | Cardiologist & Gynecologist Services in Patna</title>
        <meta
          name="description"
          content="Explore the medical services at Narayan Heart & Maternity Centre in Patna, including expert cardiology by Dr. Sushant Kumar Pathak and gynaecological care by Dr. Jagriti Bhardwaj."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Narayan Heart & Maternity Centre",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Patna",
              "addressRegion": "Bihar",
              "addressCountry": "IN"
            },
            "medicalSpecialty": ["Cardiology", "Gynaecology"],
            "department": [
              {
                "@type": "MedicalSpecialty",
                "name": "Cardiology",
                "physician": {
                  "@type": "Physician",
                  "name": "Dr. Sushant Kumar Pathak",
                  "jobTitle": "Cardiologist"
                }
              },
              {
                "@type": "MedicalSpecialty",
                "name": "Gynaecology",
                "physician": {
                  "@type": "Physician",
                  "name": "Dr. Jagriti Bhardwaj",
                  "jobTitle": "Gynaecologist"
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <CardiologyServices />
      <Gynaecology />
    </>
  )
}

export default AllService
