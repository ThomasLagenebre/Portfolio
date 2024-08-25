import React from 'react'
import { ClassicButton } from '../_global_components/ClassicButton'

export default function NewsCard({title, shortDescription, link, img}: {title: string, shortDescription: string, link: string, img: string}) {
  return (
    <div style={{ backgroundImage: `url(${img})` }} className="bg-cover bg-center rounded-lg h-[400px] relative mb-10 w-5/6 mx-auto">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black to-70% opacity-60 rounded-lg"></div>
      <div className="relative h-full px-6 py-3 flex flex-col justify-end text-white rounded-lg">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className='text-sm mb-2'>{shortDescription}</p>
        <ClassicButton to={link} type='link' variant='secondary'>Read more</ClassicButton>
      </div>
    </div>

  )
}