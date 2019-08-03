import React from "react";
import { Button, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { connect } from "react-redux";
import { requestAddUser } from "../redux/actions";

const initialState = {
  name: "",
  email: "",
  phonenumber: 0,
  employeeType_id: 0,
  siteLocation_id: 0
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
    this.props.requestAddUser(user);
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
          // TODO: verify email is valid
          <FormGroup controlId="email">
            <FormLabel>Email</FormLabel>
            <FormControl
              value={this.state.email}
              onChange={this.handleChange}
              type="text"
            />
          </FormGroup>
          // TODO: verify phone number is valid
          <FormGroup controlId="phonenumber">
            <FormLabel>Phone number</FormLabel>
            <FormControl
              value={this.state.phonenumber}
              onChange={this.handleChange}
              type="number"
            />
          </FormGroup>
          // TODO: use dropdown when adding employeeType_id
          <FormGroup controlId="employeeType_id">
            <FormLabel>Employee Type</FormLabel>
            <FormControl
              value={this.state.employeeType_id}
              onChange={this.handleChange}
              type="number"
            />
          </FormGroup>
          // TODO: use dropdown when adding siteLocation_id
          <FormGroup controlId="siteLocation_id">
            <FormLabel>Site Location</FormLabel>
            <FormControl
              value={this.state.siteLocation_id}
              onChange={this.handleChange}
              type="number"
            />
          </FormGroup>
          <Button block onClick={this.handleAddUser}>
            Add user
          </Button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { requestAddUser }
)(AddUser);
