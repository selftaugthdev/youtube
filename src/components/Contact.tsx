'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - will be replaced with Kit.com form
    alert('This is a placeholder form. Kit.com integration coming soon!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-16 md:py-24">
      {/* Background Image Placeholder with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900">
        {/* Nature-like background pattern */}
        <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%3E%3Ccircle%20fill%3D%22%23334155%22%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2240%22%2F%3E%3C%2Fsvg%3E')]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contact Me
          </h2>
          <p className="text-gray-300 mb-2">
            Have a business inquiry, collaboration idea, or something specific
            you&apos;d like to reach out about?
          </p>
          <p className="text-gray-300 mb-8">
            Send me a message below and I&apos;ll get back to you :-)
          </p>

          {/* Placeholder Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded transition-colors duration-200"
            >
              SEND MESSAGE
            </button>
          </form>

          {/* Note */}
          <p className="text-gray-400 text-sm mt-8">
            Please note: I&apos;m not able to offer personalized channel advice via email.
            <br />
            For help growing your channel, please check out my{' '}
            <span className="text-white underline cursor-pointer">YouTube videos</span>,{' '}
            <span className="text-white underline cursor-pointer">live streams</span>,{' '}
            or <span className="text-white underline cursor-pointer">coaching options</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
