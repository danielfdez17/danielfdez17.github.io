import { useTranslation } from "react-i18next";

const projects = [
  {
    translationKey: "projects.list.tfg",
    tecnologies: ["Java", "Spring Boot", "Microservicios", "SOA", "2PC"],
    link: "https://github.com/transactionsTFG",
  },
  {
    translationKey: "projects.list.adopta",
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
    translationKey: "projects.list.minishell",
    tecnologies: ["C", "Unix", "Shell"],
    link: "https://github.com/danielfdez17/minishell.git",
  },
  {
    translationKey: "projects.list.pipex",
    tecnologies: ["C", "Unix"],
    link: "https://github.com/danielfdez17/pipex.git",
  },
  {
    translationKey: "projects.list.philosophers",
    tecnologies: ["C", "Unix"],
    link: "https://github.com/danielfdez17/philosophers.git",
  },
];

// todo: replace technologies with icons

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="bg-[var(--surface-muted)] px-6 py-20 transition-colors duration-300">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold text-[var(--text-primary)]">
          {t("projects.title")}
        </h2>

        <div className="mt-10 grid max-h-[400px] gap-6 overflow-y-auto md:grid-cols-3">
          {projects.map((p, index) => (
            <div
              key={index}
              onClick={() => window.open(p.link, "_blank")}
              className="min-w-[300px] max-w-sm cursor-pointer rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 text-left shadow transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-[var(--text-primary)]">{t(`${p.translationKey}.title`)}</h3>
              <p className="mt-2 text-[var(--text-secondary)]">{t(`${p.translationKey}.description`)}</p>
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
