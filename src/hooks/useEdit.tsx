<<<<<<< HEAD
import React from "react";
import { WorkSpaceContext } from "../context/WorkSpace";

interface useEditsProps {
	tagName: "B" | "I" | "U";
	tag: "b" | "i" | "u";
}

function useEdit({ tagName, tag }: useEditsProps) {
	const { ranged, areActives, setPreview, setAreActives } =
		React.useContext(WorkSpaceContext);

	const setEdits = () => {
		if (ranged) {
			const parentElement = ranged.startContainer.parentElement;
			const edits = Array.from(ranged.cloneContents().querySelectorAll(tag));

			if (edits.length > 0 || parentElement?.nodeName === tagName) {
				/* DELETE I */
				if (edits.length > 0) {
                    /* DELETE MANY */
					const fragment = ranged.extractContents();
					const editsInFragment = fragment.querySelectorAll(tag);
					editsInFragment.forEach((edit) => {
						const textContent = edit.textContent || "";
						const textNode = document.createTextNode(textContent);
						edit.replaceWith(textNode);
					});
					ranged.insertNode(fragment);
					setAreActives({ ...areActives, [tagName]: false });
                    /* TRASH TAGS */
					const trash = parentElement
						?.closest(".sheet-paragraph")
						?.querySelectorAll(tag);
					trash?.forEach((t) => {
						if (!t.textContent?.trim()) {
							t.parentNode?.removeChild(t);
						}
					});
				} else {
					const textContent = parentElement?.textContent || "";
					const textNode = document.createTextNode(textContent);
					parentElement?.replaceWith(textNode);
					setAreActives({ ...areActives, [tagName]: false });
				}
			} else {
				/* ADD I */
				ranged.surroundContents(document.createElement(tag));
				setAreActives({ ...areActives, [tagName]: true });
			}

			const htmlContent = document.querySelector("#word-sheet")?.innerHTML;
			if (setPreview && htmlContent) {
				setPreview(htmlContent);
			}
		}
	};

	const activeStyle: React.CSSProperties = {
		padding: "5px",
		backgroundColor: areActives[tagName] ? "#d3e3fd" : "transparent",
		borderRadius: "5px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		transition: "all 0.3s",
	};

	return {
		setEdits,
		activeStyle,
	};
}

export default useEdit;
=======
import React from "react";
import { WorkSpaceContext } from "../context/WorkSpace";

interface useEditsProps {
	tagName: "B" | "I" | "U";
	tag: "b" | "i" | "u";
}

function useEdit({ tagName, tag }: useEditsProps) {
	const { ranged, areActives, setPreview, setAreActives } =
		React.useContext(WorkSpaceContext);

	const setEdits = () => {
		if (ranged) {
			const parentElement = ranged.startContainer.parentElement;
			const edits = Array.from(ranged.cloneContents().querySelectorAll(tag));

			if (edits.length > 0 || parentElement?.nodeName === tagName) {
				/* DELETE I */
				if (edits.length > 0) {
                    /* DELETE MANY */
					const fragment = ranged.extractContents();
					const editsInFragment = fragment.querySelectorAll(tag);
					editsInFragment.forEach((edit) => {
						const textContent = edit.textContent || "";
						const textNode = document.createTextNode(textContent);
						edit.replaceWith(textNode);
					});
					ranged.insertNode(fragment);
					setAreActives({ ...areActives, [tagName]: false });
                    /* TRASH TAGS */
					const trash = parentElement
						?.closest(".sheet-paragraph")
						?.querySelectorAll(tag);
					trash?.forEach((t) => {
						if (!t.textContent?.trim()) {
							t.parentNode?.removeChild(t);
						}
					});
				} else {
					const textContent = parentElement?.textContent || "";
					const textNode = document.createTextNode(textContent);
					parentElement?.replaceWith(textNode);
					setAreActives({ ...areActives, [tagName]: false });
				}
			} else {
				/* ADD I */
				ranged.surroundContents(document.createElement(tag));
				setAreActives({ ...areActives, [tagName]: true });
			}

			const htmlContent = document.querySelector("#word-sheet")?.innerHTML;
			if (setPreview && htmlContent) {
				setPreview(htmlContent);
			}
		}
	};

	const activeStyle: React.CSSProperties = {
		padding: "5px",
		backgroundColor: areActives[tagName] ? "#d3e3fd" : "transparent",
		borderRadius: "5px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		transition: "all 0.3s",
	};

	return {
		setEdits,
		activeStyle,
	};
}

export default useEdit;
>>>>>>> 2dec7df8336274513ba510492545b77822401e48
