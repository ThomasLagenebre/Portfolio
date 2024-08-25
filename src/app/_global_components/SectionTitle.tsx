import React from 'react'

function SectionTitle({children}: {children: React.ReactNode;}) {
  return (
    <h2 className="font-bolota text-center text-xl lg:text-3xl text-primary dark:text-white">{children}</h2>
  )
}

export default SectionTitle