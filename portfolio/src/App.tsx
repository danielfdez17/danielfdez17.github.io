import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Navbar } from './sections/Navbar'
import { Projects } from './sections/Projects'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
	  <Navbar />

	  <About />

	  <Projects />
	  
	  <Contact />
	  
    </>
  )
}

export default App
