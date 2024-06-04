import {
	Code,
	CustoomHookUseEdit,
	ContextHookWorkSpace,
	Doc,
	TypedCode,
} from "../doc";

import "./skills.css";

function Skills() {
	return (
		<section
			id="#skills"
			className="skills-section"
		>
			<h2 className="skills-section__title">Skills React-ts</h2>
			<Doc
				text="Un Custom hook que le aliviane el trabajo a cada uno de las tools (Bold, Italic, Underlined, Highlight) gracias a este Custom Hook hay mas clean Code y reutilizacion, ademas de compartir mismos estilos CSS"
				title="Custom hooks"
			>
				<Code codeString={CustoomHookUseEdit} />
			</Doc>
			<Doc
				text="UseContext con su debido tipado no nos deja fallar, este Context une tres componentes entre si: Toolbar, Word, Preview. Diferentes componentes hijos alteran el estado centralizado en el componente Padre"
				title="useContext, useEffect, useState hooks"
			>
				<Code codeString={ContextHookWorkSpace} />
			</Doc>
			<Doc text="Un tipado fuerte no decepciona ni traiciona, en este caso vemos un uso mas avanzado al momento de tipar, por ejemplo el uso de Omit, o el Extends para aprovechar a profundida los beneficios del tipado ts." title="Tipado interfaces">
				<Code codeString={TypedCode} lang="typescript" />
			</Doc>
		</section>
	);
}

export default Skills;
