import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -100 }, // Start with opacity 0 and move to the left
    visible: { opacity: 1, x: 0 },  // Fade in and move to normal position
  };

  return (
    <section className="text-center w-full bg-blue-500 text-white py-20 bg-[url('/footer.jpg')] bg-cover bg-center">
      <motion.h2
        className="text-4xl font-bold mb-4"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} // Repeats animation when re-entering the viewport
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        la sécurité de vos véhicules commence ici
              </motion.h2>
      <motion.p
        className="text-lg mb-8"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }} // Adds a delay for a staggered effect
      >
      </motion.p>
      <button className="bg-white text-blue-500 px-6 py-3 rounded">Voir nos offres.</button>
    </section>
  );
};

export default Hero;
