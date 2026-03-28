import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const sections = ["hero", "about", "projects", "contact"] as const;
type SectionId = (typeof sections)[number];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>("hero");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const navItemRefs = useRef<Partial<Record<SectionId, HTMLAnchorElement | null>>>({});
  const { t } = useTranslation();

  const updateIndicator = useCallback(() => {
    const activeItem = navItemRefs.current[activeSection];
    const container = navContainerRef.current;

    if (!activeItem || !container) {
      setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
      return;
    }

    const left = activeItem.offsetLeft;
    const width = activeItem.offsetWidth;
    setIndicatorStyle({ left, width, opacity: 1 });
  }, [activeSection]);

  useEffect(() => {
    const updateActiveSection = () => {
      const navOffset = 140;
      const scrollPosition = window.scrollY + navOffset;

      let currentSection: SectionId = "hero";
      sections.forEach((sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement && sectionElement.offsetTop <= scrollPosition) {
          currentSection = sectionId;
        }
      });

      setActiveSection((prev) => (prev === currentSection ? prev : currentSection));
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const animationFrameId = window.requestAnimationFrame(updateIndicator);
    window.addEventListener("resize", updateIndicator);
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", updateIndicator);
    };
  }, [updateIndicator]);

  const navItemClass = (sectionId: SectionId) =>
    `rounded-full px-4 py-2 transition ${
      activeSection === sectionId
        ? "text-[var(--accent-contrast)]"
        : "hover:text-[var(--text-primary)]"
    }`;

  const mobileItemClass = (sectionId: SectionId) =>
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

          <div ref={navContainerRef} className="relative hidden items-center rounded-full border border-[var(--border)] bg-[var(--surface)]/40 px-2 py-1 text-sm font-semibold text-[var(--text-secondary)] md:flex">
            <span
              aria-hidden="true"
              className="absolute top-1 bottom-1 rounded-full bg-[var(--accent)] shadow-[0_8px_20px_var(--glow)] transition-all duration-300 ease-[var(--ease-standard)]"
              style={{ left: indicatorStyle.left, width: indicatorStyle.width, opacity: indicatorStyle.opacity }}
            />
            <a ref={(el) => { navItemRefs.current.hero = el; }} href="#hero" className={`relative z-10 ${navItemClass("hero")}`}>{t("nav.home")}</a>
            <a ref={(el) => { navItemRefs.current.about = el; }} href="#about" className={`relative z-10 ${navItemClass("about")}`}>{t("nav.about")}</a>
            <a ref={(el) => { navItemRefs.current.projects = el; }} href="#projects" className={`relative z-10 ${navItemClass("projects")}`}>{t("nav.projects")}</a>
            <a ref={(el) => { navItemRefs.current.contact = el; }} href="#contact" className={`relative z-10 ${navItemClass("contact")}`}>{t("nav.contact")}</a>
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