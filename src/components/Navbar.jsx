import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-darkClay border-b-2 border-gray-500 shadow-2xl z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-3xl font-bold text-gray-700">
              ADITYA
            </a>
          </div>

          {/* Menu Links */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-md font-medium transition duration-200 ease-in-out transform hover:scale-125 delay-100"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-md font-medium transition duration-100 ease-in-out transform hover:scale-125 delay-100"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-md font-medium transition duration-200 ease-in-out transform hover:scale-125 delay-100"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-md font-medium transition duration-200 ease-in-out transform hover:scale-125 delay-100"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-md font-medium transition duration-200 ease-in-out transform hover:scale-125 delay-100"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
