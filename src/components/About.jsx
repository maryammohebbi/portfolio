import React from 'react'

function About() {
  return (
    <div className='container flex w-full mb-12'>
        <div className='hidden lg:flex w-full'>
            <img src="../src/assets/about.jpg" alt="" />
        </div>
        <div className='flex flex-col justify-center'>
            <h1 className='uppercase font-bold text-xl md:text-3xl mb-5'>About me</h1>
            <div>
                <p className='text-xl'>
                    My name is Maryam Mohebbi. I was born in 1992, Gilan, Iran.
                </p>
                <br />
                <p className='text-xl mb-8'>
                    My education includes an associate degree in computer software, a bachelor's degree in computer software engineering, and a master's degree in e-commerce (IT).
                </p>
            </div>
            
            <div className='mx-auto shadow-lg'>
                <a href="#" className='p-3 bg-purple-300 rounded-md inline-block font-bold text-sm hover:bg-purple-400 transition-all duration-700 ease-out'>DOWNLOAD CV</a>
            </div>
        </div>
    </div>
  )
}

export default About