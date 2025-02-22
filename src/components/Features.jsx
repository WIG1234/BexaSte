import React from 'react';
import partenaires from '../assets/Partenaires';
import '../styles/Feature.css'; // Import CSS file for styles

const Features = () => (
  <section id="features" className="py-12 bg-gray-100 overflow-hidden z-0">
    <h3 className="text-3xl text-center font-semibold mb-6 text-black">Partenaires</h3>
    <div className="conveyor">
      <div className="belt">
        {partenaires.map((partner) => (
          <div key={partner.id} id="cell" className="partner-card">
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              className="partner-logo"
            />
            <h4 className="partner-name">{partner.name}</h4>
          </div>
        ))}
        {/* Duplicate the items to create a seamless loop */}
        {partenaires.map((partner) => (
          <div key={`${partner.id}-duplicate`} id="cell" className="partner-card">
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              className="partner-logo"
            />
            <h4 className="partner-name">{partner.name}</h4>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
