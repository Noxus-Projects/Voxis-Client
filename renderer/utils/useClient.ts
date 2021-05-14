import ClientContext from "renderer/client/WebSocket";
import { useContext } from "react";
import Client from "../client";

const useClient = (): Client | null => {
	return useContext(ClientContext);
};
export default useClient;
