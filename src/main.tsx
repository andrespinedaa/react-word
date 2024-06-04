import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Header, Home, Skills } from "./pages";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Header />
		<main>
			<Home />
			<Skills />
			{/* <Documentation /> */}
		</main>
	</React.StrictMode>
);
