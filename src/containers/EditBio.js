import React, { Component } from "react";
import { Dropdown, DropdownButton, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import "./Bios.css";

class EditBio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      bioName: "",
      bioInt: "",
      bioPosition: "",
      bioSchool: ""
    }
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
    this.props.history.push('/bios')
    // const { addBio } = this.props.location.state;
    // this.setState({ isLoading: true });
    // try {
    //     // TODO: send updated bio
    //     let bio = {
    //         NAME: this.state.bioName,
    //         userPos: this.state.bioPosition,
    //         userInt: this.state.bioInt
    //     }
    //     addBio(bio)
    // } catch (e) {
    //     alert(e.message);
    //     this.setState({ isLoading: false });
    // }
  }

  render() {
    return (
      <div className="EditBio">
        <div className="lander">
          <h4>Edit Your Bio</h4>
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="bioName" bsSize="large">
              <FormLabel>Full Name</FormLabel>
              <FormControl
                autoFocus
                type="text"
                value={this.state.bioName}
                onChange={this.handleChange}
              />
              </FormGroup>
              <FormGroup controlId="bioPosition" bsSize="large">
                <FormLabel>Position</FormLabel>
                <FormControl
                  autoFocus
                  type="text"
                  value={this.state.bioPosition}
                  onChange={this.handleChange}
                />
                </FormGroup>
                <FormGroup controlId="bioInt" bsSize="large">
                  <FormLabel>Interests and Hobbies</FormLabel>
                  <FormControl
                    autoFocus
                    type="text"
                    value={this.state.bioInt}
                    onChange={this.handleChange}
                  />
                  </FormGroup>
                  <FormGroup controlId="bioSchool" bsSize="large">
                    <FormLabel>School</FormLabel>
                    <FormControl
                      autoFocus
                      type="text"
                      value={this.state.bioSchool}
                      onChange={this.handleChange}
                    />
                    </FormGroup>

                    <DropdownButton id="dropdown-basic-button" title="Housing Status" className="mb-2">
                      <Dropdown.Item eventKey="1">Seeking Roommates</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Seeking Housing</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Seeking Both</Dropdown.Item>
                      <Dropdown.Item eventKey="3">Secured</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton id="dropdown-basic-button" title="Carpool Status" className="mb-2">
                      <Dropdown.Item eventKey="1">No Car Access</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Car Access</Dropdown.Item>
                      <Dropdown.Item eventKey="3">Not Interested</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton id="dropdown-basic-button" title="Sex" className="mb-2">
                      <Dropdown.Item eventKey="1">Male</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Female</Dropdown.Item>
                    </DropdownButton>
                    <br />
                    <LoaderButton
                      block
                      bsSize="large"
                      disabled={!this.validateForm()}
                      type="submit"
                      isLoading={this.state.isLoading}
                      text="Update bio"
                      loadingText="Updating bio…"
                    />
                    </form>
                  </div>
                  </div>);
  }

}

export default EditBio;
