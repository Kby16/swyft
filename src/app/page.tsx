export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Transform Your Customer Experience
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto mb-12">
            Expert Braze implementation and optimization services to help you deliver exceptional customer engagement
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/services"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Our Services
            </a>
            <a
              href="/contact"
              className="bg-white/5 backdrop-blur-sm text-white px-8 py-3 rounded-lg border border-gray-700 hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-800">
              <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Implementation</h3>
              <p className="text-gray-300">
                Our team of certified Braze experts ensures flawless implementation of your customer engagement strategy
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-800">
              <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Data-Driven Strategy</h3>
              <p className="text-gray-300">
                We leverage analytics and insights to create personalized, effective customer engagement campaigns
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-800">
              <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Continuous Optimization</h3>
              <p className="text-gray-300">
                Regular performance monitoring and optimization to ensure your campaigns deliver maximum ROI
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600/5 via-blue-600/10 to-blue-600/5">
        <div className="container mx-auto px-4">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-12 shadow-lg border border-gray-800 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Customer Experience?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you leverage Braze to create exceptional customer engagement
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
