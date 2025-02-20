import React from 'react';
import partenaires from '../assets/Partenaires';
import '../styles/Feature.css'; // Import CSS file for styles

const Features = () => (
  <section id="features" className="py-12 bg-gray-100 overflow-hidden z-0">
    <h3 className="text-3xl text-center font-semibold mb-6 text-black">Partenaires</h3>
    <div className="conveyor">
      <div className="belt">
        {partenaires.map((partner) => (
          <div key={partner.id} id="cell" className="bg-white p-6 shadow rounded text-black">
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}  // ✅ Fixed
              className="mb-4 w-24 h-24 object-contain mx-auto"
            />
            <h4 className="text-xl font-bold mb-2 text-center">{partner.name}</h4>
          </div>
        ))}
        {/* Duplicate the items to create a seamless loop */}
        {partenaires.map((partner) => (
          <div key={`${partner.id}-duplicate`} id="cell" className="bg-white p-6 shadow rounded text-black">
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}  // ✅ Fixed
              className="mb-4 w-24 h-24 object-contain mx-auto"
            />
            <h4 className="text-xl font-bold mb-2 text-center">{partner.name}</h4>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
