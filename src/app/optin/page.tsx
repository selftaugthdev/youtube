'use client';

import { useState } from 'react';
import Link from 'next/link';

const dailyLessons = [
  { day: 1, title: "Your YouTube 'Why'", subtitle: "This Determines Everything" },
  { day: 2, title: "Finding Your Topic", subtitle: "Without Overthinking It" },
  { day: 3, title: "Your First 5 Videos", subtitle: "Mapped Out" },
  { day: 4, title: "Channel Setup", subtitle: "The Simple Way" },
  { day: 5, title: "Equipment", subtitle: "You Already Have What You Need" },
  { day: 6, title: "Lights, Camera...", subtitle: "Confidence" },
  { day: 7, title: "Hit Publish", subtitle: "And What Happens Next" },
];

export default function OptinPage() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Submit to Kit.com form
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://app.kit.com/forms/8979971/subscriptions', {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Kit.com doesn't allow CORS, so we use no-cors mode
      });

      // With no-cors, we can't check response status, so assume success
      alert('Thanks! Check your email for Day 1 of the course.');
      setEmail('');
      setFirstName('');
    } catch (error) {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap');

        .font-display {
          font-family: 'Sora', system-ui, sans-serif;
        }
        .font-body {
          font-family: 'DM Sans', system-ui, sans-serif;
        }

        @keyframes rise {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(251, 191, 36, 0.3); }
          50% { box-shadow: 0 0 40px rgba(251, 191, 36, 0.5); }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .animate-rise {
          animation: rise 0.8s ease-out forwards;
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }
        .stagger-7 { animation-delay: 0.7s; }

        .gradient-text {
          background: linear-gradient(135deg, #FBBF24 0%, #F59E0B 50%, #D97706 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .timeline-line {
          background: linear-gradient(180deg, #4338CA 0%, #6366F1 50%, #FBBF24 100%);
        }
      `}</style>

      <div className="font-body min-h-screen bg-[#0C0A1D] relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E1B4B] via-[#0C0A1D] to-[#0C0A1D]"></div>

        {/* Decorative orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#4338CA]/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-40 right-1/4 w-80 h-80 bg-[#FBBF24]/10 rounded-full blur-[80px]"></div>

        {/* Stars decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                top: `${Math.random() * 50}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Header */}
        <header className="relative py-8">
          <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
            <Link
              href="/"
              className="text-[#A5B4FC] hover:text-[#FBBF24] text-sm font-medium tracking-wide transition-colors duration-300"
            >
              ← Back to home
            </Link>
            <span className="text-[#FBBF24]/60 text-xs tracking-[0.2em] uppercase font-medium font-display">
              Free Course
            </span>
          </div>
        </header>

        {/* Hero Section */}
        <main className="relative">
          <div className="max-w-6xl mx-auto px-6 pt-8 pb-16">
            {/* Center-aligned hero */}
            <div className="text-center max-w-3xl mx-auto">
              {/* Badge */}
              <div className="opacity-0 animate-rise">
                <span className="inline-flex items-center gap-2 bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-[#FBBF24] text-xs tracking-[0.15em] uppercase font-semibold px-4 py-2 rounded-full font-display">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  7-Day Email Course
                </span>
              </div>

              {/* Headline */}
              <h1 className="opacity-0 animate-rise stagger-1 mt-8">
                <span className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] block">
                  The 40+ Creator&apos;s
                </span>
                <span className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] block mt-2 gradient-text">
                  Quick-Start Course
                </span>
              </h1>

              {/* Subheadline */}
              <p className="opacity-0 animate-rise stagger-2 text-xl md:text-2xl text-[#A5B4FC] mt-6 font-light">
                From Zero to Your First Video in 7 Days
              </p>

              {/* Description */}
              <p className="opacity-0 animate-rise stagger-3 text-[#8B8BA8] mt-6 text-lg leading-relaxed max-w-xl mx-auto">
                A free email course that takes you from &ldquo;I want to start YouTube&rdquo; to
                &ldquo;I just published my first video&rdquo; — one lesson at a time.
              </p>
            </div>

            {/* Form Card */}
            <div className="opacity-0 animate-rise stagger-3 mt-12 max-w-md mx-auto">
              <div className="animate-glow bg-gradient-to-br from-[#1E1B4B] to-[#0C0A1D] rounded-3xl p-8 border border-[#4338CA]/30">
                <div className="flex justify-center mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FBBF24] to-[#F59E0B] flex items-center justify-center shadow-lg shadow-[#FBBF24]/30">
                    <svg className="w-7 h-7 text-[#0C0A1D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                  </div>
                </div>

                <h2 className="font-display text-xl font-semibold text-center text-white mb-2">
                  Start Your Journey
                </h2>
                <p className="text-[#8B8BA8] text-center mb-6 text-sm">
                  Enter your details and Day 1 arrives in minutes.
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
                      className="w-full px-5 py-4 rounded-xl border border-[#4338CA]/30 bg-[#0C0A1D] focus:outline-none focus:border-[#FBBF24] text-white placeholder-[#6B6B8A] transition-all duration-300"
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
                      className="w-full px-5 py-4 rounded-xl border border-[#4338CA]/30 bg-[#0C0A1D] focus:outline-none focus:border-[#FBBF24] text-white placeholder-[#6B6B8A] transition-all duration-300"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="group w-full bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] hover:from-[#F59E0B] hover:to-[#D97706] text-[#0C0A1D] font-bold py-4 px-6 rounded-xl text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-[#FBBF24]/20"
                  >
                    <span className="flex items-center justify-center gap-3 font-display">
                      Send Me Day 1
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                </form>

                <p className="text-xs text-[#6B6B8A] text-center mt-6 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  100% free. No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Timeline Section */}
        <section className="relative py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 text-[#A5B4FC] text-xs tracking-[0.15em] uppercase font-semibold mb-4 font-display">
                <span className="w-8 h-px bg-[#4338CA]"></span>
                Your 7-Day Journey
                <span className="w-8 h-px bg-[#4338CA]"></span>
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
                One Lesson Per Day
              </h2>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 timeline-line"></div>

              {/* Days */}
              <div className="space-y-8">
                {dailyLessons.map((lesson, index) => (
                  <div
                    key={lesson.day}
                    className={`relative flex items-center gap-6 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                    onMouseEnter={() => setHoveredDay(lesson.day)}
                    onMouseLeave={() => setHoveredDay(null)}
                  >
                    {/* Content card */}
                    <div
                      className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'} pl-20 md:pl-0`}
                    >
                      <div
                        className={`inline-block bg-[#1E1B4B]/50 border rounded-2xl p-5 transition-all duration-500 ${
                          hoveredDay === lesson.day
                            ? 'border-[#FBBF24]/50 shadow-lg shadow-[#FBBF24]/10 scale-105'
                            : 'border-[#4338CA]/20'
                        }`}
                      >
                        <p className={`text-xs font-display font-semibold mb-1 ${
                          hoveredDay === lesson.day ? 'text-[#FBBF24]' : 'text-[#6366F1]'
                        }`}>
                          DAY {lesson.day}
                        </p>
                        <h3 className="font-display text-lg font-semibold text-white">
                          {lesson.title}
                        </h3>
                        <p className="text-[#8B8BA8] text-sm">{lesson.subtitle}</p>
                      </div>
                    </div>

                    {/* Day circle */}
                    <div
                      className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm transition-all duration-500 ${
                        hoveredDay === lesson.day
                          ? 'bg-[#FBBF24] text-[#0C0A1D] scale-125'
                          : 'bg-[#1E1B4B] text-[#A5B4FC] border-2 border-[#4338CA]'
                      }`}
                    >
                      {lesson.day}
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1"></div>
                  </div>
                ))}
              </div>

              {/* End marker */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 -bottom-4 w-4 h-4 rounded-full bg-[#FBBF24]"></div>
            </div>

            {/* Result callout */}
            <div className="mt-20 text-center">
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#4338CA]/20 to-[#FBBF24]/20 rounded-full px-8 py-4 border border-[#4338CA]/30">
                <span className="text-[#A5B4FC]">After 7 days:</span>
                <span className="font-display font-semibold text-white">Your first video is LIVE</span>
                <span className="text-2xl">🎉</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-8 border-t border-[#4338CA]/20">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-[#6B6B8A] text-sm">
              &copy; {new Date().getFullYear()} Thierry Starts YouTube
            </span>
            <Link
              href="/"
              className="text-[#6B6B8A] hover:text-[#FBBF24] text-sm transition-colors duration-300"
            >
              Visit Homepage →
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
