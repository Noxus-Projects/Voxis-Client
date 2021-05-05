import Page from "@components/Page";
import Link from "next/link";

import config from "@config";

import { NextPage } from "next";

const Home: NextPage = () => (
	<Page title="Inloggen">
		<div className="bg-white text-black font-bold inline-block p-10 m-20 shadow-xl rounded">
			<p className="text-3xl text-blue-500">De Koelkast</p>
			<p>Omdat Discord soms beetje zuigt.</p>
			<br />
			<a
				href={
					typeof location == "undefined"
						? ""
						: config.loginUrl +
						  "&redirect_uri=" +
						  encodeURIComponent(location.origin + "/authorize")
				}
				suppressHydrationWarning
			>
				<div className="bg-blurple p-2 rounded-lg inline-block shadow-xl">
					<p className="text-white">Inloggen met Discord</p>
				</div>
			</a>
			<Link href="dashboard">
				<a>
					<p className="text-xs italic pt-2">Doorgaan zonder inloggen</p>
				</a>
			</Link>
		</div>
	</Page>
);

export default Home;
