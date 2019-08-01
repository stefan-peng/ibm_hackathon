import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";

const Authenticated = ({ component: C, isAuthenticated, isAdmin }) => {
  return (
    <Route
      render={() =>
        isAuthenticated && isAdmin ? <C /> : <Redirect to={"/login"} />
      }
    />
  );
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isAdmin: state.auth.isAdmin
  };
}

export default withRouter(connect(mapStateToProps)(Authenticated));
