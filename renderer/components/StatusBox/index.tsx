import classes from "./component.module.scss";

import useClient from "@utils/useClient";
import { useEffect, useState } from "react";

import { UserIcon } from "@components";

import User from "@models/user";
import { FC } from "react";

export const StatusBox: FC = () => {
	const client = useClient();
	const [user, setUser] = useState<User>();

	useEffect(() => {
		if (client) {
			setUser(client.db.get("user").value());
			client.on("user", setUser);
		}
		return () => {
			client?.removeListener("user", setUser);
		};
	}, [client]);

	return (
		<div className={classes.statusBox}>
			<div className={classes.userIcon}>
				<UserIcon user={user} size="2rem" />
			</div>
			<div className={classes.statusIndicator} />
			<div className={classes.userInfo}>
				<div>{(user?.nickname || user?.name) ?? "..."}</div>
				{/* <div className={classes.userStatus}>{user.status}</div> */}
			</div>
			<select name="" id="" className={classes.dropdown} />
		</div>
	);
};
