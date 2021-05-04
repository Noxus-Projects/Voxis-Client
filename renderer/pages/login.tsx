import Page from "@components/Page";
import Link from "next/link";

import { FC } from "react";

const Home: FC = () => (
	<>
		<Page title="Inloggen">
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
		</Page>
	</>
);

export default Home;
