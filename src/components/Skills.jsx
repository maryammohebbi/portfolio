import React from 'react'

function Skills() {
  return (
    <div className='container mb-20'>
      <h1 className='uppercase font-bold text-xl md:text-3xl mb-12 text-center'>Skills</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>

        <div className='w-full h-52 border border-purple-700 p-5 flex flex-col items-center justify-center rounded-lg bg-purple-100 hover:bg-purple-50 hover:shadow-2xl transition-all duration-500 ease-out'>
          <div className='h-32'>
            <img className='w-20 h-20' src="../src/assets/htmlcss.png" alt="" />
          </div>
          <div className='h-20'>
            <h2 className='text-sm text-center font-bold mb-5'>HTML/CSS</h2>
            <h3 className='text-sm text-center font-bold'>Advanced</h3>
          </div>
        </div>

        <div className='w-full h-52 border border-purple-700 p-5 flex flex-col items-center justify-center rounded-lg bg-purple-100 hover:bg-purple-50 hover:shadow-2xl  transition-all duration-500 ease-out'>
          <div className='h-32'>
            <img className='w-20 h-20' src="../src/assets/tailwindicon.png" alt="" />
          </div>
          <div className="h-20">
            <h2 className='text-sm text-center font-bold mb-5'>Tailwindcss</h2>
            <h3 className='text-sm text-center font-bold'>Advanced</h3>
          </div>
        </div>

        <div className='w-full h-52 border border-purple-700 p-5 flex flex-col items-center justify-center rounded-lg bg-purple-100 hover:bg-purple-50 hover:shadow-2xl  transition-all duration-500 ease-out'>
          <div className='h-32'>
            <img className='w-20 h-20' src="../src/assets/jsicon.png" alt="" />
          </div>
          <div className="h-20">
            <h2 className='text-sm text-center font-bold mb-5'>Javascript</h2>
            <h3 className='text-sm text-center font-bold'>Competent</h3>
          </div>
        </div>

        <div className='w-full h-52 border border-purple-700 p-5 flex flex-col items-center justify-center rounded-lg bg-purple-100 hover:bg-purple-50 hover:shadow-2xl  transition-all duration-500 ease-out'>
          <div className='h-32'>
            <img className='w-20 h-20' src="../src/assets/npmicon.png" alt="" />
          </div>
          <div className="h-20">
            <h2 className='text-sm font-bold text-center mb-5'>Working with npm pachages</h2>
            <h3 className='text-sm text-center font-bold'>Advanced</h3>
          </div>
        </div>

        <div className='w-full h-52 border border-purple-700 p-5 flex flex-col items-center justify-center rounded-lg bg-purple-100 hover:bg-purple-50 hover:shadow-2xl  transition-all duration-500 ease-out'>
          <div className='h-32'>
            <img className='w-20 h-20' src="../src/assets/reacticon.png" alt="" />
          </div>
          <div className="h-20">
            <h2 className='text-sm text-center font-bold mb-5'>React.js</h2>
            <h3 className='text-sm text-center font-bold'>Beginner</h3>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Skills