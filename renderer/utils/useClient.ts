import { useContext } from "react";
import ClientContext from "@client/WebSocket";
import Client from "@client/index";

const useClient = (): Client | undefined => {
	return useContext(ClientContext);
};
export default useClient;
