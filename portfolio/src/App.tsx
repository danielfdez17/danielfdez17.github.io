import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Hero } from './sections/Hero'
import { Navbar } from './sections/Navbar'
import { Projects } from './sections/Projects'
import ScrollToTop from './sections/ScrollToTop'
import './App.css'
import ThemeToggle from './components/ThemeToggle'

function App() {

  return (
    <div className='text-white bg-gray-800'>

	  <Navbar />

	  <Hero />

	  <About />

	  <Projects />

	  <Contact />

	  <ScrollToTop />

	  <ThemeToggle />

    </div>
  )
}

export default App
