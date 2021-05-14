import Page from "@components/Page";
import Link from "next/link";

import useLogin from "@utils/useLogin";
import isLoggedIn from "@utils/isLoggedIn";
import useClient from "@utils/useClient";
import { useEffect } from "react";
import { useRouter } from "next/router";

import { NextPage } from "next";

const Home: NextPage = () => {
	const url = useLogin();
	const { push } = useRouter();

	const client = useClient();

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
