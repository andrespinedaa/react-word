import { MdFormatBold } from "react-icons/md";
import useEdit from "../../hooks/useEdit";

function Bold() {
	const { setEdits, activeStyle } = useEdit({ tagName: "B", tag: "b" });

	return (
		<div style={activeStyle} onClick={setEdits}>
			<MdFormatBold style={{ cursor: "pointer" }} size={"30px"} />
		</div>
	);
}

export default Bold;
