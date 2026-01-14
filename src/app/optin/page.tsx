'use client';

import { useState } from 'react';
import Link from 'next/link';

const dailyLessons = [
  { day: 1, title: "Your YouTube 'Why' (This Determines Everything)" },
  { day: 2, title: "Finding Your Topic (Without Overthinking It)" },
  { day: 3, title: "Your First 5 Videos (Mapped Out)" },
  { day: 4, title: "Setting Up Your Channel (The Simple Way)" },
  { day: 5, title: "Equipment: You Already Have What You Need" },
  { day: 6, title: "Lights, Camera... Confidence" },
  { day: 7, title: "Hit Publish (And What Happens Next)" },
];

export default function OptinPage() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - will be replaced with Kit.com form
    alert('This is a placeholder form. Kit.com integration coming soon!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 flex flex-col">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-blue-400/30 pointer-events-none"></div>

      {/* Simple Header */}
      <header className="relative py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/" className="text-white/80 hover:text-white text-sm font-medium">
            Thierry Starts YouTube
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative flex-grow flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-lg">
          {/* Badge */}
          <div className="text-center mb-6">
            <span className="inline-block bg-white/20 backdrop-blur text-white text-sm font-bold px-4 py-2 rounded-full">
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

          {/* What you'll learn preview */}
          <div className="mt-8 text-center">
            <p className="text-white font-medium mb-4">Here&apos;s what you&apos;ll learn:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Find your why', 'Choose your topic', 'Plan 5 videos', 'Set up your channel', 'Use gear you have', 'Build confidence', 'Hit publish'].map((item, i) => (
                <span key={i} className="bg-white/20 backdrop-blur text-white text-sm px-4 py-2 rounded-full font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* 7-Day Breakdown Section */}
      <section className="relative bg-white/10 backdrop-blur-sm py-12 mt-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Your 7-Day Journey
          </h2>
          <div className="space-y-3">
            {dailyLessons.map((lesson) => (
              <div
                key={lesson.day}
                className="bg-white/10 backdrop-blur rounded-xl p-4 flex items-center gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold">
                  {lesson.day}
                </div>
                <p className="text-white font-medium">{lesson.title}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Simple Footer */}
      <footer className="relative py-6 bg-blue-900/30">
        <div className="text-center text-blue-200 text-sm">
          &copy; {new Date().getFullYear()} Thierry Starts YouTube
        </div>
      </footer>
    </div>
  );
}
