import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";

const Authenticated = ({ component: C, isAuthenticated, isAdmin }) => (
  <Route
    render={() =>
      isAuthenticated && isAdmin ? <C /> : <Redirect to={"/login"} />
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isAdmin: state.auth.isAdmin
});

export default withRouter(connect(mapStateToProps)(Authenticated));
