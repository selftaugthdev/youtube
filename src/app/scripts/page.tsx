'use client';

import { useState } from 'react';
import Link from 'next/link';

const scriptTemplates = [
  {
    title: 'First Video Intro',
    description: 'The perfect script for introducing yourself and your channel to new viewers',
    sections: ['Your hook', 'Who you are', 'What you\'ll teach', 'Call to subscribe'],
  },
  {
    title: 'Tutorial Video',
    description: 'A proven structure for teaching anything clearly and keeping viewers engaged',
    sections: ['Problem/hook', 'What they\'ll learn', 'Step-by-step content', 'Recap & CTA'],
  },
  {
    title: 'Story & Experience',
    description: 'Share your experiences and lessons learned in a compelling way',
    sections: ['Opening hook', 'The backstory', 'The lesson', 'How it applies to them'],
  },
];

export default function ScriptsOptinPage() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [activeTemplate, setActiveTemplate] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Submit to Kit.com form
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://app.kit.com/forms/8979957/subscriptions', {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Kit.com doesn't allow CORS, so we use no-cors mode
      });

      // With no-cors, we can't check response status, so assume success
      alert('Thanks! Check your email for your script templates.');
      setEmail('');
      setFirstName('');
    } catch (error) {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Source+Sans+3:wght@300;400;500;600&display=swap');

        .font-display {
          font-family: 'Cormorant Garamond', Georgia, serif;
        }
        .font-body {
          font-family: 'Source Sans 3', system-ui, sans-serif;
        }

        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink {
          0%, 50% { border-color: #B8860B; }
          51%, 100% { border-color: transparent; }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-fade-in {
          animation: fadeIn 0.7s ease-out forwards;
        }

        .animate-slide-in {
          animation: slideIn 0.6s ease-out forwards;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }

        .paper-texture {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
        }

        .typewriter-cursor {
          border-right: 2px solid #B8860B;
          animation: blink 1s step-end infinite;
        }
      `}</style>

      <div className="font-body min-h-screen bg-[#0F1419] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#B8860B]/5 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1a2634] rounded-full blur-3xl opacity-50"></div>

        {/* Header */}
        <header className="relative py-8 border-b border-[#2A3441]">
          <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
            <Link
              href="/"
              className="text-[#8B9CAB] hover:text-[#B8860B] text-sm font-medium tracking-wide transition-colors duration-300"
            >
              ← Back to home
            </Link>
            <span className="text-[#B8860B]/60 text-xs tracking-[0.2em] uppercase font-medium">
              Free Templates
            </span>
          </div>
        </header>

        {/* Main Content */}
        <main className="relative">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid lg:grid-cols-5 gap-16">

              {/* Left Column - Content (3 cols) */}
              <div className="lg:col-span-3">
                {/* Badge */}
                <div className="opacity-0 animate-fade-in">
                  <span className="inline-flex items-center gap-3 text-[#B8860B] text-xs tracking-[0.2em] uppercase font-semibold mb-8">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                    3-Page PDF Bundle
                  </span>
                </div>

                {/* Headline */}
                <h1 className="opacity-0 animate-fade-in stagger-1">
                  <span
                    className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-[#F5F5DC] leading-[1.1] block"
                  >
                    Script Templates
                  </span>
                  <span
                    className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-[#B8860B] leading-[1.1] block mt-2 italic"
                  >
                    for Creators
                  </span>
                </h1>

                {/* Subheadline with typewriter effect */}
                <div className="opacity-0 animate-fade-in stagger-2 mt-8 flex items-center gap-2">
                  <span className="text-[#8B9CAB] text-xl md:text-2xl font-light">
                    Fill in the blanks
                  </span>
                  <span className="text-[#B8860B] text-xl md:text-2xl">•</span>
                  <span className="text-[#8B9CAB] text-xl md:text-2xl font-light">
                    Hit record
                  </span>
                  <span className="text-[#B8860B] text-xl md:text-2xl">•</span>
                  <span className="text-[#8B9CAB] text-xl md:text-2xl font-light">
                    Done
                  </span>
                </div>

                {/* Description */}
                <p className="opacity-0 animate-fade-in stagger-3 text-[#8B9CAB] mt-8 text-lg leading-relaxed max-w-xl">
                  Three proven video scripts with <span className="text-[#F5F5DC] font-medium">[FILL IN THE BLANK]</span> sections.
                  Just add your content, practice once or twice, and you&apos;re ready to record.
                </p>

                {/* Template Preview Cards */}
                <div className="opacity-0 animate-fade-in stagger-4 mt-12 space-y-4">
                  {scriptTemplates.map((template, index) => (
                    <div
                      key={index}
                      className={`group cursor-pointer transition-all duration-500 ${
                        activeTemplate === index
                          ? 'bg-[#1a2634] border-l-4 border-[#B8860B]'
                          : 'bg-transparent border-l-4 border-transparent hover:border-[#2A3441]'
                      } rounded-r-xl p-5`}
                      onClick={() => setActiveTemplate(index)}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="font-display text-sm text-[#B8860B] tracking-wider">
                              TEMPLATE {String(index + 1).padStart(2, '0')}
                            </span>
                          </div>
                          <h3 className={`font-display text-2xl font-medium transition-colors duration-300 ${
                            activeTemplate === index ? 'text-[#F5F5DC]' : 'text-[#8B9CAB] group-hover:text-[#F5F5DC]'
                          }`}>
                            {template.title}
                          </h3>
                          {activeTemplate === index && (
                            <div className="mt-4 animate-slide-in">
                              <p className="text-[#8B9CAB] text-sm mb-3">{template.description}</p>
                              <div className="flex flex-wrap gap-2">
                                {template.sections.map((section, i) => (
                                  <span
                                    key={i}
                                    className="bg-[#0F1419] text-[#B8860B] text-xs px-3 py-1.5 rounded border border-[#2A3441] font-mono"
                                  >
                                    [{section}]
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                        <svg
                          className={`w-5 h-5 transition-all duration-300 ${
                            activeTemplate === index ? 'text-[#B8860B] rotate-90' : 'text-[#2A3441]'
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Form Card (2 cols) */}
              <div className="lg:col-span-2 opacity-0 animate-fade-in stagger-3">
                <div className="lg:sticky lg:top-8">
                  <div className="bg-[#F5F5DC] paper-texture rounded-2xl p-8 shadow-2xl shadow-black/30">
                    {/* Paper header lines */}
                    <div className="border-b-2 border-[#0F1419]/10 pb-4 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#B8860B] flex items-center justify-center">
                          <svg className="w-4 h-4 text-[#F5F5DC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                          </svg>
                        </div>
                        <h2 className="font-display text-2xl font-semibold text-[#0F1419]">
                          Get Your Templates
                        </h2>
                      </div>
                    </div>

                    <p className="text-[#4A5568] mb-6">
                      Enter your details and I&apos;ll send all 3 templates straight to your inbox.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="firstName" className="sr-only">First name</label>
                        <input
                          id="firstName"
                          type="text"
                          name="fields[first_name]"
                          placeholder="Your first name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="w-full px-4 py-4 rounded-xl border-2 border-[#0F1419]/10 bg-white focus:outline-none focus:border-[#B8860B] text-[#0F1419] placeholder-[#9CA3AF] transition-all duration-300 font-body"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="sr-only">Email address</label>
                        <input
                          id="email"
                          type="email"
                          name="email_address"
                          placeholder="Your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-4 rounded-xl border-2 border-[#0F1419]/10 bg-white focus:outline-none focus:border-[#B8860B] text-[#0F1419] placeholder-[#9CA3AF] transition-all duration-300 font-body"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="group w-full bg-[#0F1419] hover:bg-[#B8860B] text-[#F5F5DC] font-semibold py-4 px-6 rounded-xl text-lg transition-all duration-300 transform hover:scale-[1.02]"
                      >
                        <span className="flex items-center justify-center gap-3">
                          Send Me The Templates
                          <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </button>
                    </form>

                    <p className="text-xs text-[#6B7280] text-center mt-6 flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                      100% free. No spam. Unsubscribe anytime.
                    </p>
                  </div>

                  {/* How it works */}
                  <div className="mt-8 bg-[#1a2634] rounded-2xl p-6 border border-[#2A3441]">
                    <h3 className="font-display text-lg font-medium text-[#F5F5DC] mb-4">How It Works</h3>
                    <div className="space-y-4">
                      {[
                        { step: '01', text: 'Pick a template that matches your video' },
                        { step: '02', text: 'Fill in the [BLANK] sections with your content' },
                        { step: '03', text: 'Practice once or twice, then hit record' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <span className="text-[#B8860B] font-display text-sm font-medium">{item.step}</span>
                          <p className="text-[#8B9CAB] text-sm">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Why Section */}
        <section className="relative py-20 border-t border-[#2A3441]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <span className="inline-flex items-center gap-3 text-[#B8860B] text-xs tracking-[0.2em] uppercase font-semibold mb-6">
              <span className="w-12 h-px bg-[#B8860B]"></span>
              Why Scripts Work
              <span className="w-12 h-px bg-[#B8860B]"></span>
            </span>

            <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#F5F5DC] mb-8">
              Sound Natural, Not Robotic
            </h2>

            <div className="space-y-6 text-lg text-[#8B9CAB] leading-relaxed">
              <p>
                Staring at a camera without knowing what to say is terrifying.
                But reading a script word-for-word sounds robotic.
              </p>
              <p>
                These templates give you the <span className="text-[#F5F5DC]">structure and talking points</span> you need
                while leaving room for your personality to shine through.
              </p>
              <p className="text-[#B8860B] font-display text-xl italic">
                &ldquo;Fill in the blanks. Practice once. Sound natural on camera.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-[#2A3441]">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-[#4A5568] text-sm">
              &copy; {new Date().getFullYear()} Thierry Starts YouTube
            </span>
            <Link
              href="/"
              className="text-[#4A5568] hover:text-[#B8860B] text-sm transition-colors duration-300"
            >
              Visit Homepage →
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
