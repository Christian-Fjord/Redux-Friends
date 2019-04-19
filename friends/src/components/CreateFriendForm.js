import React from 'react'

class CreateFriendForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: "" ,
      name: "" ,
      age: "" ,
      email: "" ,

    }
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]:
      event.target.value
    })
  }

  handleClick = () => {

  }

  render() {
    return (
      <div>
        <form>
          <input className="friendName"
            onChange={this.handleChange}
            name="name"
            value={this.state.name}
            type="text"
            placeholder="name"
          />

          <input className="friendAge"
            onChange={this.handleChange}
            name="age"
            value={this.state.age}
            type="text"
            placeholder="age"
          />

          <input className="friendEmail"
            onChange={this.handleChange}
            name="email"
            value={this.state.email}
            type="text"
            placeholder="email"
          />
        </form>

        <button onClick={this.handleClick}>

        Press Here

        </button>

      </div>
    )
  }
}

export default CreateFriendForm