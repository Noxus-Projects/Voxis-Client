import classes from "./component.module.scss";

import { SideBar, Message, TextBox } from "@components";

import { FC } from "react";

export const Dashboard: FC = () => (
	<>
		<SideBar />
		<div className={classes.dashBody}>
			<div className={classes.messageBox}>
				{[...Array(10)].map((_, i) => (
					<Message
						key={i}
						user={{
							id: "451042799169699851",
							avatar: "939c5e21a0fd4bc1e06b8f667a954406",
							nickname: "Lotte",
						}}
						messages={[
							"<3",
							"tering",
							"Ik wil gewoon even snel duidelijk maken hoe blij jullie mij maken op een dagelijkse basis. Zonder jullie hulp zou ik echt helemaal niet weten wat ik moet doen en jullie maken mijn leven een stuk makkelijker te verdragen. Jullie moeten echt snappen wat voor indruk jullie op mij maken en hoe belangrijk jullie zijn en ik was niet de persoon geweest die ik nu was zonder jullie. I LOVE YOU GUYS!!!! tot morgen op school <3",
							"wat vies",
							"jongens reageer nou is een keertje 🥺",
						]}
					/>
				))}
			</div>
			<TextBox />
		</div>
	</>
);
