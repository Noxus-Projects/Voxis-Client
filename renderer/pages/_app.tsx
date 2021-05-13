import "@components/globals.css";

import type { AppProps } from "next/app";
import { Provider } from "renderer/client/WebSocket";
const App = ({ Component, pageProps }: AppProps): JSX.Element => (
	<Provider>
		<Component {...pageProps} />
	</Provider>
);
export default App;
