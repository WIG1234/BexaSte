import React from 'react';
import IntroductionSection from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Equipe from './components/Equipe';
import Header from './components/Header'
import Footer from './components/Footer'
import DNA from './components/DNA'
import GLTFViewer from './components/GLTFViewer';
import Model from './components/Model';


function App() {
  return (
    <div >
      <Header />
      <section id="hero">
      <div className='bg-black ' >
      <div className='bg-black flex flex-col items-center justify-center gap-4' >

      <h3 className="text-3xl text-center font-semibold  text-whte pt-16 pb-0">  Expertise Automobile avec <span className='text-font-bold'>BE<span className='text-[#2596be]'>X</span>A</span> </h3>
      <p className=" text-center font-semibold mb-2 text-whte  pb-0 w-[30rem] "> Des services d'expertise et de conseil automobile de haute qualité.
          Faites confiance à notre équipe expérimentée pour un service rapide,
          efficace et adapté à vos besoins.</p>

      <button className="bg-transparent border-2 border-whte text-whte px-6 py-3 ">Contactez-nous</button>
        </div >
        <Model />
        </div >


      </section>
      <section id="IntroductionS" className="rounded-br-2xl">
      <div className='bg-black rounded-bl-2xl rounded-br-2xl' >
      <IntroductionSection/>
      </div >
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
