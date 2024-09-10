import BlogCard from './components/BlogCard';
import Home from './components/Home';
import { MarqueeDemo } from './components/Marquee';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="bg-darkClay">
      <Navbar />
      <Home />
      <MarqueeDemo />
      <BlogCard />
    </div>
  );
};

export default App;
