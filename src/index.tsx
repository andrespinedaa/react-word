import React from "react";
import { WorkSpaceContext } from "./context/WorkSpace";
import { ToolbarProps, WordProps } from "./types";
import "./App.css";

export const Word = (props: WordProps) => {
	const WordSheet = React.useRef() as React.MutableRefObject<HTMLDivElement>;
	const { resize, scrollbar, ...rest } = props;
	const [isEditing, setIsEditing] = React.useState(false);
	const { setPreview } = React.useContext(WorkSpaceContext);

	React.useEffect(() => {
		if (
			WordSheet.current &&
			WordSheet.current.childNodes.length === 1 &&
			!WordSheet.current.querySelector(".sheet-paragraph")
		) {
			/* FIRST PARAGRAPH AND ADD PARAGRAPHS */
			const paragraph = document.createElement("p") as HTMLParagraphElement;
			const textNode = WordSheet.current.childNodes[0] as ChildNode;
			paragraph.className = "sheet-paragraph";
			paragraph.appendChild(textNode);
			WordSheet.current.appendChild(paragraph);
			/* IN-FRONT CARET */
			const selection = window.getSelection() as Selection;
			const range = document.createRange();
			range.setStart(paragraph, paragraph.childNodes.length);
			range.setEnd(paragraph, paragraph.childNodes.length);
			selection.removeAllRanges();
			selection.addRange(range);
			setIsEditing(!isEditing);
		}
		/* OVERFLOW */
		if (!scrollbar) {
			let totalHeightChildren = 0;
			WordSheet.current.childNodes.forEach((child: ChildNode) => {
				if (child instanceof HTMLParagraphElement) {
					totalHeightChildren += child.clientHeight;
					if (totalHeightChildren > WordSheet.current.clientHeight) {
						WordSheet.current.style.overflow = "auto";
						return;
					}
				}
			});
		}
	}, [isEditing]);

	const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
		const target = e.target as HTMLElement;
		const htmlContent = target.innerHTML;
		if (setPreview) {
			setPreview(htmlContent);
		}
	};

	const WordDefaultStyles: React.CSSProperties = {
		backgroundColor: "#f2f2f2",
		display: "flex",
		flexDirection: "column",
		boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
		padding: "1em",
		width: "100%",
		height: resize ? "auto" : "300px",
		overflow: resize || scrollbar ? (scrollbar ? "scroll" : "auto") : "visible",
		borderRadius: "10px",
		textAlign: "left",
		outline: "none",
	};

	return (
		<div
			id="word-sheet"
			contentEditable={"true"}
			style={{ ...WordDefaultStyles, ...props.style }}
			onInput={() => setIsEditing(!isEditing)}
			onKeyUp={handleKeyDown}
			ref={WordSheet}
			{...rest}
		/>
	);
};

export const Toolbar = (props: ToolbarProps) => {
	const { children, ...restprops } = props;

	// Default styles for the Toolbar component

	const ToolbarDefaultStyles: React.CSSProperties = {
		backgroundColor: "#f2f2f2",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
		boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
		padding: "1em",
		minWidth: "80%",
		borderRadius: "10px",
	};

	return (
		<div style={{ ...ToolbarDefaultStyles, ...props.style }} {...restprops}>
			{children}
		</div>
	);
};
