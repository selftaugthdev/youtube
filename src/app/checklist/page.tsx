'use client';

import { useState } from 'react';
import Link from 'next/link';

const checklistSections = [
  {
    title: 'Pre-Recording',
    items: 5,
    icon: '📋',
    description: 'Everything to prepare before you hit record',
  },
  {
    title: 'Recording Day',
    items: 7,
    icon: '🎬',
    description: 'Step-by-step guide for your recording session',
  },
  {
    title: 'Post-Recording',
    items: 6,
    icon: '✂️',
    description: 'Edit and polish your video like a pro',
  },
  {
    title: 'Upload Checklist',
    items: 8,
    icon: '🚀',
    description: 'Optimize for maximum views and engagement',
  },
];

export default function ChecklistOptinPage() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - will be replaced with Kit.com form
    alert('This is a placeholder form. Kit.com integration coming soon!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700 flex flex-col">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 via-transparent to-emerald-400/30 pointer-events-none"></div>

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
            The 40+ YouTuber&apos;s<br />First Video Checklist
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-emerald-100 text-center mb-4">
            Never miss a step on your first video
          </p>

          {/* Description */}
          <p className="text-emerald-100/90 text-center mb-8 max-w-md mx-auto">
            A simple, one-page checklist that guides you from preparation to publish.
            Print it out, check off each item, and upload with confidence.
          </p>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="flex justify-center mb-4">
              <div className="bg-emerald-100 rounded-lg p-3">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <p className="text-gray-600 text-center mb-6">
              Enter your email and I&apos;ll send you the checklist instantly.
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900"
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors"
              >
                Send Me The Checklist &rarr;
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              100% free. No spam. Unsubscribe anytime.
            </p>
          </div>

          {/* What's included preview */}
          <div className="mt-8 text-center">
            <p className="text-white font-medium mb-4">26 actionable items across 4 sections:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Pre-Recording', 'Recording Day', 'Post-Recording', 'Upload'].map((item, i) => (
                <span key={i} className="bg-white/20 backdrop-blur text-white text-sm px-4 py-2 rounded-full font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Checklist Breakdown Section */}
      <section className="relative bg-white/10 backdrop-blur-sm py-12 mt-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            What&apos;s Inside The Checklist
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {checklistSections.map((section, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur rounded-xl p-5"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{section.icon}</span>
                  <h3 className="text-white font-bold">{section.title}</h3>
                </div>
                <p className="text-emerald-100 text-sm mb-2">{section.description}</p>
                <p className="text-white/70 text-sm">{section.items} checklist items</p>
              </div>
            ))}
          </div>

          {/* Total items */}
          <div className="mt-8 text-center">
            <p className="text-emerald-100">
              <span className="text-white font-bold text-2xl">26</span> total items to check off —
              nothing forgotten, nothing missed.
            </p>
          </div>
        </div>
      </section>

      {/* Why you need this */}
      <section className="relative py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">
            Why You Need This Checklist
          </h2>
          <div className="space-y-4 text-emerald-100">
            <p>
              Your first video is exciting — but it&apos;s easy to forget something important
              when you&apos;re focused on being on camera for the first time.
            </p>
            <p>
              This checklist ensures you don&apos;t upload your video only to realize you
              forgot to check your audio, add a thumbnail, or write a description.
            </p>
            <p className="text-white font-medium">
              Print it. Check it off. Upload with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="relative py-6 bg-teal-900/30">
        <div className="text-center text-emerald-200 text-sm">
          &copy; {new Date().getFullYear()} Thierry Starts YouTube
        </div>
      </footer>
    </div>
  );
}
