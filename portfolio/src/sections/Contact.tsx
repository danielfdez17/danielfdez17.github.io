
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">Contacto</h2>
        <p className="mt-4 text-gray-600">
          Puedes escribirme o visitar mis redes.
        </p>

        <div className="mt-10 flex justify-center gap-8 text-3xl text-gray-700">

          {/* GitHub */}
          <a 
            href="https://github.com/danielfdez17"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/daniel-fdez-ortiz/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>

        </div>
      </div>
    </section>
  );
}

export { Contact };