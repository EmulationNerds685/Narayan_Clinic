import{Routes,Route} from 'react-router-dom'
import Aboutus from '../pages/Aboutus'
import Contact from '../pages/Contact'

import HomePage from '../pages/Homepage'
import Appointment from '../components/Appointment'
import CardiologyServices from '../components/CardiologyServices'
import GynecologyServices from '../components/GynecologyServices'
import LearnANCSection from '../pages/LearnANCSection'
import DoctorsSection from '../components/DoctorSection'
import AllService from '../pages/AllService'
const Approutes=()=>{
return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<Aboutus/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/services' element={<AllService/>} />
        <Route path='/Cardioservices' element={<CardiologyServices/>} />
        <Route path='/Gynoservices' element={<GynecologyServices/>} />
        <Route path='/anc' element={<LearnANCSection/>} />
        <Route path='/doctors' element={<DoctorsSection/>} />
        <Route path='/book' element={<Appointment/>} />
    </Routes>
)
}
export default Approutes