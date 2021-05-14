import Page from "@components/Page";
import ClientContext from "renderer/client/WebSocket";
import Link from "next/link";

import useLogin from "@utils/useLogin";
import isLoggedIn from "@utils/isLoggedIn";
import { useEffect, useContext } from "react";
import { useRouter } from "next/router";

import { NextPage } from "next";

const Home: NextPage = () => {
	const url = useLogin();
	const { push } = useRouter();

	const client = useContext(ClientContext);

	useEffect(() => {
		if (client && isLoggedIn(client.db)) {
			push("dashboard");
		}
	}, [push, client]);

	return (
		<Page title="Inloggen">
			<div>
				<p>De Koelkast</p>
				<p>Omdat Discord soms beetje zuigt.</p>
				<br />
				<a href={url}>
					<div>
						<p>Inloggen met Discord {url}</p>
					</div>
				</a>
				<Link href="/dashboard">
					<a>
						<p>Doorgaan zonder inloggen</p>
					</a>
				</Link>
			</div>
		</Page>
	);
};

export default Home;
