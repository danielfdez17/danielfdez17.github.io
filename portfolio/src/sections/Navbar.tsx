import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const sections = ["hero", "about", "projects", "contact"] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<(typeof sections)[number]>("hero");
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as (typeof sections)[number]);
          }
        });
      },
      { threshold: 0.5 }
    );

    const observedElements = sections
      .map((sectionId) => document.getElementById(sectionId))
      .filter((element): element is HTMLElement => element !== null);

    observedElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const navItemClass = (sectionId: (typeof sections)[number]) =>
    `rounded-full px-4 py-2 transition ${
      activeSection === sectionId
        ? "bg-[var(--accent)] text-[var(--accent-contrast)] shadow-[0_8px_20px_var(--glow)]"
        : "hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)]"
    }`;

  const mobileItemClass = (sectionId: (typeof sections)[number]) =>
    `block rounded-lg px-3 py-2 transition ${
      activeSection === sectionId
        ? "bg-[var(--accent)] text-[var(--accent-contrast)]"
        : "hover:bg-[var(--surface-muted)]"
    }`;

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
            <a href="#hero" className={navItemClass("hero")}>{t("nav.home")}</a>
            <a href="#about" className={navItemClass("about")}>{t("nav.about")}</a>
            <a href="#projects" className={navItemClass("projects")}>{t("nav.projects")}</a>
            <a href="#contact" className={navItemClass("contact")}>{t("nav.contact")}</a>
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
            <a href="#hero" onClick={() => setOpen(false)} className={mobileItemClass("hero")}>{t("nav.home")}</a>
            <a href="#about" onClick={() => setOpen(false)} className={mobileItemClass("about")}>{t("nav.about")}</a>
            <a href="#projects" onClick={() => setOpen(false)} className={mobileItemClass("projects")}>{t("nav.projects")}</a>
            <a href="#contact" onClick={() => setOpen(false)} className={mobileItemClass("contact")}>{t("nav.contact")}</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export { Navbar };