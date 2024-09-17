import React from 'react'
import EspaceurHeader from '../_global_components/HeaderSpacer'
import Img from './components/Img'
import NavTab from './components/NavTab'
import { ClassicButton } from '../_global_components/ClassicButton'

function AboutMe() {
  return (
    <>
        <EspaceurHeader />
        <h1 className='uppercase text-center text-4xl font-bold mt-6 dark:text-light'>Thomas Lagenebre</h1>
        <p className='text-center mt-3 dark:text-light'>Développeur web fullstack en Freelance basé en Île de France</p>
        <ClassicButton type='link' to='/cv.pdf' blank className='mt-6 block mx-auto dark:text-white' variant='secondary'>Télécharger mon CV</ClassicButton>
        <Img />
        <NavTab />
    </>
  )
}

export default AboutMe