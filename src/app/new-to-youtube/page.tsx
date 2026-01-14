import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const sections = [
  {
    id: 'gear',
    title: 'Gear & Equipment',
    icon: '🎥',
    description: 'You don\'t need expensive gear to start. Here\'s what I recommend for beginners.',
    items: [
      {
        name: 'Camera',
        description: 'Start with your smartphone! Modern phones shoot excellent video. When ready to upgrade, consider a webcam like the Logitech C920 or an entry-level mirrorless camera.',
        placeholder: true,
      },
      {
        name: 'Microphone',
        description: 'Audio quality matters more than video quality. A USB microphone like the Blue Yeti or Audio-Technica ATR2100x is a great starting point.',
        placeholder: true,
      },
      {
        name: 'Lighting',
        description: 'Natural light from a window works great. For consistent lighting, a simple ring light or softbox kit can make a huge difference.',
        placeholder: true,
      },
      {
        name: 'Tripod/Mount',
        description: 'Keep your camera steady with a basic tripod or phone mount. No more shaky footage!',
        placeholder: true,
      },
    ],
  },
  {
    id: 'tools',
    title: 'Software & Tools',
    icon: '🛠️',
    description: 'Essential software to create, edit, and optimize your videos.',
    items: [
      {
        name: 'Video Editing Software',
        description: 'Free options: DaVinci Resolve, CapCut, iMovie. Paid options: Adobe Premiere Pro, Final Cut Pro. Start free and upgrade when needed.',
        placeholder: true,
      },
      {
        name: 'Thumbnail Design',
        description: 'Canva (free) is perfect for beginners. It has YouTube thumbnail templates ready to customize.',
        placeholder: true,
      },
      {
        name: 'Screen Recording',
        description: 'OBS Studio (free) for screen recording and live streaming. Loom is great for quick recordings.',
        placeholder: true,
      },
      {
        name: 'Keyword Research',
        description: 'TubeBuddy and VidIQ offer free tiers to help you find what people are searching for on YouTube.',
        placeholder: true,
      },
    ],
  },
  {
    id: 'recording',
    title: 'How to Record Yourself',
    icon: '🎬',
    description: 'Tips and techniques for recording great videos, even if you\'re camera shy.',
    items: [
      {
        name: 'Setting Up Your Space',
        description: 'Find a quiet spot with good lighting. A clean, uncluttered background helps viewers focus on you.',
        placeholder: true,
      },
      {
        name: 'Camera Positioning',
        description: 'Position your camera at eye level. The lens should be about arm\'s length away for a natural look.',
        placeholder: true,
      },
      {
        name: 'Overcoming Camera Shyness',
        description: 'Talk to the camera like it\'s a friend. Practice makes perfect — your first videos won\'t be your best, and that\'s okay!',
        placeholder: true,
      },
      {
        name: 'Audio Tips',
        description: 'Record in a quiet room. Soft furnishings help reduce echo. Always do a test recording first.',
        placeholder: true,
      },
    ],
  },
  {
    id: 'editing',
    title: 'How to Edit Your Videos',
    icon: '✂️',
    description: 'Learn the basics of video editing to create engaging content.',
    items: [
      {
        name: 'Basic Editing Workflow',
        description: 'Import footage, cut out mistakes, add transitions, include music/sound effects, export. Keep it simple when starting out.',
        placeholder: true,
      },
      {
        name: 'Cutting & Trimming',
        description: 'Remove long pauses, "umms," and mistakes. Keep your video moving to maintain viewer attention.',
        placeholder: true,
      },
      {
        name: 'Adding Text & Graphics',
        description: 'Use titles, lower thirds, and callouts to emphasize key points and keep viewers engaged.',
        placeholder: true,
      },
      {
        name: 'Music & Sound Effects',
        description: 'Background music adds energy. Use royalty-free music from YouTube Audio Library or Epidemic Sound.',
        placeholder: true,
      },
    ],
  },
  {
    id: 'uploading',
    title: 'Uploading & Optimization',
    icon: '📤',
    description: 'Get your videos discovered with proper titles, descriptions, and thumbnails.',
    items: [
      {
        name: 'Titles That Get Clicks',
        description: 'Be specific and include keywords. Create curiosity but don\'t clickbait. Keep it under 60 characters.',
        placeholder: true,
      },
      {
        name: 'Descriptions That Rank',
        description: 'Write detailed descriptions with keywords. Include timestamps, links, and a call to action.',
        placeholder: true,
      },
      {
        name: 'Thumbnails That Stand Out',
        description: 'Use bright colors, readable text, and expressive faces. Your thumbnail is your video\'s billboard.',
        placeholder: true,
      },
      {
        name: 'Tags & Categories',
        description: 'Add relevant tags to help YouTube understand your content. Choose the right category for your video.',
        placeholder: true,
      },
    ],
  },
];

export default function NewToYouTubePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-600 to-teal-700 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">New To YouTube?</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Everything you need to know to start your YouTube journey.
              From gear to editing to uploading — I&apos;ve got you covered.
            </p>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="bg-white border-b sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex overflow-x-auto py-4 gap-4 md:gap-8 md:justify-center">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex-shrink-0 text-gray-600 hover:text-green-600 font-medium text-sm whitespace-nowrap transition-colors"
                >
                  {section.icon} {section.title}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Content Sections */}
        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className={`py-16 md:py-20 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <span className="text-5xl mb-4 block">{section.icon}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  {section.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                    {item.placeholder && (
                      <div className="mt-4 p-3 bg-blue-50 rounded text-sm text-blue-700">
                        More detailed guides and recommendations coming soon!
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your YouTube Journey?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Join my weekly live streams where I answer questions, do tutorials,
              and help creators like you grow their channels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://www.youtube.com/@YouTubeAfter40"
                target="_blank"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded transition-colors"
              >
                Subscribe on YouTube
              </Link>
              <Link
                href="/free-stuff"
                className="inline-block bg-white hover:bg-gray-100 text-blue-700 font-semibold px-8 py-3 rounded transition-colors"
              >
                Get Free Resources
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
