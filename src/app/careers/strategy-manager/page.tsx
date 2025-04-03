'use client';

import { motion } from 'framer-motion';

export default function StrategyManagerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#1E1B4B] to-[#312E81] text-[#D1D5DB]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-black via-[#1E1B4B] to-[#312E81]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#312E81]/10 to-transparent" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 relative"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-[#5ECDEF]">
            Strategy Manager
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto mb-12 text-[#D1D5DB]">
            Location: New York, USA
          </p>
        </motion.div>
      </section>

      {/* Job Details Section */}
      <section className="py-16 bg-gradient-to-b from-[#312E81] via-[#1E1B4B] to-black">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#818CF8]/10 hover:border-[#5ECDEF]/30 transition-all duration-300 max-w-4xl mx-auto"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-[#5ECDEF]">Number of positions: 1</h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-[#5ECDEF]">Responsibilities:</h2>
              <ul className="space-y-4 text-[#D1D5DB]">
                {[
                  "Manage software advisory and implementation services to help companies unlock the value of technology investments as discrete services or comprehensive solutions.",
                  "Manage the overall project strategy by analyzing a wide variety of business solutions, selecting the most relevant tools/techniques to meet specific client requirements.",
                  "Leverage marketing cloud platforms and other marketing technologies to automate and streamline marketing processes for clients.",
                  "Segment the target audience to create personalized and effective marketing technology customizations.",
                  "Manage service excellence by identifying key issues for key accounts and developing recommendations.",
                  "Manage day-to-day interactions with executives and sponsors, develop and maintain contact with top decision makers.",
                  "Serve as a technical liaison between the business, project team and developers/testers.",
                  "Lead aspects of the proposal development process and contribute to pricing strategies.",
                  "Perform role of counselor and coach, actively participate in staff recruitment and retention activities."
                ].map((responsibility, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <svg className="w-6 h-6 text-[#5ECDEF] mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{responsibility}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Apply Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-8"
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-[#5ECDEF] text-black px-8 py-3 rounded-lg hover:bg-[#5ECDEF]/90 transition-colors"
              >
                Apply Now
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 