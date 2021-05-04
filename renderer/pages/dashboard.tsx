import Head from "next/head";
import Link from "next/link";

import { FC } from "react";

const Dashboard: FC = () => (
	<>
		<Head>
			<title>De Koelkast</title>
		</Head>
		<Link href="home">
			<a className="text-black p-2 inline-block">Toch inloggen?</a>
		</Link>
	</>
);
export default Dashboard;
