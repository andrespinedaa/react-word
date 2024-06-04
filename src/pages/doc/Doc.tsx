import "./css/doc.css";

interface DocProps {
	children?: React.ReactNode;
	text: string;
	title: string;
}

function Doc({ children, text, title }: DocProps) {
	return (
		<article className="componentCode">
			<hgroup className="componentCode__text">
				<h2><span className="blue">{title}</span></h2>
				<p>{text}</p>
			</hgroup>
			{children}
		</article>
	);
}

export default Doc;
