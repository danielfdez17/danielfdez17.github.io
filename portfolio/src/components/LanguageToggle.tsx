import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage ?? "en";

  useEffect(() => {
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const toggleLanguage = () => {
    void i18n.changeLanguage(currentLanguage === "es" ? "en" : "es");
  };

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={t("language.switchLabel")}
      className="floating-control fixed right-4 top-[5.15rem] z-50 rounded-full px-4 py-2 text-[var(--text-primary)] transition hover:-translate-y-0.5 sm:right-6"
    >
      {currentLanguage === "es" ? t("language.english") : t("language.spanish")}
    </button>
  );
}