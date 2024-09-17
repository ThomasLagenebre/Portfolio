"use client";

import React from 'react'
import EspaceurHeader from '../../_global_components/HeaderSpacer'
import { MacbookScrollDemo } from './_components/Macbook';
import SectionTitle from '@/app/_global_components/SectionTitle';
import Card from './_components/Card';
import { allProjects } from '@data/projets/allProjects';
import { redirect } from 'next/navigation';

export default function page({ params }: {
    params: {
        slug: string[];
    }
}) 
{
    const currentProject = allProjects.find((project) => project.slug === params.slug[0]);
    
    if(!currentProject){
        redirect("/")
    }
    
  return (
    <div>
        <EspaceurHeader />
        <div style={{ backgroundColor: currentProject.primaryColor }} className={`text-center py-3 ${!currentProject.darkFont && "text-white"}`}>
            <h1 className='text-3xl font-bold'>{currentProject.title}</h1>
            <a rel='noreffer' href={currentProject.link} target='blank'>{currentProject.linkText}</a>
        </div>
        <MacbookScrollDemo src={currentProject.screenshot}/>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-lg mx-auto px-2'>
            <Card title={currentProject.subtitle} className='bg-white shadow-xl'>
                {currentProject.description.split('[SL]').map((paragraph, idx) => (
                  <p key={idx} className='mt-6'>{paragraph}</p>
                ))}
            </Card>
            <Card style={{ backgroundColor: currentProject.primaryColor }}>
                <img className='h-full w-full object-cover rounded-lg m-auto' src={currentProject.customerPic}></img>
            </Card>
        </div>
        <section className='mt-20'>
            <SectionTitle>Qu'avons-nous voulu proposer sur ce site ?</SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 max-w-screen-lg mx-auto gap-8 mt-8 px-2'>
            {currentProject.services.map((service, index) => (
                index % 2 === 0 ? (
                    <div key={index}>
                        <Card  title={service.name} className='text-justify'>
                            {service.description}
                        </Card>
                        <Card style={{ backgroundColor: currentProject.primaryColor }} className={`flex items-center justify-center`}>
                            <img className='rounded-lg' src={service.img} alt={service.name} />
                        </Card>
                    </div>
                ) : (
                    <div key={index}>
                        <Card style={{ backgroundColor: currentProject.primaryColor }} className={`flex items-center justify-center`}>
                            <img className='rounded-lg' src={service.img} alt={service.name} />
                        </Card>
                        <Card title={service.name} className='text-justify'>
                            {service.description}
                        </Card>
                    </div>
                )
                ))}

                
                
            </div>
        </section>
    </div>
  )
}
