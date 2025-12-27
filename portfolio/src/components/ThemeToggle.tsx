import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			onClick={toggleTheme}
			className="fixed left-6 top-6 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-[var(--text-primary)] shadow transition hover:shadow-md"
		>
			{theme === "light" ? "🌙" : "☀️"}
			</button>
	)
}