import React from 'react';
import githubPng from '../assets/github.png';
import YTPng from '../assets/youtube.png';
import LinkedIn from '../assets/linkedin.png';
import WebSite from '../assets/web.png';

const Footer = () => {
  return (
    <footer className="footer footer-center bg-darkClay2 text-primary-content p-10">
      <aside className="flex flex-col items-center">
        <p className="font-bold text-center mt-2">
          Aditya Sabat - adityasabat34@gmail.com
          <br />
          Personal PortFolio
        </p>
        <p className="text-center mt-1">
          Copyright © {new Date().getFullYear()} - All rights reserved
        </p>
      </aside>
      <nav className="mt-4">
        <div className="flex justify-center gap-10">
          <a
            href="https://github.com/adityasabat34/"
            className="inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="GitHub logo" src={githubPng} className="h-10 w-10" />
          </a>

          <a
            href="https://genzstore-ciyq.onrender.com"
            className="inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="LinkedIn log" src={WebSite} className="h-10 w-10" />
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-sabat-474669296/"
            className="inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="LinkedIn log" src={LinkedIn} className="h-10 w-10" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
