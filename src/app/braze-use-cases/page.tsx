'use client';

import { motion } from 'framer-motion';

export default function BrazeUseCasesPage() {
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
            Braze Use Cases
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto mb-12 text-[#D1D5DB]">
            Discover how businesses are using Braze to drive customer engagement and growth
          </p>
        </motion.div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-16 bg-gradient-to-b from-[#312E81] via-[#1E1B4B] to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
                title: "E-commerce",
                description: "Drive sales with personalized product recommendations, abandoned cart recovery, and post-purchase engagement.",
                features: [
                  "Product recommendations",
                  "Cart abandonment recovery",
                  "Order confirmation flows",
                  "Customer feedback collection"
                ]
              },
              {
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Media & Entertainment",
                description: "Keep users engaged with content recommendations, new release notifications, and personalized experiences.",
                features: [
                  "Content recommendations",
                  "New release alerts",
                  "Viewing history tracking",
                  "Subscription management"
                ]
              },
              {
                icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
                title: "Financial Services",
                description: "Enhance customer experience with transaction alerts, account updates, and personalized financial insights.",
                features: [
                  "Transaction notifications",
                  "Account activity alerts",
                  "Financial education content",
                  "Service updates"
                ]
              },
              {
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                title: "Travel & Hospitality",
                description: "Create memorable experiences with booking confirmations, travel updates, and personalized recommendations.",
                features: [
                  "Booking confirmations",
                  "Travel itinerary updates",
                  "Local recommendations",
                  "Loyalty program engagement"
                ]
              },
              {
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
                title: "Education",
                description: "Support student success with course updates, assignment reminders, and educational content delivery.",
                features: [
                  "Course notifications",
                  "Assignment reminders",
                  "Educational content",
                  "Student engagement tracking"
                ]
              },
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Healthcare",
                description: "Improve patient engagement with appointment reminders, health tips, and care coordination.",
                features: [
                  "Appointment reminders",
                  "Health tips delivery",
                  "Care coordination",
                  "Patient feedback collection"
                ]
              }
            ].map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#818CF8]/10 hover:border-[#5ECDEF]/30 transition-all duration-300"
              >
                <div className="text-[#5ECDEF] mb-6">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={useCase.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#5ECDEF]">{useCase.title}</h3>
                <p className="text-[#D1D5DB] mb-6">{useCase.description}</p>
                <ul className="space-y-3">
                  {useCase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-6 h-6 mr-2 text-[#5ECDEF] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#D1D5DB]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gradient-to-b from-black via-[#1E1B4B] to-[#312E81]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#818CF8]/10"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-[#5ECDEF]">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-black/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-[#5ECDEF]">E-commerce Success</h3>
                  <p className="text-[#D1D5DB]">
                    "Using Braze, we&apos;ve seen a 40% increase in customer engagement and a 25% boost in conversion rates through personalized messaging and targeted campaigns."
                  </p>
                </div>
                <div className="bg-black/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-[#5ECDEF]">Media Platform Growth</h3>
                  <p className="text-[#D1D5DB]">
                    "Braze has helped us achieve a 60% increase in user retention and a 35% growth in daily active users through our content recommendation system."
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-black/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-[#5ECDEF]">Financial Services Impact</h3>
                  <p className="text-[#D1D5DB]">
                    "Our customer satisfaction scores improved by 45% after implementing Braze&apos;s personalized communication system for transaction alerts and account updates."
                  </p>
                </div>
                <div className="bg-black/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-[#5ECDEF]">Travel Industry Results</h3>
                  <p className="text-[#D1D5DB]">
                    "With Braze, we&apos;ve achieved a 50% increase in booking rates and a 30% improvement in customer loyalty through targeted travel recommendations."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 