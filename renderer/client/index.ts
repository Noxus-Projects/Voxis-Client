import { EmitMap } from "@models/emit";
import { EventsMap } from "@models/events";
import { Permission } from "@models/user";
import Channel from "@models/channel";

import createDb from "@utils/db";
import { io, Socket } from "socket.io-client";
import { Event } from "typescript.events";

declare interface Client {
	on(event: "username", listener: (name: string) => void): this;
	on(event: "channels", listener: (channels: Channel[]) => void): this;
	emit(event: "username", name: string): boolean;
	emit(event: "channels", channels: Channel[]): boolean;
}

class Client extends Event {
	private connection: Socket<EventsMap, EmitMap>;
	public db;

	constructor() {
		super();
		this.db = createDb();

		this.connection = io("wss://dev.g-vm.nl", {
			path: "/socket",
			auth: {
				token: this.db.get("accessToken").value(),
			},
			transports: ["websocket"],
		});
		this.subscribe();
	}
	private has(permission: Permission): boolean {
		return this.db.get("user").get("permissions").has(permission).value();
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
				this.emit("username", edit.updated);
			}
		});

		this.me();
		this.channel();
	}
	public channel(id = ""): void {
		if (this.has(Permission.SEE_CHANNELS)) {
			this.connection.emit("getChannel", id, (channels) => {
				this.db.set("channels", channels).write();
			});
		}
	}
	public me(): void {
		this.connection.emit("getUser", "", (me) => {
			if (typeof me == "string") {
				return console.log(me);
			}
			this.db.set("user", me).write();
		});
	}
	public disconnect(): void {
		this.connection.disconnect();
		console.log("Connection Closed");
	}
}
export default Client;
