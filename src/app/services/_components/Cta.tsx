import { ClassicButton } from '@/app/_global_components/ClassicButton'
import React from 'react'

function Cta() {
  return (
    <div className='bg-slate-900 dark:bg-light py-8 px-8 mb-10'>
        <h3 className='text-center font-bold text-xl text-light mb-6 dark:text-dark'>Vous êtes une entreprise à la recherche d'un freelance pour une mission spécifique ?</h3>
        <ClassicButton type='link' variant='secondary'>Contactez-moi</ClassicButton>
    </div>
  )
}

export default Cta