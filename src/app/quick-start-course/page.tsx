'use client';

import { useState } from 'react';
import Link from 'next/link';

const dailyLessons = [
  {
    day: 1,
    title: 'Find Your Perfect Niche',
    description: 'Discover what to make videos about (hint: it\'s probably something you already know)',
  },
  {
    day: 2,
    title: 'Set Up Your Channel Right',
    description: 'The essential settings most beginners miss that hurt their growth',
  },
  {
    day: 3,
    title: 'Gear You Actually Need',
    description: 'Start with what you have — I\'ll show you how (no expensive equipment required)',
  },
  {
    day: 4,
    title: 'Plan Your First Video',
    description: 'A simple framework to outline videos that people actually want to watch',
  },
  {
    day: 5,
    title: 'Record Like a Pro',
    description: 'Overcome camera shyness and nail your first recording session',
  },
  {
    day: 6,
    title: 'Edit Without Overwhelm',
    description: 'Simple editing techniques that make your videos look polished',
  },
  {
    day: 7,
    title: 'Upload & Optimize',
    description: 'Get your video discovered with titles, thumbnails, and descriptions that work',
  },
];

export default function QuickStartCoursePage() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - will be replaced with Kit.com form
    alert('This is a placeholder form. Kit.com integration coming soon!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-white/80 hover:text-white text-sm font-medium">
            &larr; Back to Thierry Starts YouTube
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-block bg-yellow-500 text-yellow-900 text-sm font-bold px-4 py-1 rounded-full mb-6">
            FREE 7-DAY EMAIL COURSE
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            The 40+ Creator&apos;s<br />
            <span className="text-yellow-400">Quick-Start Email Course</span>
          </h1>

          {/* Subheadline */}
          <p className="text-2xl md:text-3xl text-blue-300 font-medium mb-6">
            From Zero to Your First Video in 7 Days
          </p>

          {/* Description */}
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Finally start your YouTube channel without the overwhelm. Get one simple,
            actionable lesson delivered to your inbox each day — designed specifically
            for creators over 40 who are ready to share their knowledge with the world.
          </p>

          {/* Social Proof */}
          <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm mb-12">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              100% Free
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No Tech Skills Required
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Unsubscribe Anytime
            </span>
          </div>
        </div>
      </section>

      {/* Signup Form Section */}
      <section className="py-8">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
              Start Your YouTube Journey Today
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Enter your details below and Day 1 arrives in minutes.
            </p>

            {/* Placeholder Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-yellow-900 font-bold py-4 px-6 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Send Me Day 1 &rarr;
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              I respect your privacy. No spam, ever. Unsubscribe with one click.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            What You&apos;ll Learn Each Day
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Each lesson takes just 10-15 minutes to read and includes a simple action step
            to move you closer to publishing your first video.
          </p>

          <div className="space-y-4">
            {dailyLessons.map((lesson) => (
              <div
                key={lesson.day}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 text-yellow-900 rounded-full flex items-center justify-center font-bold text-lg">
                    {lesson.day}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {lesson.title}
                    </h3>
                    <p className="text-gray-400">
                      {lesson.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            This Course Is Perfect For You If...
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'You\'ve been thinking about starting YouTube but don\'t know where to begin',
              'You\'re over 40 and feel like you\'re "too late" to start (you\'re not!)',
              'You have knowledge or experience worth sharing with the world',
              'You\'ve tried before but got overwhelmed by all the tech and options',
              'You want a simple, step-by-step approach without the fluff',
              'You\'re ready to finally stop procrastinating and take action',
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="order-2 md:order-1">
              <div className="aspect-square bg-slate-700 rounded-2xl flex items-center justify-center text-gray-500">
                [Your Photo Here]
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-white mb-4">
                Hi, I&apos;m Thierry
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  I started my YouTube channel later in life, and I know firsthand how
                  overwhelming it can feel when you&apos;re just getting started.
                </p>
                <p>
                  That&apos;s why I created this free course — to give you the exact roadmap
                  I wish I had when I started. No fluff, no complicated tech talk, just
                  simple steps that actually work.
                </p>
                <p>
                  <strong className="text-white">My goal:</strong> Help you publish your
                  first video in just 7 days, even if you&apos;ve never touched a camera before.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-t from-yellow-500/10 to-transparent">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your YouTube Journey?
          </h2>
          <p className="text-gray-300 mb-8">
            Join the free 7-day course and publish your first video by this time next week.
          </p>

          {/* Second Signup Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your first name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                required
              />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                required
              />
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-yellow-900 font-bold py-4 px-6 rounded-lg text-lg transition-colors"
              >
                Yes! Send Me The Free Course &rarr;
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4">
              100% free. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Thierry Starts YouTube. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
