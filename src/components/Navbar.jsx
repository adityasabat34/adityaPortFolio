import React from 'react';

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a href="/" className="text-3xl font-bold text-gray-700">
              ADITYA
            </a>
          </div>

          {/* Menu Links */}
          <div className="hidden md:flex space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-md font-medium transition duration-200 ease-in-out transform hover:scale-125 delay-100"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-md font-medium transition duration-100 ease-in-out transform hover:scale-125 delay-100"
            >
              About
            </a>
            <a
              href="/services"
              className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-md font-medium transition duration-200 ease-in-out transform hover:scale-125 delay-100"
            >
              Projects
            </a>
            <a
              href="/experience"
              className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-md font-medium transition duration-200 ease-in-out transform hover:scale-125 delay-100"
            >
              Experience
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-md font-medium transition duration-200 ease-in-out transform hover:scale-125 delay-100s"
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
