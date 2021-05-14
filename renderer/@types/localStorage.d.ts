import User from "@models/user";
import Channel from "@models/channel";

export default interface Store {
	accessToken: string;
	refreshToken: string;
	expires: number;
	user: User;
	channels: Channel[];
}
