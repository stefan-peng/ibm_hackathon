import React, { Component } from "react";
import { Button, FormControl, InputGroup, Modal } from "react-bootstrap";
import SelectDate from "./SelectDate";

class CreateEvent extends Component {
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                scrollable="true"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Create Event
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Event Title</h4>
                    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-md" />
                    <h4>Description</h4>
                    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-lg" />
                    <h4>Invites</h4>
                    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-lg" />
                    <h4>Start Date</h4>
                    <SelectDate />
                    <h4>End Date</h4>
                    <SelectDate />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.onHide}>Close</Button>
                    <Button variant="primary" onClick={this.props.onSubmit}>Create</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}


export default CreateEvent
