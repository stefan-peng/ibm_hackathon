import React, { Component, Fragment } from "react";
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import './App.css';
import Routes from "./Routes";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }

  async componentDidMount() {
    try {
      // await // TODO: get current login status
      // this.userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
  
    this.setState({ isAuthenticating: false });
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  handleLogout = event => {
    this.userHasAuthenticated(false);
    this.props.history.push("/login");
    // TODO: logout
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      !this.state.isAuthenticating &&
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Board</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullLeft>
              <LinkContainer to="/calendar">
                <NavItem>Calendar</NavItem>
              </LinkContainer>
              <LinkContainer to="/bios">
                <NavItem>Intern Bios</NavItem>
              </LinkContainer>
              <LinkContainer to="/links">
                <NavItem>Useful links</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
              {this.state.isAuthenticated
                ? <NavItem onClick={this.handleLogout}>Logout</NavItem>
                : <Fragment>
                  <LinkContainer to="/signup">
                    <NavItem>Signup</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <NavItem>Login</NavItem>
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
