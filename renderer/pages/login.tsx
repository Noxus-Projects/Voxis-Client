import Page from "@components/Page";
import Link from "next/link";

import useLogin from "@utils/useLogin";
import { useEffect } from "react";
import createDb from "@utils/db";
import isLoggedIn from "@utils/isLoggedIn";

import { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
	const url = useLogin();
	const { push } = useRouter();

	useEffect(() => {
		const db = createDb();
		if (isLoggedIn(db)) {
			push("dashboard");
		}
	}, [push]);

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
