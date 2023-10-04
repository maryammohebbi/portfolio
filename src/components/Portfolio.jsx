import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'

function Portfolio({portfolios}) {

  return (
    <div className='container mb-20' id='portfolio'>
      <h1 className='uppercase font-bold text-xl md:text-3xl mb-12 text-center'>Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          portfolios.slice(0, 6).map(item => (
            <PorfolioItem key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
  )
}

export default Portfolio

function PorfolioItem ({item}){
  const [isShow , setIsShow] = useState(false);
  return(
    <div 
        onMouseEnter={()=>setIsShow(true)} 
        onMouseLeave={()=>setIsShow(false)} 
        className="bg-purple-50 h-96 rounded-lg relative shadow-xl transition-all duration-500 ease-in">

          <div className='w-full h-full rounded-lg'>
              <img className='w-full h-full object-cover rounded-lg' src={item.imageUrl} alt="" />
          </div>
          <div className={` ${isShow ? "flex" : "hidden"} flex-col justify-around items-center absolute left-0 bottom-0 bg-purple-100/50 w-full h-full`}>
              <a href={item.preview} target="_blank" className='font-bold text-lg lg:text-3xl text-black flex items-center gap-x-3 hover:text-slate-700'>Preview <EyeIcon className='w-10 h-10 font-bold text-red-800'/> </a>
              <a href={item.sourceCode} target="_blank" className='font-bold text-lg lg:text-3xl text-black flex items-center gap-x-3 hover:text-slate-700'>Source Code <CodeBracketIcon className='w-10 h-10 font-bold text-red-800'/> </a>
          </div>
        </div>
  )
}