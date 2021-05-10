import { useState, useEffect } from "react";
import { loginUrl, redirectUri } from "@config";

const useLogin = (): string => {
	const [url, setUrl] = useState(loginUrl(redirectUri(true)));

	useEffect(() => {
		setUrl(loginUrl(redirectUri()));
	}, []);
	return url;
};

export default useLogin;
