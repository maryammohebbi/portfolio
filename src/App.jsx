import About from './components/About'
import Banner from './components/Banner'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='flex flex-col max-w-sm mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-full min-h-screen py-5 px-10'>
      <Navbar/>
      <Banner/>
      <About/>

    </div>
  )
}

export default App
