import BlogCard from './components/BlogCard';
import Home from './components/Home';
import { MarqueeDemo } from './components/Marquee';
import Navbar from './components/Navbar';
import Projects from './components/ProjectsCards';

const App = () => {
  return (
    <div className="bg-darkClay">
      <Navbar />
      <Home />
      <MarqueeDemo />
      <BlogCard />
      <Projects />
    </div>
  );
};

export default App;
