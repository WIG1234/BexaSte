import React, { useState, useEffect } from 'react';
import IntroductionSection from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Equipe from './components/Equipe';
import Header from './components/Header';
import Footer from './components/Footer';
import Model from './components/Model';
import ContactUs from './components/ContactUs'; // Import the ContactUs component
import { FaWhatsapp } from "react-icons/fa";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true); // Track loading state

  // Set a timer to switch to the main content after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 10 seconds
    }, 10000); // 10 seconds

    return () => clearTimeout(timer); // Clear the timer when the component is unmounted
  }, []);

  return (
    <div className='relative'>
      {/* Conditionally render loading page or main content */}
      {loading ? (
        <div className="loading-page flex justify-center items-center bg-black text-white h-screen w-full">
          <div className="loading-spinner"></div> {/* Circular loader */}
        </div>
      ) : (
        <>
          <Header />
          <section id="hero">
            <div className='bg-black'>
              <div className='bg-black flex flex-col items-center justify-center gap-4'>
                <h3 className="text-3xl text-center font-semibold text-white pt-16 pb-0">
                  Expertise Automobile avec <span className='font-bold'>BE<span className='text-[#2596be]'>X</span>A</span>
                </h3>
                <p className="text-center font-semibold mb-2 text-white pb-0 w-[30rem]">
                  Des services d'expertise et de conseil automobile de haute qualité.
                  Faites confiance à notre équipe expérimentée pour un service rapide,
                  efficace et adapté à vos besoins.
                </p>
                <button className="bg-transparent border-2 border-white text-white px-6 py-3">
                  Contactez-nous
                </button>
              </div>
              <Model /> {/* Model component */}
            </div>
          </section>
          <section id="IntroductionS" className="rounded-br-2xl">
            <IntroductionSection />
          </section>
          <section id="partenaire">
            <Features />
          </section>
          <section id="equipe">
            <Equipe />
          </section>
          <section id="services">
            <Services />
          </section>
          <ContactUs /> {/* Add ContactUs section here */}
          <Footer />
          
          {/* Bottom-left button */}
          <div className="fixed bottom-4 right-4">
            <button 
              className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg"
              onClick={() => window.open('https://wa.me/212641437338', '_blank')}
            >
              <FaWhatsapp />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
