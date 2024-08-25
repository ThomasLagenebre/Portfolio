import Cible from '@/app/_global_components/svg/Cible'
import Notes from '@/app/_global_components/svg/Notes'
import Team from '@/app/_global_components/svg/Team'
import Image from 'next/image'
import React from 'react'

function SavoirEtre() {
  return (
    <div className='flex gap-4'>
      <div className='rounded-md bg-blue-200 w-1/4'>
        <p className='mt-4 text-center text-xl font-bold text-gray-800'>Déterminé</p>
        <div className='m-auto w-1/3'>
          <Cible />
        </div>
      </div>
      <div className='rounded-md bg-green-200 w-1/4'>
        <p className='mt-4 text-center text-xl font-bold text-gray-800'>Organisé</p>
        <div className='m-auto w-1/3'>
          <Notes />
        </div>
      </div>
      <div className='rounded-md bg-yellow-200 w-1/4'>
        <p className='mt-4 text-center text-xl font-bold text-gray-800'>Travail d'équipe</p>
        <div className='m-auto w-1/3'>
            <Team />
        </div>
      </div>
      <div className='rounded-md bg-blue-200 w-1/4'>
        <p className='mt-4 text-center text-xl font-bold text-gray-800'>Déterminé</p>
        <div className='m-auto w-1/3'>
          <Cible />
        </div>
      </div>
      <div className='rounded-md bg-blue-200 w-1/4'>
        <p className='mt-4 text-center text-xl font-bold text-gray-800'>Déterminé</p>
        <div className='m-auto w-1/3'>
          <Cible />
        </div>
      </div>
    </div>
  )
}

export default SavoirEtre