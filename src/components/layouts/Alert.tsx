import React from "react";
import { Message } from "../../@types/message";
import alert from "../../scss/layouts/alert.module.scss";

const Alert: React.FC<Message> = ({ message, err }): JSX.Element => {
	return <div className={err ? alert.danger : alert.sucess}>{message}</div>;
};

export default Alert;
