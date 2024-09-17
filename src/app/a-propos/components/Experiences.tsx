import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function Experiences() {
  return (
    <ol
  className="border-s border-secondary dark:border-secondary max-md:ms-5 md:flex md:justify-center md:gap-6 md:border-s-0 md:border-t max-md:me-4">
    {Xp.map((job, idx) => 
    <li key={idx} className='md:w-1/4'>
    <div className="flex-start flex items-center pt-2 md:block md:pt-0">
      <div
        className="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-secondary dark:bg-secondary md:-mt-[5px] md:me-0 md:ms-0"></div>
      <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
        {job.date}
      </p>
    </div>
    <div className="ms-4 mt-2 pb-5 md:ms-0">
      <h4 className="mb-1.5 text-xl font-semibold dark:text-white">{job.name}</h4>
      <p className="mb-3 text-neutral-500 dark:text-white">
        {job.jobcompany}
      </p>
      {job.list && (
        <ul className='list-disc'>
          {job.list.map((notion) => (
            <li className='dark:text-neutral-300 ms-6'>{notion}</li>
          ))}
      </ul>
      )}
      
    </div>
  </li>
    )}
</ol>
  )
}

export default Experiences

const Xp = [
  {
    name: 'Boulanger-Pâtissier',
    jobcompany: 'Chef boulanger - Maison Kayser',
    date: 'Sept. 2013 - Fev. 2024'
  },
  {
    name: 'Responsable logistique',
    jobcompany: 'Bénévole - Equipage Solidaire',
    date: 'Depuis Mar. 2021'
  },
  {
    name: 'Développeur web fullstack',
    jobcompany: 'Étudiant - École O\'clock',
    date: 'Aoû. 2023 - Fev. 2024',
    list: [
      'Apprentissage HTML5, CSS3, PHP, POO, JavaScript, TypeScript, Versionning',
      'Développement dans un environnement Linux',
      'Spécialisation en ReactJS',
      'Initiation à Laravel'
    ]
  },
  {
    name: 'Développeur web fullstack',
    jobcompany: 'Freelance - MonsieurWeb',
    date: 'Depuis Fev. 2024',
    list: [
      'Création de solution digitale sur-mesure (site vitrine, e-commerce, intranet, ...)',
      'Création de '
    ]
  }
]