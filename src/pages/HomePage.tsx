import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Hero from '../sections/Hero/Hero';
import Marquee from '../sections/Marquee/Marquee';
import About from '../sections/About/About';
import Experience from '../sections/Experience/Experience';
import Skills from '../sections/Skills/Skills';
import Projects from '../sections/Projects/Projects';
import Education from '../sections/Education/Education';
import Certifications from '../sections/Certifications/Certifications';
import Contact from '../sections/Contact/Contact';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
