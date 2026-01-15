'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const checklistSections = [
  {
    title: 'Pre-Recording',
    items: 5,
    description: 'Everything to prepare before you hit record',
    color: '#10B981',
  },
  {
    title: 'Recording Day',
    items: 7,
    description: 'Step-by-step guide for your recording session',
    color: '#3B82F6',
  },
  {
    title: 'Post-Recording',
    items: 6,
    description: 'Edit and polish your video like a pro',
    color: '#8B5CF6',
  },
  {
    title: 'Upload & Publish',
    items: 8,
    description: 'Optimize for maximum views and engagement',
    color: '#F59E0B',
  },
];

export default function ChecklistOptinPage() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Submit to Kit.com form
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://app.kit.com/forms/8978553/subscriptions', {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Kit.com doesn't allow CORS, so we use no-cors mode
      });
      
      // With no-cors, we can't check response status, so assume success
      alert('Thanks! Check your email for the checklist.');
      setEmail('');
      setFirstName('');
    } catch (error) {
      alert('Something went wrong. Please try again.');
    }
  };

  const toggleCheck = (index: number) => {
    setCheckedItems(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

        .font-display {
          font-family: 'Manrope', system-ui, sans-serif;
        }
        .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes checkmark {
          0% { stroke-dashoffset: 24; }
          100% { stroke-dashoffset: 0; }
        }

        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        .animate-fade-up {
          animation: fadeUp 0.7s ease-out forwards;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }

        .checkbox-checked svg path {
          stroke-dasharray: 24;
          animation: checkmark 0.3s ease-out forwards;
        }

        .grid-pattern {
          background-image:
            linear-gradient(rgba(148, 163, 184, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.03) 1px, transparent 1px);
          background-size: 32px 32px;
        }
      `}</style>

      <div className="font-display min-h-screen bg-[#0F172A] relative grid-pattern">
        {/* Gradient accents */}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#10B981]/5 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-96 bg-gradient-to-tl from-[#3B82F6]/5 to-transparent pointer-events-none"></div>

        {/* Header */}
        <header className="relative py-8 border-b border-[#1E293B]">
          <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
            <Link
              href="/"
              className="text-[#64748B] hover:text-[#10B981] text-sm font-medium tracking-wide transition-colors duration-300"
            >
              ← Back to home
            </Link>
            <span className="text-[#10B981]/60 text-xs tracking-[0.2em] uppercase font-semibold">
              Free PDF
            </span>
          </div>
        </header>

        {/* Main Content */}
        <main className="relative">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* Left Column - Content */}
              <div>
                {/* Badge */}
                <div className="opacity-0 animate-fade-up">
                  <span className="inline-flex items-center gap-2 text-[#10B981] text-xs tracking-[0.15em] uppercase font-semibold mb-6">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    One-Page Checklist
                  </span>
                </div>

                {/* Headline */}
                <h1 className="opacity-0 animate-fade-up stagger-1">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] block">
                    Your First Video
                  </span>
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#10B981] leading-[1.1] block mt-2">
                    Checklist
                  </span>
                </h1>

                {/* Subheadline */}
                <p className="opacity-0 animate-fade-up stagger-2 text-xl text-[#94A3B8] mt-6 font-light">
                  Never miss a step on your first video.
                  Print it. Check it off. Upload with confidence.
                </p>

                {/* Interactive preview */}
                <div className="opacity-0 animate-fade-up stagger-3 mt-10 bg-[#1E293B] rounded-2xl p-6 border border-[#334155]">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">Preview: Try it out</h3>
                    <span className="font-mono text-xs text-[#64748B]">{checkedItems.length}/4 checked</span>
                  </div>
                  <div className="space-y-3">
                    {['Script written', 'Camera ready', 'Lighting checked', 'Hit record'].map((item, index) => (
                      <button
                        key={index}
                        onClick={() => toggleCheck(index)}
                        className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all duration-300 ${
                          checkedItems.includes(index)
                            ? 'bg-[#10B981]/10 border border-[#10B981]/30'
                            : 'bg-[#0F172A] border border-[#334155] hover:border-[#475569]'
                        }`}
                      >
                        <div
                          className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all duration-300 ${
                            checkedItems.includes(index)
                              ? 'bg-[#10B981] checkbox-checked'
                              : 'border-2 border-[#475569]'
                          }`}
                        >
                          {checkedItems.includes(index) && (
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span className={`text-sm transition-all duration-300 ${
                          checkedItems.includes(index) ? 'text-[#10B981] line-through' : 'text-[#CBD5E1]'
                        }`}>
                          {item}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="opacity-0 animate-fade-up stagger-4 mt-10 grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-white">26</span>
                    <p className="text-[#64748B] text-sm mt-1">Items</p>
                  </div>
                  <div className="text-center">
                    <span className="text-3xl font-bold text-white">4</span>
                    <p className="text-[#64748B] text-sm mt-1">Sections</p>
                  </div>
                  <div className="text-center">
                    <span className="text-3xl font-bold text-white">1</span>
                    <p className="text-[#64748B] text-sm mt-1">Page</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Form Card */}
              <div className="opacity-0 animate-fade-up stagger-2 lg:sticky lg:top-8">
                <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-black/20">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center shadow-lg shadow-[#10B981]/30">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                      </svg>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-center text-[#0F172A] mb-2">
                    Get Your Free Checklist
                  </h2>
                  <p className="text-[#64748B] text-center mb-8">
                    Enter your details and I&apos;ll send the checklist instantly.
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
                        className="w-full px-5 py-4 rounded-xl border-2 border-[#E2E8F0] bg-[#F8FAFC] focus:outline-none focus:border-[#10B981] focus:bg-white text-[#0F172A] placeholder-[#94A3B8] transition-all duration-300"
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
                        className="w-full px-5 py-4 rounded-xl border-2 border-[#E2E8F0] bg-[#F8FAFC] focus:outline-none focus:border-[#10B981] focus:bg-white text-[#0F172A] placeholder-[#94A3B8] transition-all duration-300"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="group w-full bg-[#0F172A] hover:bg-[#10B981] text-white font-bold py-4 px-6 rounded-xl text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#10B981]/20"
                    >
                      <span className="flex items-center justify-center gap-3">
                        Send Me The Checklist
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </button>
                  </form>

                  <p className="text-xs text-[#94A3B8] text-center mt-6 flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    100% free. No spam. Unsubscribe anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Sections Breakdown */}
        <section className="relative py-20 border-t border-[#1E293B]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 text-[#64748B] text-xs tracking-[0.15em] uppercase font-semibold mb-4">
                <span className="w-8 h-px bg-[#334155]"></span>
                What&apos;s Inside
                <span className="w-8 h-px bg-[#334155]"></span>
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Four Sections, Zero Confusion
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {checklistSections.map((section, index) => (
                <div
                  key={index}
                  className="group bg-[#1E293B] hover:bg-[#243044] rounded-2xl p-6 border border-[#334155] hover:border-[#475569] transition-all duration-500"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center font-mono font-bold text-lg"
                      style={{ backgroundColor: `${section.color}20`, color: section.color }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <span
                      className="font-mono text-xs px-3 py-1 rounded-full"
                      style={{ backgroundColor: `${section.color}15`, color: section.color }}
                    >
                      {section.items} items
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#10B981] transition-colors duration-300">
                    {section.title}
                  </h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">
                    {section.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-4 bg-[#1E293B] rounded-full px-8 py-4 border border-[#334155]">
                <span className="text-3xl font-bold text-[#10B981]">26</span>
                <span className="text-[#94A3B8]">
                  total items — nothing forgotten, nothing missed
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Section */}
        <section className="relative py-20 border-t border-[#1E293B]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <span className="inline-flex items-center gap-2 text-[#10B981] text-xs tracking-[0.15em] uppercase font-semibold mb-4">
              <span className="w-8 h-px bg-[#10B981]"></span>
              Why This Matters
              <span className="w-8 h-px bg-[#10B981]"></span>
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Upload With Confidence
            </h2>

            <div className="space-y-6 text-lg text-[#94A3B8] leading-relaxed">
              <p>
                Your first video is exciting — but it&apos;s easy to forget something important
                when you&apos;re focused on being on camera for the first time.
              </p>
              <p>
                This checklist ensures you don&apos;t upload your video only to realize you
                forgot to check your audio, add a thumbnail, or write a description.
              </p>
              <p className="text-white font-semibold text-xl">
                Print it. Check it off. Upload with confidence.
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
                className="inline-flex items-center gap-2 text-[#10B981] font-semibold hover:gap-4 transition-all duration-300"
              >
                Get Your Free Checklist
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-[#1E293B]">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-[#64748B] text-sm">
              &copy; {new Date().getFullYear()} Thierry Starts YouTube
            </span>
            <Link
              href="/"
              className="text-[#64748B] hover:text-[#10B981] text-sm transition-colors duration-300"
            >
              Visit Homepage →
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
