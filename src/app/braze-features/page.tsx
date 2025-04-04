'use client';

import { motion } from 'framer-motion';

export default function BrazeFeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#1E1B4B] to-[#312E81] text-[#D1D5DB] relative overflow-hidden">
      {/* Background Waves */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main Wave */}
        <div className="absolute bottom-0 left-0 w-full h-64">
          <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#1E1B4B" fillOpacity="0.4" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        {/* Secondary Wave */}
        <div className="absolute bottom-0 left-0 w-full h-48">
          <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#5ECDEF" fillOpacity="0.25" d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,176C672,192,768,192,864,176C960,160,1056,128,1152,128C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        {/* End of Page Wave */}
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-80"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#5ECDEF" fillOpacity="0.3" d="M0,256L48,240C96,224,192,192,288,186.7C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </motion.div>
      </div>

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
            Braze Features
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto mb-12 text-[#D1D5DB]">
            Discover the powerful features that make Braze the leading customer engagement platform
          </p>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gradient-to-b from-[#312E81] via-[#1E1B4B] to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                title: "Email Marketing",
                description: "Create and send personalized email campaigns with advanced segmentation, A/B testing, and real-time analytics."
              },
              {
                icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
                title: "Push Notifications",
                description: "Engage users with targeted push notifications across mobile and web platforms."
              },
              {
                icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
                title: "In-App Messages",
                description: "Deliver contextual messages to users while they're actively using your app."
              },
              {
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                title: "Analytics Dashboard",
                description: "Track campaign performance, user engagement, and conversion metrics in real-time."
              },
              {
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                title: "User Segmentation",
                description: "Create precise user segments based on behavior, demographics, and custom attributes."
              },
              {
                icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
                title: "Content Management",
                description: "Manage and personalize content across all channels with a unified content management system."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#818CF8]/10 hover:border-[#5ECDEF]/30 transition-all duration-300"
              >
                <div className="text-[#5ECDEF] mb-6">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#5ECDEF]">{feature.title}</h3>
                <p className="text-[#D1D5DB]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-16 bg-gradient-to-b from-black via-[#1E1B4B] to-[#312E81]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#818CF8]/10"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-[#5ECDEF]">Advanced Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#5ECDEF]">Automation & Workflows</h3>
                <ul className="space-y-3 text-[#D1D5DB]">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-2 text-[#5ECDEF] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Trigger-based messaging</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-2 text-[#5ECDEF] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Multi-step journey automation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-2 text-[#5ECDEF] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Custom event tracking</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#5ECDEF]">Integration & API</h3>
                <ul className="space-y-3 text-[#D1D5DB]">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-2 text-[#5ECDEF] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>REST API access</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-2 text-[#5ECDEF] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Webhook support</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-2 text-[#5ECDEF] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Third-party integrations</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 