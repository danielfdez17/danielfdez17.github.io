import { useEffect, useState } from "react";

export function useTheme() {
	const [theme, setTheme] = useState(() => {
		return localStorage.getItem("theme") || "light";
	})
	useEffect(() => {
		const root = window.document.documentElement;
		const body = window.document.body;
		const divRoot = document.getElementById("root");

		if (theme === "dark") {
			root.classList.add("dark");
			body.classList.add("dark");
			divRoot?.classList.add("dark");
		} else {
			root.classList.remove("dark");
			body.classList.remove("dark");
			divRoot?.classList.remove("dark");
		}

		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme(prev => prev === "light" ? "dark" : "light");
	}

	return { theme, toggleTheme };

}
