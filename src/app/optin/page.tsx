'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function OptinPage() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - will be replaced with Kit.com form
    alert('This is a placeholder form. Kit.com integration coming soon!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex flex-col">
      {/* Simple Header */}
      <header className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/" className="text-white/80 hover:text-white text-sm font-medium">
            Thierry Starts YouTube
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Badge */}
          <div className="text-center mb-6">
            <span className="inline-block bg-white/20 backdrop-blur text-white text-sm font-bold px-4 py-1 rounded-full">
              FREE 7-DAY EMAIL COURSE
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-3 leading-tight">
            The 40+ Creator&apos;s<br />Quick-Start Course
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-blue-100 text-center mb-8">
            From Zero to Your First Video in 7 Days
          </p>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <p className="text-gray-600 text-center mb-6">
              Enter your details below and Day 1 arrives in minutes.
            </p>

            {/* Placeholder Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors"
              >
                Send Me Day 1 &rarr;
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              100% free. No spam. Unsubscribe anytime.
            </p>
          </div>

          {/* What you'll learn */}
          <div className="mt-8 text-center">
            <p className="text-blue-100 text-sm mb-4">In 7 days, you&apos;ll learn:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Find your niche', 'Set up your channel', 'Record your first video', 'Edit like a pro', 'Upload & optimize'].map((item, i) => (
                <span key={i} className="bg-white/10 text-white text-xs px-3 py-1 rounded-full">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="py-6">
        <div className="text-center text-blue-200 text-sm">
          &copy; {new Date().getFullYear()} Thierry Starts YouTube
        </div>
      </footer>
    </div>
  );
}
