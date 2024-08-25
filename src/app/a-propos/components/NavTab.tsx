'use client';
import React, { useState } from 'react'
import Competences from './Competences';
import Experiences from './Experiences';
import SavoirEtre from './SavoirEtre';
import Formations from './Formations';
import { useMediaQuery } from 'react-responsive';

function NavTab() {
    const [whatShow, setWhatShow] = useState('competences');
    const isMobile = useMediaQuery({maxWidth: 768});
    const renderContent = () => {
        switch (whatShow) {
          case 'competences':
            return <Competences />;
          case 'experiences':
            return <Experiences />;
          case 'savoir':
            return <SavoirEtre />;
          case 'formations':
            return <Formations />;
          default:
            return null;
        }
      };

  return (
    <div className='my-10'>
        <nav className='md:m-auto md:w-3/4'>
            <ul className='md:flex md:items-center'>
                <li onClick={() => whatShow === 'competences' ? setWhatShow('') : setWhatShow('competences')} className={`${whatShow === 'competences' ? 'border-x-2 border-t-2 bg-secondary font-bold w-full' : 'border-b-2 dark:text-light'} hover:bg-secondary hover:text-dark md:w-1/4 md:text-xs lg:text-sm xl:text-base border-secondary  md:rounded-t-md py-2 text-center  cursor-pointer`}>Compétences techniques</li>
                {whatShow === 'competences' && isMobile && renderContent()}
                <li onClick={() => whatShow === 'experiences' ? setWhatShow('') : setWhatShow('experiences')} className={`${whatShow === 'experiences' ? 'border-x-2 border-t-2 bg-secondary font-bold' : 'border-b-2 dark:text-light'} hover:bg-secondary hover:text-dark md:w-1/4 md:text-xs lg:text-sm xl:text-base border-secondary  md:rounded-t-md py-2 text-center  cursor-pointer`}>Expériences professionnelles</li>
                {whatShow === 'experiences' && isMobile && renderContent()}
                <li onClick={() => whatShow === 'savoir' ? setWhatShow('') : setWhatShow('savoir')} className={`${whatShow === 'savoir' ? 'border-x-2 border-t-2 bg-secondary font-bold' : 'border-b-2 dark:text-light'} hover:bg-secondary hover:text-dark md:w-1/4 md:text-xs lg:text-sm xl:text-base border-secondary  md:rounded-t-md py-2 text-center  cursor-pointer`}>Savoir-être</li>
                {whatShow === 'savoir' && isMobile && renderContent()}
                <li onClick={() => whatShow === 'formations' ? setWhatShow('') : setWhatShow('formations')} className={`${whatShow === 'formations' ? 'border-x-2 border-t-2 bg-secondary font-bold' : 'border-b-2 dark:text-light'} hover:bg-secondary hover:text-dark md:text-xs md:w-1/4 lg:text-sm xl:text-base border-secondary  md:rounded-t-md py-2 text-center  cursor-pointer`}>Formations</li>
                {whatShow === 'formations' && isMobile && renderContent()}
            </ul>
        </nav>
        <div className='border-secondary max-md:hidden md:w-3/4 md:m-auto border-x-2 border-b-2 p-6'>
            {renderContent()}
        </div>
    </div>
  )
}

export default NavTab