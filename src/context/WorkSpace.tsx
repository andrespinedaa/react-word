import React from "react";
import { ActivesType, WorkSpaceContextProps, WorkSpaceProps } from "../types";

export const WorkSpaceContext = React.createContext<WorkSpaceContextProps>(
	{} as WorkSpaceContextProps
);

export const WorkSpace = (props: WorkSpaceProps) => {
	const { children, ...restprops } = props;
	const [preview, setPreview] = React.useState<string>("");
	const [ranged, setRange] = React.useState<Range | null>(null);
	const [selection, setSelection] = React.useState<Selection>(
		window.getSelection() as Selection
	);
	const [areActives, setAreActives] = React.useState<ActivesType>({
		B: false,
		I: false,
		U: false,
	});
	/* Update selection */

	const updateSelection = () => {
		const select = window.getSelection() as Selection;
		const wordSheet = document.querySelector("#word-sheet") as HTMLDivElement;
		setSelection(select);
		if (select.type === "Range") {
			const range = select.getRangeAt(0);
			if (wordSheet.contains(range.commonAncestorContainer)) {
				setRange(range);
			}
		}

		if (select.type === "Caret") {
			let newAreActives = { ...areActives };
			let containsEdits = select.anchorNode?.parentElement;

			const hasEdits = () => {
				if (containsEdits?.nodeName !== "P") {
					if (
						containsEdits?.nodeName === "B" ||
						containsEdits?.nodeName === "I" ||
						containsEdits?.nodeName === "U"
					) {
						newAreActives[containsEdits?.nodeName] = true;
						containsEdits = containsEdits?.parentElement;
						hasEdits();
					}
				} else {
					return;
				}
			};

			hasEdits();
			setAreActives(newAreActives);
		}
	};

	/* Every time you update typed or select */

	React.useEffect(() => {
		document.addEventListener("selectionchange", updateSelection);
		return () => {
			document.removeEventListener("selectionchange", updateSelection);
		};
	}, []);

	// Default styles for the WorkSpace component

	const workSpaceDefaultStyles: React.CSSProperties = {
		width: "600px",
		display: "flex",
		flexDirection: "column",
		alignItems: "start",
		justifyContent: "center",
		gap: "1em",
	};

	return (
		<WorkSpaceContext.Provider
			value={{
				preview,
				setPreview,
				selection,
				ranged,
				areActives,
				setAreActives,
			}}
		>
			<div
				style={{ ...workSpaceDefaultStyles, ...restprops.style }}
				{...restprops}
			>
				{children}
			</div>
		</WorkSpaceContext.Provider>
	);
};
