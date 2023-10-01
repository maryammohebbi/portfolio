import React from 'react'

function Banner() {
  return (
    <section className='flex w-full h-full items-center'>
        <div className='flex flex-col gap-y-8 flex-1 items-center'>
          <div className='flex flex-col gap-y-8'>
            <h1 className="text-2xl font-bold">Hello</h1>
            <h2 className='text-4xl font-bold'>I'm Maryam Mohebbi</h2>
            <h3 className='text-xl font-bold'>Junior front-end developer</h3>
          </div>
          <div className='hidden md:flex gap-x-8 '>
            <a href='https://github.com/maryammohebbi/' className='p-3 bg-purple-200 rounded-md font-bold'>My Github</a>
            <span className='font-bold text-slate-700 py-3'>
                <span>Email: </span> 
                Maryam.Mohebbi.jr@gmail.com
            </span>
          </div>
        </div> 
        <div className='flex-1 hidden md:block'>
            <img src='../src/assets/header.jpg' />
        </div>
    </section>
  )
}

export default Banner