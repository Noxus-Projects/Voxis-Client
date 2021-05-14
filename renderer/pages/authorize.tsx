import Page from "@components/Page";

import axios from "axios";
import isLoggedIn from "@utils/isLoggedIn";
import useClient from "@utils/useClient";

import { useRouter } from "next/router";
import { useEffect } from "react";
import { loginApi, loginUrl, redirectUri } from "@config";

import ApiResponse from "@models/api";
import { NextPage } from "next";

const Authorize: NextPage = () => {
	const { query, push } = useRouter();

	const client = useClient();

	useEffect(() => {
		if (client) {
			const code = query.code;

			if (isLoggedIn(client.db)) {
				push("dashboard");
			} else if (code) {
				axios(loginApi + location.search)
					.then(({ data }: { data: ApiResponse }) => {
						client.db
							.set("refreshToken", data.refresh_token)
							.set("accessToken", data.access_token)
							.set("expires", Date.now() + data.expires_in)
							.write();
						push("dashboard");
					})
					.catch(() => {
						push(loginUrl(redirectUri()));
					});
			}
		}
	}, [query, push, client]);

	return <Page title="Logging in" />;
};
export default Authorize;
