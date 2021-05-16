import { createContext, useEffect, useRef, useState } from "react";
import Client from ".";

import { FC } from "react";

export const Provider: FC = ({ children }) => {
	const [value, setClient] = useState<Client>();
	const cleanupClient = useRef<Client>();

	useEffect(() => {
		if (typeof window !== "undefined") {
			const client = new Client();
			cleanupClient.current = client;
			setClient(client);
		}
		return () => {
			const client = cleanupClient.current;
			if (client) {
				client.disconnect();
				client.removeAllListeners();
			}
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const { Provider } = ClientContext;
	return <Provider value={value}>{children}</Provider>;
};

const ClientContext = createContext<Client | undefined>(undefined);
export default ClientContext;
