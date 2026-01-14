import Header from '@/components/Header';
import Hero from '@/components/Hero';
import YouTubeLink from '@/components/YouTubeLink';
import Welcome from '@/components/Welcome';
import LiveStreams from '@/components/LiveStreams';
import CanIHelp from '@/components/CanIHelp';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <YouTubeLink />
        <Welcome />
        <LiveStreams />
        <CanIHelp />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
