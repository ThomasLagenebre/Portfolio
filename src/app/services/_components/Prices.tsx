import { ClassicButton } from '@/app/_global_components/ClassicButton'
import SectionTitle from '@/app/_global_components/SectionTitle'
import Check from '@/app/_global_components/svg/Check'
import Minus from '@/app/_global_components/svg/Minus'
import Plus from '@/app/_global_components/svg/Plus'
import { allPrices } from '@data/services/allPrices'
import React from 'react'

function Prices() {
  return (
    <section className='max-w-screen-lg mx-auto my-16 px-4 lg:px-0'>
        <SectionTitle>Mes offres</SectionTitle>
        <p className='text-sm text-center dark:text-white'>Trouvez la formule qui correspond le plus à votre besoin. Si vous avez un doute ou une demande particulière, n'hésitez pas à <a className='underline' href='/contact'>me contacter</a></p>
        <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-8'>
            {allPrices.map((offer, index) => (
            <div className='shadow-md p-8 rounded-xl dark:shadow-secondary flex flex-col justify-between' key={index}>
                <div className='h-1/5 mb-6'>
                    <h3 className='font-bold text-xl dark:text-white mb-2'>{offer.title}</h3>
                    <p className='text-gray-400 text-sm h-1/3'>{offer.description}</p>
                    <p className='text-2xl font-bold my-8 dark:text-white h-1/3'>{offer.price}€ <span className='text-gray-600 text-base'></span></p>
                </div>
                <ul className='list-disc flex flex-col gap-2 dark:text-white h-4/5'>
                        {offer.includes.map((include, index) => (
                        <li key={index} className='flex gap-4'><Check className='w-3'></Check><span className='w-5/6'>{include}</span></li>
                        ))}
                        {offer.plus.map((plus, index) => (
                        <li key={index} className='flex gap-4'><Plus className='w-3 dark:fill-white'></Plus><span className='w-5/6'>{plus}</span></li>
                        ))}
                </ul>
                <ClassicButton type='link' variant='primary' to='/contact' className='mx-auto mt-8 dark:hover:text-white'>Commencer</ClassicButton>
            </div>
            ))}
                
        </div>
    </section>
    
  )
}

export default Prices