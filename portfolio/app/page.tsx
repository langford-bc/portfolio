import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Core from "./components/Core";
import Work from "./components/Work";
import EarlyCareer from "./components/EarlyCareer";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Core />
        <Work />
        <EarlyCareer />
        <Contact />
      </main>
    </>
  );
}
