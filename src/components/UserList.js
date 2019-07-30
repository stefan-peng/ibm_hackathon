import React from 'react'
import PropTypes from 'prop-types'
import { ListGroup } from 'react-bootstrap'
import UserCard from './UserCard'

const UserList = ({ users, onUserClick }) => (
  <ListGroup>
      {users.map(user => (
        <UserCard key={user.id} {...user} onclick={() => onUserClick(user.id)} />
      ))}
  </ListGroup>
)

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
      username: PropTypes.string,
      phone_number: PropTypes.string,
      employeeType_id: PropTypes.number,
      siteLocation_ID: PropTypes.number
    }).isRequired
  ).isRequired, 
  onUserClick: PropTypes.func.isRequired
}

export default UserList
