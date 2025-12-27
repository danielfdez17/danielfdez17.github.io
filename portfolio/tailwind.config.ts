export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				main: {
					dark: "#0a0a0a", // Negro profundo
					lessdark: "#1a1a1a", // Negro suave
				},
				accent: {
					red: "#ff3b3b", // Rojo vibrante (acentos)
					darkred: "#b02020", // Rojo oscuro (hover)
				},
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: 0, transform: "translateY(10px)" },
					"100%": { opacity: 1, transform: "translateY(0)" },
				},
			},
			animation: {
				fadeIn: "fadeIn 0.3s ease-out",
			},
		},
	},
	plugins: [],
};
