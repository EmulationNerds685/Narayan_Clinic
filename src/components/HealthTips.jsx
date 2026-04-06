import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaBaby, FaAppleAlt, FaStethoscope } from 'react-icons/fa';

const tips = [
  {
    icon: <FaHeart />,
    title: "Heart Health",
    tip: "Maintain a low-sodium diet and include at least 30 minutes of brisk walking daily to keep your heart strong.",
    color: "bg-red-50 text-red-500",
  },
  {
    icon: <FaBaby />,
    title: "Maternity Care",
    tip: "Regular prenatal checkups and a balanced diet rich in folic acid and iron are essential for a healthy pregnancy.",
    color: "bg-pink-50 text-pink-500",
  },
  {
    icon: <FaAppleAlt />,
    title: "Healthy Lifestyle",
    tip: "Swap processed snacks for nuts and fruits. Small dietary changes can significantly lower blood pressure over time.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: <FaStethoscope />,
    title: "Early Detection",
    tip: "Regular screenings for blood sugar and cholesterol can help detect risks before they become serious conditions.",
    color: "bg-blue-50 text-[#30638E]",
  },
];

const HealthTips = () => {
  return (
    <section className="!py-16 sm:!py-24 !px-4 bg-white">
      <div className="max-w-6xl !mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between !mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#30638E] !mb-4">
              Helpful Health <span className="text-[#3CAEA3]">Insights</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              We believe in proactive healthcare. Here are some simple tips and insights from our experts to help you maintain a healthier lifestyle.
            </p>
          </div>
          <a
            href="/heart-health-videos"
            className="text-[#3CAEA3] font-bold text-sm hover:underline flex items-center gap-2"
          >
            Watch Video Tips &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl !p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center text-xl !mb-5`}>
                {item.icon}
              </div>
              <h3 className="font-bold text-gray-800 !mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {item.tip}
              </p>
              <div className="w-10 h-0.5 bg-gray-100 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthTips;
