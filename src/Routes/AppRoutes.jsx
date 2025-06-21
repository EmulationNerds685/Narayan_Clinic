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
import CardiacDiagnosticsDetails from '../pages/CardiacDiagnosticsDetails'
import CardiologyFollowUp from '../pages/CardiologyFollowUp'
import PostnatalServicesModal from '../pages/PostnatalServicesModal'
import TermsAndConditions from '../pages/TermsAndConditions'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import ShippingPolicy from '../pages/ShippingPolicy'
import CancellationRefund from '../pages/CancellationRefund'
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
        <Route path='/cdd' element={<CardiacDiagnosticsDetails/>} />
        <Route path='/FollowUp' element={<CardiologyFollowUp/>} />
        <Route path='/postnatal' element={<PostnatalServicesModal/>} />
        <Route path='/terms' element={<TermsAndConditions/>} />
        <Route path='/privacypolicy' element={<PrivacyPolicy/>} />
        <Route path='/shipping' element={<ShippingPolicy/>} />
        <Route path='/cancellationRefund' element={<CancellationRefund/>} />
    </Routes>
)
}
export default Approutes



