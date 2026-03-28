
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="bg-[var(--surface)] px-6 py-20 transition-colors duration-300">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-[var(--text-primary)]">{t("about.title")}</h2>
        <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)]">
          {t("about.body")}
        </p>
      </div>
    </section>
  );
}
export { About };