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
    <nav className='w-full h-auto p-5 mb-3'>
        <div className='hidden md:flex gap-x-7 text-purple-900 font-bold text-lg '>
            <a href="#" className='hover:text-purple-600'>Home</a>
            <a href="#" className='hover:text-purple-600'>About</a>
            <a href="#" className='hover:text-purple-600'>Portfolio</a>
            <a href="#" className='hover:text-purple-600'>Blog</a>
            <a href="#" className='hover:text-purple-600'>Contact</a>
        </div>
        <Bars3Icon className={`w-10 h-10 text-purple-800 md:hidden ${isOpen ? "hidden" : ""}`} onClick={handleNavOpen}/>
        <div className={`${isOpen ? "" : "hidden"} md:hidden sticky p-3 bg-purple-900 rounded-md`} >
            <button>
                <XMarkIcon className='w-8 h-8 absolute right-2 top-2' onClick={handleNavClose}/>
            </button>
            <div className='flex flex-col gap-y-4 text-purple-200 font-bold shadow-lg'>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Portfolio</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar