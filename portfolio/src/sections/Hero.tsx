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
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="px-3 pb-12 pt-8 sm:px-6"
    >
      <div className="section-shell soft-reveal min-h-[calc(100vh-6.5rem)] px-6 py-14 text-center sm:px-10 lg:px-16">
        <p className="font-display mx-auto w-fit rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
          {t("hero.badge")}
        </p>
        <h1 className="font-display mt-7 text-4xl font-extrabold leading-tight text-[var(--text-primary)] sm:text-6xl">
          {t("hero.greetingPrefix")} <span className="text-[var(--accent)]">Daniel</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-[var(--text-secondary)] sm:text-xl">
          {t("hero.subtitle")}
        </p>

        <div className="mx-auto mt-9 grid max-w-3xl grid-cols-4 gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)]/65 p-4 text-2xl text-[var(--text-secondary)] sm:grid-cols-6 sm:text-3xl">
          <TbBrandCpp className="tech-icon mx-auto text-blue-500" />
          <FaJava className="tech-icon mx-auto text-red-500" />
          <SiSpringboot className="tech-icon mx-auto text-green-500" />
          <FaPython className="tech-icon mx-auto text-yellow-500" />
          <FaDocker className="tech-icon mx-auto text-sky-400" />
          <FaNodeJs className="tech-icon mx-auto text-green-500" />
          <FaHtml5 className="tech-icon mx-auto text-orange-500" />
          <FaCss3Alt className="tech-icon mx-auto text-blue-500" />
          <FaJs className="tech-icon mx-auto text-yellow-400" />
          <FaBootstrap className="tech-icon mx-auto text-fuchsia-500" />
          <FaGitAlt className="tech-icon mx-auto text-red-500" />
          <FaLinux className="tech-icon mx-auto text-[var(--text-primary)]" />
        </div>

        <a
          href="#projects"
          className="mt-10 inline-flex items-center justify-center rounded-xl bg-[var(--accent)] px-7 py-3 font-bold text-[var(--accent-contrast)] transition hover:-translate-y-0.5 hover:bg-[var(--accent-hover)] hover:shadow-[0_10px_30px_var(--glow)]"
        >
          {t("hero.cta")}
        </a>
      </div>
    </section>
  );
}

export { Hero };
