import React, { Component } from "react";
import { Card } from "react-bootstrap";

class InternCard extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{this.props.userName}</Card.Title>
                    <Card.Text>
                        <b>Position: </b> <br/>
                        <b>School: </b> <br/>
                        <b>Interests and Hobbies: </b>
                        
                    </Card.Text>

                </Card.Body>
            </Card>
        )
    }
}

export default InternCard