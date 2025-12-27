import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

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
          className="fixed bottom-6 right-6 cursor-pointer rounded-full bg-[var(--accent)] p-3 text-[var(--accent-contrast)] shadow-lg transition hover:bg-[var(--accent-hover)] animate-fadeIn"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export { ScrollToTop };
