'use client';

import { motion } from 'framer-motion';

export default function SalesforceCloudArchitectPage() {
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
            Salesforce Cloud Architect
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
              <h2 className="text-2xl font-bold mb-4 text-[#5ECDEF]">Job Duties:</h2>
              <ul className="space-y-4 text-[#D1D5DB]">
                {[
                  "Deliver software solutions using Salesforce Marketing Cloud, including email, SMS, push notifications, and social media marketing.",
                  "Develop scalable solutions using Salesforce Marketing Cloud and other marketing technologies.",
                  "Integrate with middleware tools and other systems to create seamless marketing workflows.",
                  "Analyze business requirements and translate them into technical specifications.",
                  "Design and implement complex marketing automation workflows.",
                  "Optimize marketing campaigns for better performance and ROI.",
                  "Provide technical leadership and mentorship to junior developers."
                ].map((duty, index) => (
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
                    <span>{duty}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-[#5ECDEF]">Required Qualifications:</h2>
              <ul className="space-y-4 text-[#D1D5DB]">
                {[
                  "Master's degree in Computer Science, Information Technology, or related field.",
                  "8+ years of experience in Salesforce development and architecture.",
                  "Strong understanding of cloud architecture and integration patterns.",
                  "Experience with Braze or similar marketing automation platforms."
                ].map((qualification, index) => (
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
                    <span>{qualification}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-[#5ECDEF]">Employee Referral Program:</h2>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true }}
                className="bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-[#818CF8]/10 hover:border-[#5ECDEF]/30 transition-all duration-300"
              >
                <p className="text-[#D1D5DB] mb-4">
                  Current employees are eligible for a referral bonus of $5,000 for successful referrals of qualified candidates.
                </p>
                <p className="text-[#D1D5DB] mb-4">
                  The referral program is designed to help us find the best talent through our existing network of professionals.
                </p>
                <p className="text-[#D1D5DB]">
                  To submit a referral, please contact our HR department with the candidate's details and resume.
                </p>
              </motion.div>
            </motion.div>

            {/* Apply Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
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