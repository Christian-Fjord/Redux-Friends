import React from 'react'

import { connect } from 'react-redux'
import { updateFriends } from '../actions'

class UpdateFriendForm extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      name : "",
      age : "",
      email: ""
      }
    }

    handleChange = event => {
      event.preventDefault();
      this.setState({ 
        [event.target.name]: event.target.value 
      })
    }

    handleSubmit = () => {
      this.props.updateFriends(this.state)
      this.setState({ name: "", age: "", email: "" }) 
    }

    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input 
              onChange={this.handleChange}
              name="name"
              value={this.state.name}
              type="text"
              placeholder="Name"
            />
                    
            <input 
              onChange={this.handleChange}
              name="age"
              value={this.state.age}
              type="text"
              placeholder="Age"
            />
            
            <input 
              onChange={this.handleChange}
              name="email"
              value={this.state.email}
              type="text"
              placeholder="Email"
            />
            
            <button>
              Update Friend
            </button>
          
          </form>
                
      </div>
        )
    }
}

export default connect(null, {updateFriends})(UpdateFriendForm)