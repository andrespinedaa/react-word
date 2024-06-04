<<<<<<< HEAD
import React from "react";
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
=======
import React from "react";
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
>>>>>>> 2dec7df8336274513ba510492545b77822401e48
