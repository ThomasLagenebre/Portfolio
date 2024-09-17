import React from 'react'

export default function Card({children, title, className, style}: {children:React.ReactNode, title?: string, className?:string, style?: React.CSSProperties}) {
  return (
        <div className={`rounded-lg p-10 ${className}`} style={style}>
            {title && <h2 className='font-bold text-xl text-center mb-8'>{title}</h2>}
            {children}
        </div>
  )
}
