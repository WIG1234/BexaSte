import React, { useState } from 'react';

// Reusable FeatureCard component for questions and answers
const FeatureCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggles the accordion state
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300 py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
        <span className="text-gray-800 text-xl">
          {isOpen ? '-' : '+'}
        </span>
      </div>
      {/* Accordion content with smooth transition */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="mt-3 text-gray-600 p-2">{answer}</p>
      </div>
    </div>
  );
};

// Services component displaying all features
const Services = () => {
  // List of questions and answers
 const features = [
  {
    question: 'Qu’est-ce que l’assurance responsabilité civile ?',
    answer: 'Elle couvre les dommages ou blessures que vous causez à des tiers lors d’un accident. Elle est obligatoire selon la loi marocaine et inclut la responsabilité civile corporelle et matérielle. Cependant, elle ne couvre pas les dommages à votre propre véhicule ou vos blessures.',
  },
  {
    question: 'Qu’est-ce que la couverture collision ?',
    answer: 'La couverture collision paie les dommages causés à votre voiture en cas d’accident avec un autre véhicule ou un objet, quelle que soit la responsabilité. Elle est particulièrement utile pour réparer ou remplacer votre véhicule après un accident.',
  },
  {
    question: 'Qu’est-ce que la couverture tous risques (comprehensive) ?',
    answer: 'Cette couverture protège votre véhicule contre des incidents non liés à une collision, tels que le vol, le vandalisme, les catastrophes naturelles ou les incendies. Elle est idéale pour protéger votre voiture contre les imprévus.',
  },
  {
    question: 'Qu’est-ce que la protection contre les blessures personnelles (PIP) ?',
    answer: 'La PIP couvre les frais médicaux pour vous et vos passagers, quelle que soit la responsabilité. Elle peut également inclure les pertes de salaire et d’autres coûts liés, garantissant un soutien financier après un accident.',
  },
  {
    question: 'Qu’est-ce que l’assistance routière ?',
    answer: 'L’assistance routière vous aide en cas de panne de votre véhicule. Elle inclut des services tels que le remorquage, le démarrage de batterie, la réparation de pneus crevés et la livraison de carburant d’urgence.',
  },
  {
    question: 'Qu’est-ce que la couverture des conducteurs non assurés/sous-assurés ?',
    answer: 'Cette couverture vous protège si vous êtes impliqué dans un accident avec un conducteur non assuré ou insuffisamment assuré. Elle couvre les dommages et blessures que l’autre conducteur ne peut pas payer.',
  },
  {
    question: 'Qu’est-ce qu’un bonus sans sinistre ?',
    answer: 'Un bonus sans sinistre est une réduction offerte pour chaque année sans réclamation. Plus vous passez de temps sans accident ou réclamation, plus votre réduction sur les primes sera importante.',
  },
  {
    question: 'Qu’est-ce qu’une franchise en assurance ?',
    answer: 'Une franchise est le montant que vous acceptez de payer de votre poche avant que votre assurance ne couvre le reste de la réclamation. Choisir une franchise plus élevée peut réduire votre prime, mais augmente vos coûts en cas de réclamation.',
  },
];

  

  return (
    <section id="features" className="p-12 bg-gray-100 flex justify-center">
      {/* Main container with responsive width */}
      <div style={{ width: '100%', maxWidth: '1000px' }}>
        <h3 className="text-3xl text-center font-semibold mb-8 text-gray-900">
          Services
        </h3>
        {/* Feature list */}
        <div className="flex flex-col space-y-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              question={feature.question}
              answer={feature.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
