import React from 'react';
import SeoHead from '../components/SeoHead';
import { motion } from 'framer-motion';
import { FaYoutube, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FEATURED_YOUTUBE_VIDEO_URL = 'https://www.youtube.com/embed/216IH8hKvKo';

const videoSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Understanding Heart Disease and Prevention | Dr. Sushant Kumar Pathak',
  description:
    'Cardiology education video by Dr. Sushant Kumar Pathak from Narayan Heart & Maternity Centre, Patna, explaining heart disease risk factors, symptoms and prevention.',
  thumbnailUrl: ['https://i.ytimg.com/vi/216IH8hKvKo/hqdefault.jpg'],
  uploadDate: '2025-01-01',
  duration: 'PT10M',
  publisher: {
    '@type': 'Organization',
    name: 'Narayan Heart & Maternity Centre',
    logo: {
      '@type': 'ImageObject',
      url: 'https://narayanheartandmaternitycentre.com/nc.png',
    },
  },
  contentUrl: 'https://www.youtube.com/watch?v=216IH8hKvKo',
  embedUrl: FEATURED_YOUTUBE_VIDEO_URL,
});

const faqSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When should I see a cardiologist in Patna?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You should see a cardiologist if you have chest pain, shortness of breath, palpitations, a history of heart attack, or risk factors like high blood pressure, diabetes, high cholesterol or a strong family history of heart disease.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can heart disease be prevented?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many heart problems can be delayed or prevented with regular check-ups, keeping blood pressure, sugar and cholesterol under control, not smoking, staying active and eating a balanced diet.',
      },
    },
  ],
});

const HeartHealthVideos = () => {
  return (
    <>
      <SeoHead
        title="Heart Health Videos by Dr. Sushant Kumar Pathak | Cardiologist in Patna"
        description="Heart health and cardiology videos by Dr. Sushant Kumar Pathak, Interventional Cardiologist at Narayan Heart & Maternity Centre, Patna. Learn about heart disease prevention, hypertension, cholesterol and warning signs."
        path="/heart-health-videos"
        type="video.other"
      >
        <script type="application/ld+json">{videoSchema}</script>
        <script type="application/ld+json">{faqSchema}</script>
      </SeoHead>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#30638E] to-[#1a3d5c] text-white !py-16 sm:!py-20 !px-4 sm:!px-6 overflow-hidden">
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold !mb-4 leading-tight">
            Heart Health Video Library for Patients
          </h1>
          <p className="text-base sm:text-lg text-blue-100 max-w-2xl !mx-auto leading-relaxed">
            Learn about heart disease prevention, blood pressure, cholesterol and more from
            Dr. Sushant Kumar Pathak, Interventional Cardiologist at Narayan Heart &amp; Maternity
            Centre, Patna.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="bg-gradient-to-b from-gray-50 to-white !py-16 sm:!py-20 !px-4 sm:!px-6 lg:!px-8">
        <div className="max-w-6xl !mx-auto !space-y-16 sm:!space-y-20">
          {/* Featured YouTube Playlist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-[2fr,1.2fr] gap-10 items-start"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#30638E] !mb-3 flex items-center gap-3">
                <FaYoutube className="text-red-600" />
                Cardiology Videos on YouTube
              </h2>
              <p className="text-gray-600 text-base sm:text-lg !mb-5">
                This curated playlist includes detailed cardiology talks and short heart health
                tips recorded by Dr. Sushant Kumar Pathak. You can watch directly here or open in
                YouTube for the full list.
              </p>
              <div className="relative w-full overflow-hidden rounded-2xl shadow-lg bg-black aspect-video">
                <iframe
                  src={FEATURED_YOUTUBE_VIDEO_URL}
                  title="Featured heart health video - Dr Sushant Kumar Pathak"
                  loading="lazy"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md border border-gray-100 !p-6 !space-y-4">
              <h3 className="text-xl font-semibold text-[#30638E]">
                About These Videos
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Videos are created to educate patients and families about common heart problems,
                risk factors, warning signs, and treatment options. They are for educational
                purposes and do not replace a personal consultation.
              </p>
              <ul className="list-disc !pl-5 text-gray-600 text-sm sm:text-base !space-y-1.5">
                <li>Understand symptoms like chest pain, breathlessness and palpitations.</li>
                <li>Learn how blood pressure, diabetes and cholesterol affect your heart.</li>
                <li>Know when to seek urgent medical help.</li>
                <li>Get practical lifestyle tips to protect your heart.</li>
              </ul>
              <a
                href="https://youtube.com/playlist?list=PLVq0ptpa6PFZFMJ_Ay81gtkSPTL6QfkWi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-[#FF0000] hover:bg-red-700 text-white text-sm font-semibold !px-4 !py-2.5 shadow-sm hover:shadow-md transition-all duration-200"
              >
                Watch full playlist on YouTube
              </a>
            </div>
          </motion.div>

          {/* Instagram Reels Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-[1.2fr,1.8fr] gap-10 items-start"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#30638E] !mb-3 flex items-center gap-3">
                <FaInstagram className="text-pink-500" />
                Quick Heart Tips on Instagram
              </h2>
              <p className="text-gray-600 text-base sm:text-lg !mb-4">
                Follow short reels for quick heart health reminders, myths vs facts, and simple
                lifestyle tips to keep your heart healthy.
              </p>
              <p className="text-gray-600 text-sm sm:text-base !mb-4">
                New reels are posted regularly on the cardiology insights page. Tap the button
                below to watch the latest clips.
              </p>
              <a
                href="https://www.instagram.com/cardiology.insights?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#F56040] via-[#E1306C] to-[#5851DB] text-white text-sm font-semibold !px-4 !py-2.5 shadow-sm hover:shadow-md transition-all duration-200"
              >
                View reels on Instagram
              </a>
            </div>
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 !p-6 !space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {['DVYy2CaAbdU', 'DU3QTISAdJC', 'DVnBjY1ARtJ'].map((code) => (
                  <div
                    key={code}
                    className="relative w-full aspect-[9/16] rounded-xl overflow-hidden bg-black"
                  >
                    <iframe
                      src={`https://www.instagram.com/reel/${code}/embed`}
                      title={`Instagram reel ${code}`}
                      loading="lazy"
                      className="w-full h-full border-0"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    />
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-xs sm:text-sm">
                Instagram reels may open controls or links in the Instagram app or website for the
                best viewing experience. For any symptoms or concerns discussed, please consult
                Dr. Sushant Kumar Pathak or your nearest cardiologist. Do not start or stop any
                medicines without medical advice.
              </p>
            </div>
          </motion.div>

          {/* SEO-friendly FAQ / Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 !p-6 sm:!p-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#30638E] !mb-4">
              Why Patient Education Videos Matter
            </h2>
            <p className="text-gray-700 text-sm sm:text-base !mb-3">
              Many heart conditions such as hypertension, coronary artery disease, heart failure
              and rhythm problems can be prevented or detected early when people understand the
              warning signs and risk factors. Video education helps patients and families remember
              information better and reduces fear around tests and procedures.
            </p>
            <p className="text-gray-700 text-sm sm:text-base !mb-3">
              At Narayan Heart &amp; Maternity Centre in Patna, we believe in explaining every
              step of your heart care journey. These videos are an extension of that effort so you
              can revisit important concepts at home and share them with your loved ones.
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              If you have specific questions after watching these videos, you can book an
              appointment with our cardiology team for a personalised consultation.
            </p>
          </motion.div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#30638E] !mb-3">
              Need to Discuss Your Heart Health?
            </h2>
            <p className="text-gray-600 text-sm sm:text-base !mb-5 max-w-2xl !mx-auto">
              Videos and reels are for general education. If you are experiencing symptoms or have
              concerns about your heart, please schedule a consultation so we can evaluate you in
              detail.
            </p>
            <Link
              to="/book"
              className="inline-flex items-center justify-center rounded-full bg-[#3CAEA3] hover:bg-[#2F9E94] text-white text-sm font-semibold !px-6 !py-3 shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-200"
            >
              Book cardiology appointment
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeartHealthVideos;

