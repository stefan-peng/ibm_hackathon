import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CreateEvent from '../components/CreateEvent';
import { ButtonToolbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

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
            <div>
                <h1>Calendar</h1>
                <div>
                    {
                        this.props.isAdmin &&
                        <ButtonToolbar>
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
                </div>
                <div>
                    <Calendar
                        localizer={localizer}
                        selectable={true}
                        defaultDate={new Date()}
                        defaultView="month"
                        events={this.state.events}
                        style={{ height: "100vh" }}
                    />
                </div>
            </div>
        );
    }
}
export default CalendarPage;