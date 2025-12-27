const projects = [
  {
    title: "Trabajo de Fin de Grado",
    description:
      "Desarrollo de una aplicación similar a Booking con el objetivo de comparar dos paradigmas: SOA + ACID vs Microservicios + BASE. Ambos enfoques implementan transacciones distribuidas utilizando el protocolo Two-Phase Commit (2PC).",
    tecnologies: ["Java", "Spring Boot", "Microservicios", "SOA", "2PC"],
    link: "https://github.com/transactionsTFG",
  },
  {
    title: "Adopta un profe",
    description:
      "Aplicación web para conectar alumnos con profesores particulares. El objetivo del proyecto es aprender y aplicar la metodología Agile Scrum en un entorno de desarrollo real.",
    tecnologies: [
      "Node.js",
      "SQL",
      "Bootstrap",
      "Express",
      "CI/CD",
      "Agile Scrum",
    ],
    link: "https://github.com/danielfdez17/AdoptaUnProfe.git",
  },
  {
	title: "minishell",
	description:
	  "Programa en C que simula el comportamiento de una shell. El proyecto require de implementar los siguientes builtins: cd, echo, env, exit, export, pwd, unset, así como la gestión de redirecciones y tuberías.",
	tecnologies: ["C", "Unix", "Shell"],
	link: "https://github.com/danielfdez17/minishell.git",
  },
  {
    title: "pipex",
    description:
      "Programa en C que simula el comportamiento de tuberías en la línea de comandos de Unix.",
    tecnologies: ["C", "Unix"],
    link: "https://github.com/danielfdez17/pipex.git",
  },
  {
    title: "philosophers",
    description:
      "Programa en C que resuelve el problema de los filósofos. Implementa la sincronización de hilos utilizando mutex (cerrojos) para evitar condiciones de carrera y deadlocks.",
    tecnologies: ["C", "Unix"],
    link: "https://github.com/danielfdez17/philosophers.git",
  },
];

// todo: replace technologies with icons

export default function Projects() {
  return (
    <section id="projects" className="bg-[var(--surface-muted)] px-6 py-20 transition-colors duration-300">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold text-[var(--text-primary)]">
          Proyectos
        </h2>

        <div className="mt-10 grid max-h-[400px] gap-6 overflow-y-auto md:grid-cols-3">
          {projects.map((p, index) => (
            <div
              key={index}
              onClick={() => window.open(p.link, "_blank")}
              className="min-w-[300px] max-w-sm cursor-pointer rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 text-left shadow transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-[var(--text-primary)]">{p.title}</h3>
              <p className="mt-2 text-[var(--text-secondary)]">{p.description}</p>
              <hr className="my-4 border-[var(--border)]" />
              <div className="mt-2 text-[var(--text-primary)]">
                {p.tecnologies.join(", ")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export { Projects };
