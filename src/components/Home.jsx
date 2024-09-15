import png from '../assets/HomePic.png';
import TextChange from './TextChanger';

const Home = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-16 md:py-32 bg-darkClay1">
      <div className="w-full md:w-1/2 space-y-6">
        <div className="relative h-32 md:h-48 overflow-visible">
          <h1 className="absolute inset-0 flex items-center justify-start text-3xl md:text-6xl font-bold text-black transition-opacity duration-1000 ease-in-out">
            <TextChange
              dynamicTexts={[
                "Hi, I'm ADITYA",
                'Software Developer',
                'Welcome to my site',
              ]}
            />
          </h1>
        </div>
        <p className="text-lg md:text-xl text-gray-700">
          I am a web developer specializing in creating interactive and
          user-friendly web applications.
        </p>
        <div className="flex gap-5">
          <a href="#contact" className="inline-block">
            <button className="px-6 py-2 bg-black font-semibold text-white rounded-lg hover:bg-gray-600 transition">
              Contact me
            </button>
          </a>
          <a
            href="https://github.com/adityasabat34/"
            className="inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-2 bg-black font-semibold text-white rounded-lg hover:bg-gray-600 transition">
              GitHub Link
            </button>
          </a>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center md:justify-around drop-shadow-2xl transition ease-in-out duration-500 transform hover:scale-125 delay-100">
        <img src={png} alt="3D Graphic" className="w-2/3 md:w-full max-w-md" />
      </div>
    </section>
  );
};

export default Home;
