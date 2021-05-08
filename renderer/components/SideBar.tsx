import { FC } from "react";
import { createUseStyles } from "react-jss";

import Channel from "./Channel";
import StatusBox from "@components/StatusBox";

const useStyles = createUseStyles({
	root: {
		height: "100vh",
		width: "18rem",
		position: "absolute",
		backgroundColor: "#202226",
	},
});

const SideBar: FC = () => {
	const classes = useStyles();
	return (
		<>
			<div className={classes.root}>
				<Channel name="Boe boe" />
				<Channel name="Boe yeet" />
			</div>
			<StatusBox
				username="Peer"
				id="406155426238038017"
				avatar="a15d2e25fc70b6ce2a99a1a148d61bfd"
				status="Online"
			/>
		</>
	);
};

export default SideBar;
