import React, { useState } from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { connect } from "react-redux";
import LoaderButton from "../components/LoaderButton";
import { useFormInput } from "../components/UseFormInput";
import { requestLogin } from "../redux/actions";
import "./Login.css";

const Login = ({ requestLogin }) => {
  const [isLoading, setIsLoading] = useState(false);
  const email = useFormInput("");
  const password = useFormInput("");

  const validateForm = () =>
    email.value.length > 0 && password.value.length > 0;

  const handleSubmit = event => {
    event.preventDefault();

    setIsLoading(true);
    try {
      requestLogin({
        email: email.value,
        password: password.value
      });
    } catch (e) {
      alert(e.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email">
          <FormLabel>Email</FormLabel>
          <FormControl autoFocus type="email" {...email} />
        </FormGroup>
        <FormGroup controlId="password">
          <FormLabel>Password</FormLabel>
          <FormControl type="password" {...password} />
        </FormGroup>
        <LoaderButton
          block
          disabled={!validateForm()}
          type="submit"
          isLoading={isLoading}
          text="Login"
          loadingText="Logging in…"
        />
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth
});

const mapDispatchToProps = dispatch => ({
  requestLogin: credentials => {
    dispatch(requestLogin(credentials));
  }
});

const connectedLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
export { connectedLogin as Login };
