import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import IntroductionSection from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Equipe from './components/Equipe';
import Header from './components/Header';
import Footer from './components/Footer';
import DNA from './components/DNA';
import GLTFViewer from './components/GLTFViewer';
import Model from './components/Model';

function App() {
  return (
    <div>
      <Header />
      <section id="hero">
        <div className='bg-black rounded-tl-2xl rounded-tr-2xl'>
          <div className='bg-black flex flex-col items-center justify-center gap-4 rounded-tl-2xl rounded-tr-2xl'>
            
            {/* Animate h3 from left */}
            <motion.h3
              className="text-3xl text-center font-semibold text-whte pt-16 pb-0"
              initial={{ opacity: 0, x: -200 }} // Start from the left off-screen
              animate={{ opacity: 1, x: 0 }} // Move to normal position
              transition={{ duration: 0.8, ease: "easeOut" }} // Easing animation
            >
              Expertise Automobile avec <span className='text-font-bold'>BE<span className='text-[#2596be]'>X</span>A</span>
            </motion.h3>

            {/* Animate p from left */}
            <motion.p
              className="text-center font-semibold mb-2 text-whte pb-0 w-[30rem]"
              initial={{ opacity: 0, x: -200 }} // Start from the left off-screen
              animate={{ opacity: 1, x: 0 }} // Move to normal position
              transition={{ duration: 0.8, ease: "easeOut" }} // Easing animation
            >
              Des services d'expertise et de conseil automobile de haute qualité.
              Faites confiance à notre équipe expérimentée pour un service rapide,
              efficace et adapté à vos besoins.
            </motion.p>

            {/* Animate button from left */}
            <motion.button
              className="bg-transparent border-2 border-whte text-whte px-6 py-3"
              initial={{ opacity: 0, x: -200 }} // Start from the left off-screen
              animate={{ opacity: 1, x: 0 }} // Move to normal position
              transition={{ duration: 0.6, ease: "easeOut" }} // Easing animation
            >
              Contactez-nous
            </motion.button>
          </div>
          <Model />
        </div>
      </section>

      <section id="IntroductionS" className="rounded-br-2xl">
        <div className='bg-black rounded-bl-2xl rounded-br-2xl'>
          <IntroductionSection />
        </div>
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
    </div>
  );
}

export default App;
