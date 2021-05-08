import { createUseStyles } from "react-jss";
import { NextPage } from "next";

import Page from "@components/Page";
import SideBar from "@components/SideBar";
import TextBox from "@components/TextBox";
import Message from "@components/Message";

const useStyles = createUseStyles({
	dashBody: {
		height: "100vh",
		width: "calc(100vw - 18rem)",
		position: "absolute",
		right: "0px",
		padding: "16px",
	},
	messageBox: {
		position: "absolute",
		width: "calc(100vw - 20rem)",
		bottom: "4rem",
		right: "0px",
		height: "calc(100vh - 6rem)",
		margin: "1rem",
		paddingRight: "5px",
		display: "flex",
		flexDirection: "column-reverse",
		overflowY: "scroll",
		// firefox scrollbar:
		scrollbarWidth: "thin",
		scrollbarColor: "#27292e",
		"&::-webkit-scrollbar": {
			width: "12px",
		},
		"&::-webkit-scrollbar-track": {
			background: "#27292e",
		},
		"&::-webkit-scrollbar-thumb": {
			backgroundColor: "#202226",
			borderRadius: "20px",
		},
	},
});

const Dashboard: NextPage = () => {
	const classes = useStyles();
	return (
		<Page title="Dashboard">
			<SideBar />
			<div className={classes.dashBody}>
				<div className={classes.messageBox}>
					<Message
						id="451042799169699851"
						avatar="939c5e21a0fd4bc1e06b8f667a954406"
						size="56px"
						username="Lotte"
						messages={[
							"oobie boobie",
							"<3",
							"tering",
							"Ik wil gewoon even snel duidelijk maken hoe blij jullie mij maken op een dagelijkse basis. Zonder jullie hulp zou ik echt helemaal niet weten wat ik moet doen en jullie maken mijn leven een stuk makkelijker te verdragen. Jullie moeten echt snappen wat voor indruk jullie op mij maken en hoe belangrijk jullie zijn en ik was niet de persoon geweest die ik nu was zonder jullie. I LOVE YOU GUYS!!!! tot morgen op school <3",
							"wat vies",
							"jongens reageer nou is een keertje 🥺",
						]}
					/>
					<Message
						id="451042799169699851"
						avatar="939c5e21a0fd4bc1e06b8f667a954406"
						size="56px"
						username="Lotte"
						messages={[
							"oobie boobie",
							"<3",
							"tering",
							"Ik wil gewoon even snel duidelijk maken hoe blij jullie mij maken op een dagelijkse basis. Zonder jullie hulp zou ik echt helemaal niet weten wat ik moet doen en jullie maken mijn leven een stuk makkelijker te verdragen. Jullie moeten echt snappen wat voor indruk jullie op mij maken en hoe belangrijk jullie zijn en ik was niet de persoon geweest die ik nu was zonder jullie. I LOVE YOU GUYS!!!! tot morgen op school <3",
							"wat vies",
							"jongens reageer nou is een keertje 🥺",
						]}
					/>
					<Message
						id="451042799169699851"
						avatar="939c5e21a0fd4bc1e06b8f667a954406"
						size="56px"
						username="Lotte"
						messages={[
							"oobie boobie",
							"<3",
							"tering",
							"Ik wil gewoon even snel duidelijk maken hoe blij jullie mij maken op een dagelijkse basis. Zonder jullie hulp zou ik echt helemaal niet weten wat ik moet doen en jullie maken mijn leven een stuk makkelijker te verdragen. Jullie moeten echt snappen wat voor indruk jullie op mij maken en hoe belangrijk jullie zijn en ik was niet de persoon geweest die ik nu was zonder jullie. I LOVE YOU GUYS!!!! tot morgen op school <3",
							"wat vies",
							"jongens reageer nou is een keertje 🥺",
						]}
					/>
					<Message
						id="451042799169699851"
						avatar="939c5e21a0fd4bc1e06b8f667a954406"
						size="56px"
						username="Lotte"
						messages={[
							"oobie boobie",
							"<3",
							"tering",
							"Ik wil gewoon even snel duidelijk maken hoe blij jullie mij maken op een dagelijkse basis. Zonder jullie hulp zou ik echt helemaal niet weten wat ik moet doen en jullie maken mijn leven een stuk makkelijker te verdragen. Jullie moeten echt snappen wat voor indruk jullie op mij maken en hoe belangrijk jullie zijn en ik was niet de persoon geweest die ik nu was zonder jullie. I LOVE YOU GUYS!!!! tot morgen op school <3",
							"wat vies",
							"jongens reageer nou is een keertje 🥺",
						]}
					/>
					<Message
						id="451042799169699851"
						avatar="939c5e21a0fd4bc1e06b8f667a954406"
						size="56px"
						username="Lotte"
						messages={[
							"oobie boobie",
							"<3",
							"tering",
							"Ik wil gewoon even snel duidelijk maken hoe blij jullie mij maken op een dagelijkse basis. Zonder jullie hulp zou ik echt helemaal niet weten wat ik moet doen en jullie maken mijn leven een stuk makkelijker te verdragen. Jullie moeten echt snappen wat voor indruk jullie op mij maken en hoe belangrijk jullie zijn en ik was niet de persoon geweest die ik nu was zonder jullie. I LOVE YOU GUYS!!!! tot morgen op school <3",
							"wat vies",
							"jongens reageer nou is een keertje 🥺",
						]}
					/>
					<Message
						id="451042799169699851"
						avatar="939c5e21a0fd4bc1e06b8f667a954406"
						size="56px"
						username="Lotte"
						messages={[
							"oobie boobie",
							"<3",
							"tering",
							"Ik wil gewoon even snel duidelijk maken hoe blij jullie mij maken op een dagelijkse basis. Zonder jullie hulp zou ik echt helemaal niet weten wat ik moet doen en jullie maken mijn leven een stuk makkelijker te verdragen. Jullie moeten echt snappen wat voor indruk jullie op mij maken en hoe belangrijk jullie zijn en ik was niet de persoon geweest die ik nu was zonder jullie. I LOVE YOU GUYS!!!! tot morgen op school <3",
							"wat vies",
							"jongens reageer nou is een keertje 🥺",
						]}
					/>
					<Message
						id="451042799169699851"
						avatar="939c5e21a0fd4bc1e06b8f667a954406"
						size="56px"
						username="Lotte"
						messages={[
							"oobie boobie",
							"<3",
							"tering",
							"Ik wil gewoon even snel duidelijk maken hoe blij jullie mij maken op een dagelijkse basis. Zonder jullie hulp zou ik echt helemaal niet weten wat ik moet doen en jullie maken mijn leven een stuk makkelijker te verdragen. Jullie moeten echt snappen wat voor indruk jullie op mij maken en hoe belangrijk jullie zijn en ik was niet de persoon geweest die ik nu was zonder jullie. I LOVE YOU GUYS!!!! tot morgen op school <3",
							"wat vies",
							"jongens reageer nou is een keertje 🥺",
						]}
					/>
					<Message
						id="451042799169699851"
						avatar="939c5e21a0fd4bc1e06b8f667a954406"
						size="56px"
						username="Lotte"
						messages={[
							"oobie boobie",
							"<3",
							"tering",
							"Ik wil gewoon even snel duidelijk maken hoe blij jullie mij maken op een dagelijkse basis. Zonder jullie hulp zou ik echt helemaal niet weten wat ik moet doen en jullie maken mijn leven een stuk makkelijker te verdragen. Jullie moeten echt snappen wat voor indruk jullie op mij maken en hoe belangrijk jullie zijn en ik was niet de persoon geweest die ik nu was zonder jullie. I LOVE YOU GUYS!!!! tot morgen op school <3",
							"wat vies",
							"jongens reageer nou is een keertje 🥺",
						]}
					/>
					<Message
						id="451042799169699851"
						avatar="939c5e21a0fd4bc1e06b8f667a954406"
						size="56px"
						username="Lotte"
						messages={[
							"oobie boobie",
							"<3",
							"tering",
							"Ik wil gewoon even snel duidelijk maken hoe blij jullie mij maken op een dagelijkse basis. Zonder jullie hulp zou ik echt helemaal niet weten wat ik moet doen en jullie maken mijn leven een stuk makkelijker te verdragen. Jullie moeten echt snappen wat voor indruk jullie op mij maken en hoe belangrijk jullie zijn en ik was niet de persoon geweest die ik nu was zonder jullie. I LOVE YOU GUYS!!!! tot morgen op school <3",
							"wat vies",
							"jongens reageer nou is een keertje 🥺",
						]}
					/>
					<Message
						id="451042799169699851"
						avatar="939c5e21a0fd4bc1e06b8f667a954406"
						size="56px"
						username="Lotte"
						messages={[
							"oobie boobie",
							"<3",
							"tering",
							"Ik wil gewoon even snel duidelijk maken hoe blij jullie mij maken op een dagelijkse basis. Zonder jullie hulp zou ik echt helemaal niet weten wat ik moet doen en jullie maken mijn leven een stuk makkelijker te verdragen. Jullie moeten echt snappen wat voor indruk jullie op mij maken en hoe belangrijk jullie zijn en ik was niet de persoon geweest die ik nu was zonder jullie. I LOVE YOU GUYS!!!! tot morgen op school <3",
							"wat vies",
							"jongens reageer nou is een keertje 🥺",
						]}
					/>
					<Message
						id="451042799169699851"
						avatar="939c5e21a0fd4bc1e06b8f667a954406"
						size="56px"
						username="Lotte"
						messages={[
							"oobie boobie",
							"<3",
							"tering",
							"Ik wil gewoon even snel duidelijk maken hoe blij jullie mij maken op een dagelijkse basis. Zonder jullie hulp zou ik echt helemaal niet weten wat ik moet doen en jullie maken mijn leven een stuk makkelijker te verdragen. Jullie moeten echt snappen wat voor indruk jullie op mij maken en hoe belangrijk jullie zijn en ik was niet de persoon geweest die ik nu was zonder jullie. I LOVE YOU GUYS!!!! tot morgen op school <3",
							"wat vies",
							"jongens reageer nou is een keertje 🥺",
						]}
					/>
					<Message
						id="451042799169699851"
						avatar="939c5e21a0fd4bc1e06b8f667a954406"
						size="56px"
						username="Lotte"
						messages={["oobie boobie", "<3", "tering"]}
					/>
				</div>
				<TextBox />
			</div>
		</Page>
	);
};

export default Dashboard;
