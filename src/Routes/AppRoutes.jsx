import{Routes,Route} from 'react-router-dom'
import Aboutus from '../pages/Aboutus'
import Contact from '../pages/Contact'
import ServicesSection from '../pages/Services'
import HomePage from '../pages/Homepage'
import Appointment from '../components/Appointment'
const Approutes=()=>{
return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<Aboutus/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/services' element={<ServicesSection/>} />
        <Route path='/book' element={<Appointment/>} />
    </Routes>
)
}
export default Approutes