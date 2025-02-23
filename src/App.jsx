import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import IntroductionSection from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Equipe from './components/Equipe';
import Footer from './components/Footer';
import Model from './components/Model';
import ContactUs from './components/ContactUs';
import { FaWhatsapp } from "react-icons/fa";
import "./App.css";
import VideoPlayer from './components/VideoPlayer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='relative'>
      {loading ? (
        <div className="loading-page flex justify-center items-center bg-black text-white h-screen w-full">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <>
          <Header />
          <section id="hero" className='bg-black text-white text-center flex flex-col items-center justify-center p-6 sm:p-12'>
            <h3 className="text-2xl sm:text-3xl font-semibold pt-10 pb-2">
              Expertise Automobile avec <span className='font-bold'>BE<span className='text-[#2596be]'>X</span>A</span>
            </h3>
            <p className="text-base sm:text-lg w-full sm:w-[30rem] mb-4">
              Des services d'expertise et de conseil automobile de haute qualité. Faites confiance à notre équipe expérimentée pour un service rapide, efficace et adapté à vos besoins.
            </p>
            <button className="bg-transparent border-2 border-white text-white mb-4 px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-white hover:text-black transition">
              Contactez-nous
            </button>
            <VideoPlayer/>
            <Model />
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
          <Footer />

          <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6">
            <button 
              className="bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-green-600 transition"
              onClick={() => window.open('https://wa.me/212684444422', '_blank')}
            >
              <FaWhatsapp size={24} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
