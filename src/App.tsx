import Navbar from './sections/Navbar';
import HeroBanner from './sections/HeroBanner';
import Biography from './sections/Biography';
import Experiences from './sections/Experiences';
import Publications from './sections/Publications';
import Skills from './sections/Skills';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Banner with profile card */}
      <HeroBanner />

      {/* Main Content */}
      <main className="max-w-[860px] mx-auto px-6 py-10">
        <Biography />
        <Experiences />
        <Publications />
        <Skills />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
