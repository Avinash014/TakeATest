// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import Login from "./Views/Login";

// function App() {
//   return <Login />;
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Views/Login";
import RouteComponent from "./RouteComponent";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(true);
  if (isAuthenticated === false) {
    return <Login setIsAuthenticated={setIsAuthenticated} />;
  }
  return <RouteComponent setIsAuthenticated={setIsAuthenticated} />;
}
