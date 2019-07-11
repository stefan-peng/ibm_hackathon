import React, { Component } from "react";
import { ControlLabel, FormControl, FormGroup } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import "./Bios.css";
import TextForm from "../components/TextForm"

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      // bio: "",
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
      </div>
    </div>);
  }

}

export default Admin;