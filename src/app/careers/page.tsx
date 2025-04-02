'use client';

export default function CareersPage() {
  const jobOpenings = [
    {
      title: "Strategy Manager",
      location: "New York, USA",
      description: "Lead customer engagement strategies and drive growth through data-driven insights.",
      requirements: [
        "5+ years of experience in customer engagement strategy",
        "Strong analytical and problem-solving skills",
        "Experience with Braze or similar platforms",
        "Excellent communication and leadership abilities"
      ],
      link: "/careers/strategy-manager"
    },
    {
      title: "Salesforce Cloud Architect",
      location: "New York, USA",
      description: "Design and implement scalable cloud solutions for enterprise clients.",
      requirements: [
        "8+ years of Salesforce development experience",
        "Expert in cloud architecture and integration",
        "Strong understanding of security best practices",
        "Experience with Braze integration"
      ],
      link: "/careers/salesforce-cloud-architect"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Join Our Team
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto mb-12">
            Be part of a team that&apos;s transforming customer experiences through innovative technology
          </p>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Current Openings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-800">
                <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                <p className="text-blue-400 mb-4">{job.location}</p>
                <p className="text-gray-300 mb-6">{job.description}</p>
                <h4 className="text-lg font-semibold mb-3">Requirements:</h4>
                <ul className="space-y-2 mb-6">
                  {job.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {req}
                    </li>
                  ))}
                </ul>
                <a
                  href={job.link}
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Details
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600/5 via-blue-600/10 to-blue-600/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Join Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-800">
              <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
              <p className="text-gray-300">
                Continuous learning and development opportunities to advance your career
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-800">
              <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Inclusive Culture</h3>
              <p className="text-gray-300">
                Join a diverse and collaborative environment where every voice matters
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-800">
              <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Work-Life Balance</h3>
              <p className="text-gray-300">
                Flexible working arrangements and comprehensive benefits package
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-12 shadow-lg border border-gray-800 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Start Your Journey</h2>
            <p className="text-xl text-gray-300 mb-8 text-center">
              Don&apos;t see the perfect role? We&apos;re always looking for talented individuals. Send us your resume and tell us about yourself.
            </p>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Tell us about yourself and why you&apos;d like to join our team"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
} 