import Page from "@components/Page";
import { useRouter } from "next/router";
import { loginApi, loginUrl, redirectUri } from "@config";

import createDb from "@utils/db";
import isLoggedIn from "@utils/isLoggedIn";
import axios from "axios";
import { useEffect } from "react";

import ApiResponse from "@models/api";
import { NextPage } from "next";

const Authorize: NextPage = () => {
	const { query, push } = useRouter();

	useEffect(() => {
		const db = createDb();
		const code = query.code;

		if (isLoggedIn(db)) {
			push("dashboard");
		} else if (code) {
			axios(loginApi + location.search)
				.then(({ data }: { data: ApiResponse }) => {
					db.set("refreshToken", data.refresh_token)
						.set("accessToken", data.access_token)
						.set("expires", Date.now() + data.expires_in)
						.write();
					push("dashboard");
				})
				.catch(() => {
					push(loginUrl(redirectUri()));
				});
		}
	}, [query, push]);

	return <Page title="Logging in"></Page>;
};
export default Authorize;
