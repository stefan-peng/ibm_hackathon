import React from "react";
import {
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  Modal
} from "react-bootstrap";
import { connect } from "react-redux";
import { requestAddUser } from "../redux/actions";
import TypeSelector from "./TypeSelector";

const AddUser = ({
  employeeTypes,
  user,
  onHide,
  requestAddUser,
  show,
  siteLocations,
  isEdit
}) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phonenumber, setPhonenumber] = React.useState("");
  const [type, setType] = React.useState(1);
  const [location, setLocation] = React.useState(1);

  const handleAddUser = () => {
    let user = {
      NAME: name,
      EMAIL: email,
      PHONENUMBER: phonenumber,
      EMPLOYEETYPE_ID: Number(type),
      SITELOCATION_ID: Number(location)
    };
    requestAddUser(user);
    handleHide();
  };

  const onShow = () => {
    setName(user["NAME"]);
    setEmail(user["EMAIL"]);
    setPhonenumber(user["PHONENUMBER"]);
    setType(user["EMPLOYEETYPE_ID"]);
    setLocation(user["SITELOCATION_ID"]);
  };

  const handleHide = () => {
    setName("");
    setEmail("");
    setPhonenumber("");
    setType(1);
    setLocation(1);
    onHide();
  };

  return (
    <Modal show={show} onShow={onShow} onHide={handleHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add user</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form>
          <FormGroup controlId="name">
            <FormLabel>Name</FormLabel>
            <FormControl
              {...isEdit && "disabled"}
              autoFocus
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </FormGroup>
          {/* TODO: verify email is valid */}
          <FormGroup controlId="email">
            <FormLabel>Email</FormLabel>
            <FormControl
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </FormGroup>
          {/* TODO: verify phone number is valid */}
          <FormGroup controlId="phonenumber">
            <FormLabel>Phone number</FormLabel>
            <FormControl
              type="tel"
              pattern="[0-9]{10}"
              value={phonenumber}
              onChange={e => setPhonenumber(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="employeeType_id">
            <FormLabel>Employee Type</FormLabel>
            <TypeSelector
              types={employeeTypes}
              selected={type}
              onClick={e => setType(e)}
            />
          </FormGroup>
          <FormGroup controlId="siteLocation_id">
            <FormLabel>Site Location</FormLabel>
            <TypeSelector
              types={siteLocations}
              selected={location}
              onClick={e => setLocation(e)}
            />
          </FormGroup>
        </form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleAddUser}>
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

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
