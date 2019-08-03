import PropTypes from "prop-types";
import React from "react";
import { Card } from "react-bootstrap";

const UserCard = ({ user, onEditClick, onDeleteClick }) => (
  <Card>
    <Card.Header>{user["NAME"]}</Card.Header>
    <Card.Body>
      <ul>
        <li>{user["EMAIL"]}</li>
        <li>{user["PHONENUMBER"]}</li>
        <li>{user["TYPE"]}</li>
        <li>{user["SITE"]}</li>
        {/* TODO: link to user bio in user card */}
      </ul>
    </Card.Body>
    <Card.Footer>
      <Card.Link href="#" variant="primary" onClick={onEditClick}>
        Edit
      </Card.Link>
      <Card.Link href="#" variant="primary" onClick={onDeleteClick}>
        Delete
      </Card.Link>
    </Card.Footer>
  </Card>
);

UserCard.propTypes = {
  onDeleteClick: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    //username: PropTypes.string,
    phone_number: PropTypes.number,
    employeeType_id: PropTypes.number,
    siteLocation_ID: PropTypes.number
  })
};

export default UserCard;
