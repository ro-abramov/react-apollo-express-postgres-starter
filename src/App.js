import React, { Component } from 'react';
import Todos from './Todos';
import Users from './components/Users';
import './App.css';

class App extends Component {
  state = {
    selectedUser: null
  };

  setSelectedUser = user => this.setState({ selectedUser: user });

  render() {
    return (
      <div className="AppContainer">
        <Users onSelectUser={this.setSelectedUser} />
        {this.state.selectedUser && <Todos user={this.state.selectedUser} />}
      </div>
    );
  }
}

export default App;
