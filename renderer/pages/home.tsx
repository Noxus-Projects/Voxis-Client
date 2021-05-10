import Page from "@components/Page";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { NextPage } from "next";
import isLoggedIn from "@utils/isLoggedIn";
import createDb from "@utils/db";

const Home: NextPage = () => {
	const { replace } = useRouter();

	useEffect(() => {
		const loggedIn = isLoggedIn(createDb());
		if (loggedIn) {
			replace("dashboard");
		} else {
			replace("login");
		}
	}, [replace]);

	return <Page title="Laden"></Page>;
};

export default Home;
