"use client";

import React from 'react'
import Link from 'next/link';
import  { useState } from 'react'
import { FaMoon } from 'react-icons/fa'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { IoSunny } from 'react-icons/io5';
import { ClassicButton } from './ClassicButton';
import { menu } from '@data/global/Menu';
import { usePathname } from 'next/navigation';
import { logo } from '@data/global/Logo';

function Header() {
  const [isDark, setIsDark] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header>
            <nav className={` bg-white dark:bg-primary fixed top-0 w-full z-50 pb-6`}>
        <div className="max-w-screen-lg lg:flex items-center mx-auto justify-between">
            <div className='lg:flex lg:items-center gap-20'>
                <div className="flex md:hidden space-x-3 md:space-x-0 rtl:space-x-reverse ms-8 fixed top-4 right-4">
                    <button data-collapse-toggle="navbar-cta" type="button" className={`inline-flex items-center w-10 h-10 justify-center `} aria-controls="navbar-cta" aria-expanded="false" onClick={() => setMenuIsOpen(!menuIsOpen)}>
                        <span className="sr-only">Open main menu</span>
                        <HiOutlineMenuAlt3 size={"80%"} color='#fcca46' />
                    </button>
                </div>
                <Link href="/">
                    {isDark ? (
                        <img 
                        src={logo.whiteYellow}
                        className="w-32 mx-auto mt-6 lg:mt-0" 
                        alt="MonsieurWeb Logo" 
                    />
                    ) : (
                        <img 
                        src={logo.original}
                        className="w-32 mx-auto mt-6 lg:mt-0" 
                        alt="MonsieurWeb Logo" 
                    />
                    )}
                </Link>
                <div className="flex flex-wrap items-center justify-center">
                    <div 
                        className={`items-center justify-center ${!menuIsOpen && "hidden"} text-primary font-medium w-full md:flex md:order-1`} 
                        id="navbar-cta">
                        <ul className="md:flex items-center md:gap-4 lg:gap-10 justify-center w-full py-4">
                            {menu.map((item,index) => (
                                <li key={index}>
                                    <Link href={item.link} className={`block px-2 text-center text-gray-900 dark:text-white hover:bg-tertiary hover:text-white py-1 rounded-md ${pathname === item.link ? "bg-tertiary text-white px-2 py-1 rounded-md" : ""}`} aria-current="page" onClick={() => setMenuIsOpen(!menuIsOpen)}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-2 md:fixed md:top-2 md:right-4 lg:static'>
                <ClassicButton variant='primary' type='button' onClick={() => {document.body.classList.toggle("dark"); setIsDark(!isDark)}} className="fixed top-4 left-4 md:static hover:dark:bg-secondary">
                    {isDark ? <IoSunny color='#233d4d' size={24}/> : <FaMoon color='#233d4d' size={24}/>}
                </ClassicButton>
                <ClassicButton variant='primary' type='link' to='/contact' className='hidden md:block hover:dark:text-white'>Discutons-en</ClassicButton>
            </div>
        </div>
    </nav>
    </header>
  )
}

export default Header