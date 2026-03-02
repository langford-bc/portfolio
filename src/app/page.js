// src/app/page.js
import HeroSection from '../components/HeroSection';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      <div id="projects">
        <Projects />
      </div>

      <AboutMe />

      <section className="bg-brand-black py-40 text-center">
        <div className="container-wide">
          <h2 className="text-white text-5xl md:text-7xl font-medium mb-12 lg:mb-18 tracking-tight">
            Ready to tell <br />
            your next <span className="italic font-serif">story?</span>
          </h2>
          <Link href="/contact" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-brand-black px-12 py-6 text-lg">
            Start a Collaboration
          </Link>
        </div>
      </section>
    </div>
  );
}
