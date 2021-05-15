import { useContext } from "react";
import ClientContext from "@client/WebSocket";
import Client from "@client/index";

const useClient = (): Client | null => {
	return useContext(ClientContext);
};
export default useClient;
