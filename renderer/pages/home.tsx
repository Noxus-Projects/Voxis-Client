import Page from "@components/Page";
import ClientContext from "renderer/client/WebSocket";

import { useEffect, useContext } from "react";
import { useRouter } from "next/router";

import { NextPage } from "next";
import isLoggedIn from "@utils/isLoggedIn";

const Home: NextPage = () => {
	const { replace } = useRouter();
	const client = useContext(ClientContext);

	useEffect(() => {
		if (client) {
			const loggedIn = isLoggedIn(client.db);
			if (loggedIn) {
				replace("dashboard");
			} else {
				replace("login");
			}
		}
	}, [client, replace]);

	return <Page title="Laden" />;
};

export default Home;
