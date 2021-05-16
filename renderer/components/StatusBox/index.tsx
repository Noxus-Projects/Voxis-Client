import classes from "./component.module.scss";

import useClient from "@utils/useClient";
import { useEffect, useState } from "react";

import { UserIcon } from "@components";

import User from "@models/user";
import { FC } from "react";

export const StatusBox: FC<{ user: User }> = ({ user }) => {
	const client = useClient();
	const [nickname, setNick] = useState(user.nickname);

	useEffect(() => {
		client?.on("username", setNick);
	}, [client]);

	return (
		<div className={classes.statusBox}>
			<div className={classes.userIcon}>
				<UserIcon id={user.id} avatar={user.avatar} size="2rem" />
			</div>
			<div className={classes.statusIndicator} />
			<div className={classes.userInfo}>
				<div>{nickname}</div>
				{/* <div className={classes.userStatus}>{user.status}</div> */}
			</div>
			<select name="" id="" className={classes.dropdown} />
		</div>
	);
};
