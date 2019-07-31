import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { CardDeck } from 'react-bootstrap'
import UserCard from './UserCard'
import UserSelector from './UserSelector'

const filterUser = (type) => {
  console.log(type)
}

const UserList = ({ users, onEditClick, onDeleteClick }) => (
  <Fragment>
    <CardDeck>
      {users.map((user, index) => (
        <UserCard key={index} user={user} onEditClick={() => onEditClick(index)} onDeleteClick={() => onDeleteClick(index)} />
      ))}
    </CardDeck>
    <UserSelector />
  </Fragment>
)

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      // id: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
      // username: PropTypes.string,
      // phone_number: PropTypes.string,
      // employeeType_id: PropTypes.number,
      // siteLocation_ID: PropTypes.number
    }).isRequired
  ).isRequired,
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
}

export default UserList