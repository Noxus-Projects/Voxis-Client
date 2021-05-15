import { createUseStyles } from "react-jss";
import { FC, useEffect, useState } from "react";
import ChannelType from "@models/channel";

import { Channel, StatusBox } from "@components";

import useClient from "@utils/useClient";

const useStyles = createUseStyles({
	sideBar: {
		height: "100vh",
		width: "18rem",
		position: "absolute",
		backgroundColor: "#202226",
	},
});

export const SideBar: FC = () => {
	const classes = useStyles();

	const client = useClient();
	const [channels, setChannels] = useState<ChannelType[]>([]);

	useEffect(() => {
		if (client) {
			setChannels(client.db.get("channels").value());
			client.on("channels", setChannels);
		}
	}, [client]);

	return (
		<>
			<div className={classes.sideBar}>
				{channels.map((channel) => (
					<Channel key={channel.id} channel={channel} />
				))}
			</div>
			{client && <StatusBox user={client.db.get("user").value()} />}
		</>
	);
};
