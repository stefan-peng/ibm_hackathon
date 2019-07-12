import moment from 'moment';
import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Button, ButtonToolbar, Container } from 'react-bootstrap';
import CreateEvent from '../components/CreateEvent';

const localizer = momentLocalizer(moment);

class CalendarPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            events: [
                {
                    start: new Date(),
                    end: new Date(moment().add(1, "days")),
                    title: "Some title"
                }
            ],
            modalShow: false
        };

    }

    componentDidMount() {

    }

    render() {
        let modalClose = () => this.setState({ modalShow: false });

        return (
            <div className="Calendar">
                <div className="lander">
                    {
                        this.props.isAdmin &&
                        <ButtonToolbar className="mt-3 mb-3">
                            <Button
                                variant="primary"
                                onClick={() => this.setState({ modalShow: true })}
                            >
                                Create Event
                            </Button>
                            <CreateEvent
                                show={this.state.modalShow}
                                onHide={modalClose}
                            />
                        </ButtonToolbar>
                    }
                    <Calendar
                        localizer={localizer}
                        selectable={true}
                        defaultDate={new Date()}
                        defaultView="month"
                        events={this.state.events}
                        style={{ height: "75vh" }}
                    />
                </div>
            </div>
        );
    }
}
export default CalendarPage;