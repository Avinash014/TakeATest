import React from "react";
// import logo from "./logo.svg";
import "../Styles/Login.css";
type Props = {
  setIsAuthenticated: (value: boolean) => void;
};
const Login: React.FC<Props> = ({ setIsAuthenticated }) => {
  return (
    <div className="container">
      <div className="login-form">
        <div>Username</div>
        <div>Password</div>
        <button onClick={() => setIsAuthenticated(true)}>Log In</button>
      </div>
    </div>
  );
};

export default Login;
