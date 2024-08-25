import React from 'react'
import LogoInstagram from './svg/LogoInstagram'
import LogoGithub from './svg/LogoGithub'
import LogoLinkedIn from './svg/LogoLinkedIn'
import { myLinks } from '@data/global/MyLinks'
import { myInfos } from '@data/global/PersonalInformation'

function Footer() {
 
  
  return (
    <footer className='bg-slate-900 mt-10'>
        <div className='w-1/2 m-auto py-10 dark:border-t'>
            <img 
                src="https://firebasestorage.googleapis.com/v0/b/devbytoma-portfolio.appspot.com/o/logo-blanc-jaune.svg?alt=media&token=ab074186-2fdc-47b9-873f-6d201f4065f7" 
                className="h-10 m-auto" 
                alt={`Logo de ${myInfos.pseudo}`}
            />
            <p className='text-white text-center mt-4'>Tu souhaites discuter de ton projet ?</p>
            <a className='text-white text-center block m-auto underline' href={`mailto:${myInfos.mail}`}>{myInfos.mail}</a>
            <div className='flex items-center gap-8 m-auto w-fit my-4'>
                <a href={myLinks.github}><LogoGithub className='w-8 fill-white'/></a>
                <a href={myLinks.instagram}><LogoInstagram className='w-8 fill-white' /></a>
                <a href={myLinks.linkedIn}><LogoLinkedIn className='w-8 fill-white' /></a>
            </div>
            <p className='text-center text-white'>© 2024 {myInfos.pseudo} - Tous droits réservés.</p>
        </div>
    </footer>
  )
}

export default Footer