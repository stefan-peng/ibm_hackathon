import React, { Component } from "react";
import { ControlLabel, FormControl, FormGroup } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import "./Bios.css";
import TextForm from "../components/TextForm"

class Bios extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      bio: "",
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

    this.setState({ isLoading: true });
    try {
      // TODO: send updated bio
    } catch (e) {
      alert(e.message);
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (<div className="InternBios">
      <div className="lander">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="bio" bsSize="large">
            <ControlLabel>Bio</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.bio}
              onChange={this.handleChange}
            />
          </FormGroup>
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

export default Bios;