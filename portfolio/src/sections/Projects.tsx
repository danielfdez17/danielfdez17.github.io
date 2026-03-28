import type { CSSProperties } from "react";
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
    <section id="projects" className="px-3 py-8 sm:px-6 sm:py-10">
      <div style={{ "--delay": "220ms" } as CSSProperties} className="section-shell soft-reveal px-6 py-12 sm:px-10">
        <h2 className="font-display text-center text-3xl font-bold text-[var(--text-primary)] sm:text-4xl">
          {t("projects.title")}
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((p, index) => (
            <article
              key={index}
              onClick={() => window.open(p.link, "_blank")}
              style={{ "--delay": `${120 + index * 70}ms` } as CSSProperties}
              className="soft-reveal group cursor-pointer rounded-2xl border border-[var(--border)] bg-[var(--surface)]/55 p-6 text-left transition-[transform,border-color,box-shadow] duration-300 ease-[var(--ease-standard)] hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-[0_18px_40px_var(--glow)]"
            >
              <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">{t(`${p.translationKey}.title`)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">{t(`${p.translationKey}.description`)}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tecnologies.map((tech) => (
                  <span
                    key={`${p.translationKey}-${tech}`}
                    className="rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-3 py-1 text-xs font-semibold text-[var(--text-secondary)] transition group-hover:border-[var(--accent)]/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export { Projects };
