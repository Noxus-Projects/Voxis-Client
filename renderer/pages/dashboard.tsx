import Page from "@components/Page";

import { GiSpeaker } from "react-icons/gi";
import { HiHashtag } from "react-icons/hi";
import { MdSend } from "react-icons/md";

import { NextPage } from "next";

const Dashboard: NextPage = () => {
	return (
		<Page title="De Koelkast">
			<div className="sidebar">
				<button className="sidebar-item">
					<p className="text-gray-300 max-w-max text-xl p-2">
						<div className="inline-block pr-2 text-gray-400">
							<HiHashtag />
						</div>
						<div className="inline-block">de-koelkast</div>
					</p>
				</button>
				<button className="sidebar-item">
					<p className="text-gray-300 max-w-max text-xl p-2">
						<div className="inline-block pr-2 text-gray-400">
							<HiHashtag />
						</div>
						<div className="inline-block">hall-of-fame</div>
					</p>
				</button>
				<button className="sidebar-item">
					<p className="text-gray-300 max-w-max text-xl p-2">
						<div className="inline-block pr-2 text-gray-400">
							<HiHashtag />
						</div>
						<div className="inline-block">immuted</div>
					</p>
				</button>
				<button className="sidebar-item">
					<p className="text-gray-300 max-w-max text-xl p-2">
						<div className="inline-block pr-2 text-gray-400">
							<GiSpeaker />
						</div>
						<div className="inline-block">Room 1</div>
					</p>
				</button>
			</div>
			<div className="dash-body">
				<div className="text-box">
					<input className="text-input" type="text" />
					{/* <a href="samprobleem"> */}
					<MdSend className="text-white text-2xl w-12 h12 inline-block" />
					{/* </a> */}
				</div>
			</div>
		</Page>
	);
};

export default Dashboard;
