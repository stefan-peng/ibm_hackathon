import React from "react";
import { Button, FormControl, FormGroup, FormLabel, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { requestAddUser } from "../redux/actions";
import TypeSelector from "./TypeSelector";
import { useFormInput } from "./UseFormInput";

const AddUser = ({
  onHide,
  show,
  employeeTypes,
  siteLocations,
  requestAddUser
}) => {
  const name = useFormInput("");
  const email = useFormInput("");
  const phonenumber = useFormInput("");
  const type = useFormInput(1);
  const location = useFormInput(1);

  const handleAddUser = () => {
    let user = {
      NAME: name.value,
      EMAIL: email.value,
      PHONENUMBER: phonenumber.value,
      EMPLOYEETYPE_ID: Number(type.value),
      SITELOCATION_ID: Number(location.value)
    };
    requestAddUser(user);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add user</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form>
          <FormGroup controlId="name">
            <FormLabel>Name</FormLabel>
            <FormControl autoFocus type="text" {...name} />
          </FormGroup>
          {/* TODO: verify email is valid */}
          <FormGroup controlId="email">
            <FormLabel>Email</FormLabel>
            <FormControl type="text" {...email} />
          </FormGroup>
          {/* TODO: verify phone number is valid */}
          <FormGroup controlId="phonenumber">
            <FormLabel>Phone number</FormLabel>
            <FormControl type="tel" pattern="[0-9]{10}" {...phonenumber} />
          </FormGroup>
          <FormGroup controlId="employeeType_id">
            <FormLabel>Employee Type</FormLabel>
            <TypeSelector
              types={employeeTypes}
              selected={type.value}
              onClick={type.onChange}
            />
          </FormGroup>
          <FormGroup controlId="siteLocation_id">
            <FormLabel>Site Location</FormLabel>
            <TypeSelector
              types={siteLocations}
              selected={location.value}
              onClick={location.onChange}
            />
          </FormGroup>
        </form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
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
