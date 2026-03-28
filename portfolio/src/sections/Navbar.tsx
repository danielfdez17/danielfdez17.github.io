import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="sticky top-0 z-40 px-3 pt-3 sm:px-6">
      <div className="section-shell border-[var(--border)] px-4 shadow-lg sm:px-6">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <a href="#hero" className="font-display flex items-center gap-3 text-[var(--text-primary)]">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent)] text-sm font-bold text-[var(--accent-contrast)]">DF</span>
            <span className="text-sm font-bold tracking-[0.2em]">PORTFOLIO</span>
          </a>

          <div className="hidden md:flex items-center rounded-full border border-[var(--border)] bg-[var(--surface)]/40 px-2 py-1 text-sm font-semibold text-[var(--text-secondary)]">
            <a href="#hero" className="rounded-full px-4 py-2 transition hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)]">{t("nav.home")}</a>
            <a href="#about" className="rounded-full px-4 py-2 transition hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)]">{t("nav.about")}</a>
            <a href="#projects" className="rounded-full px-4 py-2 transition hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)]">{t("nav.projects")}</a>
            <a href="#contact" className="rounded-full px-4 py-2 transition hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)]">{t("nav.contact")}</a>
          </div>

          {/* Boton movil */}
          <button
            className="md:hidden text-[var(--text-secondary)] transition-colors duration-300"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu movil */}
      {open && (
        <div className="section-shell mt-2 border-[var(--border)] px-4 py-4 shadow-lg md:hidden">
          <div className="space-y-2 text-sm font-semibold text-[var(--text-secondary)]">
            <a href="#hero" className="block rounded-lg px-3 py-2 transition hover:bg-[var(--surface-muted)]">{t("nav.home")}</a>
            <a href="#projects" className="block rounded-lg px-3 py-2 transition hover:bg-[var(--surface-muted)]">{t("nav.projects")}</a>
            <a href="#about" className="block rounded-lg px-3 py-2 transition hover:bg-[var(--surface-muted)]">{t("nav.about")}</a>
            <a href="#contact" className="block rounded-lg px-3 py-2 transition hover:bg-[var(--surface-muted)]">{t("nav.contact")}</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export { Navbar };