import React from "react";
import "./App.scss";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import Default from "./components/pages/Default";
import { Switch, Route } from "react-router-dom";
import Product from "./components/pages/Product";

const App: React.FC = (): JSX.Element => {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path={"/"} component={Home} />
				<Route exact path={"/product"} component={Product} />
				<Route exact component={Default} />
			</Switch>
		</>
	);
};

export default App;
