import Page from "@components/Page";
import { useRouter } from "next/router";
import { loginApi } from "@config";

import { useEffect, useState } from "react";

import { NextPage } from "next";

const Authorize: NextPage = () => {
	const router = useRouter();
	const [res, setResponse] = useState({});
	const code = router.query.code;

	useEffect(() => {
		if (code) {
			fetch(loginApi + location.search)
				.then((g) => g.json())
				.then(setResponse);
		}
	}, [code]);

	return (
		<Page title="Logging in">
			<pre>{JSON.stringify(res, null, "\t")}</pre>
		</Page>
	);
};
export default Authorize;
