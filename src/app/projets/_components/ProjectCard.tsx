import React from 'react'

function ProjectCard() {
  return (
    <div className=' shadow-md rounded-lg dark:shadow-white py-2'>
        <h3 className='text-center font-bold dark:text-white'>Boostacarriere</h3>
        <img className='my-4' src='https://f.hellowork.com/blogdumoderateur/2019/10/capture.jpg'></img>
        <a href='/projets/boo' className='text-xs block mx-auto w-fit my-4 dark:text-white'>Voir plus ➔</a>
    </div>
  )
}

export default ProjectCard