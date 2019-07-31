import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ListGroup } from 'react-bootstrap'
import UserCard from './UserCard'
import { users } from '../redux/reducers'

const UserList = ({ users }) => (
  <ListGroup>
      {users && users.length
        ? users.map(user => (
          <UserCard key={user.id} {...user} />
        ))
          : "No users"
      }
        </ListGroup>
)

const mapStateToProps = state => {
  const { visibilityFilter } = state
  const users = users(state, visibilityFilter)
  return { users }
}

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

export default connect(mapStateToProps)(UserList)
