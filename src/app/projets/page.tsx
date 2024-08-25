import React from 'react'
import EspaceurHeader from '../_global_components/HeaderSpacer'
import SectionTitle from '../_global_components/SectionTitle'
import Header from './_components/Header'
import ProjectCard from './_components/ProjectCard'

function Projets() {
  return (
    <>
        <EspaceurHeader />
        <SectionTitle>Mes projets</SectionTitle>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 max-w-screen-lg mx-auto gap-10 mt-8 px-2 lg:px-0'>
          <div className='flex flex-col gap-4'>
            <Header title='Sites de ventes de coachings'/>
            <ProjectCard />
          </div>
          <div className='flex flex-col gap-4'>
            <Header title='Sites e-commerce'/>
            <ProjectCard />
          </div>
          <div className='flex flex-col gap-4'>
            <Header title='Sites vitrine / portfolio'/>
            <ProjectCard />
          </div>
        </div>
        
    </>
  )
}

export default Projets