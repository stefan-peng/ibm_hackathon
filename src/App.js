import React, { Component, Fragment } from "react";
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { withRouter } from 'react-router-dom';
import './App.css';
import Routes from "./Routes";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: true,
      isAdmin: true,
      isAuthenticating: true
    };
  }

  async componentDidMount() {
    try {
      // await // TODO: get current login status
      // this.userHasAuthenticated(true);
    }
    catch (e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }

    this.setState({ isAuthenticating: false });
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  userIsAdmin = isAdmin => {
    this.setState({ isAdmin: isAdmin });
  }

  handleLogout = event => {
    this.userHasAuthenticated(false);
    this.userIsAdmin(false);
    this.props.history.push("/login");
    // TODO: logout
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      isAdmin: this.state.isAdmin,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      !this.state.isAuthenticating &&
      <div className="App container">
        <Navbar bg="light" expand="lg">
          <LinkContainer to="/">
            <Navbar.Brand>Board</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/calendar">
                <Nav.Link>Calendar</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/bios">
                <Nav.Link>Intern Bios</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/links">
                <Nav.Link>Useful links</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav>
              {
                this.state.isAdmin &&
                <LinkContainer to="/admin">
                  <Nav.Link>Admin</Nav.Link>
                </LinkContainer>
              }
              {this.state.isAuthenticated
                ? <Nav.Link onClick={this.handleLogout}>Logout</Nav.Link>
                : <Fragment>
                  <LinkContainer to="/signup">
                    <Nav.Link>Signup</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                </Fragment>
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default withRouter(App);
