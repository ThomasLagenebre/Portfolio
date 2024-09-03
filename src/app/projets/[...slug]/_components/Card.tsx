import React from 'react'

export default function Card({children, title, className}: {children:React.ReactNode, title: string, className?:string}) {
  return (
        <div className={`bg-gray-200 rounded-lg p-10 ${className}`}>
            <h2 className='font-bold text-xl text-center mb-8'>{title}</h2>
            {children}
        </div>
  )
}
