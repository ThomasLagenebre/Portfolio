'use client';
import React, { useEffect, useState } from 'react'
import { allServices } from "@data/services/allServices";
import Card from './Card';

function ServicesSection() {
    const [isMobile, setIsMobile] = useState(false)
    const [isTablet, setIsTablet] = useState(false)
  
    useEffect(() => {
      const handleResize = () => {
        setIsTablet(window.innerWidth < 1024);
        setIsMobile(window.innerWidth < 768);
      };
  
      handleResize();
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  return (
    <div className="max-w-screen-lg mx-auto flex flex-col gap-10 px-4 md:px-0">
      {allServices.map((service, index) => (
        <div key={index} className="grid grid-row-1 sm:grid-cols-2 md:gap-10">
          {index % 2 === 0 || isMobile ? (
            <>
              <Card type="text" title={service.title} description={service.description} />
              <Card type="img" img={service.img} />
            </>
          ) : (
            <>
              <Card type="img" img={service.img} />
              <Card type="text" title={service.title} description={service.description} />
            </>
          )}
        </div>
      ))}
      </div>
  )
}

export default ServicesSection