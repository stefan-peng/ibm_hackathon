import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Button, CardColumns } from 'react-bootstrap'
import UserCard from './UserCard'
import EmployeeTypeFilterSelector from './EmployeeTypeFilterSelector'

const UserList = ({ users, onEditClick, onDeleteClick, onRefreshClick, filter }) => (
  <Fragment>
    <Button className="my-2" onClick={onRefreshClick}>Refresh</Button>
    {/* TODO: search users in user list */}
    <CardColumns>
      {users && users.length > 0 && users.map(user => (
        <UserCard key={user.ID} user={user} onEditClick={() => onEditClick(user.ID)} onDeleteClick={() => onDeleteClick(user.ID)} />
      ))}
    </CardColumns>
    <EmployeeTypeFilterSelector selected={filter}/>
  </Fragment>
)

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      ID: PropTypes.number,
      NAME: PropTypes.string,
      EMAIL: PropTypes.string,
      USERNAME: PropTypes.string,
      PHONENUMBER: PropTypes.string,
      EMPLOYEETYPE_ID: PropTypes.number,
      SITELOCATION_ID: PropTypes.number
    }).isRequired
  ),
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onRefreshClick: PropTypes.func.isRequired
}

export default UserList