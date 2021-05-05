import Page from "@components/Page";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { NextPage } from "next";

const Home: NextPage = () => {
	const router = useRouter();
	useEffect(() => {
		const loggedIn = false;
		if (loggedIn) {
			router.replace("dashboard");
		} else {
			router.replace("login");
		}
	}, [router]);
	return <Page title="Laden"></Page>;
};

export default Home;
