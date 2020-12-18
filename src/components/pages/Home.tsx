import React from "react";
import Banner from "../layouts/Banner";
import Login from "../layouts/Login";

const Home: React.FC = (): JSX.Element => {
  return (
    <div>
      <Banner />
      <Login />
    </div>
  );
};

export default Home;
