import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";

const Authenticated = ({ component: C, isAuthenticated }) => (
  <Route
    render={() => (isAuthenticated ? <C /> : <Redirect to={"/login"} />)}
  />
);

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default withRouter(connect(mapStateToProps)(Authenticated));
