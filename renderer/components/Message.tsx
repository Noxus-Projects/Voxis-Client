import { FC } from "react";
import { createUseStyles } from "react-jss";
import UserIcon from "@components/UserIcon";

const useStyles = createUseStyles({
	message: {
		height: "max-content",
		display: "flex",
		backgroundColor: "#202226",
		borderRadius: "7px",
		padding: "10px",
		marginTop: "10px",
	},
	username: {
		fontSize: "20px",
		lineHeight: "28px",
	},
	contentBox: {
		paddingLeft: "12px",
	},
	messageItem: {
		color: "#d1d5db",
		paddingTop: "4px",
	},
});

const Message: FC<{
	id: string;
	avatar: string;
	size: string;
	username: string;
	messages: string[];
}> = (props) => {
	const classes = useStyles();
	return (
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
};

export default Message;
