'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBrazeFeaturesOpen, setIsBrazeFeaturesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  const brazeFeatureItems = [
    { name: 'Overview', path: '/braze-overview' },
    { name: 'Features', path: '/braze-features' },
    { name: 'Integrations', path: '/braze-integrations' },
    { name: 'Pricing', path: '/braze-pricing' },
    { name: 'Use Cases', path: '/braze-use-cases' },
    { name: 'Support', path: '/braze-support' }
  ];

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gradient-to-r from-black via-[#1a1a1a] to-black shadow-lg' : 'bg-gradient-to-r from-black via-[#1a1a1a] to-black'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/652d349356a5447cbaa0c6e6_output-onlinepngtools.png"
                alt="Swyft Logo"
                width={120}
                height={40}
                className="h-10 w-auto transition-all duration-300 group-hover:scale-105 group-hover:brightness-125"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  href={item.path}
                  className="text-[#F5F5F5] hover:text-[#5ECDEF] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              {/* Braze Features Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsBrazeFeaturesOpen(!isBrazeFeaturesOpen)}
                  className="text-[#F5F5F5] hover:text-[#5ECDEF] transition-colors flex items-center"
                >
                  Braze
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isBrazeFeaturesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-sm rounded-lg shadow-lg border border-[#818CF8]/10"
                  >
                    {brazeFeatureItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.path}
                        className="block px-4 py-2 text-[#F5F5F5] hover:text-[#5ECDEF] hover:bg-[#1E1B4B]/50 transition-colors"
                        onClick={() => setIsBrazeFeaturesOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#F5F5F5] hover:text-[#5ECDEF] transition-colors"
              onClick={toggleMobileMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden bg-gradient-to-b from-black via-[#1a1a1a] to-black"
        >
          <nav className="py-4 px-4 text-center space-y-4">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                href={item.path}
                className="block text-[#F5F5F5] hover:text-[#5ECDEF] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* Mobile Braze Features */}
            <div className="space-y-2">
              <button
                onClick={() => setIsBrazeFeaturesOpen(!isBrazeFeaturesOpen)}
                className="text-[#F5F5F5] hover:text-[#5ECDEF] transition-colors flex items-center justify-center w-full"
              >
                Braze
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isBrazeFeaturesOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-2"
                >
                  {brazeFeatureItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.path}
                      className="block text-[#F5F5F5] hover:text-[#5ECDEF] transition-colors pl-4"
                      onClick={() => {
                        setIsBrazeFeaturesOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          </nav>
        </motion.div>
      </header>

      {/* Push Page Content Down */}
      <main className="pt-16">
        {/* Your page content goes here */}
      </main>
    </>
  );
}
