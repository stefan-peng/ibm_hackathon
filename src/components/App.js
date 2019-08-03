import React from "react";
import { withRouter } from "react-router-dom";
import "./App.css";
import Navigation from "./Navigation";
import Routes from "./Routes";

const App = () => (
  <div className="App container">
    <Navigation />
    <Routes />
  </div>
);

export default withRouter(App);
