import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Hero } from './sections/Hero'
import { Navbar } from './sections/Navbar'
import { Projects } from './sections/Projects'
import ScrollToTop from './sections/ScrollToTop'
import './App.css'

function App() {

  return (
    <body className='text-white bg-gray-800'>

	  <Navbar />

	  <Hero />

	  <About />

	  <Projects />

	  <Contact />

	  <ScrollToTop />

    </body>
  )
}

export default App
