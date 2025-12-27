
export default function About() {
  return (
    <section id="about" className="bg-[var(--surface)] px-6 py-20 transition-colors duration-300">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-[var(--text-primary)]">Sobre mí</h2>
        <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)]">
          Desarrollador de software apasionado por el aprendizaje continuo. Actualmente estoy finalizando mi grado en Ingeniería de Software en la Universidad de Complutense de Madrid. Me especializo en el desarrollo backend con Java y Spring Boot, aunque también tengo experiencia en frontend utilizando HTML, CSS y JavaScript.
        </p>
      </div>
    </section>
  );
}
export { About };