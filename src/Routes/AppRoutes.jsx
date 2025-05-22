import{Routes,Route} from 'react-router-dom'
import Aboutus from '../pages/Aboutus'
import Contact from '../pages/Contact'
import ServicesSection from '../pages/Services'
import HomePage from '../pages/Homepage'
import Appointment from '../components/Appointment'
import CardiologyServices from '../components/CardiologyServices'
import GynecologyServices from '../components/GynecologyServices'
import LearnANCSection from '../pages/LearnANCSection'
const Approutes=()=>{
return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<Aboutus/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/services' element={<ServicesSection/>} />
        <Route path='/Cardioservices' element={<CardiologyServices/>} />
        <Route path='/Gynoservices' element={<GynecologyServices/>} />
        <Route path='/anc' element={<LearnANCSection/>} />
        <Route path='/book' element={<Appointment/>} />
    </Routes>
)
}
export default Approutes