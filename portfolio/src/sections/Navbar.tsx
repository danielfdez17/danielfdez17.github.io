import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
          </div>

          {/* Links (desktop) */}
          <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <a href="#hero" className="hover:text-blue-600 hover:scale-105 transition">Inicio</a>
            <a href="#projects" className="hover:text-blue-600 hover:scale-105 transition">Proyectos</a>
            <a href="#about" className="hover:text-blue-600 hover:scale-105 transition">Sobre mí</a>
            <a href="#contact" className="hover:text-blue-600 hover:scale-105 transition">Contacto</a>
          </div>

          {/* Botón móvil */}
          <button 
            className="md:hidden text-gray-700"
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
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 shadow">
          <a href="#" className="block text-gray-700 hover:text-blue-600">Inicio</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Proyectos</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Sobre mí</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Contacto</a>
        </div>
      )}
    </nav>
  );
}

export { Navbar };