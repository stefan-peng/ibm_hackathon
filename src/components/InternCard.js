import React, { Component } from "react";
import { Card } from "react-bootstrap";

class InternCard extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{this.props.userName}</Card.Title>
                    <Card.Text>
                        <b>Position: </b>{this.props.userPos} <br/>
                        <b>School: </b> {this.props.userSch}<br/>
                        <b>Interests and Hobbies: </b>{this.props.userInt}
                        
                    </Card.Text>

                </Card.Body>
            </Card>
        )
    }
}

export default InternCard