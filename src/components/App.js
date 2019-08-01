import React from "react";
import { connect } from "react-redux";
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

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isAdmin: state.auth.isAdmin
  };
};

const connectedApp = connect(mapStateToProps)(App);

export default withRouter(connectedApp);
