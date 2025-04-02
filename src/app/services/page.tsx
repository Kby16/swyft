import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative py-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-transparent"></div>
        <div className="container mx-auto relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Comprehensive Braze solutions to enhance your customer engagement and drive business growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Implementation Service */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-scale-in border border-gray-800">
              <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Expert Implementation</h3>
              <p className="text-gray-300 mb-6">
                Seamless integration of Braze into your existing systems with best practices and custom solutions.
              </p>
              <Link href="/contact" className="text-blue-600 hover:text-blue-500 transition-colors">
                Get Started →
              </Link>
            </div>

            {/* Strategy Service */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-scale-in border border-gray-800" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Strategy & Planning</h3>
              <p className="text-gray-300 mb-6">
                Data-driven strategies to optimize your customer engagement and maximize ROI.
              </p>
              <Link href="/contact" className="text-blue-600 hover:text-blue-500 transition-colors">
                Learn More →
              </Link>
            </div>

            {/* Optimization Service */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-scale-in border border-gray-800" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Performance Optimization</h3>
              <p className="text-gray-300 mb-6">
                Continuous improvement of your Braze campaigns through analytics and A/B testing.
              </p>
              <Link href="/contact" className="text-blue-600 hover:text-blue-500 transition-colors">
                Optimize Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600/10 via-blue-600/5 to-blue-600/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in">
            Ready to Transform Your Customer Experience?
          </h2>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Let's discuss how we can help you achieve your goals with Braze.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
} 