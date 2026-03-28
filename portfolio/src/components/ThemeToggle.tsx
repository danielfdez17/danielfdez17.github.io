import { useTheme } from "../hooks/useTheme";
import { useTranslation } from "react-i18next";

export default function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();
	const { t } = useTranslation();

	return (
		<button
			onClick={toggleTheme}
			aria-label={t("theme.toggleAria")}
			className="floating-control fixed left-4 top-[5.15rem] z-50 rounded-full px-4 py-2 text-[var(--text-primary)] transition-[transform,border-color,box-shadow] duration-300 ease-[var(--ease-standard)] hover:-translate-y-0.5 hover:border-[var(--accent)]/35 hover:shadow-[0_12px_28px_var(--glow)] sm:left-6"
		>
			{theme === "light" ? "🌙" : "☀️"}
			</button>
	)
}