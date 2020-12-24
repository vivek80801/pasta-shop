import React from "react";
import navbar from "../../scss/layouts/navbar.module.scss";

const Navbar: React.FC = (): JSX.Element => {
	return (
		<nav className={navbar.navbar}>
			<h1>logo</h1>
			<ul>
				<li>
					<a href="/">home</a>
				</li>
				<li>about</li>
				<li>
					<a href="/product">product</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
