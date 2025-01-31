// Navbar.js
import React from 'react';
import logo from '/Logo.png'; // Replace with your actual logo path

const Navbar = () => {
  return (
    <nav className=" w-full flex items-center justify-center px-6 py-4 bg-gray-900 fixed top-0 z-20   z-index: 20; 
    ">
      <div className="logo">
        <img src={logo} alt="Logo" className="h-12" />
      </div>
      <div className="flex space-x-8">
        <a href="#introduction" className="text-blue-400 hover:bg-gray-800 px-4 py-2 rounded">
          Introduction
        </a>
        <a href="#services" className="text-blue-400 hover:bg-gray-800 px-4 py-2 rounded">
          Services
        </a>
        <a href="#team" className="text-blue-400 hover:bg-gray-800 px-4 py-2 rounded">
          Equipe
        </a>
        <a href="#partners" className="text-blue-400 hover:bg-gray-800 px-4 py-2 rounded">
          Partenaire
        </a>
        <a href="#contact" className="text-blue-400 hover:bg-gray-800 px-4 py-2 rounded">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
