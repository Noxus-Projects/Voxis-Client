import { BrowserWindow, BrowserWindowConstructorOptions } from "electron";

export default (options: BrowserWindowConstructorOptions): BrowserWindow => {
	const browserOptions: BrowserWindowConstructorOptions = {
		...options,
		webPreferences: {
			nodeIntegration: false,
			contextIsolation: false,
			...options.webPreferences,
		},
	};

	const win = new BrowserWindow(browserOptions);
	win.removeMenu();
	win.maximize();
	return win;
};
