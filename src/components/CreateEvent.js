import React, { Component, Fragment } from "react";
import { InputGroup, FormControl, Button, Modal } from "react-bootstrap"

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
                            <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                        </InputGroup>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}


export default CreateEvent
