import React from 'react'

function Img() {
  return (
    <div className='relative my-10'>
        <img className='border-2 border-secondary rounded-full w-40 h-40 object-cover m-auto' src="https://firebasestorage.googleapis.com/v0/b/devbytoma-portfolio.appspot.com/o/at-works.jpeg?alt=media&token=84e7410c-684f-49f3-a080-6aef03a715e0" alt="at-works" />
        <div className='w-full border-t border-secondary absolute top-1/2 -z-10'></div>
    </div>
  )
}

export default Img