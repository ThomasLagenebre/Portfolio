
import React from 'react'
import { GiBrain } from 'react-icons/gi'

function SavoirEtre() {
  return (
    <div>
      <div className='flex gap-4'>
        <div className='bg-gray-100 rounded-md px-4 py-2'>
          <GiBrain size={'3em'} className='mx-auto fill-primary'/>
          <p className='font-bold'>Déterminé</p>
        </div>
        <div className='bg-gray-100 rounded-md px-4 py-2'>
          <GiBrain size={'3em'} className='mx-auto fill-primary'/>
          <p className='font-bold'>Autonome</p>
        </div>
      </div>
      <p>A 25 ans, je suis développeur web depuis 2 ans. J'ai entamer ma reconversion professionnelle en 2022, j'ai commencé par un apprentissage en autodidacte afin d'apprendre les bases du développement web : HTML, CSS, JS et PHP mais également l'utilisation d'un IDE, les bases de données, le versionning... Afin d'approfondir toutes mes connaissances j'ai intégré une formation dans une école en ligne, où j'ai pu apprendre de nouvelles choses comme l'accessibilité, la POO, le SQL (requête optimisée). Mais c'est également dans cette formation que j'ai appris Laravel et ReactJS.</p>
    </div>
    
  )
}

export default SavoirEtre