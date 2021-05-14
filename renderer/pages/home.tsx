import Page from "@components/Page";

import { useEffect } from "react";
import { useRouter } from "next/router";

import isLoggedIn from "@utils/isLoggedIn";
import useClient from "@utils/useClient";

import { NextPage } from "next";

const Home: NextPage = () => {
	const { replace } = useRouter();
	const client = useClient();

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
