import React from 'react'

function Banner() {
  return (
    <section className='container flex w-full items-center p-5 mb-8'>
        <div className="flex flex-col gap-y-8 flex-1">
          <div className='flex flex-col gap-y-8 uppercase'>
            <h1 className="text-2xl font-bold lg:text-4xl">Hello</h1>
            <h2 className='text-4xl font-bold lg:text-5xl'>I'm Maryam Mohebbi</h2>
            <h3 className='text-xl font-bold lg:text-2xl'>Junior front-end developer</h3>
          </div>
          <div className='hidden md:flex gap-x-8 '>
            <a href='https://github.com/maryammohebbi/' className='p-3 bg-purple-300 rounded-md font-bold hover:bg-purple-400 transition-all duration-700 ease-out'>My Github</a>
            <span className='font-bold text-slate-700 py-3'>
                <span>Email: </span> 
                Maryam.Mohebbi.jr@gmail.com
            </span>
          </div>
        </div> 
        <div className='flex-1 hidden lg:block'>
            <img src='../src/assets/banner.jpg' />
        </div>
    </section>
  )
}

export default Banner