import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion"; // Import framer-motion
import logo from "/Logo.png";

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

        {/* Large Screen Navbar (Static Positioning) */}
        <nav className="hidden md:flex md:space-x-6 items-center">
          {[
            { name: "Home", to: "hero" },
            { name: "Services", to: "services" },
            { name: "Partenaire", to: "partenaire" },
            { name: "Equipe", to: "equipe" },
            { name: "Contact", to: "footer" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.to}
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-blue-500 py-2 px-4 text-lg cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Menu with Animation */}
        {isOpen && (
          <motion.div
            className="absolute top-16 left-0 w-full bg-black flex flex-col items-center py-4 space-y-4 md:hidden"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {[
              { name: "Home", to: "hero" },
              { name: "Services", to: "services" },
              { name: "Partenaire", to: "partenaire" },
              { name: "Equipe", to: "equipe" },
              { name: "Contact", to: "footer" },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.to}
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-blue-500 py-2 px-4 text-lg cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
