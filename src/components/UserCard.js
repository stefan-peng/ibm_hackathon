import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ListGroup } from 'react-bootstrap'
import { deleteUser } from '../redux/actions'

const UserCard = ({ user, deleteUser }) => (
  <ListGroup.Item action onClick={() => deleteUser(user.id)}>
      {user["NAME"]}
  </ListGroup.Item >
)

UserCard.propTypes = {
  deleteUser: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    //username: PropTypes.string,
    //phone_number: PropTypes.string,
    //employeeType_id: PropTypes.number,
    //siteLocation_ID: PropTypes.number
  })
}

export default connect(
  null,
  { deleteUser }
)(UserCard)
