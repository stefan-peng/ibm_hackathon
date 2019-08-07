import PropTypes from "prop-types";
import React from "react";
import { Card } from "react-bootstrap";

const UserCard = ({
  user,
  employeeTypes,
  siteLocations,
  onEditClick,
  onDeleteClick
}) => (
  <Card>
    <Card.Header>{user["NAME"]}</Card.Header>
    <Card.Body>
      <ul>
        <li>{user["EMAIL"]}</li>
        <li>{user["PHONENUMBER"]}</li>
        <li>
          {employeeTypes
            ? employeeTypes[user["EMPLOYEETYPE_ID"]].DATA
            : "loading..."}
        </li>
        <li>
          {siteLocations
            ? siteLocations[user["SITELOCATION_ID"]].DATA
            : "loading..."}
        </li>
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
  onEditClick: PropTypes.func.isRequired,
  user: PropTypes.shape({
    ID: PropTypes.number,
    NAME: PropTypes.string,
    EMAIL: PropTypes.string,
    //username: PropTypes.string,
    PHONENUMBER: PropTypes.string,
    EMPLOYEETYPE_ID: PropTypes.number,
    SITELOCATION_ID: PropTypes.number
  }).isRequired
};

export default UserCard;
