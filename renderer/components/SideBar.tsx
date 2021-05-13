import { createUseStyles } from "react-jss";
import { FC, useContext } from "react";

import Channel from "@components/Channel";
import StatusBox from "@components/StatusBox";
import ClientContext from "renderer/client/WebSocket";

const useStyles = createUseStyles({
	sideBar: {
		height: "100vh",
		width: "18rem",
		position: "absolute",
		backgroundColor: "#202226",
	},
});

const SideBar: FC = () => {
	const classes = useStyles();

	const client = useContext(ClientContext);

	const user = !client ? false : client.db.get("user").value();
	return (
		<>
			<div className={classes.sideBar}>
				<Channel name="chat" />
				<Channel name="mentions" />
			</div>
			{user && <StatusBox user={user} />}
		</>
	);
};

export default SideBar;
