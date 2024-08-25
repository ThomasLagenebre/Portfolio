import React from 'react'

function Header({title} : {title:string}) {
  return (
    <div className='bg-secondary rounded-md p-4 flex items-center h-16'>
        <h2 className='font-bold text-center w-1/2 mx-auto'>{title}</h2>
    </div>
  )
}

export default Header