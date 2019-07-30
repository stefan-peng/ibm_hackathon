import React from 'react'
import PropTypes from 'prop-types'
import { ListGroup } from 'react-bootstrap'

const UserCard = ({ onClick, user }) => (
  <ListGroup.Item action onClick={onClick}>
      {user["NAME"]}
  </ListGroup.Item >
)

UserCard.propTypes = {
  onClick: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    username: PropTypes.string,
    phone_number: PropTypes.string,
    employeeType_id: PropTypes.number,
    siteLocation_ID: PropTypes.number
  })
}

export default UserCard;
