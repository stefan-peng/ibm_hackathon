import React, { Component } from "react";
import { ControlLabel, FormControl, FormGroup } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";

class TextForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            text: "",
        }
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <FormGroup controlId={this.props.controlId} bsSize="large">
                    <ControlLabel>{this.props.controlLabel}</ControlLabel>
                    <FormControl
                        autoFocus
                        type="text"
                        value={this.state.text}
                        onChange={this.props.handleChange}
                    />
                </FormGroup>
                <LoaderButton
                    block
                    bsSize="large"
                    disabled={!this.props.validateForm()}
                    type="submit"
                    isLoading={this.state.isLoading}
                    text={this.props.buttonText}
                    loadingText={this.props.buttonLoadingText}
                />
            </form>
        )
    }
}

export default TextForm