import Link from 'next/link';

export default function CanIHelp() {
  return (
    <section id="creators" className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="order-2 md:order-1">
            <div className="aspect-[4/3] bg-gray-300 rounded-lg flex items-center justify-center text-gray-500">
              [Can I Help Image Placeholder]
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
              Can I Help?
            </h2>
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                I try to help as many people as I can through my weekly videos
                and live streams — typically 2 videos and 1 live stream per week.
              </p>
              <p>
                For those looking for more personalized guidance, I also offer{' '}
                <strong>1-on-1 coaching calls</strong> as well as <strong>several courses</strong> to help you with
                camera confidence, recording, editing and uploading Youtube
                videos, or live streaming on your own channel!
              </p>
              <p>
                I&apos;m also developing a <strong>new mentorship program</strong> that combines
                1-on-1 coaching calls with group learning — coming soon.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="#learn"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded text-sm transition-colors duration-200"
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
