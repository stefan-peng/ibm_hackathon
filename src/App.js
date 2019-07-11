import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Routes from "./Routes";

import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'


class App extends Component {
  render() {
  return (
    <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Board</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
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
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}
}

export default App;
