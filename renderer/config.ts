export const name = "Voxis";
export const description = "Voxis is the easiest way to communicate over voice, video, and text.";
export const loginApi = "https://zuidnederland.be/api/login";

export const redirectUri = (useEnv?: boolean): string => {
	if (!useEnv && typeof window != "undefined") {
		return location.origin + "/authorize";
	} else if (process.env.NEXT_PUBLIC_REDIRECT_URI) {
		return process.env.NEXT_PUBLIC_REDIRECT_URI;
	}
	throw new Error("Please set the NEXT_PUBLIC_REDIRECT_URI environment variabele");
};

export const loginUrl = (redirectUri: string): string => {
	console.log(redirectUri);
	const url = new URL("https://discord.com/api/oauth2/authorize");

	url.searchParams.append("client_id", "766981723435040778");
	url.searchParams.append("response_type", "code");
	url.searchParams.append("scope", "identify");
	url.searchParams.append("redirect_uri", redirectUri);

	return url.href;
};
