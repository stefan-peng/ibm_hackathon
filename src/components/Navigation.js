import React, { Fragment } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { withRouter } from "react-router-dom";
import { requestLogout } from "../redux/actions";

const Navigation = ({ isAuthenticated, isAdmin, onLogout, cookie }) => (
  <Navbar bg="light" expand="lg">
    <LinkContainer to="/">
      <Navbar.Brand>Board</Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto"></Nav>
      <Nav>
        {isAuthenticated && (
          <Fragment>
            <LinkContainer to="/allusers">
              <Nav.Link>All Users</Nav.Link>
            </LinkContainer>
          </Fragment>
        )}
        {isAuthenticated ? (
          <Nav.Link onClick={onLogout.bind(this, cookie)}>Logout</Nav.Link>
        ) : (
          <Fragment>
            <LinkContainer to="/signup">
              <Nav.Link>Signup</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          </Fragment>
        )}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isAdmin: state.auth.isAdmin,
  cookie: state.auth.cookie
});

const mapDispatchToProps = dispatch => ({
  onLogout: cookie => {
    dispatch(requestLogout(cookie));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Navigation)
);
