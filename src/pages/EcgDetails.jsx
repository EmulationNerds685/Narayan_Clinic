import React from 'react';
import { Link } from 'react-router-dom';
import SeoHead from '../components/SeoHead';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaCalendarCheck, FaCheckCircle } from 'react-icons/fa';

const ecgFaqSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is ECG test painful?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, an ECG is a completely painless and non-invasive test. Electrodes are placed on the skin to record the electrical activity of your heart.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does an ECG take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ECG recording itself usually takes 5–10 minutes. Including preparation, you can expect to spend around 15–20 minutes at the clinic for this test.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I get an ECG done?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You should get an ECG if you have chest pain, shortness of breath, palpitations, dizziness, a known heart condition, or risk factors such as diabetes, high blood pressure or a strong family history of heart disease.',
      },
    },
  ],
});

const EcgDetails = () => {
  return (
    <>
      <SeoHead
        title="ECG Test in Patna | Electrocardiogram at Narayan Heart & Maternity Centre"
        description="Learn about ECG (electrocardiogram) tests at Narayan Heart & Maternity Centre in Patna – why it is done, how it is performed, preparation and what your results mean."
        path="/services/cardiology/ecg"
      >
        <script type="application/ld+json">{ecgFaqSchema}</script>
      </SeoHead>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#30638E] to-[#1a3d5c] text-white !py-12 sm:!py-16 !px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#3CAEA3] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl !mx-auto text-center"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold !mb-2">
            ECG Test (Electrocardiogram) in Patna
          </h1>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl !mx-auto">
            Painless, quick heart test performed by our cardiology team at Narayan Heart &amp; Maternity
            Centre under the care of Dr. Sushant Kumar Pathak.
          </p>
        </motion.div>
      </section>

      {/* Main content */}
      <section className="bg-gray-50 !py-10 sm:!py-14 !px-4 sm:!px-6">
        <div className="max-w-5xl !mx-auto !space-y-10">
          {/* What is ECG */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 !p-5 sm:!p-7 flex flex-col md:flex-row gap-6"
          >
            <div className="md:w-1/3">
              <img
                src="/ECGimage.webp"
                alt="ECG test being performed"
                loading="lazy"
                className="w-full h-48 sm:h-56 object-cover rounded-xl"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-xl font-bold text-gray-800 !mb-3">What is an ECG test?</h2>
              <p className="text-sm text-gray-600 !mb-3 leading-relaxed">
                An electrocardiogram (ECG or EKG) is a simple test that records the electrical activity
                of your heart. It helps your cardiologist detect irregular heart rhythms, previous heart
                attacks, thickening of the heart muscle and other abnormalities.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                At Narayan Heart &amp; Maternity Centre in Patna, ECG is usually the first test done if
                you have chest pain, breathlessness, palpitations or risk factors for heart disease.
              </p>
            </div>
          </motion.div>

          {/* Why and when section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 !p-5 sm:!p-7"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 !mb-2">
                  When do doctors advise an ECG?
                </h2>
                <ul className="!space-y-1.5 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#3CAEA3] !mt-0.5 flex-shrink-0 text-xs" />
                    <span>Chest pain, pressure or discomfort in the chest.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#3CAEA3] !mt-0.5 flex-shrink-0 text-xs" />
                    <span>Shortness of breath, unusual tiredness or dizziness.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#3CAEA3] !mt-0.5 flex-shrink-0 text-xs" />
                    <span>Irregular heartbeat or fast palpitations.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#3CAEA3] !mt-0.5 flex-shrink-0 text-xs" />
                    <span>High blood pressure, diabetes, high cholesterol or strong family history of heart disease.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#3CAEA3] !mt-0.5 flex-shrink-0 text-xs" />
                    <span>Pre-operative evaluation before major surgery.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 !mb-2">
                  Is ECG safe and painful?
                </h2>
                <p className="text-sm text-gray-600 !mb-2 leading-relaxed">
                  ECG is completely safe. No electricity is sent into your body. The machine only
                  reads the natural electrical signals produced by your heart.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  The test is painless. You may only feel the cold gel or small patches on the skin
                  where electrodes are placed.
                </p>
              </div>
            </div>
          </motion.div>

          {/* How to prepare / what to expect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 !p-5 sm:!p-7"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 !mb-2">
                  How should I prepare for an ECG?
                </h2>
                <ul className="!space-y-1.5 text-sm text-gray-600">
                  <li>Wear loose, comfortable clothing so chest access is easy.</li>
                  <li>Avoid applying oil, cream or powder on your chest on the day of test.</li>
                  <li>Bring your previous reports and list of medicines.</li>
                  <li>Inform the doctor if you have a pacemaker or previous heart procedures.</li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 !mb-2">
                  What happens during the test?
                </h2>
                <ol className="list-decimal !pl-5 text-sm text-gray-600 !space-y-1.5">
                  <li>You will be asked to lie down comfortably on the examination couch.</li>
                  <li>Small electrode patches are placed on your chest, arms and legs.</li>
                  <li>You will be asked to lie still and breathe normally for a few seconds.</li>
                  <li>The ECG machine records your heart&apos;s electrical activity as a graph.</li>
                  <li>After the test, electrodes are removed and you can return to normal activities.</li>
                </ol>
              </div>
            </div>
          </motion.div>

          {/* Summary + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#30638E] to-[#1a3d5c] rounded-2xl !p-6 sm:!p-8 text-white flex flex-col sm:flex-row justify-between items-center gap-4"
          >
            <div>
              <h2 className="text-lg sm:text-xl font-bold !mb-1">
                Need an ECG test in Patna?
              </h2>
              <p className="text-blue-100 text-sm !mb-1">
                Our team performs ECGs with proper explanation and guidance from Dr. Sushant Kumar
                Pathak.
              </p>
              <p className="text-blue-100 text-xs sm:text-sm">
                If you have chest pain or worrying symptoms, do not delay. In emergencies, please go
                to the nearest hospital emergency room immediately.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                to="/book"
                className="inline-flex items-center justify-center gap-2 bg-[#3CAEA3] hover:bg-[#2F9E94] text-white font-semibold text-sm !py-3 !px-6 rounded-xl shadow-md hover:shadow-lg active:scale-[0.98] transition-all"
              >
                <FaCalendarCheck /> Book ECG appointment
              </Link>
              <Link
                to="/Cardioservices"
                className="inline-flex items-center justify-center gap-2 border border-white/40 text-white hover:bg-white/10 font-semibold text-sm !py-3 !px-6 rounded-xl transition-all"
              >
                <FaHeartbeat /> View all cardiology services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default EcgDetails;

