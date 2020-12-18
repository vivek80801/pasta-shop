import React from "react";
import { login } from "../../actions/userAction";
import { useDispatch } from "react-redux";
import Alert from "./Alert";
import { Message } from "../../@types/message";

const Login: React.FC = (): JSX.Element => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [mess, setMess] = React.useState<Message>({ message: "", err: false });
  const dispatch = useDispatch();
  return (
    <>
      <Alert message={mess.message} err={mess.err} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (userName === "" || password === "") {
            setMess({ message: "Please fill the form", err: true });
            setTimeout(() => {
              setMess({ message: "", err: false });
            }, 5000);
          } else {
            setMess({ message: "You are logged in", err: false });
            setMess({ message: "Please fill the form", err: true });
            setTimeout(() => {
              setMess({ message: "", err: false });
            }, 5000);
            dispatch(login(userName, password));
          }
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
