<<<<<<< HEAD
import { Toolbar, Word } from "../..";
import { Bold, Italic, Underlined, Highlight } from "../../components/tools";
import Preview from "../../components/view/Preview";
import { WorkSpace } from "../../context/WorkSpace";
import TypeWriter from "./TypeWriter";
import "./css/home.css";

function Home() {
	return (
		<section className="home" id="editor">
			<article className="home__performance">
				<hgroup className="home__performance--text">
					<TypeWriter />
					<p>
						¿Para qué otro editor? Bueno React-
						<span className="blue">Word</span> es diferente a otros, pues no
						esta hecho sobre un <span className="blue">Canvas</span>, asi que
						todo lo que escribas se convierte en HTML y CSS real. Entonces
						olvidate de estar escribiendo etiqueta a etiqueta, con Reac-
						<span className="blue">Word</span> lo haces mas rapido y sencillo,
						tal cual como si fuera un Word.doc try it!!!
					</p>
				</hgroup>
			</article>
			<WorkSpace>
				<Toolbar>
					<Bold />
					<Italic />
					<Underlined />
					<Highlight />
				</Toolbar>
				<Word scrollbar={false} resize={false} />
				<Preview />
			</WorkSpace>
		</section>
	);
}

export default Home;
=======
import { Toolbar, Word } from "../..";
import { Bold, Italic, Underlined, Highlight } from "../../components/tools";
import Preview from "../../components/view/Preview";
import { WorkSpace } from "../../context/WorkSpace";
import TypeWriter from "./TypeWriter";
import "./css/home.css";

function Home() {
	return (
		<section className="home" id="editor">
			<article className="home__performance">
				<hgroup className="home__performance--text">
					<TypeWriter />
					<p>
						¿Para qué otro editor? Bueno React-
						<span className="blue">Word</span> es diferente a otros, pues no
						esta hecho sobre un <span className="blue">Canvas</span>, asi que
						todo lo que escribas se convierte en HTML y CSS real. Entonces
						olvidate de estar escribiendo etiqueta a etiqueta, con Reac-
						<span className="blue">Word</span> lo haces mas rapido y sencillo,
						tal cual como si fuera un Word.doc try it!!!
					</p>
				</hgroup>
			</article>
			<WorkSpace>
				<Toolbar>
					<Bold />
					<Italic />
					<Underlined />
					<Highlight />
				</Toolbar>
				<Word scrollbar={false} resize={false} />
				<Preview />
			</WorkSpace>
		</section>
	);
}

export default Home;
>>>>>>> 2dec7df8336274513ba510492545b77822401e48
