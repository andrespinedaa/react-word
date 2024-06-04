import { MdOutlineFormatUnderlined } from "react-icons/md";
import useEdit from "../../hooks/useEdit";

function Underlined() {
	const { activeStyle, setEdits } = useEdit({ tagName: "U", tag: "u" });

	return (
		<div style={activeStyle} onClick={setEdits}>
			<MdOutlineFormatUnderlined style={{ cursor: "pointer" }} size={"25px"} />
		</div>
	);
}

export default Underlined;
