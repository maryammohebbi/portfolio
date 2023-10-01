import { useState } from 'react'
import Banner from './components/Header'

function App() {

  return (
    <div className='flex flex-col max-w-sm mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-full min-h-screen p-5'>
      <nav></nav>
      <Banner/>

    </div>
  )
}

export default App
