'use client';

import { motion } from 'framer-motion';

export default function BrazePricingPage() {
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
            Braze Pricing
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto mb-12 text-[#D1D5DB]">
            Choose the right plan for your business needs and scale as you grow
          </p>
        </motion.div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-gradient-to-b from-[#312E81] via-[#1E1B4B] to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Starter",
                price: "Custom",
                description: "Perfect for small businesses just getting started with customer engagement",
                features: [
                  "Up to 50,000 monthly active users",
                  "Basic messaging capabilities",
                  "Email and push notifications",
                  "Standard support",
                  "Basic analytics"
                ],
                highlighted: false
              },
              {
                title: "Growth",
                price: "Custom",
                description: "Ideal for growing businesses looking to scale their customer engagement",
                features: [
                  "Up to 500,000 monthly active users",
                  "Advanced messaging capabilities",
                  "Multi-channel messaging",
                  "Priority support",
                  "Advanced analytics and reporting",
                  "A/B testing",
                  "User segmentation"
                ],
                highlighted: true
              },
              {
                title: "Enterprise",
                price: "Custom",
                description: "For large organizations requiring advanced features and dedicated support",
                features: [
                  "Unlimited monthly active users",
                  "Full suite of messaging capabilities",
                  "Custom integrations",
                  "24/7 dedicated support",
                  "Advanced security features",
                  "Custom reporting",
                  "Dedicated account manager",
                  "SLA guarantees"
                ],
                highlighted: false
              }
            ].map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-black/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border ${
                  plan.highlighted
                    ? "border-[#5ECDEF] scale-105"
                    : "border-[#818CF8]/10"
                } hover:border-[#5ECDEF]/30 transition-all duration-300`}
              >
                <h3 className="text-2xl font-bold mb-2 text-[#5ECDEF]">{plan.title}</h3>
                <div className="text-3xl font-bold mb-4 text-[#5ECDEF]">{plan.price}</div>
                <p className="text-[#D1D5DB] mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg className="w-6 h-6 mr-2 text-[#5ECDEF] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#D1D5DB]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-6 bg-[#5ECDEF] text-black font-semibold rounded-lg hover:bg-[#5ECDEF]/90 transition-colors duration-300">
                  Contact Sales
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-gradient-to-b from-black via-[#1E1B4B] to-[#312E81]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#818CF8]/10"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-[#5ECDEF]">Flexible Pricing Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#5ECDEF]">Volume-Based Pricing</h3>
                <ul className="space-y-3 text-[#D1D5DB]">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-2 text-[#5ECDEF] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Pay only for what you use</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-2 text-[#5ECDEF] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Flexible monthly active user tiers</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-2 text-[#5ECDEF] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>No long-term commitments</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#5ECDEF]">Enterprise Solutions</h3>
                <ul className="space-y-3 text-[#D1D5DB]">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-2 text-[#5ECDEF] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Custom enterprise agreements</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-2 text-[#5ECDEF] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Dedicated support and training</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-2 text-[#5ECDEF] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Custom feature development</span>
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