import { Code, Doc, toolbarcode, wordcode } from ".";
import "./css/documentation.css";

function Documentation() {

	return (
		<section className="documentation" id="components">
			<Doc
				text="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				Omnis cum vitae, ea cupiditate quo velit exercitationem esse porro
				reprehenderit impedit. Optio iure voluptate voluptatibus nam in
				perferendis dolor saepe voluptatum."
				title="Toolbar"
			>
				<Code codeString={toolbarcode} />
			</Doc>
			<Doc
				text="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				Omnis cum vitae, ea cupiditate quo velit exercitationem esse porro
				reprehenderit impedit. Optio iure voluptate voluptatibus nam in
				perferendis dolor saepe voluptatum."
				title="Word"
			>
				<Code codeString={wordcode} />
			</Doc>
		</section>
	);
}

export default Documentation;
