import React, { Component } from 'react';
import Friends from './components/Friends.js';
import CreateFriendForm from './components/CreateFriendForm.js';
import UpdateFriendForm from './components/UpdateFriendForm.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Friends App </h1>
        <Friends />
        <CreateFriendForm />
        <UpdateFriendForm />
      </div>
    );
  }
}

export default App;
