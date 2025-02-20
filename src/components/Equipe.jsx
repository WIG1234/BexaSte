import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import equipe from '../assets/Equipe';

const Equipe = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full bg-black">
      <section id="features" className="py-12 bg-black w-4/5 mx-auto">
        <h3 className="text-3xl text-center font-semibold mb-6 text-black">Equipe</h3>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-6 justify-center">
          {equipe.map((membre, index) => (
            <motion.div
              key={membre.id}
              className="blue p-6 shadow rounded-lg text-black w-full sm:w-72 flex flex-col items-center"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                delay: index * 0.2,
                duration: 0.5,
              }}
            >
              {/* Profile Placeholder */}
              <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center mb-4 text-xl font-bold text-white">
                {membre.name.charAt(0).toUpperCase()}
              </div>

              {/* Name and Description */}
              <h4 className="text-xl font-bold mb-2 text-center">{membre.name}</h4>
              <p className="text-center text-sm mb-4">{membre.description}</p>

              {/* Social Media Icons */}
              <div className="flex gap-3">
                {membre.Facebook && (
                  <a href={membre.Facebook} target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={20} className="cursor-pointer text-blue-600" />
                  </a>
                )}
                {membre.twitter && (
                  <a href={membre.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={20} className="cursor-pointer text-blue-400" />
                  </a>
                )}
                {membre.instagram && (
                  <a href={membre.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={20} className="cursor-pointer text-pink-500" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Equipe;
