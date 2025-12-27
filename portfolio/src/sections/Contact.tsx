
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-[var(--surface)] px-6 py-20 transition-colors duration-300">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-4xl font-bold text-[var(--text-primary)]">Contacto</h2>

        <div className="mt-10 flex justify-center gap-8 text-3xl text-[var(--text-secondary)]">

          {/* GitHub */}
          <a 
            href="https://github.com/danielfdez17"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110 hover:text-[var(--text-primary)]"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/daniel-fdez-ortiz/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110 hover:text-[var(--accent)]"
          >
            <FaLinkedin />
          </a>

        </div>
      </div>
    </section>
  );
}

export { Contact };