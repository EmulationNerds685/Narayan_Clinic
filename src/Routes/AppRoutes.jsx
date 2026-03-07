import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, CircularProgress, Typography } from '@mui/material';

// Eagerly load the homepage since it's the most common entry point
import HomePage from '../pages/Homepage';

// Lazy-load all other routes for better initial load performance
const Aboutus = React.lazy(() => import('../pages/Aboutus'));
const Contact = React.lazy(() => import('../pages/Contact'));
const Appointment = React.lazy(() => import('../components/Appointment'));
const CardiologyServices = React.lazy(() => import('../components/CardiologyServices'));
const GynecologyServices = React.lazy(() => import('../components/GynecologyServices'));
const LearnANCSection = React.lazy(() => import('../pages/LearnANCSection'));
const DoctorsSection = React.lazy(() => import('../components/DoctorSection'));
const AllService = React.lazy(() => import('../pages/AllService'));
const CardiacDiagnosticsDetails = React.lazy(() => import('../pages/CardiacDiagnosticsDetails'));
const CardiologyFollowUp = React.lazy(() => import('../pages/CardiologyFollowUp'));
const PostnatalServicesModal = React.lazy(() => import('../pages/PostnatalServicesModal'));
const TermsAndConditions = React.lazy(() => import('../pages/TermsAndConditions'));
const PrivacyPolicy = React.lazy(() => import('../pages/PrivacyPolicy'));
const ShippingPolicy = React.lazy(() => import('../pages/ShippingPolicy'));
const CancellationRefund = React.lazy(() => import('../pages/CancellationRefund'));
const NotFound = React.lazy(() => import('../pages/NotFound'));

const LoadingFallback = () => (
    <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
        gap={2}
    >
        <CircularProgress sx={{ color: '#30638E' }} />
        <Typography variant="body2" color="text.secondary">
            Loading...
        </Typography>
    </Box>
);

const Approutes = () => {
    return (
        <Suspense fallback={<LoadingFallback />}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<Aboutus />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<AllService />} />
                <Route path="/Cardioservices" element={<CardiologyServices />} />
                <Route path="/Gynoservices" element={<GynecologyServices />} />
                <Route path="/anc" element={<LearnANCSection />} />
                <Route path="/doctors" element={<DoctorsSection />} />
                <Route path="/book" element={<Appointment />} />
                <Route path="/cdd" element={<CardiacDiagnosticsDetails />} />
                <Route path="/FollowUp" element={<CardiologyFollowUp />} />
                <Route path="/postnatal" element={<PostnatalServicesModal />} />
                <Route path="/terms" element={<TermsAndConditions />} />
                <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                <Route path="/shipping" element={<ShippingPolicy />} />
                <Route path="/cancellationRefund" element={<CancellationRefund />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
};

export default Approutes;
