import React, { Fragment } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { withRouter } from "react-router-dom";
import { logout } from "../redux/actions";

const Navigation = ({ isAuthenticated, isAdmin, onLogout }) => (
  <Navbar bg="light" expand="lg">
    <LinkContainer to="/">
      <Navbar.Brand>Board</Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto"></Nav>
      <Nav>
        {isAdmin && isAuthenticated && (
          <Fragment>
            <LinkContainer to="/admin">
              <Nav.Link>Admin</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/adduser">
              <Nav.Link>Add User</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/allusers">
              <Nav.Link>All Users</Nav.Link>
            </LinkContainer>
          </Fragment>
        )}
        {isAuthenticated ? (
          <Nav.Link onClick={onLogout}>Logout</Nav.Link>
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

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isAdmin: state.auth.isAdmin
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => {
      dispatch(logout());
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Navigation)
);
