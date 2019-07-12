import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem, NavDropdown } from "react-bootstrap";
import { Button, CardDeck, Form, FormControl } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';



export default class Links extends Component {
  render() {
    return (

      <div className="Links">
        <div className="lander">

          <Nav justify variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="https://www.ibm.com/support/knowledgecenter/">IBM Knowledge Center </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://w3.ibm.com/workday/">Workday</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://w3-03.ibm.com/hr/us/etotals/welcome.wss?mnurq=y">Etotals</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://w3.ibm.com/bluepages/">
                BluePages
    </Nav.Link>
            </Nav.Item>
          </Nav>


        </div>
      </div>
    );
  }
}