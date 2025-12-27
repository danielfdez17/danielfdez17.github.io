import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			onClick={toggleTheme}
			className="fixed top-6 left-6 rounded-full bg-black px-4 py-2 text-white dark:bg-white dark:text-black transition"
		>
			{theme === "light" ? "🌙" : "☀️"}
			</button>
	)
}