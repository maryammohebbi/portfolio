import React from 'react'

function About() {
  return (
    <div className='flex w-full'>
        <div className='hidden md:flex'>
            <img src="../src/assets/about.jpg" alt="" />
        </div>
        <div className='flex flex-col justify-center'>
            <h1 className='uppercase font-bold text-xl md:text-3xl mb-5'>About me</h1>
            <p className='text-xl mb-8'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ipsum nihil nisi minima ut dolorem soluta nobis laboriosam pariatur commodi nemo corrupti atque error, repellat qui accusamus quis, ipsa dignissimos!
            </p>
            <div className='mx-auto shadow-lg'>
                <a href="#" className='p-3 bg-purple-200 rounded-md inline-block font-bold text-sm'>DOWNLOAD CV</a>
            </div>
        </div>
    </div>
  )
}

export default About