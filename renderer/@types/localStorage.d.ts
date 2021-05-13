import User from "@models/user";
export default interface Store {
	accessToken: string;
	refreshToken: string;
	expires: number;
	user: User;
}
