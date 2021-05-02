module.exports = {
	future: {
		// webpack5: true,
		strictPostcssConfiguration: true,
	},
	reactStrictMode: true,
	webpack: (config) =>
		Object.assign(config, {
			target: "electron-renderer",
		}),
};
