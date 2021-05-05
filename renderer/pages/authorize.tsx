import Page from "@components/Page";
import { useRouter } from "next/router";
import { loginApi } from "@config";

import { FC, useEffect } from "react";

const Home: FC = () => {
	const router = useRouter();
	const code = router.query.code;
	useEffect(() => {
		if (code) {
			console.log(code);
			fetch(loginApi + location.search)
				.then((g) => g.json())
				.then(console.log);
		}
	}, [code]);

	return <Page title="Logging in"></Page>;
};
export default Home;
