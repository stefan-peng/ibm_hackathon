import React, { Component } from "react";
import { Button, CardDeck, Form, FormControl } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import InternCard from '../components/InternCard';
import "./Bios.css";

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
    const API = 'https://hackathonnodejsbackend.us-south.cf.appdomain.cloud/command';
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

    interns.map(intern => {
      this.generateCard(intern);
    })

  }

  generateCard = user => {
    var cards = this.state.cards
    let card = <InternCard userName={user["NAME"]} />
    cards.push(card);
    this.setState({ cards: cards })
  }

  addBio = bio => {
    var newInterns = this.state.interns;
    newInterns.push(bio);
    this.generateCard(bio);
    this.setState({ interns: newInterns })
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
          <Form inline className="mb-3 ml-0">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="primary">Search</Button>
          </Form>
          <CardDeck className="mb-3">
            {this.state.cards}
          </CardDeck>
          <LinkContainer to="/bios/edit">
            <Button variant="primary">
              Edit
            </Button>
          </LinkContainer>
        </div >
      </div >
    );

  }

}

export default Bios;
