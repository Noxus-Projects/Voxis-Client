import { EmitMap } from "@models/emit";
import { EventsMap } from "@models/events";

import createDb from "@utils/db";
import { io, Socket } from "socket.io-client";

export default class Client {
	private connection: Socket<EventsMap, EmitMap>;
	public db;

	constructor() {
		console.log("Connecting");
		this.db = createDb();

		this.connection = io("wss://zuidnederland.be", {
			path: "/socket",
			auth: {
				token: this.db.get("accessToken").value(),
			},
			transports: ["websocket"],
		});
		this.subscribe();
	}
	private subscribe(): void {
		this.connection.onAny((event, data) => {
			console.log(`[WS] ${event}: `, data);
		});
		this.connection.on("connect_error", console.log);
		this.connection.emit("getUser", "", (me) => {
			console.log(me);

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
