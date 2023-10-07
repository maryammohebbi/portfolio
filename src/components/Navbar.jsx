import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const handleNavOpen = ()=>{
        setIsOpen(true)
    }
    const handleNavClose = ()=>{
        setIsOpen(false)
    }

  return (
    <nav className='container w-full h-auto p-5 mb-3 sticky left-0 top-0 z-10 md:bg-white'>
        <ul className='hidden md:flex gap-x-7 text-purple-900 bg-white font-bold text-lg h-12'>
            <li className='w-16 hover:pl-2 transition-all duration-500 ease-in'><a href="#" className='hover:text-purple-600'>Home</a></li>
            <li className='w-16 hover:pl-2 transition-all duration-500 ease-in'><a href="#about" className='hover:text-purple-600'>About</a></li>
            <li className='w-16 hover:pl-2 transition-all duration-500 ease-in'><a href="#skills" className='hover:text-purple-600'>Skills</a></li>
            <li className='w-16 hover:pl-2 transition-all duration-500 ease-in'><a href="#portfolio" className='hover:text-purple-600'>Portfolio</a></li>
            <li className='w-16 hover:pl-2 transition-all duration-500 ease-in'><a href="#blog" className='hover:text-purple-600'>Blog</a></li>
            <li className='w-16 hover:pl-2 transition-all duration-500 ease-in'><a href="#contact" className='hover:text-purple-600'>Contact</a></li>
        </ul>
        <Bars3Icon className={`w-10 h-10 text-purple-800 md:hidden ${isOpen ? "hidden" : ""}`} onClick={handleNavOpen}/>
        <div className={`${isOpen ? "" : "hidden"} sticky md:hidden p-3 bg-purple-900 rounded-md`} >
            <button>
                <XMarkIcon className='w-8 h-8 absolute right-2 top-2' onClick={handleNavClose}/>
            </button>
            <div className='flex flex-col gap-y-4 text-purple-200 font-bold shadow-lg'>
                <a href="#">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#blog">Blog</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar