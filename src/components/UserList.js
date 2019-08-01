import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { CardDeck } from 'react-bootstrap'
import UserCard from './UserCard'
import UserSelector from './UserSelector'

const UserList = ({ users, onEditClick, onDeleteClick, filter }) => (
  <Fragment>
    <CardDeck>
      {users && users.length > 0 && users.map(user => (
        <UserCard key={user.ID} user={user} onEditClick={() => onEditClick(user.ID)} onDeleteClick={() => onDeleteClick(user.ID)} />
      ))}
    </CardDeck>
    <UserSelector selected={filter}/>
  </Fragment>
)

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      ID: PropTypes.number,
      NAME: PropTypes.string,
      EMAIL: PropTypes.string,
      USERNAME: PropTypes.string,
      PHONE_NUMBER: PropTypes.string,
      EMPLOYEETYPE_ID: PropTypes.number,
      SITELOCATION_ID: PropTypes.number
    }).isRequired
  ),
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
}

export default UserList