import React from 'react'

function Competences() {
  return (
    <div className='px-4 mt-6'>
        <h2 className='font-bold text-lg text-center md:text-left md:text-2xl text-secondary mb-6'>Front-end</h2>
        <ul className='sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6'>
            {StackData.front.map((techno, idx) => 
                <li key={idx} className='flex items-center divide-x divide-secondary max-sm:my-3'>
                    <img src={techno.img} alt={`Logo ${techno.name}`} className='w-12 md:w-16 pe-4 object-fit' />
                    <div>
                        <h3 className='ps-4 min-[300px]:text-xl font-bold dark:text-light'>{techno.name}</h3>
                        <p className='ps-4 font-extralight dark:text-light'>{techno.level}</p>
                    </div>
                </li>
            )}
        </ul>
        <h2 className='font-bold text-lg text-center md:text-left md:text-2xl text-secondary mb-6'>Back-end</h2>
        <ul className='sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6'>
            {StackData.back.map((techno, idx) => 
                <li key={idx} className='flex items-center divide-x divide-secondary max-sm:my-3'>
                    <img src={techno.img} alt={`Logo ${techno.name}`} className='w-12 md:w-16 pe-4 object-fit' />
                    <div>
                        <h3 className='ps-4 text-xl font-bold dark:text-light'>{techno.name}</h3>
                        <p className='ps-4 font-extralight dark:text-light'>{techno.level}</p>
                    </div>
                </li>
            )}
        </ul>
        <h2 className='font-bold text-lg text-center md:text-left md:text-2xl text-secondary mb-6'>Autres</h2>
        <ul className='sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6'>
            {StackData.others.map((techno, idx) => 
                <li key={idx} className='flex items-center divide-x divide-secondary max-sm:my-3'>
                    <img src={techno.img} alt={`Logo ${techno.name}`} className='w-12 md:w-16 pe-4 object-fit' />
                    <div>
                        <h3 className='ps-4 text-xl font-bold dark:text-light'>{techno.name}</h3>
                        <p className='ps-4 font-extralight dark:text-light'>{techno.level}</p>
                    </div>
                </li>
            )}
        </ul>
    </div>
  )
}

export default Competences

const StackData = {
    front: [
      {
        name: 'ReactJS',
        img: 'https://i.ibb.co/qr3DwtZ/React.webp',
        level: 'Intermédiaire'
      },
      {
        name: 'NextJS',
        img: 'https://i.ibb.co/rw2Vqvh/nextjs-icon-512x512-y563b8iq.png',
        level: 'Intermédiaire'
      },
      {
        name: 'TypeScript',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png',
        level: 'Intermédiaire'
      },
      {
        name: 'Tailwind CSS',
        img: 'https://i.ibb.co/GkQXmtc/Tailwind-CSS-Logo-svg.png',
        level: 'Intermédiaire'
      },
      {
        name: 'Bootstrap',
        img: 'https://i.ibb.co/4pm8xnf/4195cf989fac0128a89669f40a1e3496.png',
        level: 'Intermédiaire'
      },
      {
        name: 'SASS',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png',
        level: 'Débutant'
      }
    ],
    back: [
        {
            name: 'PHP',
            img: 'https://static-00.iconduck.com/assets.00/php-icon-256x256-oq5bc0bt.png',
            level: 'Intermédiaire'
        },
        {
            name: 'Laravel',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png',
            level: 'Intermédiaire'
        },
        {
            name: 'MySQL',
            img: 'https://cdn.iconscout.com/icon/free/png-256/free-mysql-20-1174940.png',
            level: 'Intermédiaire'
        },
        {
            name: 'MariaDB',
            img: 'https://grafikart.fr/uploads/icons/mariadb.svg',
            level: 'Intermédiaire'
        }
    ],
    others: [
        {
            name: 'GitHub',
            img: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        },
        {
            name: 'Figma',
            img: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png',
            level: 'Intermédiaire'
        },
        {
            name: 'Trello',
            img: 'https://seeklogo.com/images/T/trello-logo-CE7B690E34-seeklogo.com.png',
        },
    ]
  };
  