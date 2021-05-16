import { NextPage } from "next";

import { Page, Dashboard as Dash } from "@components";

const Dashboard: NextPage = () => {
	return (
		<Page title="Dashboard">
			<Dash />
		</Page>
	);
};

export default Dashboard;
