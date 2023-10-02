import About from './components/About'
import Banner from './components/Banner'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'

function App() {

  return (
    <div className='flex flex-col max-w-sm mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-full min-h-screen py-5 px-10 hover:transition-all hover:duration-500 hover:ease-out'>
      <Navbar/>
      <Banner/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Blog/>
      <Contact/>

    </div>
  )
}

export default App
