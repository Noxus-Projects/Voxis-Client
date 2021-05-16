import classes from "./component.module.scss";

import useClient from "@utils/useClient";
import { useEffect, useState } from "react";

import { Channel, StatusBox } from "@components";

import ChannelType from "@models/channel";
import { FC } from "react";

export const SideBar: FC = () => {
	const client = useClient();
	const [channels, setChannels] = useState<ChannelType[]>([]);

	useEffect(() => {
		if (client) {
			setChannels(client.db.get("channels").value());
			client.on("channels", setChannels);
		}
		return () => {
			client?.removeListener("channels", setChannels);
		};
	}, [client]);

	return (
		<>
			<div className={classes.sideBar}>
				{channels.map((channel) => (
					<Channel key={channel.id} channel={channel} />
				))}
			</div>
			<StatusBox />
		</>
	);
};
