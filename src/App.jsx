import About from './components/About'
import Banner from './components/Banner'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'

function App() {

  return (
    <div className='flex flex-col items-center max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-full py-5 px-10 relative'>
      <Navbar/>
      <Banner/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
