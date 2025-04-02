'use client';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            About Swyft
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto mb-12">
            We&apos;re passionate about creating exceptional customer experiences through innovative Braze solutions
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                At Swyft, we&apos;re dedicated to helping businesses transform their customer engagement strategies through expert Braze implementation and optimization. Our mission is to empower companies to create meaningful connections with their customers.
              </p>
              <p className="text-gray-300">
                We believe that exceptional customer experiences are the key to business growth and success. Through our deep expertise in Braze and customer engagement, we help our clients achieve their goals and exceed customer expectations.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-800">
              <div className="text-blue-600 mb-6">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
              <p className="text-gray-300">
                To be the leading partner in Braze implementation and optimization, helping businesses create exceptional customer experiences that drive growth and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600/5 via-blue-600/10 to-blue-600/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-800">
              <div className="text-blue-600 mb-6">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Excellence</h3>
              <p className="text-gray-300">
                We strive for excellence in everything we do, delivering the highest quality solutions to our clients.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-800">
              <div className="text-blue-600 mb-6">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Innovation</h3>
              <p className="text-gray-300">
                We embrace innovation and stay at the forefront of technology to provide cutting-edge solutions.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-800">
              <div className="text-blue-600 mb-6">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Partnership</h3>
              <p className="text-gray-300">
                We believe in building strong partnerships with our clients, working together to achieve their goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-lg text-center border border-gray-800">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-blue-600/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">JD</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">John Doe</h3>
              <p className="text-gray-300">CEO & Founder</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-lg text-center border border-gray-800">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-blue-600/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">JS</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Jane Smith</h3>
              <p className="text-gray-300">Technical Lead</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-lg text-center border border-gray-800">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-blue-600/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">MJ</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Mike Johnson</h3>
              <p className="text-gray-300">Client Success Manager</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 