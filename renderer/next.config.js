module.exports = {
	future: {
		strictPostcssConfiguration: true,
	},
	reactStrictMode: true,
	webpack: (config) =>
		Object.assign(config, {
			target: "electron-renderer",
		}),
};
