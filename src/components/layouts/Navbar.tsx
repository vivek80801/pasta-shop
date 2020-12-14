import React from "react";
import navbar from "../../scss/layouts/navbar.module.scss";

const Navbar: React.FC = (): JSX.Element => {
  return (
    <nav className={navbar.navbar}>
      <h1>logo</h1>
      <ul>
        <li>home</li>
        <li>about</li>
      </ul>
    </nav>
  );
};

export default Navbar;
