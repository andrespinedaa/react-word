import React from "react";
import { BiHighlight } from "react-icons/bi";
import { WorkSpaceContext } from "../../context/WorkSpace";

function Highlight() {
	const { ranged, setPreview } = React.useContext(WorkSpaceContext);
	const [isActive, setIsActive] = React.useState(false);

	const handleClick = () => {
		setIsActive(!isActive);
		handleHighligted();
	};

	const handleHighligted = () => {
		if (ranged) {
			const highlight = document.createElement("highlight");
			highlight.className = "highlight";
			highlight.style.backgroundColor = "yellow";
			ranged.surroundContents(highlight);
			const htmlContent = document.querySelector("#word-sheet")?.innerHTML;
			if (setPreview && htmlContent) {
				setPreview(htmlContent);
			}
		}
	};

	const defaultHighlightStyle: React.CSSProperties = {
		width: "25px",
		height: "25px",
		cursor: "pointer",
	};

	const activeStyle: React.CSSProperties = {
		padding: "5px",
		backgroundColor: isActive ? "#d3e3fd" : "transparent",
		borderRadius: "5px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		transition: "all 0.3s",
	};

	return (
		<div style={activeStyle}>
			<BiHighlight
				style={defaultHighlightStyle}
				onClick={() => handleClick()}
			/>
		</div>
	);
}

export default Highlight;
