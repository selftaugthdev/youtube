'use client';

import { useState } from 'react';
import Link from 'next/link';

const ideaCategories = [
  {
    title: 'Introduction Videos',
    ideas: 5,
    description: 'Perfect first videos to introduce yourself and your channel',
  },
  {
    title: 'Teaching Your Skill',
    ideas: 10,
    description: 'Share your expertise with how-to and tutorial content',
  },
  {
    title: 'Your Experience & Wisdom',
    ideas: 10,
    description: 'Lessons learned, stories, and insights from your journey',
  },
  {
    title: 'Product & Tool Reviews',
    ideas: 10,
    description: 'Review products and tools your audience cares about',
  },
  {
    title: 'Common Mistakes',
    ideas: 10,
    description: 'Help others avoid the mistakes you\'ve seen (or made)',
  },
  {
    title: 'Q&A Starters',
    ideas: 5,
    description: 'Answer questions your audience is already asking',
  },
];

export default function VideoIdeasOptinPage() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Submit to Kit.com form
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://app.kit.com/forms/8979941/subscriptions', {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Kit.com doesn't allow CORS, so we use no-cors mode
      });

      // With no-cors, we can't check response status, so assume success
      alert('Thanks! Check your email for your 50 video ideas.');
      setEmail('');
      setFirstName('');
    } catch (error) {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      {/* Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,800;1,9..144,400&family=Outfit:wght@300;400;500;600&display=swap');

        .font-display {
          font-family: 'Fraunces', Georgia, serif;
        }
        .font-body {
          font-family: 'Outfit', system-ui, sans-serif;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }

        .grain-overlay::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E");
          opacity: 0.03;
          pointer-events: none;
        }
      `}</style>

      <div className="font-body min-h-screen bg-[#FDF8F3] relative grain-overlay">
        {/* Decorative shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#C45D3E]/5 blur-2xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 rounded-full bg-[#2D4A3E]/5 blur-3xl"></div>
        <div className="absolute bottom-40 left-1/4 w-64 h-64 rounded-full bg-[#E8B4A0]/20 blur-3xl"></div>

        {/* Header */}
        <header className="relative py-8">
          <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
            <Link
              href="/"
              className="text-[#6B5B4F] hover:text-[#C45D3E] text-sm font-medium tracking-wide transition-colors duration-300"
            >
              ← Back to home
            </Link>
            <span className="text-[#C45D3E]/60 text-xs tracking-[0.2em] uppercase font-medium">
              Free Resource
            </span>
          </div>
        </header>

        {/* Hero Section */}
        <main className="relative">
          <div className="max-w-6xl mx-auto px-6 pt-8 pb-20">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* Left Column - Content */}
              <div className="lg:pr-8">
                {/* Large decorative number */}
                <div className="opacity-0 animate-fade-in-up">
                  <span
                    className="font-display text-[12rem] md:text-[16rem] font-bold leading-none text-[#C45D3E]/10 select-none block -mb-16 md:-mb-24"
                    style={{ fontVariationSettings: "'opsz' 144" }}
                  >
                    50
                  </span>
                </div>

                {/* Badge */}
                <div className="opacity-0 animate-fade-in-up stagger-1">
                  <span className="inline-flex items-center gap-2 text-[#2D4A3E] text-xs tracking-[0.15em] uppercase font-semibold mb-6">
                    <span className="w-8 h-px bg-[#2D4A3E]"></span>
                    Free PDF Download
                  </span>
                </div>

                {/* Headline */}
                <h1 className="opacity-0 animate-fade-in-up stagger-2">
                  <span
                    className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1F1F1F] leading-[1.1] block"
                    style={{ fontVariationSettings: "'opsz' 72" }}
                  >
                    Video Ideas for
                  </span>
                  <span
                    className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] block mt-1"
                    style={{ fontVariationSettings: "'opsz' 72" }}
                  >
                    <span className="text-[#C45D3E]">40+</span> Creators
                  </span>
                </h1>

                {/* Subheadline */}
                <p className="opacity-0 animate-fade-in-up stagger-3 text-xl md:text-2xl text-[#6B5B4F] mt-6 font-light leading-relaxed max-w-lg">
                  Never stare at a blank screen again. Plug-and-play ideas organized by category.
                </p>

                {/* Value proposition */}
                <div className="opacity-0 animate-fade-in-up stagger-4 mt-10 flex items-start gap-4">
                  <div className="w-1 h-16 bg-gradient-to-b from-[#C45D3E] to-[#E8B4A0] rounded-full flex-shrink-0"></div>
                  <p className="text-[#6B5B4F] leading-relaxed">
                    These 50 ideas are specifically crafted for creators over 40 who have
                    experience and wisdom to share but don&apos;t always know how to package it.
                  </p>
                </div>

                {/* Stats */}
                <div className="opacity-0 animate-fade-in-up stagger-5 mt-12 flex gap-12">
                  <div>
                    <span className="font-display text-3xl font-semibold text-[#1F1F1F]">6</span>
                    <p className="text-[#6B5B4F] text-sm mt-1">Categories</p>
                  </div>
                  <div>
                    <span className="font-display text-3xl font-semibold text-[#1F1F1F]">50</span>
                    <p className="text-[#6B5B4F] text-sm mt-1">Video Ideas</p>
                  </div>
                  <div>
                    <span className="font-display text-3xl font-semibold text-[#1F1F1F]">~1yr</span>
                    <p className="text-[#6B5B4F] text-sm mt-1">Of Content</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Form Card */}
              <div className="opacity-0 animate-scale-in stagger-3 lg:sticky lg:top-8">
                <div className="bg-white rounded-3xl shadow-[0_4px_40px_rgba(0,0,0,0.06)] p-8 md:p-10 border border-[#E8E4DF]">
                  {/* Decorative element */}
                  <div className="flex justify-center mb-6">
                    <div className="animate-float w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C45D3E] to-[#E87B5E] flex items-center justify-center shadow-lg shadow-[#C45D3E]/20">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                      </svg>
                    </div>
                  </div>

                  <h2 className="font-display text-2xl font-semibold text-center text-[#1F1F1F] mb-2">
                    Get Your Free Copy
                  </h2>
                  <p className="text-[#6B5B4F] text-center mb-8">
                    Enter your details and I&apos;ll send all 50 ideas straight to your inbox.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="group">
                      <label htmlFor="firstName" className="sr-only">First name</label>
                      <input
                        id="firstName"
                        type="text"
                        name="fields[first_name]"
                        placeholder="Your first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full px-5 py-4 rounded-xl border-2 border-[#E8E4DF] bg-[#FAFAF8] focus:outline-none focus:border-[#C45D3E] focus:bg-white text-[#1F1F1F] placeholder-[#A89F97] transition-all duration-300"
                        required
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="email" className="sr-only">Email address</label>
                      <input
                        id="email"
                        type="email"
                        name="email_address"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-5 py-4 rounded-xl border-2 border-[#E8E4DF] bg-[#FAFAF8] focus:outline-none focus:border-[#C45D3E] focus:bg-white text-[#1F1F1F] placeholder-[#A89F97] transition-all duration-300"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="group w-full bg-[#1F1F1F] hover:bg-[#C45D3E] text-white font-semibold py-4 px-6 rounded-xl text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#C45D3E]/20"
                    >
                      <span className="flex items-center justify-center gap-3">
                        Send Me 50 Ideas
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </button>
                  </form>

                  <p className="text-xs text-[#A89F97] text-center mt-6 flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    100% free. No spam. Unsubscribe anytime.
                  </p>
                </div>

                {/* Trust element */}
                <p className="text-center text-[#A89F97] text-sm mt-6">
                  Join 500+ creators who&apos;ve downloaded this guide
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Categories Section */}
        <section className="relative py-20 bg-[#2D4A3E]">
          {/* Decorative corner */}
          <div className="absolute top-0 left-0 w-32 h-32">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#3D5A4E]">
              <circle cx="0" cy="0" r="80" fill="currentColor" />
            </svg>
          </div>

          <div className="relative max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 text-[#A8C5B8] text-xs tracking-[0.15em] uppercase font-semibold mb-4">
                <span className="w-8 h-px bg-[#A8C5B8]"></span>
                What&apos;s Inside
                <span className="w-8 h-px bg-[#A8C5B8]"></span>
              </span>
              <h2
                className="font-display text-3xl md:text-4xl font-semibold text-white"
                style={{ fontVariationSettings: "'opsz' 72" }}
              >
                Six Categories of Ready-to-Use Ideas
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {ideaCategories.map((category, index) => (
                <div
                  key={index}
                  className={`group bg-[#3D5A4E] hover:bg-[#4A6B5B] rounded-2xl p-6 transition-all duration-500 cursor-default ${
                    isHovered === index ? 'scale-[1.02] shadow-xl shadow-black/20' : ''
                  }`}
                  onMouseEnter={() => setIsHovered(index)}
                  onMouseLeave={() => setIsHovered(null)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span
                      className="font-display text-5xl font-bold text-[#A8C5B8]/30"
                      style={{ fontVariationSettings: "'opsz' 144" }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="bg-[#C45D3E] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {category.ideas} ideas
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white mb-2 group-hover:text-[#E8B4A0] transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-[#A8C5B8] text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-6 bg-[#3D5A4E] rounded-full px-8 py-4">
                <span className="font-display text-4xl font-bold text-[#C45D3E]">50</span>
                <span className="text-[#A8C5B8]">
                  total ideas — enough for almost a year of weekly uploads
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Section */}
        <section className="relative py-20 bg-[#FDF8F3]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <span className="inline-flex items-center gap-2 text-[#C45D3E] text-xs tracking-[0.15em] uppercase font-semibold mb-4">
              <span className="w-8 h-px bg-[#C45D3E]"></span>
              Why This Matters
              <span className="w-8 h-px bg-[#C45D3E]"></span>
            </span>

            <h2
              className="font-display text-3xl md:text-4xl font-semibold text-[#1F1F1F] mb-8"
              style={{ fontVariationSettings: "'opsz' 72" }}
            >
              Stop Wondering What to Make
            </h2>

            <div className="space-y-6 text-lg text-[#6B5B4F] leading-relaxed">
              <p>
                The hardest part of YouTube isn&apos;t recording or editing —
                it&apos;s figuring out what to make in the first place.
              </p>
              <p>
                You sit down to create, but the ideas won&apos;t come. Or worse,
                you have ideas but they don&apos;t feel &quot;good enough.&quot;
              </p>
              <p className="text-[#1F1F1F] font-medium">
                This PDF changes that. Just pick an idea, make it yours, and hit record.
              </p>
            </div>

            {/* Final CTA */}
            <div className="mt-12">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-[#C45D3E] font-semibold hover:gap-4 transition-all duration-300"
              >
                Get Your Free Copy
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-[#1F1F1F]">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-[#6B5B4F] text-sm">
              &copy; {new Date().getFullYear()} Thierry Starts YouTube
            </span>
            <Link
              href="/"
              className="text-[#6B5B4F] hover:text-[#C45D3E] text-sm transition-colors duration-300"
            >
              Visit Homepage →
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
