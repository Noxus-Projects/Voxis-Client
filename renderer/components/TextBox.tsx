import { createUseStyles } from "react-jss";
import { MdSend } from "react-icons/md";
import { FC } from "react";

const useStyles = createUseStyles({
	textBox: {
		backgroundColor: "#202226",
		height: "3rem",
		borderRadius: "8px",
		bottom: "1rem",
		position: "absolute",
		width: "calc(100vw - 20rem)",
	},
	textInput: {
		height: "100%",
		padding: {
			left: "12px",
			all: "8px",
		},
		color: "#d1d5db",
		backgroundColor: "transparent",
		display: "inline-block",
		width: "calc(100% - 50px)",
		"&:focus": {
			outline: "none",
		},
	},
	sendButton: {
		color: "#d1d5db",
		fontSize: "1.5rem",
		width: "48px",
		display: "inline-block",
		verticalAlign: "middle",
	},
});

const TextBox: FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.textBox}>
			<input className={classes.textInput} type="text" />
			{/* <a href="[SAM] succes ;)"> */}
			<MdSend className={classes.sendButton} />
			{/* </a> */}
		</div>
	);
};
export default TextBox;
