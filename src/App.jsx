import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Equipe from './components/Equipe';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <section id="hero">
        <Hero />
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
