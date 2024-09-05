import png from '../assets/HomePic.png';

const Home = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-16 md:py-32 bg-darkClay1">
      <div className="w-full md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-black mt-8 ">
          Hi, I m Aditya,
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          I am a web developer specializing in creating interactive and
          user-friendly web applications.
        </p>
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Contact Me
        </button>
      </div>

      <div className="w-full md:w-1/2 flex justify-center md:justify-around drop-shadow-2xl transition ease-in-out duration-500  transform hover:scale-125 delay-100">
        <img src={png} alt="3D Graphic" className="w-2/3 md:w-full max-w-md" />
      </div>
    </section>
  );
};

export default Home;
