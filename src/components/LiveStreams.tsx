import Link from 'next/link';

export default function LiveStreams() {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
              YouTube Live Streams
            </h2>
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                I &quot;Go Live&quot; on Youtube every week - <strong>Tuesdays at 1:00PM ET</strong> -
                where we&apos;ve built a vibrant community of people like you, looking
                to start and/or grow your own Youtube channel.
              </p>
              <p>
                I do demonstrations on video editing and thumbnail creation,
                explain Youtube Studio analytics, and answer your questions in
                the live chat.
              </p>
              <p>
                Drop in to my next live stream, meet new friends and maybe
                learn something new! Everyone is welcome :-)
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="#livestreams"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded text-sm transition-colors duration-200"
              >
                MY YOUTUBE LIVE STREAMS
              </Link>
            </div>
          </div>

          {/* Image Placeholder */}
          <div>
            <div className="relative aspect-video bg-gray-300 rounded-lg flex items-center justify-center text-gray-500 overflow-hidden">
              <span>[Live Stream Image Placeholder]</span>
              {/* Live Badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">LIVE</span>
              </div>
              {/* Time Badge */}
              <div className="absolute bottom-4 right-4">
                <span className="bg-blue-600 text-white text-sm font-bold px-3 py-2 rounded">
                  1:00 PM ET
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
