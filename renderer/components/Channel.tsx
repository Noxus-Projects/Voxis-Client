import { FC } from "react";

import { HiHashtag } from "react-icons/hi";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	root: {
		margin: {
			left: "auto",
			right: "auto",
			top: 8,
		},
		textAlign: "left",
		display: "block",
		width: "17rem",
		borderRadius: 4,
		"&:focus": {
			outline: "none",
		},
		"&:hover": {
			backgroundColor: "#27292e",
		},
	},

	name: {
		//text-gray-300 max-w-max text-xl p-2
		maxWidth: "max-content",
		fontSize: "20px",
		lineHeight: "28px",
		padding: 8,
		color: "#d1d5db",
	},

	icon: {
		display: "inline-block",
		padding: {
			right: 8,
		},
		color: "#9ca3af",
	},

	nameText: {
		display: "inline-block",
	},
});

const Channel: FC<{ name: string }> = (props) => {
	const classes = useStyles();

	return (
		<button className={classes.root}>
			<p className={classes.name}>
				<div className={classes.icon}>
					<HiHashtag />
				</div>
				<div className={classes.nameText}>{props.name}</div>
			</p>
		</button>
	);
};

export default Channel;
