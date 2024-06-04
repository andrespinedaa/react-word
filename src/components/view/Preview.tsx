import React from "react";
import { WorkSpaceContext } from "../../context/WorkSpace";

function Preview() {

    const {preview} = React.useContext(WorkSpaceContext);

    const previewDefaultStyles: React.CSSProperties = {
        backgroundColor: "#f2f2f2",
		display: "flex",
        justifyContent: "center",
		flexDirection: "column",
		boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
		padding: "1em",
        width: "100%",
        minHeight: "50px",
        borderRadius:" 10px",
        textWrap: "wrap",
        overflow: "auto",
    }

	return (
		<pre className="preview" style={previewDefaultStyles}>
            {preview}
        </pre>
	);
}

export default Preview;
