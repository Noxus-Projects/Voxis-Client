export default interface Channel {
	name: string;
	id: string;
	created: number;
	creator: string;
}

export interface Message {
	content: string;
	author: string;
	id: string;
	created: number;
}
