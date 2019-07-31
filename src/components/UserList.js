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
      {users && users.length > 0 && users.map(user => (
        <UserCard key={user.id} user={user} onEditClick={() => onEditClick(user.ID)} onDeleteClick={() => onDeleteClick(user.ID)} />
      ))}
    </CardDeck>
    <UserSelector />
  </Fragment>
)

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      ID: PropTypes.number,
      NAME: PropTypes.string,
      EMAIL: PropTypes.string,
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