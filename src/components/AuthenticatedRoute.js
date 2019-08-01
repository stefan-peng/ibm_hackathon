import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";

const Authenticated = ({ component: C, isAuthenticated }) => {
  return (
    <Route
      render={() => (isAuthenticated ? <C /> : <Redirect to={"/login"} />)}
    />
  );
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
}

export default withRouter(connect(mapStateToProps)(Authenticated));
