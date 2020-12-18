import React from "react";
import { Message } from "../../@types/message";

const Alert: React.FC<Message> = ({ message, err }): JSX.Element => {
  return <div className={err ? "alert-error" : "alert-sucess"}>{message}</div>;
};

export default Alert;
