import { About } from "./sections/About"
import { Contact } from "./sections/Contact"
import { Hero } from "./sections/Hero"
import { Navbar } from "./sections/Navbar"
import { Projects } from "./sections/Projects"
import ScrollToTop from "./sections/ScrollToTop"
import "./App.css"
import ThemeToggle from "./components/ThemeToggle"

function App() {
	return (
		<div className="flex flex-col min-h-screen bg-[var(--surface)] text-[var(--text-primary)] transition-colors duration-300">
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
