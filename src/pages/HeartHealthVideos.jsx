import React, { useState, useEffect } from 'react';
import SeoHead from '../components/SeoHead';
import { motion, AnimatePresence } from 'framer-motion';
import { FaYoutube, FaTimes, FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const videoSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Health Education Videos | Narayan Heart & Maternity Centre',
  description:
    'Health education videos by Dr. Sushant Kumar Pathak (Cardiologist) and Dr. Jagriti Bhardwaj (Gynaecologist) from Narayan Heart & Maternity Centre, Patna, covering heart health and maternity care.',
  thumbnailUrl: ['https://narayanheartandmaternitycentre.com/nc.png'],
  uploadDate: '2025-01-01',
  publisher: {
    '@type': 'Organization',
    name: 'Narayan Heart & Maternity Centre',
    logo: {
      '@type': 'ImageObject',
      url: 'https://narayanheartandmaternitycentre.com/nc.png',
    },
  },
});

const faqSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When should I see a cardiologist or a gynaecologist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You should see Dr. Sushant Kumar Pathak (Cardiologist) for chest pain, palpitations, or heart risk factors. See Dr. Jagriti Bhardwaj (Gynaecologist) for pregnancy care, menstrual issues, or routine women\'s health checkups.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does patient education help in treatment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Education helps patients understand their conditions, leading to better compliance with treatment, early detection of warning signs, and improved health outcomes.',
      },
    },
  ],
});

const HeartHealthVideos = () => {
  const [shorts, setShorts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const fetchShorts = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/shorts');
        if (!response.ok) throw new Error('Failed to fetch shorts');
        const data = await response.json();
        setShorts(data.shorts || []);
      } catch (err) {
        console.error('Fetch error:', err);
        setError('Failed to fetch latest videos. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchShorts();
  }, []);

  return (
    <>
      <SeoHead
        title="Health Education Videos | Dr. Sushant & Dr. Jagriti | Patna"
        description="Health education videos by Dr. Sushant Kumar Pathak (Cardiologist) and Dr. Jagriti Bhardwaj (Gynaecologist) at Narayan Heart & Maternity Centre, Patna. Learn about heart health and pregnancy tips."
        path="/heart-health-videos"
        type="video.other"
      >
        <script type="application/ld+json">{videoSchema}</script>
        <script type="application/ld+json">{faqSchema}</script>
      </SeoHead>

      {/* Hero - Optimized Padding for Mobile */}
      <section className="relative bg-gradient-to-br from-[#30638E] to-[#1a3d5c] text-white !py-12 sm:!py-16 md:!py-20 !px-4 sm:!px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#3CAEA3] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#3CAEA3] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative max-w-4xl !mx-auto text-center"
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold !mb-4 leading-tight">
            Patient Education Video Library
          </h1>
          <p className="text-sm sm:text-lg text-blue-100 max-w-2xl !mx-auto leading-relaxed px-2">
            Expert insights on heart health and maternity care from Dr. Sushant Kumar Pathak and Dr. Jagriti Bhardwaj at Narayan Heart &amp; Maternity Centre, Patna.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="bg-gradient-to-b from-gray-50 to-white !py-10 sm:!py-16 !px-4 sm:!px-6 lg:!px-8">
        <div className="max-w-7xl !mx-auto !space-y-10 sm:!space-y-16">
          
          {/* Header Section */}
          <div className="text-center !mb-8 sm:!mb-10">
            <h2 className="text-xl sm:text-3xl font-bold text-[#30638E] !mb-3 flex items-center justify-center gap-3">
              <FaYoutube className="text-red-600 scale-90 sm:scale-100" />
              Latest Health Shorts
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-3xl !mx-auto px-4">
              Quick, informative clips recorded by our specialists to help you lead a healthier life.
            </p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex flex-col items-center justify-center !py-20">
              <div className="w-10 h-10 sm:w-12 sm:h-12 border-4 border-[#3CAEA3] border-t-transparent rounded-full animate-spin !mb-4"></div>
              <p className="text-[#30638E] font-medium text-sm sm:text-base">Fetching latest videos...</p>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="text-center !py-20 px-4">
              <p className="text-red-600 font-medium text-sm sm:text-base">{error}</p>
            </div>
          )}

          {/* Shorts Grid - Optimized Gaps for Mobile */}
          {!loading && !error && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
              {shorts.map((video) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative aspect-[9/16] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-black"
                  onClick={() => setSelectedVideo(video)}
                >
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay - Centered Play Button (Consistent size on touch) */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-600/90 sm:bg-red-600 text-white rounded-full flex items-center justify-center shadow-2xl transform transition-transform group-active:scale-95">
                      <FaPlay className="ml-1 text-lg sm:text-xl" />
                    </div>
                  </div>
                  {/* Fixed Title Bar for Mobile, Hover for Desktop */}
                  <div className="absolute bottom-0 inset-x-0 !p-3 sm:!p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent lg:transform lg:translate-y-full lg:group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-[10px] sm:text-sm font-semibold leading-tight line-clamp-2">
                      {video.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Why Videos Matter - More Compact on Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 !p-6 sm:!p-12"
          >
            <h2 className="text-xl sm:text-3xl font-bold text-[#30638E] !mb-6 sm:!mb-8 text-center sm:text-left">
              Why Education Matters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
              <div className="flex gap-4 sm:!space-y-4 sm:flex-col items-start">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#30638E]/10 rounded-lg sm:rounded-xl flex items-center justify-center text-[#30638E]">
                  <FaYoutube className="text-xl sm:text-2xl" />
                </div>
                <div>
                  <h3 className="text-base sm:text-xl font-bold text-[#30638E] !mb-1 sm:!mb-3">Cardiology Care</h3>
                  <p className="text-gray-700 text-xs sm:text-base leading-relaxed">
                    Heart conditions like hypertension can be managed better with knowledge. Dr. Sushant Kumar Pathak shares these videos to highlight cardiac warning signs.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 sm:!space-y-4 sm:flex-col items-start">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#3CAEA3]/10 rounded-lg sm:rounded-xl flex items-center justify-center text-[#3CAEA3]">
                  <FaYoutube className="text-xl sm:text-2xl" />
                </div>
                <div>
                  <h3 className="text-base sm:text-xl font-bold text-[#30638E] !mb-1 sm:!mb-3">Maternity Care</h3>
                  <p className="text-gray-700 text-xs sm:text-base leading-relaxed">
                    Pregnancy requires careful guidance. Dr. Jagriti Bhardwaj shares maternity tips and wellness advice through these shorts for expectant mothers.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-500 text-[11px] sm:text-sm !mt-8 italic border-l-3 border-[#3CAEA3] !pl-3">
              At Narayan Heart &amp; Maternity Centre Patna, we believe informed patients lead to better health outcomes.
            </p>
          </motion.div>

          {/* Call to Action - Touch Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-center bg-[#30638E] text-white rounded-2xl sm:rounded-3xl !p-8 sm:!p-16 shadow-xl"
          >
            <h2 className="text-xl sm:text-3xl font-bold !mb-3">
              Book a Consultation
            </h2>
            <p className="text-blue-100 text-xs sm:text-lg !mb-6 sm:!mb-8 max-w-xl !mx-auto">
              Schedule a visit with Dr. Sushant or Dr. Jagriti for personalized medical evaluation in Patna.
            </p>
            <Link
              to="/book"
              className="inline-flex items-center justify-center rounded-full bg-[#3CAEA3] hover:bg-white hover:text-[#30638E] text-white text-sm sm:text-base font-bold !px-8 sm:!px-12 !py-3.5 sm:!py-4 shadow-lg active:scale-95 transition-all w-full sm:w-auto"
            >
              Book Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Lightbox / Video Modal - Responsive Sizing */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center !p-2 sm:!p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-[420px] max-h-[85vh] aspect-[9/16] bg-black rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 sm:top-5 sm:right-5 z-[10001] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-black/50 hover:bg-black/80 text-white rounded-full transition-all border border-white/20 active:scale-90"
                onClick={() => setSelectedVideo(null)}
                aria-label="Close video"
              >
                <FaTimes size={18} className="sm:scale-110" />
              </button>
              <iframe
                src={`${selectedVideo.embedUrl}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeartHealthVideos;
