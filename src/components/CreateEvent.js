import React, { Component } from "react";
import { Button, FormControl, FormGroup, FormLabel, Modal } from "react-bootstrap";
import SelectDate from "./SelectDate";

class CreateEvent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            EventTitle: "",
            EventDesc: "",
            EventInvite: "",
            EventStart: "",
            EventEnd: ""
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

    setStartTime = (startTime) => {
        this.setState({
            EventStart: startTime["date"]
        })
    }

    setEndTime = (endTime) => {
        this.setState({
            EventEnd: endTime["date"]
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        var newEvent = {
            title: this.state.EventTitle,
            desc: this.state.EventDesc,
            invite: this.state.EventInvite,
            start: this.state.EventStart,
            end: this.state.EventEnd
        };
        var newEvents = this.props.events;
        newEvents.push(newEvent)
        this.props.saveEvent(newEvents);
        this.props.onHide();
    }

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
                    <FormGroup controlId="EventTitle" bsSize="large">
                        <FormLabel>Event Title</FormLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            value={this.state.EventTitle}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="EventDesc" bsSize="large">
                        <FormLabel>Event Description</FormLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            value={this.state.EventDesc}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="EventInvite" bsSize="large">
                        <FormLabel>Event Invites</FormLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            value={this.state.EventInvite}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <h6>Start Date</h6>
                    <SelectDate callback={this.setStartTime} />
                    <br/>
                    <h6>End Date</h6>
                    <SelectDate callback={this.setEndTime} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.onHide}>Close</Button>
                    <Button variant="primary" onClick={this.handleSubmit}>Create</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}


export default CreateEvent
