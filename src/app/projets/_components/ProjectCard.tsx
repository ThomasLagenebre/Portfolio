import React from 'react'

function ProjectCard({title, img, link}: {title: string, img: string, link: string}) {
  return (
    <div className='bg-white shadow-md rounded-lg dark:shadow-white py-4'>
        <h3 className='text-center font-bold px-2'>{title}</h3>
        <img className='my-4' src={img}></img>
        <a href={link} className='text-xs block mx-auto w-fit my-4 dark:text-white'>Voir plus ➔</a>
    </div>
  )
}

export default ProjectCard