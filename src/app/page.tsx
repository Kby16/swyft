'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomePage() {
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
            Transform Your Customer Experience
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto mb-12 text-[#D1D5DB]">
            Leverage the power of <span className="text-[#5ECDEF] font-semibold">Braze</span> to create meaningful connections with your customers
          </p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <Link
              href="/contact"
              className="bg-[#5ECDEF] text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#5ECDEF]/90 transition-colors"
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-[#312E81] via-[#1E1B4B] to-black">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center text-[#5ECDEF]"
          >
            Why Choose Us
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Expert Implementation",
                description: "Our team of certified Braze experts ensures seamless integration and optimal performance"
              },
              {
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                title: "Data-Driven Strategy",
                description: "Leverage advanced analytics and insights to optimize your customer engagement"
              },
              {
                icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
                title: "Continuous Support",
                description: "24/7 technical support and regular maintenance to keep your campaigns running smoothly"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-black via-[#1E1B4B] to-[#312E81]">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black/50 backdrop-blur-sm rounded-xl p-12 shadow-lg border border-[#818CF8]/10 hover:border-[#5ECDEF]/30 transition-all duration-300 max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#5ECDEF]">Ready to Get Started?</h2>
            <p className="text-xl text-[#D1D5DB] mb-8">
              Let&apos;s discuss how we can help you transform your customer experience with <span className="text-[#5ECDEF] font-semibold">Braze</span>
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#5ECDEF] text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#5ECDEF]/90 transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
