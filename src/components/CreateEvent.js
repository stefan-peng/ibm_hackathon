import React, { Component } from "react";
import { InputGroup, FormControl, Button, Modal } from "react-bootstrap";
import SelectDate from "./SelectDate";

class CreateEvent extends Component {
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Create Event
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Event Title</h4>
                    <div>
                        <InputGroup size="lg">
                            <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-md" />
                        </InputGroup>
                    </div>
                    <h4>Description</h4>
                    <div>
                        <InputGroup size="lg">
                            <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-lg" />
                        </InputGroup>
                    </div>
                    <h4>Invites</h4>
                    <div>
                        <InputGroup size="lg">
                            <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-lg" />
                        </InputGroup>
                    </div>
                    <h4>Start Date</h4>
                    <SelectDate />
                    <h4>End Date</h4>
                    <SelectDate />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}


export default CreateEvent
