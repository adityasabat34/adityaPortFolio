import React from 'react';
import githubPng from '../assets/github.png';
import YTPng from '../assets/youtube.png';
import LinkedIn from '../assets/linkedin.png';
import WebSite from '../assets/web.png';

const Footer = () => {
  return (
    <footer className="footer footer-center bg-darkClay2 text-primary-content p-10">
      <aside className="flex flex-col items-center">
        <img alt="logo" src={WebSite} className="h-10 w-10" />

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
          <img alt="GitHub logo" src={githubPng} className="h-10 w-10" />
          <img alt="LinkedIn logo" src={LinkedIn} className="h-10 w-10" />
          <img alt="YouTube logo" src={YTPng} className="h-10 w-10" />
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
