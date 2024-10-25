import React, { useState } from 'react';
import logo from '../assets/logo1.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-dark-blue p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo and Title */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-white font-bold text-xl">Narendra</span>
        </div>

        {/* Centered Links for Desktop */}
        <div className="hidden md:flex space-x-6 flex-grow justify-center">
          <a href="#home" className="text-white font-bold hover:text-golden-yellow">
            Home
          </a>
          <a href="#projects" className="text-white font-bold hover:text-golden-yellow">
            Projects
          </a>
        </div>

        {/* Download Resume Button on Right for Desktop */}
        <div className="hidden md:flex">
          <a
            href="/path-to-your-resume.pdf"
            download
            className="text-black bg-white hover:bg-golden-yellow py-2 px-4 rounded"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4 bg-dark-blue p-4">
          <a
            href="#home"
            className="text-white font-bold hover:text-golden-yellow"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#projects"
            className="text-white font-bold hover:text-golden-yellow"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="https://drive.google.com/file/d/1wpT0mZ9iZdNgReLc2-CyyNbCio7_3foU/view?usp=drivesdk"
            download
            className="text-black bg-white hover:bg-golden-yellow py-2 px-4 rounded"
            onClick={() => setIsOpen(false)}
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
