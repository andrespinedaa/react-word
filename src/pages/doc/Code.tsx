import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { IoMdCopy } from "react-icons/io";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";
import "./css/code.css";

interface CodeInterfaceProps {
	codeString: string;
	styles?: React.CSSProperties;
	lang?: string;
}

function Code({ codeString, lang = "jsx" }: CodeInterfaceProps) {
	const notify = () => toast.success("Copiado");

	return (
		<div className="codeview">
			<div className="codeview__copybutton">
				<CopyToClipboard text={codeString}>
					<IoMdCopy onClick={notify} size={"25px"} />
				</CopyToClipboard>
			</div>
			<SyntaxHighlighter
				language={lang}
				style={coldarkDark}
				showLineNumbers
				customStyle={{
					borderRadius: "20px",
					minWidth: "950px",
					minHeight: "500px",
					maxHeight: "500px",
					overflow: "auto",
					boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.5)",
				}}
			>
				{codeString}
			</SyntaxHighlighter>
			<Toaster />
		</div>
	);
}

export default Code;
