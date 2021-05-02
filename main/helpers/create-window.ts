import { BrowserWindow, BrowserWindowConstructorOptions } from "electron";

export default (options: BrowserWindowConstructorOptions): BrowserWindow => {
	const browserOptions: BrowserWindowConstructorOptions = {
		...options,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
			...options.webPreferences,
		},
	};

	const win = new BrowserWindow(browserOptions);
	win.maximize();
	return win;
};
