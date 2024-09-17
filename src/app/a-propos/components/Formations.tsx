import { allFormations } from '@data/a-propos/formations'
import React from 'react'

function Formations() {
  return (
    <div>
      {allFormations.map((formation, idx) => (
        <div className='md:flex items-center gap-10 my-6 px-6' key={idx}>
          <img src={formation.logo} className='w-24 max-md:mx-auto mb-2'></img>
          <div className='max-md:border-t-2 md:border-s-2 border-secondary px-4 py-2'>
            <h3 className='text-xl font-bold dark:text-white'>{formation.title}</h3>
            <p className='dark:text-white' dangerouslySetInnerHTML={{ __html: formation.description }} />
            <a href={formation.link} className='underline text-sm block mt-4 dark:text-white'>En savoir plus</a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Formations