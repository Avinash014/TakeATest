import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

// import logo from "./logo.svg";
import "../Styles/Login.css";
import { Button, TextField } from "@material-ui/core";
type Props = {
  setIsAuthenticated: (value: boolean) => void;
};
const Login: React.FC<Props> = ({ setIsAuthenticated }) => {
  const classes = useStyles();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    if (username === "Admin" && password === "Admin") setIsAuthenticated(true);
    else alert("wrong username or password");
  };

  return (
    <div className="container">
      <form className={classes.root} noValidate autoComplete="off">
        <div className="login-form">
          <TextField
            id="standard-search"
            label="Username"
            type="search"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button autoFocus onClick={handleLogin} style={{ color: "blue" }}>
            Log In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);
