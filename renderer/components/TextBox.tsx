import { FC } from "react";
import { MdSend } from "react-icons/md";

const TextBox: FC = () => (
	<div className="text-box">
		<input className="text-input" type="text" />
		{/* <a href="[SAM] succes ;)"> */}
		<MdSend className="text-gray-300 text-2xl w-12 h12 inline-block" />
		{/* </a> */}
	</div>
);
export default TextBox;
