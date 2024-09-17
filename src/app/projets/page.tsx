import React from 'react'
import EspaceurHeader from '../_global_components/HeaderSpacer'
import SectionTitle from '../_global_components/SectionTitle'
import Header from './_components/Header'
import ProjectCard from './_components/ProjectCard'
import { allProjects, categoryProject } from '@data/projets/allProjects'

function Projets() {
  return (
    <>
        <EspaceurHeader />
        <SectionTitle>Mes projets</SectionTitle>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 max-w-screen-lg mx-auto gap-10 mt-8 px-2 lg:px-0'>
          {categoryProject.map((category) => (
            <div className='flex flex-col gap-4'>
              <Header title={category}/>
              {allProjects
            .filter((project) => project.category === category)
            .map((filteredProject) => (
              <ProjectCard 
                key={filteredProject.slug} 
                title={filteredProject.title}
                img={filteredProject.screenshot}
                link={`/projets/${filteredProject.slug}`}
              />
          ))}
          </div>
          ))}
        </div>
        
    </>
  )
}

export default Projets