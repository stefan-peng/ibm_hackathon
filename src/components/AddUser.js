import React from 'react'
import { Button, FormGroup, FormLabel, FormControl } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addUser } from '../redux/actions'

const initialState = {
  name: "",
  email: "",
  employeeType_id: 0
}

class AddUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleAddUser = () => {
    let user = {
      name: this.state.name,
      email: this.state.email,
      employeeType_id: Number(this.state.employeeType_id)
    }
    this.props.addUser(user)
    this.setState(initialState)
  }

  render() {
    return (
      <div className="AddUser">
        <form>
          <FormGroup controlId="name">
            <FormLabel>Name</FormLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="email">
            <FormLabel>Email</FormLabel>
            <FormControl
              value={this.state.email}
              onChange={this.handleChange}
              type="text"
            />
          </FormGroup>
          <FormGroup controlId="employeeType_id">
            <FormLabel>Employee Type ID</FormLabel>
            <FormControl
              value={this.state.employeeType_id}
              onChange={this.handleChange}
              type="number"
            />
          </FormGroup>
          <Button
            block
            // type="submit"
            onClick={this.handleAddUser}
          >
            Add user
          </Button>
        </form>
      </div >
    )
  }
}

export default connect(
  null,
  { addUser }
)(AddUser)
