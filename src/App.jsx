import "./App.css";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";
import SkillsLicense from "./components/Skiils/SkillsLicense";

function App() {
  return (
    <>
      <section id="HomePage">
        <Navbar />
        <Hero />
      </section>
      <section>
        <Parallax type="about" />
      </section>
      <section id="AboutMe">
        <About />
      </section>
      <section>
        <Parallax type="skills" />
      </section>
      <section id="Skills">
        <SkillsLicense />
      </section>
      <section>
        <Parallax type="services" />
      </section>
      <section id="Services">Services</section>
      <section>
        <Parallax type="portfolio" />
      </section>
      <section id="Portfolio">Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Kontak">Contact</section>
    </>
  );
}

export default App;
