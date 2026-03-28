
import type { CSSProperties } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="px-3 pb-14 pt-8 sm:px-6 sm:pb-16 sm:pt-10">
      <div style={{ "--delay": "300ms" } as CSSProperties} className="section-shell soft-reveal mx-auto max-w-3xl px-6 py-12 text-center sm:px-10">
        <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] sm:text-4xl">{t("contact.title")}</h2>

        <div className="mt-8 flex justify-center gap-6 text-3xl text-[var(--text-secondary)]">

          {/* GitHub */}
          <a 
            href="https://github.com/danielfdez17"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 w-14 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] transition-[transform,border-color,color,box-shadow] duration-300 ease-[var(--ease-standard)] hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:text-[var(--text-primary)] hover:shadow-[0_10px_24px_var(--glow)]"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/daniel-fdez-ortiz/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 w-14 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] transition-[transform,border-color,color,box-shadow] duration-300 ease-[var(--ease-standard)] hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:text-[var(--accent)] hover:shadow-[0_10px_24px_var(--glow)]"
          >
            <FaLinkedin />
          </a>

        </div>
      </div>
    </section>
  );
}

export { Contact };