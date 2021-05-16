import classes from "./component.module.scss";

import { UserIcon } from "@components";

import { FC } from "react";

export const Message: FC<{
	id: string;
	avatar: string;
	size: string;
	username: string;
	messages: string[];
}> = (props) => (
	<div className={classes.message}>
		<div>
			<UserIcon id={props.id} avatar={props.avatar} size={props.size} />
		</div>
		<div className={classes.contentBox}>
			<div className={classes.username}>{props.username}</div>
			{props.messages.map((message) => (
				<div key={message} className={classes.messageItem}>
					{message}
				</div>
			))}
		</div>
	</div>
);
