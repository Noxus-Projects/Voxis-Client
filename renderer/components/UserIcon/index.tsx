import classes from "./component.module.scss";

import User from "@models/user";
import { FC } from "react";

export const UserIcon: FC<{ user?: Pick<User, "id" | "avatar">; size: string }> = ({
	user,
	size,
}) => (
	<img
		src={
			!user
				? `https://discordapp.com/assets/322c936a8c8be1b803cd94861bdfa868.png`
				: `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
		}
		alt="user icon"
		className={classes.userIcon}
		style={{ minWidth: size, height: size }}
	/>
);
