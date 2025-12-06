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
    title: "pipex",
    description:
      "Programa en C que simula el comportamiento de tuberías en la línea de comandos de Unix.",
    tecnologies: ["C", "Unix"],
    link: "https://github.com/danielfdez17/pipex.git",
  },
];

// todo: replace technologies with icons

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900">
          Proyectos
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3 max-h-[400px] overflow-y-auto space-y-6">
          {projects.map((p, index) => (
            <div
              key={index}
              onClick={() => window.open(p.link, "_blank")}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer hover:scale-102 min-w-[300px] max-w-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900">{p.title}</h3>
              <p className="text-gray-600 mt-2">{p.description}</p>
              <hr className="border-gray-400 my-4"></hr>
              <div className="text-gray-900 mt-2">
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
