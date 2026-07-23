import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";

export default function Home() {
  return (
    <div>
      <Hero />
      <SocialLinks />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Education />
    </div>
  );
}
