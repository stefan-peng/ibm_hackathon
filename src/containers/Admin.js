import React, { Component } from "react";
import { Button, Col, Container, Form, FormControl, ListGroup, Row } from "react-bootstrap";
import InternCard from "../components/InternCard";
import "./Bios.css";

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      users: [],
      userlinks: [],
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

  addUsers(data) {
    var users = []

    for (var user in data["user_list"]) {
      users.push(data["user_list"][user])
    }

    this.setState({ users: users })

    let links = users.map(user => {
      return (
        <ListGroup.Item action onClick={this.showUser(user)}>
          {user["NAME"]}
        </ListGroup.Item >
      )
    })

    this.setState({ userlinks: links })
  }

  showUser(user) {
    return (
      <InternCard userName={user["NAME"]} />
    )
  }

  validateForm() {
    return true;
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
    return (<div className="Admin">
      <div className="lander">
        <Container>
          <Row>
            <Col>
              <h1>Manage users</h1>
              <Form inline className="mb-3 ml-0">
                <FormControl type="text" placeholder="Find user" className="mr-sm-2" />
                <Button variant="primary">Search</Button>
              </Form>
              {this.state.userlinks}
            </Col>
            <Col>
              <h1>Manage events</h1>
            </Col>
          </Row>
        </Container>
      </div>
    </div>);
  }

}

export default Admin;