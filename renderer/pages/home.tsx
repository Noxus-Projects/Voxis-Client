import Head from "next/head";
import Link from "next/link";

function Home() {
	return (
		<>
			<Head>
				<title>De Koelkast - Inloggen</title>
			</Head>
			<div className="bg-white text-black font-bold inline-block p-10 m-20 shadow-xl rounded">
				<p className="text-3xl text-blue-500">De Koelkast</p>
				<p>Omdat Discord soms beetje zuigt.</p>
				<br />
				<a href="https://zuidnederland.be">
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
		</>
	);
}

export default Home;
