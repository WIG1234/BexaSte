import React from 'react';
import { Link } from 'react-scroll';
import logo from '/Logo.png'; // Replace with your actual logo path

const Header = () => (
  <header className="sticky top-0 w-full bg-black shadow z-20 rounded-bl-2xl rounded-br-2xl mb-7">
    <div className="flex justify-between items-center p-4 max-w-screen-lg mx-auto rounded-bl-2xl rounded-br-2xl">
      <img src={logo} alt="Logo" className="h-12" />
      <nav className="flex space-x-4">
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
            className="text-gray-600 hover:text-blue-500 text-xs sm:text-sm md:text-base lg:text-lg transition-all duration-300 cursor-pointer"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  </header>
);

export default Header;
