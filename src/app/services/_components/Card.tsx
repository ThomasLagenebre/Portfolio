import React from 'react'

function Card({type, title, description, img}: {
          type: 'text' | 'img', 
          title?: string,
          description?: string,
          img?: string 
        }) {

  if(type === 'text'){
    return (
      <div className='bg-gray-100 max-sm:rounded-t-lg sm:rounded-l-lg md:rounded-lg py-4 px-10 flex flex-col justify-center gap-6'>
        <h2 className='text-2xl lg:text-4xl font-bold text-dark'>{title}</h2>
        <p>{description}</p>
      </div>
    )
  } else if(type === 'img'){
    return (
      <div className='bg-secondary max-sm:rounded-b-lg sm:rounded-r-lg md:rounded-lg p-10'>
        <img className='w-full h-full mx-auto object-cover' src={img}></img>
      </div>
    )
  }
  
}

export default Card