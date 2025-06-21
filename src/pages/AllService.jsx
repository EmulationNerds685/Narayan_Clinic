import React from 'react'
import CardiologyServices from '../components/CardiologyServices'
import GynecologyServices from '../components/GynecologyServices'
import {Helmet} from 'react-helmet-async'
const AllService = () => {
  return (
    <>
   <Helmet>
  <title>Clinic Services | Cardiology & Gynaecology in Patna</title>
  <meta
    name="description"
    content="Explore the medical services at Narayan Heart & Maternity Centre in Patna, including expert cardiology by Dr. Sushant Kumar Pathak and gynaecological care by Dr. Jagriti Bhardwaj."
  />
</Helmet>
    <CardiologyServices/>
    <GynecologyServices/>
    </>
  )
}

export default AllService