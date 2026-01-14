export default function Welcome() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="order-2 md:order-1">
            <div className="aspect-[4/3] bg-gray-300 rounded-lg flex items-center justify-center text-gray-500">
              [Welcome Image Placeholder]
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
              Welcome!
            </h2>
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                I&apos;m Thierry, aka <strong>&quot;Thierry Starts YouTube&quot;</strong> — a YouTuber/creator,
                business owner and coach.
              </p>
              <p>
                Since launching my Youtube channel, I&apos;ve
                helped thousands of people like you start and grow their own
                Youtube channels and businesses.
              </p>
              <p>
                This isn&apos;t just about making YouTube videos — it&apos;s about building
                something that&apos;s yours, finding your voice — and having fun while
                doing it :-)
              </p>
              <p>Enjoy the ride!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
