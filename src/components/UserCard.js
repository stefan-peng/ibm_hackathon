import PropTypes from 'prop-types';
import React from 'react';
import { Button, ButtonGroup, Card } from 'react-bootstrap';

const UserCard = ({ user, onEditClick, onDeleteClick }) => (
  <Card>
    <Card.Header>
      {user["name"]}
    </Card.Header>
    <Card.Body>
      <Card.Text>
        {user["email"]}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <ButtonGroup className="float-right">
        <Button variant="primary" onClick={onEditClick}>Edit</Button>
        <Button variant="primary" onClick={onDeleteClick}>Delete</Button>
      </ButtonGroup>
    </Card.Footer>
  </Card>
)

UserCard.propTypes = {
  deleteUser: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    //username: PropTypes.string,
    //phone_number: PropTypes.string,
    employeeType_id: PropTypes.number,
    //siteLocation_ID: PropTypes.number
  })
}

export default UserCard