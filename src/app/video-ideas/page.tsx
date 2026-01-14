'use client';

import { useState } from 'react';
import Link from 'next/link';

const ideaCategories = [
  {
    title: 'Introduction Videos',
    ideas: 5,
    icon: '👋',
    description: 'Perfect first videos to introduce yourself and your channel',
  },
  {
    title: 'Teaching Your Skill',
    ideas: 10,
    icon: '🎓',
    description: 'Share your expertise with how-to and tutorial content',
  },
  {
    title: 'Your Experience & Wisdom',
    ideas: 10,
    icon: '💡',
    description: 'Lessons learned, stories, and insights from your journey',
  },
  {
    title: 'Product & Tool Reviews',
    ideas: 10,
    icon: '⭐',
    description: 'Review products and tools your audience cares about',
  },
  {
    title: 'Common Mistakes',
    ideas: 10,
    icon: '⚠️',
    description: 'Help others avoid the mistakes you\'ve seen (or made)',
  },
  {
    title: 'Q&A Starters',
    ideas: 5,
    icon: '❓',
    description: 'Answer questions your audience is already asking',
  },
];

export default function VideoIdeasOptinPage() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - will be replaced with Kit.com form
    alert('This is a placeholder form. Kit.com integration coming soon!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 flex flex-col">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 via-transparent to-yellow-400/20 pointer-events-none"></div>

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
              FREE DOWNLOADABLE PDF
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-3 leading-tight">
            50 Video Ideas for<br />40+ Creators
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-orange-100 text-center mb-4">
            Never stare at a blank screen again
          </p>

          {/* Description */}
          <p className="text-orange-100/90 text-center mb-8 max-w-md mx-auto">
            Plug-and-play video ideas organized by category. Just pick one, add your unique spin,
            and start recording. Perfect for when you don&apos;t know what to make next.
          </p>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="flex justify-center mb-4">
              <div className="bg-orange-100 rounded-lg p-3">
                <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
            <p className="text-gray-600 text-center mb-6">
              Enter your email and I&apos;ll send you all 50 ideas instantly.
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900"
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors"
              >
                Send Me 50 Video Ideas &rarr;
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              100% free. No spam. Unsubscribe anytime.
            </p>
          </div>

          {/* Categories preview */}
          <div className="mt-8 text-center">
            <p className="text-white font-medium mb-4">6 categories of ready-to-use ideas:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Introductions', 'Teaching', 'Experience', 'Reviews', 'Mistakes', 'Q&A'].map((item, i) => (
                <span key={i} className="bg-white/20 backdrop-blur text-white text-sm px-4 py-2 rounded-full font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Categories Breakdown Section */}
      <section className="relative bg-white/10 backdrop-blur-sm py-12 mt-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            What&apos;s Inside
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ideaCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur rounded-xl p-5"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-white font-bold">{category.title}</h3>
                </div>
                <p className="text-orange-100 text-sm mb-2">{category.description}</p>
                <p className="text-white/70 text-sm">{category.ideas} video ideas</p>
              </div>
            ))}
          </div>

          {/* Total ideas */}
          <div className="mt-8 text-center">
            <p className="text-orange-100">
              <span className="text-white font-bold text-2xl">50</span> total video ideas —
              enough content for almost a year of weekly uploads.
            </p>
          </div>
        </div>
      </section>

      {/* Why you need this */}
      <section className="relative py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">
            Stop Wondering &quot;What Should I Make?&quot;
          </h2>
          <div className="space-y-4 text-orange-100">
            <p>
              The hardest part of YouTube isn&apos;t recording or editing —
              it&apos;s figuring out what to make in the first place.
            </p>
            <p>
              These 50 ideas are specifically designed for creators over 40 who have
              experience and wisdom to share but don&apos;t know how to package it.
            </p>
            <p className="text-white font-medium">
              Just pick an idea, make it yours, and hit record.
            </p>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="relative py-6 bg-orange-900/30">
        <div className="text-center text-orange-200 text-sm">
          &copy; {new Date().getFullYear()} Thierry Starts YouTube
        </div>
      </footer>
    </div>
  );
}
