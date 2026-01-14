import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] flex items-center">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500 opacity-80">
        {/* This creates a fall foliage-like gradient background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20600%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22a%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23e67e22%22%2F%3E%3Cstop%20offset%3D%2250%25%22%20stop-color%3D%22%23c0392b%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23f39c12%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20fill%3D%22url(%23a)%22%20width%3D%221200%22%20height%3D%22600%22%2F%3E%3C%2Fsvg%3E')] bg-cover bg-center"></div>
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Start on YouTube.<br />
            Grow a Business.
          </h1>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Learn how to <span className="underline cursor-pointer hover:text-white">grow your channel</span>, build a{' '}
            <span className="underline cursor-pointer hover:text-white">one-person business</span>, and
            create freedom through YouTube — with personalized training and
            support for creators over 40.
          </p>
          <Link
            href="#start"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded transition-colors duration-200"
          >
            START YOUR JOURNEY
          </Link>
        </div>
      </div>

      {/* Profile placeholder on the right side (visible on larger screens) */}
      <div className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2">
        <div className="w-64 h-64 rounded-lg bg-gray-300 flex items-center justify-center text-gray-500 text-sm">
          [Profile Image Placeholder]
        </div>
      </div>
    </section>
  );
}
