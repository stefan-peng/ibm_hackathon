import React from "react";
import { Button, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { connect } from "react-redux";
import { requestAddUser } from "../redux/actions";
import TypeSelector from "./TypeSelector";

const initialState = {
  name: "",
  email: "",
  phonenumber: "",
  employeeType_id: 1,
  siteLocation_id: 1
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
    console.log(user);
    this.props.requestAddUser(user);
    this.setState(initialState);
  };

  setEmployeeType = type => {
    this.setState({ employeeType_id: type });
  };

  siteSiteLocation = location => {
    this.setState({ siteLocation_id: location });
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
          {/* TODO: verify email is valid */}
          <FormGroup controlId="email">
            <FormLabel>Email</FormLabel>
            <FormControl
              value={this.state.email}
              onChange={this.handleChange}
              type="text"
            />
          </FormGroup>
          {/* TODO: verify phone number is valid */}
          <FormGroup controlId="phonenumber">
            <FormLabel>Phone number</FormLabel>
            <FormControl
              value={this.state.phonenumber}
              onChange={this.handleChange}
              type="tel"
              pattern="[0-9]{10}"
            />
          </FormGroup>
          <FormGroup controlId="employeeType_id">
            <FormLabel>Employee Type</FormLabel>
            <TypeSelector
              types={this.props.employeeTypes}
              selected={this.state.employeeType_id}
              onClick={this.setEmployeeType}
            />
          </FormGroup>
          <FormGroup controlId="siteLocation_id">
            <FormLabel>Site Location</FormLabel>
            <TypeSelector
              types={this.props.siteLocations}
              selected={this.state.siteLocation_id}
              onClick={this.siteSiteLocation}
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

const mapStateToProps = state => ({
  employeeTypes: state.employeeTypes.items,
  siteLocations: state.siteLocations.items
});

const mapDispatchToProps = dispatch => ({
  requestAddUser: user => dispatch(requestAddUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUser);
