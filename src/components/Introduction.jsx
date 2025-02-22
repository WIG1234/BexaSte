import Porche from '/Porche.png'
import "../index.css"


function Introduction() {

  return (
    <div className='Intro-container'>
        <img src={Porche} alt="Logo" />
        <div className="text-container">
            <h1> BEXA</h1>
            <p>Bexa est une société d’expertise et de conseil spécialisée dans le domaine de l’automobile, 
                dirigée par un jeune ingénieur d’état en automobile et CAO 3D, et compte à ce jour 13 collaborateurs dont
                 certains cumulent plusieurs décennies d’expérience. Bexa érige le sens du service en valeur suprême. 
                 Qu’il s’agisse des collaborateurs sur le terrain, des gestionnaires de sinistres, ou des administratifs, 
                 l’écoute du client, la réactivité et la capacité d’adaptation aux différentes situations sont au centre de ses préoccupations. Bexa veille à rester proche de ses clients,
                  d’établir avec chacun d’eux une relation personnalisée et de répondre au mieux à leurs besoins spécifiques.</p>
        </div>
    </div>
  )
}

export default Introduction
