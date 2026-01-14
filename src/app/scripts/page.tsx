'use client';

import { useState } from 'react';
import Link from 'next/link';

const scriptTemplates = [
  {
    title: 'First Video Intro Script',
    icon: '👋',
    description: 'The perfect script for introducing yourself and your channel to new viewers',
    sections: ['Your hook', 'Who you are', 'What you\'ll teach', 'Call to subscribe'],
  },
  {
    title: 'Tutorial Video Script',
    icon: '🎓',
    description: 'A proven structure for teaching anything clearly and keeping viewers engaged',
    sections: ['Problem/hook', 'What they\'ll learn', 'Step-by-step content', 'Recap & CTA'],
  },
  {
    title: 'Story/Experience Script',
    icon: '📖',
    description: 'Share your experiences and lessons learned in a compelling way',
    sections: ['Opening hook', 'The backstory', 'The lesson', 'How it applies to them'],
  },
];

export default function ScriptsOptinPage() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - will be replaced with Kit.com form
    alert('This is a placeholder form. Kit.com integration coming soon!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700 flex flex-col">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-violet-400/20 pointer-events-none"></div>

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
              FREE 3-PAGE PDF BUNDLE
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-3 leading-tight">
            Script Template Bundle<br />for 40+ Creators
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-purple-100 text-center mb-4">
            Fill in the blanks. Hit record. Done.
          </p>

          {/* Description */}
          <p className="text-purple-100/90 text-center mb-8 max-w-md mx-auto">
            Three proven video scripts with [FILL IN THE BLANK] sections.
            Just add your content, practice once or twice, and you&apos;re ready to record.
          </p>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="flex justify-center mb-4">
              <div className="bg-purple-100 rounded-lg p-3">
                <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
            </div>
            <p className="text-gray-600 text-center mb-6">
              Enter your email and I&apos;ll send you all 3 templates instantly.
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors"
              >
                Send Me The Templates &rarr;
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              100% free. No spam. Unsubscribe anytime.
            </p>
          </div>

          {/* Templates preview */}
          <div className="mt-8 text-center">
            <p className="text-white font-medium mb-4">3 fill-in-the-blank templates:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['First Video Intro', 'Tutorial Video', 'Story/Experience'].map((item, i) => (
                <span key={i} className="bg-white/20 backdrop-blur text-white text-sm px-4 py-2 rounded-full font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Templates Breakdown Section */}
      <section className="relative bg-white/10 backdrop-blur-sm py-12 mt-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            What&apos;s In Each Template
          </h2>
          <div className="space-y-6">
            {scriptTemplates.map((template, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{template.icon}</span>
                  <h3 className="text-xl text-white font-bold">{template.title}</h3>
                </div>
                <p className="text-purple-100 mb-4">{template.description}</p>
                <div className="flex flex-wrap gap-2">
                  {template.sections.map((section, i) => (
                    <span key={i} className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                      [BLANK] {section}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why you need this */}
      <section className="relative py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">
            Why Scripts Make Everything Easier
          </h2>
          <div className="space-y-4 text-purple-100">
            <p>
              Staring at a camera without knowing what to say is terrifying.
              But reading a script word-for-word sounds robotic.
            </p>
            <p>
              These templates give you the structure and talking points you need
              while leaving room for your personality to shine through.
            </p>
            <p className="text-white font-medium">
              Fill in the blanks. Practice once. Sound natural on camera.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative pb-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur rounded-xl p-6">
            <h3 className="text-lg font-bold text-white text-center mb-4">How To Use These Templates</h3>
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div>
                <div className="w-10 h-10 bg-white text-purple-600 rounded-full flex items-center justify-center font-bold mx-auto mb-2">1</div>
                <p className="text-purple-100 text-sm">Pick a template that matches your video</p>
              </div>
              <div>
                <div className="w-10 h-10 bg-white text-purple-600 rounded-full flex items-center justify-center font-bold mx-auto mb-2">2</div>
                <p className="text-purple-100 text-sm">Fill in the [BLANK] sections with your content</p>
              </div>
              <div>
                <div className="w-10 h-10 bg-white text-purple-600 rounded-full flex items-center justify-center font-bold mx-auto mb-2">3</div>
                <p className="text-purple-100 text-sm">Practice once or twice, then hit record</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="relative py-6 bg-purple-900/30">
        <div className="text-center text-purple-200 text-sm">
          &copy; {new Date().getFullYear()} Thierry Starts YouTube
        </div>
      </footer>
    </div>
  );
}
