import classes from "./component.module.scss";

import { UserIcon } from "@components";

import User from "@models/user";
import { FC } from "react";

export const Message: FC<{
	user: Pick<User, "nickname" | "id" | "avatar">;
	messages: string[];
}> = ({ user, messages }) => (
	<div className={classes.message}>
		<div>
			<UserIcon user={user} size="52px" />
		</div>
		<div className={classes.contentBox}>
			<div className={classes.username}>{user.nickname}</div>
			{messages.map((message) => (
				<div key={message} className={classes.messageItem}>
					{message}
				</div>
			))}
		</div>
	</div>
);
