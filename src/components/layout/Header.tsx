'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/652d349356a5447cbaa0c6e6_output-onlinepngtools.png"
              alt="Swyft Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors">
              Services
            </Link>
            <Link href="/careers" className="text-gray-300 hover:text-blue-400 transition-colors">
              Careers
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-blue-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md absolute top-16 left-0 w-full py-4">
          <nav className="flex flex-col items-center space-y-4">
            <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link href="/careers" className="text-gray-300 hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>
              Careers
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
