import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Views/Login";
import About from "./Views/About";
import Home from "./Views/Home";
import Users from "./Views/Users";

type Props = {
  setIsAuthenticated: (value: boolean) => void;
};
const RouteComponent: React.FC<Props> = ({ setIsAuthenticated }) => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <button onClick={() => setIsAuthenticated(false)}>Logout</button>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default RouteComponent;
