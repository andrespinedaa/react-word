import { MdFormatItalic } from "react-icons/md";
import useEdit from "../../hooks/useEdit";

function Italic() {
	const { setEdits, activeStyle } = useEdit({ tagName: "I", tag: "i" });

	return (
		<div style={activeStyle} onClick={setEdits}>
			<MdFormatItalic style={{ cursor: "pointer" }} size={"30px"} />
		</div>
	);
}

export default Italic;
