import { FC } from "react";
import { createUseStyles } from "react-jss";
import UserIcon from "./UserIcon";

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
		"&:focus": { outline: "none" },
	},
});

const StatusBox: FC<{ username: string; status: string; id: string; avatar: string }> = (props) => {
	const classes = useStyles();
	return (
		<div className={classes.statusBox}>
			<div className={classes.userIcon}>
				<UserIcon id={props.id} avatar={props.avatar} size="2rem" />
			</div>
			<div className={classes.statusIndicator}></div>
			<div className={classes.userInfo}>
				<div>{props.username}</div>
				<div className={classes.userStatus}>{props.status}</div>
			</div>
			<select name="" id="" className={classes.dropdown}></select>
		</div>
	);
};
export default StatusBox;
