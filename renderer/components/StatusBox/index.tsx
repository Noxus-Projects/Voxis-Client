import User from "@models/user";
import useClient from "@utils/useClient";
import { FC, useEffect, useState } from "react";
import { createUseStyles } from "react-jss";

import { UserIcon } from "@components";

const useStyles = createUseStyles({
	statusBox: {
		backgroundColor: "#202226",
		position: "absolute",
		bottom: "0px",
		width: "18rem",
	},
	userIcon: {
		width: "2rem",
		height: "2rem",
		display: "inline-block",
		borderRadius: "50%",
		margin: "8px",
		verticalAlign: "middle",
	},
	userInfo: {
		display: "inline-block",
		color: "#d1d5db",
		margin: "8px",
		verticalAlign: "middle",
		textAlign: "left",
	},
	statusIndicator: {
		left: "32px",
		bottom: "15px",
		backgroundColor: "#10b981",
		position: "absolute",
		borderRadius: "50%",
		width: "12px",
		height: "12px",
		borderWidth: "2px",
		borderColor: "#27292e",
	},
	userStatus: {
		color: "#6b7280",
		fontSize: "12px",
		backgroundColor: "transparent",
	},
	nickBox: {
		background: "transparent",
		width: "128px",
		"&:focus": { outline: "none" },
	},
	dropdown: {
		backgroundColor: "#202226",
		"&:focus": {
			outline: "none",
		},
	},
});

export const StatusBox: FC<{ user: User }> = ({ user }) => {
	const classes = useStyles();

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