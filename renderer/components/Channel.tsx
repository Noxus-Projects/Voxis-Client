import { createUseStyles } from "react-jss";
import { HiHashtag } from "react-icons/hi";

import ChannelType from "@models/channel";

import { FC } from "react";

const useStyles = createUseStyles({
	channel: {
		padding: "8px",
		margin: "8px",
		borderRadius: "4px",
		"&:hover": {
			backgroundColor: "#27292e",
		},
		display: "flex",
		alignItems: "center",
		color: "d1d5db",
	},
	channelName: {
		marginLeft: "5px",
		fontSize: "15pt",
	},
	active: {
		backgroundColor: "#27292e",
	},
});

const Channel: FC<{ channel: ChannelType }> = ({ channel }) => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.channel}>
				<HiHashtag />
				<div className={classes.channelName}>{channel.name}</div>
			</div>
		</>
	);
};

export default Channel;
