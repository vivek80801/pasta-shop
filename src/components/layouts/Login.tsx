import React from "react";
import { login } from "../../actions/userAction";
import { useDispatch } from "react-redux";

const Login: React.FC = (): JSX.Element => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(login(userName, password));
        }}
      >
        <label htmlFor="user-name">user name:</label>
        <input
          type="text"
          placeholder="enter your username"
          required
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="password">password:</label>
        <input
          type="password"
          placeholder="enter your password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="log in" />
      </form>
    </>
  );
};

export default Login;
