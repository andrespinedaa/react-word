import React from "react";
import Typed from "typed.js";

function TypeWriter() {
	const el = React.useRef(null);

	React.useEffect(() => {
		const typed = new Typed(el.current, {
			strings: [
				"React-<span class='blue'>Word</span>: Es un Editor para tus proyectos",
				"React-<span class='blue'>Word</span>: Es Open Source",
				"React-<span class='blue'>Word</span>: Es gratis",
				"React-<span class='blue'>Word</span>: Escribe HTML5 <span class='blue'>on live</span>",
			],
			typeSpeed: 30,
			backSpeed: 50,
			backDelay: 1000,
			cursorChar: " ",
		});

		return () => {
			// Destroy Typed instance during cleanup to stop animation
			typed.destroy();
		};
	}, []);

	const typeWriterStyles: React.CSSProperties = {
		fontSize: "2em",
		fontWeight: "800",
	};

	return <span style={typeWriterStyles} ref={el} />;
}

export default TypeWriter;
