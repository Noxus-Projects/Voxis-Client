import classes from "./component.module.scss";

import { FC } from "react";

export const UserIcon: FC<{ id: string; avatar: string; size: string }> = (props) => (
	<img
		src={`https://cdn.discordapp.com/avatars/${props.id}/${props.avatar}.png`}
		alt="user icon"
		className={classes.userIcon}
		style={{ minWidth: props.size, height: props.size }}
	/>
);
