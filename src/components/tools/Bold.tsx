<<<<<<< HEAD
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
=======
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
>>>>>>> 2dec7df8336274513ba510492545b77822401e48
