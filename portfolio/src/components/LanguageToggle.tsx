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
      className="fixed right-6 top-6 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-[var(--text-primary)] shadow transition hover:shadow-md"
    >
      {currentLanguage === "es" ? t("language.english") : t("language.spanish")}
    </button>
  );
}