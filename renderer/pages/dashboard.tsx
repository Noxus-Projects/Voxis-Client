import Page from "@components/Page";
import Link from "next/link";

import { NextPage } from "next";

const Dashboard: NextPage = () => (
	<Page title="Home">
		<Link href="home">
			<a className="text-black p-2 inline-block">Toch inloggen?</a>
		</Link>
	</Page>
);
export default Dashboard;
