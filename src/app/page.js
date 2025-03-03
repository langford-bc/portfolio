// app/page.js
import HeroSection from '../components/HeroSection';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <HeroSection />
      <AboutMe />
      <div id="projects">
        <Link 
          href="/projects"
          className="block text-center py-8"
        >
          <h2 className="text-3xl font-bold mb-8">My Projects</h2>
          <span className="text-blue-600 hover:text-blue-800">View All Projects →</span>
        </Link>
        <Projects />
      </div>
    </main>
  );
}
