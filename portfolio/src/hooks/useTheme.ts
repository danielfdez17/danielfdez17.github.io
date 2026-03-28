import { useEffect, useState } from "react";

export function useTheme() {
	const [theme, setTheme] = useState(() => {
		return localStorage.getItem("theme") || "dark";
	})
	useEffect(() => {
		const root = window.document.documentElement;
		const body = window.document.body;
		const divRoot = document.getElementById("root");

		if (theme === "dark") {
			root.classList.add("dark");
			root.classList.remove("light");
			body.classList.add("dark");
			body.classList.remove("light");
			divRoot?.classList.add("dark");
			divRoot?.classList.remove("light");
		} else {
			root.classList.remove("dark");
			root.classList.add("light");
			body.classList.remove("dark");
			body.classList.add("light");
			divRoot?.classList.remove("dark");
			divRoot?.classList.add("light");
		}

		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme(prev => prev === "light" ? "dark" : "light");
	}

	return { theme, toggleTheme };

}
