import React from 'react'

function Img() {
  return (
    <div className='relative my-10'>
        <img className='border-2 border-secondary rounded-full w-40 h-40 object-cover m-auto' src="https://i.ibb.co/X5119ft/at-works.jpg" alt="at-works" />
        <div className='w-full border-t border-secondary absolute top-1/2 -z-10'></div>
    </div>
  )
}

export default Img