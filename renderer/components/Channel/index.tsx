import classes from "./component.module.scss";

import { HiHashtag } from "react-icons/hi";

import ChannelType from "@models/channel";
import { FC } from "react";

export const Channel: FC<{ channel: ChannelType }> = ({ channel }) => (
	<>
		<div className={classes.channel}>
			<HiHashtag />
			<div className={classes.channelName}>{channel.name}</div>
		</div>
	</>
);
