import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';
 
class SelectDate extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => {
    this.setState({ date })
    this.props.callback({ date })
  }
  render() {
    return (
      <div>
        <DateTimePicker
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

export default SelectDate