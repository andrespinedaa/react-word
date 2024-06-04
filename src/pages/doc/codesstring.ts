export const toolbarcode = `export const Toolbar = (props: ToolbarProps) => {
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
        width: "400px",
        borderRadius: "10px",
    };
    
    return (
        <div style={{ ...ToolbarDefaultStyles, ...props.style }}  {...restprops}>{children}</div>
    );
};`;

export const wordcode = `import React from "react";

export const Word = (props: WordProps) => {
    const WordSheet = React.useRef() as React.MutableRefObject<HTMLDivElement>;
    const { resize, scrollbar, ...rest } = props;
    const [isEditing, setIsEditing] = React.useState(false);
    
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

    // Default styles for the Word component

    const WordDefaultStyles: React.CSSProperties = {
        backgroundColor: "#f2f2f2",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        padding: "1em",
        width: "400px",
        height: resize ? "auto" : "100px",
        overflow: resize || scrollbar ? (scrollbar ? "scroll" : "auto") : "visible",
        borderRadius: "10px",
        textAlign: "left",
    };

    return (
        <div
            contentEditable={"true"}
            style={{ ...WordDefaultStyles, ...props.style }}
            onInput={() => setIsEditing(!isEditing)}
            onClick={() => WordSheet.current.focus()}
            ref={WordSheet}
            {...rest}
        >
            {props.children}
        </div>
    );
};`;

export const CustoomHookUseEdit = `import React from "react";
import { WorkSpaceContext } from "../context/WorkSpace";

interface useEditsProps { tagName: "B" | "I" | "U"; tag: "b" | "i" | "u" }

function useEdit({ tagName, tag }: useEditsProps) {
	const { ranged, areActives, setPreview, setAreActives } =
		React.useContext(WorkSpaceContext);

	const setEdits = () => {
		///////* CODE *///////
    }

    const activeStyle: React.CSSProperties = {
		///////* STYLES *//////
	};

	return {
		setEdits,
    activeStyle,
	};
}

export default useEdit;`;

export const ContextHookWorkSpace = `import React from "react";
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

	React.useEffect(() => {
		document.addEventListener("selectionchange", updateSelection);
		return () => {
			document.removeEventListener("selectionchange", updateSelection);
		};
	}, []);

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
};`;

export const TypedCode = `import React from "react";
import { Toolbar, Word } from ".";

export interface WordProps
	extends Omit<React.HTMLAttributes<HTMLElement>, "ref"> {
	children?: React.ReactNode;
	resize?: boolean;
	scrollbar?: boolean;
}

export interface ToolbarProps
	extends Omit<React.HTMLAttributes<HTMLElement>, "ref"> {
	children?: React.ReactNode;
}

export interface WorkSpaceProps extends React.HTMLAttributes<HTMLElement> {
	children: React.ReactElement<typeof Word | typeof Toolbar>[];
}

export interface WorkSpaceContextProps {
	preview: string;
	setPreview: React.Dispatch<React.SetStateAction<string>>;
	selection: Selection;
	ranged: Range | null;
	areActives: ActivesType;
	setAreActives: React.Dispatch<React.SetStateAction<ActivesType>>;
}

export type ActivesType = { [key: string]: boolean };
`;
