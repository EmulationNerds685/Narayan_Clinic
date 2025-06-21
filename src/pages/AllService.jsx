import React from 'react'
import Cardiology from '../components/Cardiology'
import Gynaecology from '../components/Gynaecology'
import {Helmet} from 'react-helmet-async'
import CardiologyServices from '../components/CardiologyServices'
const AllService = () => {
  return (
    <>
   <Helmet>
  <title>Clinic Services | Cardiologist & Gynecologist Services in Patna</title>
  <meta
    name="description"
    content="Explore the medical services at Narayan Heart & Maternity Centre in Patna, including expert cardiology by Dr. Sushant Kumar Pathak and gynaecological care by Dr. Jagriti Bhardwaj."
  />
</Helmet>
    <CardiologyServices/>
    <Gynaecology/>
    </>
  )
}

export default AllService