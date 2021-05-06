module.exports = {
	mode: "jit",
	purge: ["./renderer/components/**/*.{js,ts,jsx,tsx}", "./renderer/pages/**/*.{js,ts,jsx,tsx}"],
	darkMode: false,
	theme: {
		extend: {
			colors: {
				blurple: "#7289d9",
				primary: "#27292e",
				secondary: "#202226",
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
