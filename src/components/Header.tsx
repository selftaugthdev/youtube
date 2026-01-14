'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-blue-600 hover:text-blue-700">
              Thierry Starts YouTube
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#start" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              Start Here
            </Link>
            <Link href="/new-to-youtube" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              New To YouTube?
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              About
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              Contact
            </Link>
            <Link href="/free-stuff" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              Free Stuff
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link href="#start" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                Start Here
              </Link>
              <Link href="/new-to-youtube" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                New To YouTube?
              </Link>
              <Link href="#about" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                About
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                Contact
              </Link>
              <Link href="/free-stuff" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                Free Stuff
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
