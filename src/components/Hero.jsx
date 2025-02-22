import React from "react";
import '../App.css'
const IntroductionSection = () => {
  return (
    <section className="blue mt-4 rounded-xl text-black flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-10  ">
      {/* Left Side: Text */}
      <div className="w-full lg:w-1/2 text-center lg:text-left flex-grow mb-7">
      <h2 className="text-3xl lg:text-4xl font-bold text-whte-700 mb-4">
          Bienvenue chez BEXA
        </h2>
        <p className="text-lg text-whte-700 leading-relaxed">
          Chez <strong>BEXA</strong> nous sommes spécialisés dans l’expertise et le conseil automobile, en proposant des services professionnels conformes aux plus hauts standards du secteur. Dirigée par un ingénieur expérimenté en automobile et en CAO 3D, notre équipe est composée de 13 experts qualifiés, dont certains cumulent plusieurs décennies d’expérience.

          <br/> Nos valeurs fondamentales reposent sur la satisfaction client, la réactivité et l’adaptabilité, garantissant des solutions personnalisées pour chaque besoin. Que ce soit pour l’évaluation des dommages, l’estimation de la valeur des véhicules, la gestion des sinistres ou les audits techniques, BEXA met à votre disposition une expertise de pointe, appuyée par des technologies modernes et une parfaite maîtrise des réglementations du secteur.

          <br/>Avec un engagement fort envers la transparence, la précision et l’efficacité, nous accompagnons nos clients avec professionnalisme et rigueur pour des solutions adaptées et fiables.


        </p>
        <p className="text-lg text-whte-700 mt-4">
          🚗 <strong>Découvrez nos services et profitez de l’excellence avec
          BEXA !</strong>
        </p>
      </div>

      {/* Right Side: Image (Hidden on Mobile) */}
      <div className="hidden lg:flex w-1/2 justify-center">
        <img
          src="car.jpg" // Replace with actual image URL
          alt="BEXA Expertise Automobile"
          className="rounded-md w-[20rem] object-cover"
        />
      </div>
    </section>
  );
};

export default IntroductionSection;