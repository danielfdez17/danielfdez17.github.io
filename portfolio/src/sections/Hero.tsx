
export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-50">
      <h1 className="text-5xl font-extrabold text-gray-900">
        Hola, soy <span className="text-blue-600">Daniel</span>
      </h1>
      <p className="mt-4 text-lg text-gray-600 max-w-xl">
        Desarrollador Full Stack apasionado por la programación.
      </p>
      <a 
        href="#projects"
        className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
      >
        Ver proyectos
      </a>
    </section>
  );
}

export { Hero };