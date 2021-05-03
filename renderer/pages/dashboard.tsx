import Head from "next/head";
import Link from "next/link";

function Home() {
	return (
		<>
			<Head>
				<title>De Koelkast</title>
			</Head>
			<Link href="home">
					<a className="text-black p-2 inline-block">Toch inloggen?</a>
			</Link>
		</>
	);
}

export default Home;
