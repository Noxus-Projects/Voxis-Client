import { Permission } from "@models/user";
import Channel, { Message } from "@models/channel";

/* eslint-disable @typescript-eslint/no-namespace */
export interface EventsMap {
	voice: VoiceEvents.send;

	joinedRoom: RoomEvents.join;
	leftRoom: RoomEvents.leave;

	addedPermission: PermissionEvents.add;
	removedPermission: PermissionEvents.remove;

	editedNickname: NicknameEvents.edit;

	sentMessage: MessageEvents.update;
	editedMessage: MessageEvents.update;
	removedMessage: MessageEvents.remove;

	removedChannel: ChannelEvents.remove;
	updatedChannel: ChannelEvents.update;
	createdChannel: ChannelEvents.update;

	addedWhitelist: WhitelistEvents.add;
	removedWhitelist: WhitelistEvents.remove;
}

export namespace WhitelistEvents {
	export type add = (id: string) => void;
	export type remove = (id: string) => void;
}

export namespace VoiceEvents {
	interface Send {
		user: string;
		data: string;
	}

	export type send = (options: Send) => void;
}

export namespace RoomEvents {
	interface Change {
		room: string;
		user: string;
	}

	export type join = (options: Change) => void;

	export type leave = (options: Change) => void;
}

export namespace NicknameEvents {
	interface Edit {
		updated: string;
		user: string;
	}

	export type edit = (options: Edit) => void;
}

export namespace PermissionEvents {
	interface Change {
		user: string;
		updated: Permission[];
	}

	export type add = (options: Change) => void;

	export type remove = (options: Change) => void;
}

export namespace MessageEvents {
	interface Update {
		channel: string;
		message: Message;
	}

	interface Remove {
		id: string;
		channel: string;
	}

	export type remove = (options: Remove) => void;

	export type update = (options: Update) => void;
}

export namespace ChannelEvents {
	export type remove = (id: string) => void;
	export type update = (channel: Channel) => void;
}
