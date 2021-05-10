import Page from "@components/Page";
import Link from "next/link";

import { redirectUri, loginUrl } from "@config";

import { NextPage } from "next";
import { useState, useEffect } from "react";

const Home: NextPage = () => {
	const [url, setUrl] = useState(loginUrl(redirectUri(true)));

	useEffect(() => {
		setUrl(loginUrl(redirectUri()));
	}, []);

	return (
		<Page title="Inloggen">
			<div>
				<p>De Koelkast</p>
				<p>Omdat Discord soms beetje zuigt.</p>
				<br />
				<a href={url}>
					<div>
						<p>Inloggen met Discord</p>
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
