import { ArrowRightIcon } from '@heroicons/react/24/outline'
import React from 'react'

function Blog() {
  return (
    <div className='container mb-20'>
      <h1 className='uppercase font-bold text-xl md:text-3xl mb-12 text-center'>Blog</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="bg-purple-50 p-4 h-[380px] rounded-lg shadow-xl">
          <div className='w-full h-48 bg-red-300 rounded-lg'>
            <img className='object-cover h-full w-full rounded-lg' src="../src/assets/post1.jpg" alt="" />
          </div>
          <div className="h-[130px] p-2">
            <div className='mb-2 h-full'>
              <h3 className='text-sm lg:text-lg font-bold p-2 text-purple-900'>New Post 1</h3>
              <p className='text-slate-700 text-sm lg:text-md xl:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quisquam a amet, natus tempore dignissimos...</p>
            </div>
            <a className='flex items-center justify-end gap-x-2 p-1 text-sm lg:text-md text-purple-700 font-bold hover:pr-2 transition-all duration-500 ease-linear' href="#">Read More<ArrowRightIcon className='w-4 h-4'/> </a>
          </div>
        </div>

        <div class="bg-purple-50 p-4 h-[380px] rounded-lg shadow-xl">
          <div className='w-full h-48 bg-red-300 rounded-lg'>
            <img className='object-cover h-full w-full rounded-lg' src="../src/assets/post2.jpg" alt="" />
          </div>
          <div className="h-[130px] p-2">
            <div className='mb-2 h-full'>
              <h3 className='text-sm lg:text-lg font-bold p-2 text-purple-900'>New Post 2</h3>
              <p className='text-slate-700 text-sm lg:text-md xl:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quisquam a amet, natus tempore dignissimos...</p>
            </div>
            <a className='flex items-center justify-end gap-x-2 p-1 text-sm lg:text-md text-purple-700 font-bold hover:pr-2 transition-all duration-500 ease-linear' href="#">Read More<ArrowRightIcon className='w-4 h-4'/> </a>
          </div>
        </div>

        <div class="bg-purple-50 p-4 h-[380px] rounded-lg shadow-xl">
          <div className='w-full h-48 bg-red-300 rounded-lg'>
            <img className='object-cover h-full w-full rounded-lg' src="../src/assets/post3.jpg" alt="" />
          </div>
          <div className="h-[130px] p-2">
            <div className='mb-2 h-full'>
              <h3 className='text-sm lg:text-lg font-bold p-2 text-purple-900'>New Post 3</h3>
              <p className='text-slate-700 text-sm lg:text-md xl:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quisquam a amet, natus tempore dignissimos...</p>
            </div>
            <a className='flex items-center justify-end gap-x-2 p-1 text-sm lg:text-md text-purple-700 font-bold hover:pr-2 transition-all duration-500 ease-linear' href="#">Read More<ArrowRightIcon className='w-4 h-4'/> </a>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Blog