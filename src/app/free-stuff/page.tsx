import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const freeResources = [
  {
    title: 'The 40+ Creator\'s Quick-Start Course',
    description: 'A free 7-day email course that takes you from zero to your first published video. One simple, actionable lesson each day — designed for creators over 40.',
    icon: '📧',
    comingSoon: false,
    link: '/optin',
  },
  {
    title: 'YouTube Thumbnail Templates',
    description: 'Free Canva templates to create eye-catching thumbnails that get clicks. Includes 10 customizable designs perfect for beginners.',
    icon: '🎨',
    comingSoon: false,
  },
  {
    title: 'Video Ideas Worksheet',
    description: 'Stuck on what to create? This worksheet helps you brainstorm 50+ video ideas for your niche in under an hour.',
    icon: '💡',
    comingSoon: false,
  },
  {
    title: 'YouTube SEO Checklist',
    description: 'A simple checklist to optimize every video you upload. Cover all the basics to help your videos get discovered.',
    icon: '✅',
    comingSoon: false,
  },
  {
    title: 'First 1000 Subscribers Roadmap',
    description: 'A step-by-step roadmap to help you reach your first 1000 subscribers. Includes weekly action items and milestones.',
    icon: '🗺️',
    comingSoon: true,
  },
  {
    title: 'Video Script Template',
    description: 'A fill-in-the-blank script template that helps you structure engaging videos that keep viewers watching.',
    icon: '📝',
    comingSoon: true,
  },
];

export default function FreeStuffPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Free Resources</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Everything you need to start and grow your YouTube channel — completely free.
              No email required, no strings attached.
            </p>
          </div>
        </section>

        {/* Featured: Email Course */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-block bg-white/20 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                    FREE EMAIL COURSE
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    The 40+ Creator&apos;s Quick-Start Course
                  </h2>
                  <p className="text-blue-100 mb-6">
                    Go from zero to your first published video in just 7 days. Get one simple,
                    actionable lesson delivered to your inbox each day.
                  </p>
                  <Link
                    href="/optin"
                    className="inline-block bg-white hover:bg-gray-100 text-blue-700 font-bold px-6 py-3 rounded-lg transition-colors"
                  >
                    Get The Free Course &rarr;
                  </Link>
                </div>
                <div className="hidden md:block">
                  <div className="bg-white/10 backdrop-blur rounded-xl p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-white text-blue-700 rounded-full flex items-center justify-center font-bold text-sm">1</span>
                      <span className="text-sm">Find Your Perfect Niche</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-white text-blue-700 rounded-full flex items-center justify-center font-bold text-sm">2</span>
                      <span className="text-sm">Set Up Your Channel Right</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-white text-blue-700 rounded-full flex items-center justify-center font-bold text-sm">3</span>
                      <span className="text-sm">Gear You Actually Need</span>
                    </div>
                    <div className="text-center text-blue-200 text-sm">+ 4 more days...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">More Free Resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {freeResources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 relative"
                >
                  {resource.comingSoon && (
                    <span className="absolute top-4 right-4 bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
                      Coming Soon
                    </span>
                  )}
                  <div className="text-4xl mb-4">{resource.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  {!resource.comingSoon ? (
                    resource.link ? (
                      <Link
                        href={resource.link}
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded text-sm transition-colors"
                      >
                        Get It Free
                      </Link>
                    ) : (
                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded text-sm transition-colors">
                        Download Free
                      </button>
                    )
                  ) : (
                    <button
                      disabled
                      className="bg-gray-300 text-gray-500 font-semibold px-6 py-2 rounded text-sm cursor-not-allowed"
                    >
                      Coming Soon
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Want More Help?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Check out my YouTube channel for weekly videos, live streams, and tutorials
              to help you grow your channel and business.
            </p>
            <Link
              href="https://www.youtube.com/@YouTubeAfter40"
              target="_blank"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded transition-colors"
            >
              Visit My YouTube Channel
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
