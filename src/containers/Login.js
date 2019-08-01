import React, { Component } from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { connect } from 'react-redux';
import { requestLogin } from '../redux/actions'
import LoaderButton from "../components/LoaderButton";
import "./Login.css";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            email: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
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
            // TODO: authenticate user
            // this.props.userHasAuthenticated(true);
            this.props.requestLogin()
        } catch (e) {
            alert(e.message);
            this.setState({ isLoading: false });
        }
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                        <FormLabel>Email</FormLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <FormLabel>Password</FormLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <LoaderButton
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                        isLoading={this.state.isLoading}
                        text="Login"
                        loadingText="Logging in…"
                    />
                </form>
            </div >
        );
    }
}

const mapStateToProps = state => {
    const { isAuthenticated } = state.auth;
    return { isAuthenticated };
}

const mapDispatchToProps = dispatch => {
    return {
        requestLogin: authenticated => {
            dispatch(requestLogin(authenticated))
        }
    }
}

const connectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);
export { connectedLogin as Login };
