import { FC } from "react";
import { createUseStyles } from "react-jss";
import UserIcon from "./UserIcon";

const useStyles = createUseStyles({
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
	root: {
		borderRadius: "16px",
		backgroundColor: "#202226",
		position: "absolute",
		width: "max-content",
		padding: "4px",
		left: "20px",
		bottom: "20px",
		"&:focus": { outline: "none" },
	},
});

const StatusBox: FC<{ username: string; status: string; id: string; avatar: string }> = (props) => {
	const classes = useStyles();
	return (
		<button className={classes.root}>
			<div className={classes.userIcon}>
				<UserIcon id={props.id} avatar={props.avatar} size="2rem" />
			</div>
			<div className={classes.statusIndicator}></div>
			<div className={classes.userInfo}>
				<input
					type="text"
					defaultValue={props.username}
					className={classes.nickBox}
					// onChange= zeker wel [SAM]'s probleem
				/>
				<div className={classes.userStatus}>{props.status}</div>
			</div>
		</button>
	);
};
export default StatusBox;
