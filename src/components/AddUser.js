import React from "react";
import { Button, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { connect } from "react-redux";
import { addUser } from "../redux/actions";

const initialState = {
  name: "",
  email: "",
  phonenumber: "",
  employeeType_id: Number,
  siteLocation_id: Number
};

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleAddUser = () => {
    let user = {
      NAME: this.state.name,
      EMAIL: this.state.email,
      PHONENUMBER: this.state.phonenumber,
      EMPLOYEETYPE_ID: Number(this.state.employeeType_id),
      SITELOCATION_ID: Number(this.state.siteLocation_id)
    };
    this.props.addUser(user);
    this.setState(initialState);
  };

  render() {
    return (
      <div className="AddUser">
        <form>
          <FormGroup controlId="name">
            <FormLabel>Name</FormLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="email">
            <FormLabel>Email</FormLabel>
            <FormControl
              value={this.state.email}
              onChange={this.handleChange}
              type="text"
            />
          </FormGroup>
          <FormGroup controlId="phonenumber">
            <FormLabel>Phonenumber</FormLabel>
            <FormControl
              value={this.state.phonenumber}
              onChange={this.handleChange}
              type="tel"
            />
          </FormGroup>
          <FormGroup controlId="employeeType_id">
            <FormLabel>Employee Type ID</FormLabel>
            <FormControl
              value={this.state.employeeType_id}
              onChange={this.handleChange}
              type="number"
            />
          </FormGroup>
          <FormGroup controlId="siteLocation_id">
            <FormLabel>Site Location ID</FormLabel>
            <FormControl
              value={this.state.siteLocation_id}
              onChange={this.handleChange}
              type="number"
            />
          </FormGroup>
          <Button
            block
            onClick={this.handleAddUser}
          >
            Add user
          </Button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addUser }
)(AddUser);
