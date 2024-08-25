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
        <p className='text-sm text-center'>Trouvez la formule qui correspond le plus à votre besoin. Si vous avez un doute ou une demande particulière, n'hésitez pas à <a className='underline' href='/contact'>me contacter</a></p>
        <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-8'>
            {allPrices.map((offer, index) => (
            <div className='shadow-md p-8 rounded-xl' key={index}>
                <div>
                    <h3 className='font-bold text-xl'>{offer.title}</h3>
                    <p className='text-gray-400 text-sm'>{offer.description}</p>
                </div>
                
                <p className='text-2xl font-bold my-8'>{offer.price}€ <span className='text-gray-600 text-base'></span></p>
                <ul className='list-disc flex flex-col gap-2'>
                        {offer.includes.map((include, index) => (
                        <li key={index} className='flex items-center gap-4'><Check className='w-5'></Check>{include}</li>
                        ))}
                        {offer.plus.map((plus, index) => (
                        <li key={index} className='flex items-center gap-4'><Plus className='w-3 mx-1'></Plus>{plus}</li>
                        ))}
                </ul>
                <ClassicButton type='link' variant='primary' to='/contact' className='mx-auto mt-8'>Commencer</ClassicButton>
            </div>
            ))}
                
        </div>
    </section>
    
  )
}

export default Prices