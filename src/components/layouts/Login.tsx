import React from "react";
import { login } from "../../actions/userAction";
import { useDispatch } from "react-redux";
import Alert from "./Alert";
import { Message } from "../../@types/message";
import loginForm from "../../scss/layouts/login.module.scss";

const Login: React.FC = (): JSX.Element => {
	const [userName, setUserName] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [mess, setMess] = React.useState<Message>({ message: "", err: false });
	const dispatch = useDispatch();
	return (
		<>
			<div className={loginForm.formParent}>
				<div className={loginForm.overlay}>
					<form
						className={loginForm.form}
						onSubmit={(e) => {
							e.preventDefault();
							if (userName === "" || password === "") {
								setMess({ message: "Please fill the form", err: true });
								setTimeout(() => {
									setMess({ message: "", err: false });
								}, 5000);
							} else {
								setMess({ message: "You are logged in", err: false });
								setTimeout(() => {
									setMess({ message: "", err: false });
								}, 5000);
								dispatch(login(userName, password));
							}
						}}
					>
						<Alert message={mess.message} err={mess.err} />
						<h1 className={"p-1 mb-1"}>Login Form</h1>
						<label htmlFor="user-name">user name:</label>
						<input
							type="text"
							placeholder="enter your username"
							onChange={(e) => setUserName(e.target.value)}
							className="input-primary m-1"
						/>
						<label htmlFor="password">password:</label>
						<input
							type="password"
							placeholder="enter your password"
							onChange={(e) => setPassword(e.target.value)}
							className="input-primary"
						/>
						<input type="submit" value="log in" className={"btn-primary m-1"} />
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;
