
import type { CSSProperties } from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="px-3 py-8 sm:px-6 sm:py-10">
      <div style={{ "--delay": "120ms" } as CSSProperties} className="section-shell soft-reveal px-6 py-12 sm:px-10">
        <h2 className="font-display text-center text-3xl font-bold text-[var(--text-primary)] sm:text-4xl">{t("about.title")}</h2>
        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
          {t("about.body")}
        </p>
      </div>
    </section>
  );
}
export { About };