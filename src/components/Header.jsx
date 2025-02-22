import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';  // Import framer-motion
import logo from '/Logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full bg-black shadow z-20 rounded-l-2xl rounded-r-2xl my-4 p-4">
      <div className="flex justify-between items-center">
        <img src={logo} alt="Logo" className="h-12" />
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Menu with slide-in from higher position */}
        <motion.nav
          className={`md:flex md:space-x-6 absolute md:static top-16 left-0 w-full bg-black md:w-auto md:bg-transparent`}
          initial={{ y: '-150%' }}  // Start higher off-screen
          animate={{ y: isOpen ? 0 : '-150%' }}  // Slide down and up from higher position
          transition={{ type: 'spring', stiffness: 300, damping: 30 }} // Smooth animation
        >
          {[
            { name: 'Home', to: 'hero' },
            { name: 'Services', to: 'services' },
            { name: 'Partenaire', to: 'partenaire' },
            { name: 'Equipe', to: 'equipe' },
            { name: 'Contact', to: 'footer' },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.to}
              smooth={true}
              duration={500}
              className="block md:inline-block text-gray-300 hover:text-blue-500 py-2 px-4 text-lg cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;
