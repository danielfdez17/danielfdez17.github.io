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
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-50"
    >
      <h1 className="text-5xl font-extrabold text-gray-900">
        Hola, soy <span className="text-blue-600">Daniel</span>
      </h1>
      <p className="mt-4 text-lg text-gray-600 max-w-xl">
        Desarrollador Full Stack apasionado por la programación.
      </p>
      <div className="mt-2 text-md text-gray-600 max-w-xl text-3xl">
        <TbBrandCpp className="inline-block ml-2 text-blue-600" />
        <FaJava className="inline-block ml-2 text-red-600" />
        <SiSpringboot className="inline-block ml-2 text-green-600" />
        <FaPython className="inline-block ml-2 text-yellow-600" />
        <FaDocker className="inline-block ml-2 text-blue-400" />
        <FaNodeJs className="inline-block ml-2 text-green-600" />
        <FaHtml5 className="inline-block ml-2 text-orange-600" />
        <FaCss3Alt className="inline-block ml-2 text-blue-600" />
        <FaJs className="inline-block ml-2 text-yellow-500" />
        <FaBootstrap className="inline-block ml-2 text-purple-600" />
        <FaGitAlt className="inline-block ml-2 text-red-600" />
        <FaLinux className="inline-block ml-2 text-gray-900" />
      </div>
      <a
        href="#projects"
        className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 hover:scale-105 transition"
      >
        Ver proyectos
      </a>
    </section>
  );
}

export { Hero };
