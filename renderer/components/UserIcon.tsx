import { FC } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	userIcon: {
		borderRadius: "50%",
	},
});

const UserIcon: FC<{ id: string; avatar: string; size: string }> = (props) => {
	const classes = useStyles();
	return (
		<img
			src={`https://cdn.discordapp.com/avatars/${props.id}/${props.avatar}.png`}
			alt="user icon"
			className={classes.userIcon}
			style={{ minWidth: props.size, height: props.size }}
		/>
	);
};
export default UserIcon;
