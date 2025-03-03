// app/page.js
import HeroSection from '../components/HeroSection';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';

export default function Page() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <Projects />
    </div>
  );
}
