import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const NotFound = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center min-h-[70vh] !px-4 text-center"
        >
            <Helmet>
                <title>Page Not Found | Narayan Heart & Maternity Centre</title>
                <meta name="description" content="The page you are looking for does not exist." />
            </Helmet>

            <h1 className="text-8xl font-bold text-[#30638E] !mb-4">404</h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 !mb-3">
                Page Not Found
            </h2>
            <p className="text-gray-600 text-lg max-w-md !mb-8">
                Sorry, the page you're looking for doesn't exist or has been moved.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <Link
                    to="/"
                    className="bg-[#3CAEA3] hover:bg-[#2b8c82] text-white !px-6 !py-3 rounded-full font-medium transition-colors duration-300 text-center"
                >
                    Go to Home
                </Link>
                <Link
                    to="/book"
                    className="border-2 border-[#30638E] text-[#30638E] hover:bg-[#30638E] hover:text-white !px-6 !py-3 rounded-full font-medium transition-colors duration-300 text-center"
                >
                    Book Appointment
                </Link>
            </div>
        </motion.div>
    );
};

export default NotFound;
