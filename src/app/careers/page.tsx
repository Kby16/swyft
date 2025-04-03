'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null as File | null,
    coverLetter: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  const jobOpenings = [
    {
      title: "Salesforce Cloud Architect",
      location: "New York, USA",
      description: "Lead the design and implementation of Salesforce solutions for our clients.",
      requirements: [
        "5+ years of Salesforce architecture experience",
        "Strong knowledge of cloud technologies",
        "Excellent communication skills"
      ],
      link: "/careers/salesforce-cloud-architect"
    },
    {
      title: "Strategy Manager",
      location: "New York, USA",
      description: "Develop and implement strategic initiatives to drive business growth.",
      requirements: [
        "3+ years of strategy consulting experience",
        "Strong analytical skills",
        "Project management expertise"
      ],
      link: "/careers/strategy-manager"
    }
  ];

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
            Join Our Team
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto mb-12 text-[#D1D5DB]">
            Be part of a team that&apos;s transforming customer experiences through innovative technology
          </p>
        </motion.div>
      </section>

      {/* Job Openings Section */}
      <section className="py-16 bg-gradient-to-b from-[#312E81] via-[#1E1B4B] to-black">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center text-[#5ECDEF]"
          >
            Current Openings
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-black/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#818CF8]/10 hover:border-[#5ECDEF]/30 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-[#5ECDEF]">{job.title}</h3>
                <p className="text-[#D1D5DB] mb-4">{job.location}</p>
                <p className="text-[#D1D5DB] mb-6">{job.description}</p>
                <h4 className="text-xl font-bold mb-4 text-[#5ECDEF]">Requirements</h4>
                <ul className="list-disc list-inside space-y-2 text-[#D1D5DB] mb-6">
                  {job.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
                <motion.a
                  href={job.link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-[#5ECDEF] text-black px-6 py-3 rounded-lg hover:bg-[#5ECDEF]/90 transition-colors"
                >
                  Apply Now
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-gradient-to-b from-black via-[#1E1B4B] to-[#312E81]">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center text-[#5ECDEF]"
          >
            Why Join Us
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Growth Opportunities",
                description: "Continuous learning and development opportunities to advance your career"
              },
              {
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                title: "Innovative Culture",
                description: "Work in a dynamic environment that encourages creativity and innovation"
              },
              {
                icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
                title: "Competitive Benefits",
                description: "Comprehensive benefits package including health insurance and 401(k)"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-black/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#818CF8]/10 hover:border-[#5ECDEF]/30 transition-all duration-300"
              >
                <div className="text-[#5ECDEF] mb-6">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#5ECDEF]">{value.title}</h3>
                <p className="text-[#D1D5DB]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 bg-gradient-to-b from-[#312E81] via-[#1E1B4B] to-black">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black/50 backdrop-blur-sm rounded-xl p-12 shadow-lg border border-[#818CF8]/10 hover:border-[#5ECDEF]/30 transition-all duration-300 max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-[#5ECDEF]">Start Your Journey</h2>
            <p className="text-xl text-[#D1D5DB] mb-8 text-center">
              Don&apos;t see the perfect role? We&apos;re always looking for talented individuals. Send us your resume and tell us about yourself.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#D1D5DB] mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black/50 border border-[#818CF8]/10 rounded-lg px-4 py-2 text-[#D1D5DB] focus:border-[#5ECDEF]/30 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#D1D5DB] mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black/50 border border-[#818CF8]/10 rounded-lg px-4 py-2 text-[#D1D5DB] focus:border-[#5ECDEF]/30 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-[#D1D5DB] mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-black/50 border border-[#818CF8]/10 rounded-lg px-4 py-2 text-[#D1D5DB] focus:border-[#5ECDEF]/30 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="resume" className="block text-[#D1D5DB] mb-2">Resume</label>
                <input
                  type="file"
                  id="resume"
                  onChange={handleFileChange}
                  className="w-full bg-black/50 border border-[#818CF8]/10 rounded-lg px-4 py-2 text-[#D1D5DB] focus:border-[#5ECDEF]/30 focus:outline-none"
                  accept=".pdf,.doc,.docx"
                />
              </div>
              <div>
                <label htmlFor="coverLetter" className="block text-[#D1D5DB] mb-2">Cover Letter</label>
                <textarea
                  id="coverLetter"
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                  className="w-full bg-black/50 border border-[#818CF8]/10 rounded-lg px-4 py-2 text-[#D1D5DB] focus:border-[#5ECDEF]/30 focus:outline-none h-32"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#5ECDEF] text-black px-6 py-3 rounded-lg hover:bg-[#5ECDEF]/90 transition-colors"
              >
                Submit Application
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 