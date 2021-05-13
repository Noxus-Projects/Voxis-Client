import { createContext, useEffect, useState } from "react";
import { FC } from "react";
import Client from ".";

const ClientContext = createContext<Client | null>(null);

export const Provider: FC = ({ children }) => {
	const [client, setClient] = useState<Client | null>(null);

	useEffect(() => {
		console.log("effect");

		if (typeof window !== "undefined") {
			setClient(new Client());
		}
		return () => {
			client?.disconnect();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const { Provider } = ClientContext;
	return <Provider value={client}>{children}</Provider>;
};
export default ClientContext;
