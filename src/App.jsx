import About from './components/About'
import Banner from './components/Banner'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import { portfolios, posts } from './data/data'

function App() {

  return (
  
    <div className='relative'>
      <section className='flex flex-col items-center max-w-sm sm:max-w-md md:max-w-lg lg:max-w-screen-xl mx-auto py-5 px-10'>
        <Navbar/>
        <Banner/>
        <About/>
        <Skills/>
        <Portfolio portfolios={portfolios}/>
        <Blog posts={posts}/>
        <Contact/>
        <Footer/>
      </section>
    </div>
  )
}

export default App
