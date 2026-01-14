import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and Links */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <span className="font-bold text-lg">Thierry Starts YouTube</span>
            <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
              <Link href="/#start" className="text-gray-400 hover:text-white transition-colors">
                Start Here
              </Link>
              <Link href="/new-to-youtube" className="text-gray-400 hover:text-white transition-colors">
                New To YouTube?
              </Link>
              <Link href="/#about" className="text-gray-400 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/#contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="/free-stuff" className="text-gray-400 hover:text-white transition-colors">
                Free Stuff
              </Link>
            </nav>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400">
            &copy; {currentYear} THIERRYSTARTSYOUTUBE.COM
          </div>
        </div>
      </div>
    </footer>
  );
}
