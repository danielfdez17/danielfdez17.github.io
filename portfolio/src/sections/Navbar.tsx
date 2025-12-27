import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[var(--surface)] shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="text-2xl font-bold text-[var(--accent)]">
          </div>

          {/* Links (desktop) */}
          <div className="hidden md:flex space-x-6 font-medium text-[var(--text-secondary)]">
            <a href="#hero" className="transition hover:scale-105 hover:text-[var(--accent)]">Inicio</a>
            <a href="#projects" className="transition hover:scale-105 hover:text-[var(--accent)]">Proyectos</a>
            <a href="#about" className="transition hover:scale-105 hover:text-[var(--accent)]">Sobre mí</a>
            <a href="#contact" className="transition hover:scale-105 hover:text-[var(--accent)]">Contacto</a>
          </div>

          {/* Botón móvil */}
          <button 
            className="md:hidden text-[var(--text-secondary)] transition-colors duration-300"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="md:hidden space-y-2 bg-[var(--surface)] px-4 pb-4 shadow transition-colors duration-300">
          <a href="#hero" className="block text-[var(--text-secondary)] transition hover:text-[var(--accent)]">Inicio</a>
          <a href="#projects" className="block text-[var(--text-secondary)] transition hover:text-[var(--accent)]">Proyectos</a>
          <a href="#about" className="block text-[var(--text-secondary)] transition hover:text-[var(--accent)]">Sobre mí</a>
          <a href="#contact" className="block text-[var(--text-secondary)] transition hover:text-[var(--accent)]">Contacto</a>
        </div>
      )}
    </nav>
  );
}

export { Navbar };