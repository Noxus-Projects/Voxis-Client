module.exports = {
	future: {
		strictPostcssConfiguration: true,
	},
	reactStrictMode: true,
	redirects: async () => [
		{
			source: "/",
			destination: "/home",
			permanent: false,
		},
	],
	webpack: (config) =>
		Object.assign(config, {
			target: "electron-renderer",
		}),
};
