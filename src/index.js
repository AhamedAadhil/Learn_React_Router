import React from "react";
import ReactDom from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from "react-router-dom";
import AnotherHeading from "./anotherComp";
import OneMoreHeading from "./oneMoreComp";
import Newheading from "./newcomp";
import NotFound from "./NotFoundComp";

const MainFun = (
  <Router>
    <div
      style={{
        border: "2px solid black",
        width: "500px",
        height: "auto",
        margin: "auto",
        textAlign: "center",
        padding: "8px 20px",
        position: "absolute",
        top: "30%",
        left: "30%",
      }}
    >
      <h1>React Router Example</h1>
      <ul style={{ textDecoration: "none", listStyle: "none" }}>
        <li>
          <NavLink to="/" exact activeStyle={{ color: "red" }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/one" exact activeStyle={{ color: "red" }}>
            OneMoreComponent
          </NavLink>
          <li>
            <NavLink to="/new" exact activeStyle={{ color: "red" }}>
              NewComponent
            </NavLink>
          </li>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={AnotherHeading} />
        <Route path="/one" component={OneMoreHeading} />
        <Route path="/new" component={Newheading} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);
ReactDom.render(MainFun, document.getElementById("root"));
