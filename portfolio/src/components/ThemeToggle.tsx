import { useTheme } from "../hooks/useTheme";
import { useTranslation } from "react-i18next";

export default function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();
	const { t } = useTranslation();

	return (
		<button
			onClick={toggleTheme}
			aria-label={t("theme.toggleAria")}
			className="fixed left-6 top-6 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-[var(--text-primary)] shadow transition hover:shadow-md"
		>
			{theme === "light" ? "🌙" : "☀️"}
			</button>
	)
}