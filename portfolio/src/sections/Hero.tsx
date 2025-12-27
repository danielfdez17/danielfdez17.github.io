import {
  FaBootstrap,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJs,
  FaLinux,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { SiSpringboot } from "react-icons/si";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center transition-colors duration-300 bg-[var(--surface-muted)]"
    >
      <h1 className="text-5xl font-extrabold text-[var(--text-primary)]">
        Hola, soy <span className="text-[var(--accent)]">Daniel</span>
      </h1>
      <p className="mt-4 max-w-xl text-lg text-[var(--text-secondary)]">
        Desarrollador Full Stack apasionado por la programación.
      </p>
      <div className="mt-2 max-w-xl text-3xl text-[var(--text-secondary)]">
        <TbBrandCpp className="ml-2 inline-block text-blue-600" />
        <FaJava className="ml-2 inline-block text-red-600" />
        <SiSpringboot className="ml-2 inline-block text-green-600" />
        <FaPython className="ml-2 inline-block text-yellow-600" />
        <FaDocker className="ml-2 inline-block text-blue-400" />
        <FaNodeJs className="ml-2 inline-block text-green-600" />
        <FaHtml5 className="ml-2 inline-block text-orange-600" />
        <FaCss3Alt className="ml-2 inline-block text-blue-600" />
        <FaJs className="ml-2 inline-block text-yellow-500" />
        <FaBootstrap className="ml-2 inline-block text-purple-600" />
        <FaGitAlt className="ml-2 inline-block text-red-600" />
        <FaLinux className="ml-2 inline-block text-[var(--text-primary)]" />
      </div>
      <a
        href="#projects"
        className="mt-8 inline-block transform rounded-lg bg-[var(--accent)] px-6 py-3 font-semibold text-[var(--accent-contrast)] transition hover:scale-105 hover:bg-[var(--accent-hover)]"
      >
        Ver proyectos
      </a>
    </section>
  );
}

export { Hero };
