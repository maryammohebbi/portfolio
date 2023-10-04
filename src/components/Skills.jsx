import React from 'react'

function Skills({skills}) {
  return (
    <div className='container mb-20' id='skills'>
      <h1 className='uppercase font-bold text-xl md:text-3xl mb-12 text-center'>Skills</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
        {
          skills.map(item => (
            <SkillItem key={item.id} item={item}/>
          ))
        }

      </div>
    </div>
  )
}

export default Skills

function SkillItem ({item}){
  return(
    <div className='w-full h-52 border border-purple-700 p-5 flex flex-col items-center justify-center rounded-lg bg-purple-100 hover:bg-purple-50 hover:shadow-2xl transition-all duration-500 ease-out'>
      <div className='h-32'>
        <img className='w-20 h-20' src={item.imageUrl} alt={item.title} />
      </div>
      <div className='h-20'>
        <h2 className='text-sm text-center font-bold mb-5'>{item.title}</h2>
        <h3 className='text-sm text-center font-bold'>{item.level}</h3>
      </div>
    </div>
  )
}