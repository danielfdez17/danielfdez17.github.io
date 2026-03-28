import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {visible && (
        <button
          onClick={scrollTop}
          aria-label={t("scrollTop.ariaLabel")}
          className="fixed bottom-5 right-5 z-50 cursor-pointer rounded-full border border-[var(--border)] bg-[var(--card)] p-3 text-[var(--text-primary)] shadow-lg transition-[transform,border-color,color,box-shadow] duration-300 ease-[var(--ease-standard)] hover:-translate-y-0.5 hover:border-[var(--accent)]/40 hover:text-[var(--accent)] hover:shadow-[0_12px_28px_var(--glow)] sm:bottom-6 sm:right-6"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export { ScrollToTop };
