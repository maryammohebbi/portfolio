import { AtSymbolIcon, HomeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import React from 'react'

function Contact() {
  return (
    <section className='container'>
      <h1 className='uppercase font-bold text-xl md:text-3xl mb-12 text-center'>Contact me</h1>

      <div className='flex items-center'>

        <div className='flex flex-col flex-1 gap-y-9'>
          <div className='flex gap-x-5 items-center'>
            <HomeIcon className='w-10 h-10 text-orange-950 font-bold'/>
            <p className='text-lg text-purple-900 font-bold'>Iran, Gilan</p>
          </div>
          <div className='flex gap-x-5 items-center'>
            <PhoneIcon className='w-10 h-10 text-orange-950  font-bold'/>
            <p className='text-lg text-purple-900 font-bold'>09...</p>
          </div>
          <div className='flex gap-x-5 items-center'>
            <AtSymbolIcon className='w-10 h-10 text-orange-950  font-bold'/>
            <p className='text-lg text-purple-900 font-bold'>maryam.mohebbi.jr@gmail.com</p>
          </div>
        </div>

        <div className='hidden md:flex flex-1'>
          <img src="../src/assets/contact.png" alt="contact" />
        </div>

      </div>
    </section>
  )
}

export default Contact