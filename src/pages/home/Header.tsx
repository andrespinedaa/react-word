import "./css/header.css";

function Header() {
	return (
		<header className="header">
			<nav className="header__nav">
				<ul className="header__nav--menu">
					<li className="header__nav--link">
						<a href="#editor">Editor</a>
					</li>
					<li className="header__nav--link">
						<a href="#editor">Skills React-ts</a>
					</li>
					{/* <li className="header__nav--link">
						<a href="#components">Components</a>
					</li> */}
				</ul>
			</nav>
			<h3>
				<span className="blue">Dev</span> Andres Pineda
			</h3>
		</header>
	);
}

export default Header;
