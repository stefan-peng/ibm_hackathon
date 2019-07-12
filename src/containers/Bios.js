import React, { Component } from "react";
import { ControlLabel, FormControl, Form, Navbar, Nav, NavDropdown, CardDeck } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import "./Bios.css";
import { Button } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import InternCard from '../components/InternCard';

class Bios extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      interns: [],
      cards: [],
      bio: "",
    }
  }

  componentDidMount() {
    const API = 'http://hackathonnodejsbackend.us-south.cf.appdomain.cloud/command';
    fetch(API, {
      crossDomain: true,
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => this.addUsers(data));
  }

  validateForm() {
    return true;
  }

  addUsers(data) {
    var interns = []

    for (var intern in data["user_list"]) {
      interns.push(data["user_list"][intern])
    }

    this.setState({ interns: interns })

    let cards = interns.map(intern => {
      return (
        <InternCard userName={intern["NAME"]} />
      )
    })

    this.setState({ cards: cards })
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ isLoading: true });
    try {
      // TODO: send updated bio
    } catch (e) {
      alert(e.message);
      this.setState({ isLoading: false });
    }
  }

  render() {
    
    return (
      <div className="InternBios">
        <div className="lander">
          {/* <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar> */}
          <Button variant="outline-success">
            <Link to="/bios/edit">Edit</Link>
          </Button>
          <CardDeck>
            {this.state.cards}
          </CardDeck>
        </div>
        <form onSubmit={this.handleSubmit}>

        </form>
      </div>
    );

  }

}

export default Bios;