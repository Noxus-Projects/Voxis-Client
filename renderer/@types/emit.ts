/* eslint-disable @typescript-eslint/no-namespace */
import User, { Permission, Status } from "@models/user";
import { Message } from "@models/channel";
import Channel from "@models/channel";

export interface EmitMap {
	sendMessage: MessageEmit.send;
	editMessage: MessageEmit.edit;
	removeMessage: MessageEmit.remove;
	getMessage: MessageEmit.get;

	getChannel: ChannelEmit.get;
	createChannel: ChannelEmit.create;
	editChannel: ChannelEmit.edit;
	removeChannel: ChannelEmit.remove;

	getPermission: PermissionEmit.get;
	addPermission: PermissionEmit.add;
	removePermission: PermissionEmit.remove;

	joinRoom: RoomEmit.change;
	leaveRoom: RoomEmit.change;

	getUser: UserEmit.get;
	setStatus: UserEmit.status;

	voiceData: (data: string) => void;

	clearCache: CacheEmit.clear;

	addWhitelist: WhitelistEmit.add;
	removeWhitelist: WhitelistEmit.remove;

	editNickname: NicknameEmit.edit;
}

interface SuccessMessage<T = string> {
	success: T;
}

interface ErrorMessage<T = string> {
	error: T;
}

export type Reply = (message: SuccessMessage | ErrorMessage) => void;

export namespace VoiceEmit {
	export type send = (data: string) => void;
}

export namespace WhitelistEmit {
	export type add = (id: string, reply: Reply) => void;
	export type remove = (id: string, reply: Reply) => void;
}

export namespace UserEmit {
	export type status = (status: Status, reply: Reply) => void;

	export type get = (
		id: string | null,
		reply: (msg: ErrorMessage | SuccessMessage<User>) => void
	) => void;
}

export namespace ChannelEmit {
	export type create = (name: string, reply: Reply) => void;

	/**
	 * Removes a channel.
	 * @param id - The id of the channel.
	 * @param reply - Replies if an error occurs.
	 * @emits 'removedChannel' The id of the removed channel.
	 */
	export type remove = (id: string, reply: Reply) => void;

	interface Edit {
		id: string;
		name: string;
	}

	/**
	 * Edits a channel.
	 * @param edited - An object containing the new name and the id of the channel.
	 * @param reply - Replies if an error occurs.
	 * @emits 'updatedChannel' - The updated channel.
	 */
	export type edit = (edit: Edit, reply: Reply) => void;

	/**
	 * Returns a requested channel (Or every channel if none are specified).
	 * @param id - The id of the channel.
	 * @param reply - Replies with the channel, an array of channels or an error.
	 */
	export type get = (
		id: string | null,
		reply?: (channel: ErrorMessage | SuccessMessage<Channel[]>) => void
	) => void;
}

export namespace MessageEmit {
	interface Get {
		/**
		 * The channels id.
		 */
		channel: string;
		/**
		 * The starting point of the slice of messages to request
		 */
		from: number;
		/**
		 * The ending point of the slice of messages to request.
		 */
		to: number;
	}

	export type get = (
		options: Get,
		reply?: (message: ErrorMessage | SuccessMessage<Message[]>) => void
	) => void;

	interface Send {
		/**
		 * The channels id.
		 */
		channel: string;
		/**
		 * The message that needs to be sent.
		 */
		content: string;
	}

	/**
	 * Sends a message in a given channel.
	 * @param options - An object containing the id of a channel and the message to send.
	 * @param reply - Replies when an error occurs.
	 * @emits 'message' - The sent message, with the channel it was sent in.
	 */
	export type send = (options: Send, reply?: Reply) => void;

	interface Remove {
		/**
		 * The channels id.
		 */
		channel: string;
		/**
		 * The id of the message that needs to be removed.
		 */
		id: string;
	}

	/**
	 * Removes a message in a given channel.
	 * @param options - An object containing the id of a channel and the message to remove.
	 * @param reply - Replies when an error occurs.
	 * @emits 'removedMessage' - The removed message, with the channel it was sent in.
	 */
	export type remove = (options: Remove, reply?: Reply) => void;

	export interface Edit {
		/**
		 * The channels id.
		 */
		channel: string;
		/**
		 * The message id.
		 */
		id: string;
		/**
		 * The new message content.
		 */
		updated: string;
	}

	/**
	 * Edits a message in a given channel.
	 * @param options - An object containing the id of a channel and the message to edit.
	 * @param reply - Replies when an error occurs.
	 * @emits 'editedMessage' - The edited message, with the channel it was sent in.
	 */
	export type edit = (options: Edit, reply?: Reply) => void;
}

export namespace NicknameEmit {
	interface Edit {
		/**
		 * The new nickname.
		 */
		updated: string;
		/**
		 * The users id.
		 */
		user?: string;
	}

	/**
	 * Edit a users nickname.
	 * @param data - An object containing the new nickname and optionally the user id.
	 * @param reply - The reply when an error occurs.
	 * @emits 'editedNickname' - The new nickname, with the user that had the nickname edited
	 */
	export type edit = (data: Edit, reply: Reply) => void;
}

export namespace CacheEmit {
	export type clear = (reply: Reply) => void;
}

export namespace PermissionEmit {
	/**
	 * Get a permission for a user with a given id.
	 * @param id - The users id.
	 * @param reply - Replies with a list of permissions.
	 */
	export type get = (
		id: string,
		reply: (permissions: ErrorMessage | SuccessMessage<Permission[]>) => void
	) => void;

	interface Add {
		/**
		 * The users id.
		 */
		user?: string;
		/**
		 * The new permission(s).
		 */
		updated: Permission[];
	}

	export type add = (data: Add, reply: Reply) => void;

	interface Remove {
		/**
		 * The users id.
		 */
		user?: string;
		/**
		 * The new permission(s).
		 */
		removed: Permission[];
	}

	/**
	 * Remove permissions from a given user.
	 * @param data - An object containing the removed permission(s) and the users id.
	 * @param reply - Replies when an error occurs.
	 */
	export type remove = (data: Remove, reply: Reply) => void;
}

export namespace RoomEmit {
	interface Change {
		/**
		 * The room that a disconnected / joined
		 */
		room: string;
		/**
		 *
		 */
		user?: string;
	}

	export type change = (data: Change, reply: Reply) => void;
}
