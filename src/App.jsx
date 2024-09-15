import BlogCard from './components/BlogCard';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Home from './components/Home';
import { MarqueeDemo } from './components/Marquee';
import Projects from './components/ProjectsCards';
import Navbar from './components/Navbar';
import AboutMe from './components/About';

const App = () => {
  return (
    <div className="bg-darkClay">
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="skills">
        <MarqueeDemo />
      </section>
      <section id="experience">
        <BlogCard />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
      <Footer />
    </div>
  );
};

export default App;
