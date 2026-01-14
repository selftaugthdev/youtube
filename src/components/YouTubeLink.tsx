import Link from 'next/link';

export default function YouTubeLink() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3">
          {/* Profile pic placeholder */}
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
            <span className="text-xs text-gray-500">IMG</span>
          </div>
          {/* YouTube icon */}
          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
          </div>
          {/* Channel link */}
          <Link
            href="https://www.youtube.com/@YouTubeAfter40"
            target="_blank"
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            youtube.com/@YouTubeAfter40
          </Link>
        </div>
      </div>
    </section>
  );
}
