import React from 'react'
import { connect } from 'react-redux'
import { addUser } from '../redux/actions'

const initialState = {
  name: "",
  email: ""
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
    this.props.addUser(this.state.name, this.state.email)
    this.setState(initialState)
  }

  render() {
    return (
      <div>
        <input
          onChange={this.handleChange}
          value={this.state.name}
        />
          <input
            onChange={this.handleChange}
            value={this.state.email}
          />
          </div>
    )
  }
}

export default connect(
  null,
  { addUser }
)(AddUser)
