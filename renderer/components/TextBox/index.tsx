import classes from "./component.module.scss";

import { MdSend } from "react-icons/md";

import { FC } from "react";

export const TextBox: FC = () => (
	<div className={classes.textBox}>
		<input className={classes.textInput} type="text" />
		{/* <a href="[SAM] succes ;)"> */}
		<MdSend className={classes.sendButton} />
		{/* </a> */}
	</div>
);
