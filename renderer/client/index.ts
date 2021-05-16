import { EmitMap } from "@models/emit";
import { EventsMap } from "@models/events";
import User, { Permission } from "@models/user";
import Channel from "@models/channel";

import createDb from "@utils/db";
import { io, Socket } from "socket.io-client";
import { Event } from "typescript.events";

declare interface Client {
	on(event: "user", listener: (user: User) => void): this;
	on(event: "channels", listener: (channels: Channel[]) => void): this;
	emit(event: "user", user: User): boolean;
	emit(event: "channels", channels: Channel[]): boolean;
}
type IO = Socket<EventsMap, EmitMap>;

class Client extends Event {
	private connection: IO;
	public db;

	constructor() {
		super();
		this.db = createDb();
		const token = this.db.get("accessToken").value();

		this.connection = this.createConnection(token);
		this.subscribe();
		this.me();
		this.channels();
	}
	public reconnect(token: string): void {
		this.connection.auth = {
			token,
		};
		this.connection.connect();
	}
	private createConnection(token: string): IO {
		const conn: IO = io("wss://zuidnederland.be", {
			path: "/socket",
			auth: {
				token: token,
			},
			autoConnect: false,
			transports: ["websocket"],
		});

		if (token) {
			conn.connect();
		} else {
			console.log("No token");
		}
		return conn;
	}
	private has(permission: Permission): boolean {
		return this.db.get("user").get("permissions").includes(permission).value();
	}
	private subscribe(): void {
		this.connection.onAny((event, data) => {
			console.log(`[WS] ${event}: `, data);
		});

		this.connection.on("connect_error", (e) => {
			console.error(e);
			if (e.message == "invalid token") {
				this.db.unset("expires").write();
				return;
			}
		});

		this.connection.on("createdChannel", (channel) => {
			this.db.get("channels").push(channel).write();
			this.emit("channels", this.db.get("channels").value());
		});

		this.connection.on("removedChannel", (id) => {
			this.db
				.get("channels")
				.remove((channel) => channel.id == id)
				.write();
			this.emit("channels", this.db.get("channels").value());
		});
		this.connection.on("updatedChannel", (newChannel) => {
			const newChannels = this.db
				.get("channels")
				.map((channel) => (channel.id == newChannel.id ? newChannel : channel))
				.value();
			this.db.set("channels", newChannels).write();
			this.emit("channels", newChannels);
		});

		this.connection.on("editedNickname", (edit) => {
			if (this.db.get("user").get("id").isEqual(edit.user).value()) {
				this.db.get("user").set("nickname", edit.updated).write();
				this.emit("user", this.db.get("user").value());
			}
		});
	}
	public channels(): void {
		if (this.has(Permission.SEE_CHANNELS)) {
			this.connection.emit("getChannel", "", (channels) => {
				if (typeof channels == "string") {
					return console.log(channels);
				}
				this.db.set("channels", channels).write();
				this.emit("channels", channels);
			});
		}
	}
	public me(): void {
		this.connection.emit("getUser", "", (me) => {
			if (typeof me == "string") {
				return console.log(me);
			}
			this.db.set("user", me).write();
			this.emit("user", me);
		});
	}
	public disconnect(): void {
		this.connection.disconnect();
	}
}
export default Client;
